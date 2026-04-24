// ============================================================
// MBK Dictée — Audio dictation engine with char-level diff
// Uses Web Speech API for TTS (offline, no MP3 needed).
// ============================================================
(function(){
  'use strict';

  // ---- Dictation banks ---------------------------------------------------
  // Short phrases per dossier, drawn from the dialogue data.
  // Easy → Medium → Hard ordering by length/complexity.
  const DICTEE_BANK = {
    // ── 11ème ──────────────────────────────────────────────
    d5: {
      title: "Dictée — Dossier 5",
      titleAr: "إملاء — الملف ٥",
      color: "#667eea",
      icon: "✈️",
      phrases: [
        "Bonjour, bienvenue en France.",
        "Je ne suis pas fatigué.",
        "La voiture est dans le parking.",
        "Notre maison est à cinq kilomètres.",
        "Au Koweït, il fait très chaud.",
        "Ma chambre est au premier étage.",
        "J'habite dans un petit studio.",
      ]
    },
    d6: {
      title: "Dictée — Dossier 6",
      titleAr: "إملاء — الملف ٦",
      color: "#a855f7",
      icon: "🗼",
      phrases: [
        "Je visite Paris avec ma famille.",
        "La tour Eiffel est très grande.",
        "Nous prenons le métro pour le musée.",
        "C'est le monument le plus visité.",
        "J'aime beaucoup cette belle ville.",
        "Le Louvre est un musée magnifique.",
        "Cette cathédrale est très célèbre.",
      ]
    },
    d7: {
      title: "Dictée — Dossier 7",
      titleAr: "إملاء — الملف ٧",
      color: "#f97316",
      icon: "🍽️",
      phrases: [
        "Je voudrais réserver une table.",
        "Comme entrée, je prends une salade.",
        "L'addition, s'il vous plaît.",
        "Le poisson est délicieux.",
        "Nous mangeons au restaurant.",
        "Il faut beaucoup de farine.",
        "Je n'ai pas assez d'argent.",
      ]
    },
    d8: {
      title: "Dictée — Dossier 8",
      titleAr: "إملاء — الملف ٨",
      color: "#be123c",
      icon: "👗",
      phrases: [
        "Je cherche une chemise rouge.",
        "Cette robe est trop grande.",
        "Combien coûte ce pantalon noir ?",
        "Je préfère les chaussures confortables.",
        "Mon frère porte une casquette bleue.",
        "Nous allons au centre commercial.",
        "Ces lunettes coûtent cher.",
      ]
    },
    // ── 12ème ──────────────────────────────────────────────
    d4t: {
      title: "Dictée — Dossier 4 (12ème)",
      titleAr: "إملاء — الملف ٤ (الثاني عشر)",
      color: "#ec4899",
      icon: "🎂",
      phrases: [
        "Hassan va avoir dix-neuf ans.",
        "Je prépare un gâteau au chocolat.",
        "Je vais envoyer des invitations.",
        "Papa va acheter des décorations.",
        "Les cousins apportent des cadeaux.",
        "Je vais au supermarché.",
        "Quelle bonne idée pour la fête !",
      ]
    },
    d5t: {
      title: "Dictée — Dossier 5 (12ème)",
      titleAr: "إملاء — الملف ٥ (الثاني عشر)",
      color: "#10b981",
      icon: "🩺",
      phrases: [
        "Bonjour docteur, asseyez-vous.",
        "J'ai mal à la tête.",
        "Je crois que j'ai de la fièvre.",
        "Vous avez une angine.",
        "Vous devez boire beaucoup d'eau.",
        "Restez au lit trois jours.",
        "Ne prenez pas de boissons froides.",
      ]
    },
    d6t: {
      title: "Dictée — Dossier 6 (12ème)",
      titleAr: "إملاء — الملف ٦ (الثاني عشر)",
      color: "#0ea5e9",
      icon: "🏠",
      phrases: [
        "Mon studio est trop petit.",
        "Le chauffage est en panne.",
        "L'appartement est calme et lumineux.",
        "Tu pourrais mettre un lit ici.",
        "Je dois acheter des meubles.",
        "Il y a une lampe sur la table.",
        "Je peux travailler en sécurité.",
      ]
    }
  };

  // ---- Audio playback (ElevenLabs MP3s) ---------------------------------
  // Each phrase has a pre-generated MP3 at audio/dictee/{d}-{i}.mp3 (i is 1-based)
  function audioSrc(d, idx){
    return 'audio/dictee/' + d + '-' + (idx+1) + '.mp3';
  }
  let _curAudio = null;
  function speakMp3(d, idx, rate){
    try{ if(_curAudio){ _curAudio.pause(); _curAudio.currentTime = 0; } }catch(e){}
    const a = new Audio(audioSrc(d, idx));
    a.playbackRate = rate || 1;
    // Slight pitch correction stays automatic on most browsers; keep preservesPitch off
    // so a 0.65× rate sounds slower without a mickey-mouse pitch.
    if('preservesPitch' in a) a.preservesPitch = true;
    a.play().catch(function(err){
      console.warn('Dictée audio error:', err);
      alert("Audio introuvable. Vérifie que les fichiers audio/dictee/*.mp3 existent.");
    });
    _curAudio = a;
    return true;
  }

  // ---- Normalization & diff ---------------------------------------------
  // Lowercase + collapse spaces, but KEEP accents and punctuation.
  function norm(s){
    return (s||'').toLowerCase().replace(/\s+/g,' ').trim();
  }
  // Levenshtein with traceback → edit ops between expected and got.
  // Returns array of {type:'eq'|'sub'|'ins'|'del', e:char, g:char}
  // 'ins' = student added (extra), 'del' = student missed.
  function diffChars(expected, got){
    const A = expected, B = got;
    const m = A.length, n = B.length;
    const dp = Array(m+1).fill(null).map(()=>new Int32Array(n+1));
    for(let i=0;i<=m;i++) dp[i][0]=i;
    for(let j=0;j<=n;j++) dp[0][j]=j;
    for(let i=1;i<=m;i++){
      for(let j=1;j<=n;j++){
        const c = A[i-1]===B[j-1] ? 0 : 1;
        dp[i][j] = Math.min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1]+c);
      }
    }
    // Traceback
    const ops = [];
    let i=m, j=n;
    while(i>0 || j>0){
      if(i>0 && j>0 && A[i-1]===B[j-1] && dp[i][j]===dp[i-1][j-1]){
        ops.push({type:'eq', e:A[i-1], g:B[j-1]}); i--; j--;
      } else if(i>0 && j>0 && dp[i][j]===dp[i-1][j-1]+1){
        ops.push({type:'sub', e:A[i-1], g:B[j-1]}); i--; j--;
      } else if(j>0 && dp[i][j]===dp[i][j-1]+1){
        ops.push({type:'ins', e:'', g:B[j-1]}); j--;
      } else {
        ops.push({type:'del', e:A[i-1], g:''}); i--;
      }
    }
    ops.reverse();
    return {ops, distance: dp[m][n]};
  }

  function escHTML(c){
    return c.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  // Renders the diff: shows the expected sentence with each char colored,
  // plus inline markers for student-added or missed characters.
  function renderDiff(ops){
    let html = '';
    for(const op of ops){
      if(op.type==='eq'){
        html += '<span class="dc-ok">'+escHTML(op.e)+'</span>';
      } else if(op.type==='sub'){
        html += '<span class="dc-sub" title="Tu as écrit : '+escHTML(op.g)+'">'+escHTML(op.e)+'</span>';
      } else if(op.type==='del'){
        html += '<span class="dc-miss">'+escHTML(op.e)+'</span>';
      } else if(op.type==='ins'){
        html += '<span class="dc-extra">'+escHTML(op.g)+'</span>';
      }
    }
    return html;
  }

  // ---- State -------------------------------------------------------------
  const states = {};

  function getState(d){
    if(!states[d]){
      states[d] = { idx: 0, scores: [], played: 0 };
    }
    return states[d];
  }

  // ---- Render ------------------------------------------------------------
  function render(d){
    const data = DICTEE_BANK[d];
    if(!data) return;
    const el = document.getElementById(d+'-dictee-content');
    if(!el) return;
    const s = getState(d);
    if(s.idx >= data.phrases.length){
      // Finished
      const total = data.phrases.length;
      const sum = s.scores.reduce((a,b)=>a+b,0);
      const avg = Math.round(sum/total);
      el.innerHTML = `
        <div class="finish-box" style="border-top:4px solid ${data.color}">
          <div class="finish-emoji">${avg>=85?'🏆':avg>=70?'🎉':'💪'}</div>
          <div class="finish-title">Dictée terminée !</div>
          <div class="finish-sub">${total} phrases — score moyen : <strong style="color:${data.color}">${avg}%</strong></div>
          <button class="btn btn-primary" style="background:${data.color}" onclick="MBKDictee.reset('${d}')">🔄 Recommencer</button>
        </div>`;
      if(typeof celebrateIfPerfect === 'function') celebrateIfPerfect(avg, 100);
      return;
    }
    const cur = data.phrases[s.idx];
    el.innerHTML = `
      <div style="background:var(--card-bg);border-radius:18px;padding:1.2rem;box-shadow:var(--shadow);border-right:4px solid ${data.color}">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:0.6rem">
          <span style="font-size:1.6rem">${data.icon}</span>
          <div>
            <div style="font-size:0.95rem;font-weight:800;color:${data.color}">${data.title}</div>
            <div style="font-family:'Readex Pro',sans-serif;font-size:0.8rem;color:var(--light);direction:rtl">${data.titleAr}</div>
          </div>
          <div style="margin-inline-start:auto;font-size:0.78rem;color:var(--light);font-weight:700">${s.idx+1} / ${data.phrases.length}</div>
        </div>

        <div style="background:#FFF8E1;border-left:4px solid #FFD54F;border-radius:0 10px 10px 0;padding:0.7rem 1rem;margin-bottom:0.9rem;font-size:0.85rem">
          <strong>📋 Consigne :</strong> Écoute la phrase puis écris-la sans regarder.
          <div style="font-family:'Readex Pro',sans-serif;font-size:0.78rem;color:#6B4F1D;margin-top:4px;direction:rtl;text-align:right">استمع للجملة ثم اكتبها</div>
        </div>

        <div class="dc-controls" style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:0.9rem">
          <button class="btn" style="border-color:${data.color};color:${data.color}" onclick="MBKDictee.play('${d}',1)">▶️ Écouter</button>
          <button class="btn" style="border-color:${data.color};color:${data.color}" onclick="MBKDictee.play('${d}',0.65)">🐢 Plus lentement</button>
          <button class="btn" style="border-color:${data.color};color:${data.color}" onclick="MBKDictee.play('${d}',1)">🔁 Répéter</button>
        </div>

        <div id="${d}-dictee-counter" style="text-align:center;font-size:0.78rem;color:var(--light);margin-bottom:0.5rem">Écoutes : ${s.played}</div>

        <textarea id="${d}-dictee-input"
          placeholder="Écris ce que tu entends ici…"
          rows="3"
          style="width:100%;padding:12px;border-radius:14px;border:2px solid #E2E8F0;font-family:'Baloo 2',cursive;font-size:0.95rem;line-height:1.6;outline:none;resize:vertical;box-sizing:border-box"
          oninput="this.style.borderColor='${data.color}'"
        ></textarea>

        <div style="display:flex;gap:8px;justify-content:center;margin-top:0.8rem">
          <button class="btn btn-primary" style="background:${data.color}" onclick="MBKDictee.check('${d}')">✓ Vérifier</button>
          <button class="btn" onclick="MBKDictee.reveal('${d}')">👁️ Voir la réponse</button>
        </div>

        <div id="${d}-dictee-result" style="margin-top:1rem"></div>
      </div>

      <div style="margin-top:0.8rem;background:#F0F7FF;border-radius:12px;padding:0.7rem 1rem;font-size:0.78rem;color:#1E40AF">
        💡 <strong>Astuce :</strong> Écoute plusieurs fois avant d'écrire, et n'oublie pas les accents.
        <div style="font-family:'Readex Pro',sans-serif;font-size:0.76rem;margin-top:3px;direction:rtl;text-align:right">استمع عدة مرات قبل الكتابة، ولا تنسَ علامات التشكيل</div>
      </div>
    `;
  }

  // ---- Public API --------------------------------------------------------
  window.MBKDictee = {
    init: function(d){
      states[d] = { idx: 0, scores: [], played: 0 };
      render(d);
    },
    play: function(d, rate){
      const data = DICTEE_BANK[d];
      const s = getState(d);
      if(!data) return;
      speakMp3(d, s.idx, rate);
      s.played++;
      const cnt = document.getElementById(d+'-dictee-counter');
      if(cnt) cnt.textContent = 'Écoutes : ' + s.played;
    },
    check: function(d){
      const data = DICTEE_BANK[d];
      const s = getState(d);
      if(!data) return;
      const input = document.getElementById(d+'-dictee-input');
      const out = document.getElementById(d+'-dictee-result');
      if(!input || !out) return;
      const expected = norm(data.phrases[s.idx]);
      const got = norm(input.value);
      if(!got){
        out.innerHTML = '<div class="quiz-feedback nope">✗ Écris ta réponse avant de vérifier.</div>';
        return;
      }
      const {ops, distance} = diffChars(expected, got);
      const pct = Math.max(0, Math.round((1 - distance / Math.max(expected.length,1)) * 100));
      s.scores.push(pct);
      const perfect = distance === 0;
      if(perfect && typeof playDing === 'function') playDing(true);
      else if(typeof playDing === 'function') playDing(false);
      out.innerHTML = `
        <div class="dc-result-card ${perfect?'dc-perfect':pct>=70?'dc-good':'dc-meh'}">
          <div class="dc-score">${perfect?'🎉 Parfait !':pct>=70?'👍 Bien joué':'💪 Continue'}<span class="dc-pct">${pct}%</span></div>
          <div class="dc-label">Phrase attendue :</div>
          <div class="dc-diff">${renderDiff(ops)}</div>
          <div class="dc-legend">
            <span><span class="dc-ok">a</span> correct</span>
            <span><span class="dc-sub">a</span> mauvais caractère</span>
            <span><span class="dc-miss">a</span> oublié</span>
            <span><span class="dc-extra">a</span> en trop</span>
          </div>
          <div class="dc-correct">"${data.phrases[s.idx]}"</div>
          <div style="text-align:center;margin-top:0.8rem">
            <button class="btn btn-primary" style="background:${data.color}" onclick="MBKDictee.next('${d}')">Phrase suivante →</button>
          </div>
        </div>`;
    },
    reveal: function(d){
      const data = DICTEE_BANK[d];
      const s = getState(d);
      if(!data) return;
      const out = document.getElementById(d+'-dictee-result');
      if(out) out.innerHTML = '<div class="quiz-feedback nope" style="text-align:left">👁️ Réponse : <strong>'+data.phrases[s.idx]+'</strong></div>';
    },
    next: function(d){
      const s = getState(d);
      s.idx++;
      s.played = 0;
      render(d);
    },
    reset: function(d){
      states[d] = { idx: 0, scores: [], played: 0 };
      render(d);
    }
  };

  // Auto-init helper called by groupTabsConfig
  window.initDictee = function(d){
    if(!states[d]) states[d] = { idx: 0, scores: [], played: 0 };
    render(d);
  };
})();
