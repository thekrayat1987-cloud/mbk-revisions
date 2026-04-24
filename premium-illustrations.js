/* ═══════════════════════════════════════════════════════════
   MBK RÉVISIONS — PREMIUM ILLUSTRATIONS INJECTOR
   Injecte des illustrations SVG custom dans chaque accueil de dossier
   ═══════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  // ── Les 6 illustrations SVG (viewBox 200x200) ───────────────
  const ILLUSTRATIONS = {
    d5: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pi-d5-roof" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8b5cf6"/><stop offset="50%" stop-color="#a855f7"/><stop offset="100%" stop-color="#f97316"/></linearGradient>
        <linearGradient id="pi-d5-wall" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fef3ff"/><stop offset="100%" stop-color="#e9d5ff"/></linearGradient>
        <linearGradient id="pi-d5-door" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#6366f1"/><stop offset="100%" stop-color="#4f46e5"/></linearGradient>
        <radialGradient id="pi-d5-window" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="#fef08a"/><stop offset="100%" stop-color="#f59e0b"/></radialGradient>
        <linearGradient id="pi-d5-leaf" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#34d399"/><stop offset="100%" stop-color="#059669"/></linearGradient>
        <radialGradient id="pi-d5-shadow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="rgba(139,92,246,0.4)"/><stop offset="100%" stop-color="rgba(139,92,246,0)"/></radialGradient>
      </defs>
      <ellipse cx="100" cy="175" rx="70" ry="8" fill="url(#pi-d5-shadow)"/>
      <g transform="translate(155, 95)"><circle cx="0" cy="0" r="22" fill="url(#pi-d5-leaf)"/><circle cx="-12" cy="-8" r="15" fill="url(#pi-d5-leaf)" opacity="0.85"/><circle cx="10" cy="-10" r="14" fill="url(#pi-d5-leaf)" opacity="0.9"/><rect x="-3" y="18" width="6" height="25" fill="#78350f" rx="2"/><circle cx="-8" cy="-8" r="5" fill="rgba(255,255,255,0.4)"/></g>
      <path d="M 40 100 L 40 160 L 130 160 L 130 100 Z" fill="url(#pi-d5-wall)"/>
      <path d="M 120 100 L 120 160 L 130 160 L 130 100 Z" fill="rgba(139,92,246,0.08)"/>
      <path d="M 30 105 Q 85 55 85 55 Q 85 55 140 105 L 130 110 L 40 110 Z" fill="url(#pi-d5-roof)"/>
      <rect x="100" y="68" width="12" height="22" fill="#a855f7" rx="1.5"/>
      <rect x="98" y="66" width="16" height="5" fill="#7c3aed" rx="2"/>
      <circle cx="108" cy="55" r="3.5" fill="rgba(255,255,255,0.7)"/><circle cx="112" cy="47" r="2.8" fill="rgba(255,255,255,0.5)"/><circle cx="115" cy="40" r="2" fill="rgba(255,255,255,0.3)"/>
      <rect x="52" y="115" width="22" height="22" fill="url(#pi-d5-window)" rx="3"/>
      <line x1="63" y1="115" x2="63" y2="137" stroke="#fcd34d" stroke-width="1.5"/><line x1="52" y1="126" x2="74" y2="126" stroke="#fcd34d" stroke-width="1.5"/>
      <rect x="92" y="125" width="22" height="35" fill="url(#pi-d5-door)" rx="3"/><circle cx="109" cy="143" r="1.5" fill="#fbbf24"/>
      <g fill="#fbbf24"><path d="M 25 60 L 27 66 L 33 68 L 27 70 L 25 76 L 23 70 L 17 68 L 23 66 Z" opacity="0.85"/><circle cx="15" cy="110" r="2" opacity="0.6"/></g>
    </svg>`,
    d6: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pi-d6-tower" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#a855f7"/><stop offset="50%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#4c1d95"/></linearGradient>
        <linearGradient id="pi-d6-tower-hl" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="rgba(255,255,255,0.5)"/><stop offset="100%" stop-color="rgba(255,255,255,0)"/></linearGradient>
        <linearGradient id="pi-d6-pin" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fb7185"/><stop offset="100%" stop-color="#e11d48"/></linearGradient>
        <linearGradient id="pi-d6-map" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fef3ff"/><stop offset="100%" stop-color="#e9d5ff"/></linearGradient>
        <radialGradient id="pi-d6-sun" cx="30%" cy="30%" r="70%"><stop offset="0%" stop-color="#fef08a"/><stop offset="100%" stop-color="#f59e0b"/></radialGradient>
        <radialGradient id="pi-d6-shadow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="rgba(124,58,237,0.4)"/><stop offset="100%" stop-color="rgba(124,58,237,0)"/></radialGradient>
      </defs>
      <ellipse cx="100" cy="180" rx="70" ry="8" fill="url(#pi-d6-shadow)"/>
      <circle cx="165" cy="45" r="18" fill="url(#pi-d6-sun)"/><circle cx="160" cy="40" r="5" fill="rgba(255,255,255,0.6)"/>
      <g fill="rgba(255,255,255,0.85)"><ellipse cx="40" cy="50" rx="18" ry="8"/><ellipse cx="30" cy="48" rx="10" ry="7"/><ellipse cx="50" cy="45" rx="12" ry="7"/></g>
      <g transform="translate(20, 130) rotate(-12)">
        <rect x="0" y="0" width="55" height="40" fill="url(#pi-d6-map)" rx="3" stroke="#c4b5fd" stroke-width="1"/>
        <path d="M 5 10 Q 20 15 35 8 Q 45 5 52 12" stroke="#a855f7" stroke-width="1.5" fill="none" opacity="0.5"/>
        <path d="M 5 25 Q 15 30 30 25 Q 45 20 52 30" stroke="#a855f7" stroke-width="1.5" fill="none" opacity="0.5"/>
        <circle cx="35" cy="15" r="4" fill="url(#pi-d6-pin)"/><circle cx="35" cy="15" r="1.5" fill="white"/>
      </g>
      <g>
        <path d="M 70 170 Q 85 155 90 125 L 92 125 Q 92 155 75 170 Z" fill="url(#pi-d6-tower)"/>
        <path d="M 130 170 Q 115 155 110 125 L 108 125 Q 108 155 125 170 Z" fill="url(#pi-d6-tower)"/>
        <rect x="72" y="122" width="56" height="4" fill="url(#pi-d6-tower)"/>
        <path d="M 78 122 Q 100 112 122 122" stroke="url(#pi-d6-tower)" stroke-width="2" fill="none"/>
        <path d="M 90 122 L 95 85 L 105 85 L 110 122 Z" fill="url(#pi-d6-tower)"/>
        <line x1="92" y1="115" x2="108" y2="115" stroke="#4c1d95" stroke-width="1"/>
        <line x1="93" y1="108" x2="107" y2="108" stroke="#4c1d95" stroke-width="1"/>
        <line x1="94" y1="101" x2="106" y2="101" stroke="#4c1d95" stroke-width="1"/>
        <line x1="95" y1="94" x2="105" y2="94" stroke="#4c1d95" stroke-width="1"/>
        <rect x="92" y="82" width="16" height="3" fill="url(#pi-d6-tower)"/>
        <path d="M 95 82 L 98 60 L 102 60 L 105 82 Z" fill="url(#pi-d6-tower)"/>
        <line x1="96" y1="75" x2="104" y2="75" stroke="#4c1d95" stroke-width="0.8"/>
        <line x1="97" y1="68" x2="103" y2="68" stroke="#4c1d95" stroke-width="0.8"/>
        <rect x="96" y="58" width="8" height="2" fill="url(#pi-d6-tower)"/>
        <path d="M 98 58 L 100 35 L 102 58 Z" fill="url(#pi-d6-tower)"/>
        <line x1="100" y1="35" x2="100" y2="25" stroke="#7c3aed" stroke-width="1.5"/>
        <circle cx="100" cy="24" r="2" fill="#fbbf24"/>
        <path d="M 97 60 L 95 85 L 92 125 L 76 168" stroke="url(#pi-d6-tower-hl)" stroke-width="1.5" fill="none" opacity="0.7"/>
      </g>
      <g transform="translate(155, 115)">
        <path d="M 0 -15 Q -10 -15 -10 -5 Q -10 5 0 15 Q 10 5 10 -5 Q 10 -15 0 -15 Z" fill="url(#pi-d6-pin)"/>
        <circle cx="0" cy="-5" r="4" fill="white"/><circle cx="0" cy="-5" r="2" fill="url(#pi-d6-pin)"/>
      </g>
      <g fill="#fbbf24">
        <path d="M 25 90 L 27 95 L 32 96 L 27 97 L 25 102 L 23 97 L 18 96 L 23 95 Z" opacity="0.85"/>
        <circle cx="40" cy="110" r="2" opacity="0.6"/><circle cx="170" cy="90" r="1.5" opacity="0.5"/>
      </g>
    </svg>`,
    d7: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="pi-d7-plate" cx="40%" cy="40%" r="70%"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#e5e7eb"/></radialGradient>
        <linearGradient id="pi-d7-cup" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fed7aa"/><stop offset="100%" stop-color="#fb923c"/></linearGradient>
        <linearGradient id="pi-d7-coffee" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#78350f"/><stop offset="100%" stop-color="#451a03"/></linearGradient>
        <linearGradient id="pi-d7-croissant" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#f97316"/></linearGradient>
        <linearGradient id="pi-d7-table" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fed7aa"/><stop offset="100%" stop-color="#fdba74"/></linearGradient>
        <radialGradient id="pi-d7-shadow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="rgba(249,115,22,0.4)"/><stop offset="100%" stop-color="rgba(249,115,22,0)"/></radialGradient>
      </defs>
      <ellipse cx="100" cy="175" rx="80" ry="10" fill="url(#pi-d7-shadow)"/>
      <ellipse cx="100" cy="155" rx="75" ry="18" fill="url(#pi-d7-table)"/>
      <ellipse cx="85" cy="145" rx="42" ry="12" fill="url(#pi-d7-plate)"/>
      <ellipse cx="85" cy="142" rx="32" ry="8" fill="#fed7aa" opacity="0.6"/>
      <circle cx="75" cy="140" r="5" fill="#dc2626"/>
      <circle cx="90" cy="138" r="4" fill="#16a34a"/>
      <circle cx="82" cy="143" r="4" fill="#fbbf24"/>
      <ellipse cx="150" cy="120" rx="20" ry="6" fill="#d1d5db"/>
      <path d="M 132 118 L 135 150 Q 150 158 165 150 L 168 118 Z" fill="url(#pi-d7-cup)"/>
      <ellipse cx="150" cy="118" rx="18" ry="5" fill="url(#pi-d7-coffee)"/>
      <ellipse cx="148" cy="116" rx="6" ry="2" fill="rgba(255,255,255,0.3)"/>
      <path d="M 145 105 Q 148 95 144 88 Q 150 92 148 80" stroke="rgba(255,255,255,0.6)" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M 155 105 Q 158 95 154 88 Q 160 92 158 80" stroke="rgba(255,255,255,0.4)" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M 168 128 Q 180 135 168 145" stroke="#fb923c" stroke-width="4" fill="none"/>
      <g transform="translate(40, 85) rotate(-20)">
        <path d="M 0 0 Q 10 -15 30 -10 Q 40 -5 42 8 Q 32 15 20 13 Q 5 10 0 0 Z" fill="url(#pi-d7-croissant)"/>
        <path d="M 5 2 Q 15 -8 25 -5" stroke="#ea580c" stroke-width="1" fill="none" opacity="0.6"/>
      </g>
      <rect x="20" y="140" width="2" height="30" fill="#94a3b8" transform="rotate(-15 21 155)"/>
      <g fill="#fbbf24">
        <path d="M 165 40 L 167 45 L 172 46 L 167 47 L 165 52 L 163 47 L 158 46 L 163 45 Z" opacity="0.85"/>
        <circle cx="30" cy="50" r="2" opacity="0.6"/><circle cx="180" cy="170" r="1.5" opacity="0.5"/>
      </g>
    </svg>`,
    d8: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pi-d8-bag" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fda4af"/><stop offset="100%" stop-color="#e11d48"/></linearGradient>
        <linearGradient id="pi-d8-bag-hl" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="rgba(255,255,255,0.5)"/><stop offset="100%" stop-color="rgba(255,255,255,0)"/></linearGradient>
        <linearGradient id="pi-d8-tag" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#f97316"/></linearGradient>
        <linearGradient id="pi-d8-card" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8b5cf6"/><stop offset="100%" stop-color="#6366f1"/></linearGradient>
        <radialGradient id="pi-d8-shadow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="rgba(225,29,72,0.4)"/><stop offset="100%" stop-color="rgba(225,29,72,0)"/></radialGradient>
      </defs>
      <ellipse cx="100" cy="175" rx="70" ry="8" fill="url(#pi-d8-shadow)"/>
      <g transform="translate(100, 115)">
        <path d="M -22 -15 Q -22 -40 0 -40 Q 22 -40 22 -15" stroke="#e11d48" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M -35 -18 L -30 50 L 30 50 L 35 -18 Z" fill="url(#pi-d8-bag)"/>
        <path d="M -32 -16 L -28 48 L -18 48 L -22 -16 Z" fill="url(#pi-d8-bag-hl)"/>
        <circle cx="0" cy="15" r="12" fill="rgba(255,255,255,0.3)"/>
        <text x="0" y="20" text-anchor="middle" fill="white" font-family="Instrument Serif, serif" font-size="14" font-style="italic" font-weight="600">M</text>
      </g>
      <g transform="translate(30, 60) rotate(-15)">
        <path d="M 0 0 L 28 0 L 35 10 L 28 20 L 0 20 Z" fill="url(#pi-d8-tag)"/>
        <circle cx="5" cy="10" r="2" fill="white"/>
        <text x="18" y="14" fill="white" font-family="Geist, sans-serif" font-size="8" font-weight="700">€</text>
      </g>
      <g transform="translate(150, 60) rotate(12)">
        <rect x="0" y="0" width="35" height="22" fill="url(#pi-d8-card)" rx="3"/>
        <rect x="3" y="6" width="8" height="5" fill="#fbbf24" rx="1"/>
        <line x1="3" y1="16" x2="32" y2="16" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
      </g>
      <g fill="#fbbf24">
        <path d="M 25 30 L 27 35 L 32 36 L 27 37 L 25 42 L 23 37 L 18 36 L 23 35 Z" opacity="0.85"/>
        <circle cx="175" cy="155" r="2" opacity="0.6"/><circle cx="20" cy="155" r="1.5" opacity="0.5"/>
      </g>
    </svg>`,
    d9: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pi-d9-paper" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#ccfbf1"/></linearGradient>
        <linearGradient id="pi-d9-teal" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#2dd4bf"/><stop offset="100%" stop-color="#0f766e"/></linearGradient>
        <linearGradient id="pi-d9-pencil" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#f59e0b"/></linearGradient>
        <linearGradient id="pi-d9-check" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#34d399"/><stop offset="100%" stop-color="#059669"/></linearGradient>
        <radialGradient id="pi-d9-shadow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="rgba(15,118,110,0.4)"/><stop offset="100%" stop-color="rgba(15,118,110,0)"/></radialGradient>
      </defs>
      <ellipse cx="100" cy="178" rx="70" ry="8" fill="url(#pi-d9-shadow)"/>
      <g transform="translate(55, 50) rotate(-4)">
        <rect x="0" y="0" width="90" height="115" fill="url(#pi-d9-paper)" rx="4" stroke="#99f6e4" stroke-width="1"/>
        <rect x="0" y="0" width="90" height="18" fill="url(#pi-d9-teal)" rx="4"/>
        <text x="45" y="12" text-anchor="middle" fill="white" font-family="Instrument Serif, serif" font-size="10" font-style="italic">Examen</text>
        <line x1="10" y1="30" x2="80" y2="30" stroke="#a7f3d0" stroke-width="1.5"/>
        <line x1="10" y1="40" x2="70" y2="40" stroke="#a7f3d0" stroke-width="1.5"/>
        <line x1="10" y1="55" x2="80" y2="55" stroke="#a7f3d0" stroke-width="1.5"/>
        <line x1="10" y1="65" x2="60" y2="65" stroke="#a7f3d0" stroke-width="1.5"/>
        <rect x="10" y="78" width="10" height="10" fill="white" stroke="#0f766e" stroke-width="1.5" rx="2"/>
        <path d="M 12 83 L 14 86 L 18 81" stroke="#059669" stroke-width="2" fill="none" stroke-linecap="round"/>
        <line x1="25" y1="83" x2="70" y2="83" stroke="#a7f3d0" stroke-width="1.5"/>
        <rect x="10" y="93" width="10" height="10" fill="white" stroke="#0f766e" stroke-width="1.5" rx="2"/>
        <line x1="25" y1="98" x2="70" y2="98" stroke="#a7f3d0" stroke-width="1.5"/>
      </g>
      <g transform="translate(145, 55) rotate(40)">
        <rect x="0" y="0" width="55" height="10" fill="url(#pi-d9-pencil)" rx="1"/>
        <path d="M 55 0 L 65 5 L 55 10 Z" fill="#fde68a"/>
        <path d="M 62 4 L 65 5 L 62 6 Z" fill="#1e293b"/>
        <rect x="-10" y="0" width="10" height="10" fill="#ec4899" rx="1"/>
        <rect x="-12" y="0" width="3" height="10" fill="#be185d"/>
      </g>
      <g transform="translate(155, 135)">
        <circle cx="0" cy="0" r="16" fill="url(#pi-d9-check)"/>
        <path d="M -7 0 L -2 5 L 7 -5" stroke="white" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <g fill="#fbbf24">
        <path d="M 22 100 L 24 105 L 29 106 L 24 107 L 22 112 L 20 107 L 15 106 L 20 105 Z" opacity="0.85"/>
        <circle cx="178" cy="40" r="2" opacity="0.6"/>
      </g>
    </svg>`,
    // ═══ 12ème DOSSIERS ═══
    d4t: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pi-d4t-cake" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fda4af"/><stop offset="100%" stop-color="#ec4899"/></linearGradient>
        <linearGradient id="pi-d4t-cake2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#f9a8d4"/><stop offset="100%" stop-color="#db2777"/></linearGradient>
        <linearGradient id="pi-d4t-plate" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#e5e7eb"/></linearGradient>
        <linearGradient id="pi-d4t-balloon1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#a78bfa"/><stop offset="100%" stop-color="#7c3aed"/></linearGradient>
        <linearGradient id="pi-d4t-balloon2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#f59e0b"/></linearGradient>
        <linearGradient id="pi-d4t-balloon3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#6ee7b7"/><stop offset="100%" stop-color="#059669"/></linearGradient>
        <linearGradient id="pi-d4t-flame" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#ef4444"/></linearGradient>
        <radialGradient id="pi-d4t-shadow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="rgba(236,72,153,0.4)"/><stop offset="100%" stop-color="rgba(236,72,153,0)"/></radialGradient>
      </defs>
      <ellipse cx="100" cy="178" rx="70" ry="7" fill="url(#pi-d4t-shadow)"/>
      <!-- Balloons (top left) -->
      <g transform="translate(30, 60)">
        <ellipse cx="0" cy="0" rx="14" ry="17" fill="url(#pi-d4t-balloon1)"/>
        <ellipse cx="-5" cy="-5" rx="4" ry="6" fill="rgba(255,255,255,0.4)"/>
        <path d="M 0 17 L -2 22 L 2 22 Z" fill="#7c3aed"/>
        <path d="M 0 22 Q -3 30 0 40 Q 3 50 0 60" stroke="#a78bfa" stroke-width="1" fill="none"/>
      </g>
      <g transform="translate(50, 45)">
        <ellipse cx="0" cy="0" rx="12" ry="15" fill="url(#pi-d4t-balloon2)"/>
        <ellipse cx="-4" cy="-4" rx="3" ry="5" fill="rgba(255,255,255,0.4)"/>
        <path d="M 0 15 L -2 19 L 2 19 Z" fill="#f59e0b"/>
        <path d="M 0 19 Q -2 28 0 40 Q 2 50 0 68" stroke="#fbbf24" stroke-width="1" fill="none"/>
      </g>
      <g transform="translate(160, 55)">
        <ellipse cx="0" cy="0" rx="13" ry="16" fill="url(#pi-d4t-balloon3)"/>
        <ellipse cx="-4" cy="-4" rx="3" ry="5" fill="rgba(255,255,255,0.4)"/>
        <path d="M 0 16 L -2 20 L 2 20 Z" fill="#059669"/>
        <path d="M 0 20 Q 3 30 0 45 Q -3 55 0 70" stroke="#6ee7b7" stroke-width="1" fill="none"/>
      </g>
      <!-- Plate -->
      <ellipse cx="100" cy="165" rx="55" ry="10" fill="url(#pi-d4t-plate)"/>
      <ellipse cx="100" cy="162" rx="48" ry="7" fill="#f3f4f6"/>
      <!-- Cake layers -->
      <rect x="70" y="130" width="60" height="30" fill="url(#pi-d4t-cake)" rx="2"/>
      <path d="M 70 135 Q 80 140 90 135 Q 100 140 110 135 Q 120 140 130 135" stroke="#ec4899" stroke-width="1.5" fill="none"/>
      <!-- Frosting drips -->
      <path d="M 70 135 Q 75 145 70 150" stroke="#fda4af" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M 130 135 Q 125 145 130 150" stroke="#fda4af" stroke-width="4" fill="none" stroke-linecap="round"/>
      <rect x="80" y="108" width="40" height="22" fill="url(#pi-d4t-cake2)" rx="2"/>
      <!-- Candle -->
      <rect x="97" y="90" width="6" height="18" fill="#fef08a"/>
      <rect x="97" y="90" width="3" height="18" fill="#fcd34d"/>
      <!-- Flame -->
      <g transform="translate(100, 80)">
        <path d="M 0 10 Q -4 0 0 -8 Q 4 0 0 10 Z" fill="url(#pi-d4t-flame)"/>
        <path d="M 0 8 Q -2 2 0 -4 Q 2 2 0 8 Z" fill="#fef08a"/>
      </g>
      <!-- Gift box (bottom right) -->
      <g transform="translate(145, 135)">
        <rect x="0" y="5" width="26" height="22" fill="#a855f7" rx="2"/>
        <rect x="-2" y="0" width="30" height="10" fill="#7c3aed" rx="2"/>
        <rect x="10" y="0" width="6" height="27" fill="#fbbf24"/>
        <path d="M 13 0 Q 8 -8 2 -2 Q 5 4 13 0 Z" fill="#fbbf24"/>
        <path d="M 13 0 Q 18 -8 24 -2 Q 21 4 13 0 Z" fill="#fbbf24"/>
      </g>
      <!-- Confetti -->
      <g>
        <rect x="20" y="120" width="4" height="8" fill="#8b5cf6" rx="1" transform="rotate(30 22 124)"/>
        <rect x="175" y="100" width="4" height="8" fill="#06b6d4" rx="1" transform="rotate(-25 177 104)"/>
        <rect x="30" y="160" width="4" height="8" fill="#ec4899" rx="1" transform="rotate(15 32 164)"/>
        <circle cx="180" cy="165" r="2.5" fill="#fbbf24"/>
        <circle cx="15" cy="150" r="2" fill="#10b981"/>
      </g>
      <!-- Sparkles -->
      <g fill="#fbbf24">
        <path d="M 100 30 L 102 35 L 107 36 L 102 37 L 100 42 L 98 37 L 93 36 L 98 35 Z" opacity="0.85"/>
        <circle cx="85" cy="40" r="1.5" opacity="0.6"/><circle cx="120" cy="35" r="1.5" opacity="0.6"/>
      </g>
    </svg>`,
    d5t: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pi-d5t-cross" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ef4444"/><stop offset="100%" stop-color="#b91c1c"/></linearGradient>
        <linearGradient id="pi-d5t-thermo" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#f3f4f6"/><stop offset="100%" stop-color="#d1d5db"/></linearGradient>
        <linearGradient id="pi-d5t-mercury" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#f97316"/><stop offset="100%" stop-color="#dc2626"/></linearGradient>
        <linearGradient id="pi-d5t-pill1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#8b5cf6"/><stop offset="50%" stop-color="#8b5cf6"/><stop offset="50%" stop-color="#f3e8ff"/><stop offset="100%" stop-color="#f3e8ff"/></linearGradient>
        <linearGradient id="pi-d5t-pill2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#06b6d4"/><stop offset="50%" stop-color="#06b6d4"/><stop offset="50%" stop-color="#cffafe"/><stop offset="100%" stop-color="#cffafe"/></linearGradient>
        <linearGradient id="pi-d5t-bottle" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#60a5fa"/><stop offset="100%" stop-color="#2563eb"/></linearGradient>
        <radialGradient id="pi-d5t-shadow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="rgba(239,68,68,0.4)"/><stop offset="100%" stop-color="rgba(239,68,68,0)"/></radialGradient>
      </defs>
      <ellipse cx="100" cy="178" rx="70" ry="7" fill="url(#pi-d5t-shadow)"/>
      <!-- Medical cross badge (center) -->
      <g transform="translate(100, 85)">
        <circle cx="0" cy="0" r="35" fill="white" stroke="#fecaca" stroke-width="2"/>
        <circle cx="0" cy="0" r="30" fill="#fef2f2"/>
        <rect x="-5" y="-22" width="10" height="44" fill="url(#pi-d5t-cross)" rx="2"/>
        <rect x="-22" y="-5" width="44" height="10" fill="url(#pi-d5t-cross)" rx="2"/>
        <!-- Shine -->
        <path d="M -20 -20 Q -15 -22 -10 -20" stroke="rgba(255,255,255,0.6)" stroke-width="3" fill="none"/>
      </g>
      <!-- Thermometer (left) -->
      <g transform="translate(35, 130) rotate(-15)">
        <rect x="0" y="0" width="10" height="50" fill="url(#pi-d5t-thermo)" rx="5"/>
        <circle cx="5" cy="52" r="9" fill="url(#pi-d5t-mercury)"/>
        <rect x="3" y="20" width="4" height="30" fill="url(#pi-d5t-mercury)" rx="2"/>
        <line x1="10" y1="10" x2="13" y2="10" stroke="#94a3b8" stroke-width="1"/>
        <line x1="10" y1="20" x2="13" y2="20" stroke="#94a3b8" stroke-width="1"/>
        <line x1="10" y1="30" x2="13" y2="30" stroke="#94a3b8" stroke-width="1"/>
        <line x1="10" y1="40" x2="13" y2="40" stroke="#94a3b8" stroke-width="1"/>
      </g>
      <!-- Pill 1 (capsule, right top) -->
      <g transform="translate(155, 55) rotate(30)">
        <rect x="0" y="0" width="32" height="14" fill="url(#pi-d5t-pill1)" rx="7"/>
        <line x1="16" y1="0" x2="16" y2="14" stroke="#6366f1" stroke-width="0.5"/>
        <ellipse cx="6" cy="3" rx="3" ry="1" fill="rgba(255,255,255,0.5)"/>
      </g>
      <!-- Pill 2 (round, bottom right) -->
      <g transform="translate(160, 140)">
        <circle cx="0" cy="0" r="10" fill="url(#pi-d5t-pill2)"/>
        <circle cx="-3" cy="-3" r="3" fill="rgba(255,255,255,0.4)"/>
        <line x1="-6" y1="0" x2="6" y2="0" stroke="#0891b2" stroke-width="0.5"/>
      </g>
      <!-- Syrup bottle (bottom left) -->
      <g transform="translate(30, 130)">
        <rect x="0" y="10" width="20" height="28" fill="url(#pi-d5t-bottle)" rx="2"/>
        <rect x="3" y="0" width="14" height="12" fill="#1e40af" rx="2"/>
        <rect x="4" y="15" width="12" height="6" fill="rgba(255,255,255,0.9)" rx="1"/>
        <line x1="6" y1="18" x2="14" y2="18" stroke="#1e40af" stroke-width="0.8"/>
      </g>
      <!-- Sparkles -->
      <g fill="#fbbf24">
        <path d="M 170 110 L 172 115 L 177 116 L 172 117 L 170 122 L 168 117 L 163 116 L 168 115 Z" opacity="0.85"/>
        <circle cx="50" cy="50" r="2" opacity="0.6"/><circle cx="25" cy="170" r="1.5" opacity="0.5"/>
      </g>
    </svg>`,
    challenge: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pi-ch-trophy" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fef08a"/><stop offset="50%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#d97706"/></linearGradient>
        <linearGradient id="pi-ch-shine" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="rgba(255,255,255,0.8)"/><stop offset="100%" stop-color="rgba(255,255,255,0)"/></linearGradient>
        <linearGradient id="pi-ch-flame" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stop-color="#fbbf24"/><stop offset="50%" stop-color="#f97316"/><stop offset="100%" stop-color="#ef4444"/></linearGradient>
        <linearGradient id="pi-ch-base" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#7c2d12"/><stop offset="100%" stop-color="#431407"/></linearGradient>
        <radialGradient id="pi-ch-glow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="rgba(251,191,36,0.5)"/><stop offset="100%" stop-color="rgba(251,191,36,0)"/></radialGradient>
      </defs>
      <circle cx="100" cy="100" r="70" fill="url(#pi-ch-glow)"/>
      <ellipse cx="100" cy="178" rx="50" ry="7" fill="rgba(239,68,68,0.35)"/>
      <g>
        <path d="M 65 80 Q 50 80 50 100 Q 50 115 65 115" stroke="url(#pi-ch-trophy)" stroke-width="7" fill="none" stroke-linecap="round"/>
        <path d="M 135 80 Q 150 80 150 100 Q 150 115 135 115" stroke="url(#pi-ch-trophy)" stroke-width="7" fill="none" stroke-linecap="round"/>
        <path d="M 65 70 Q 65 130 85 135 L 115 135 Q 135 130 135 70 Z" fill="url(#pi-ch-trophy)"/>
        <path d="M 70 75 Q 72 120 82 130 L 88 130 Q 78 120 75 75 Z" fill="url(#pi-ch-shine)" opacity="0.7"/>
        <path d="M 100 95 L 104 103 L 113 104 L 106 110 L 108 119 L 100 114 L 92 119 L 94 110 L 87 104 L 96 103 Z" fill="#ef4444" stroke="#7c2d12" stroke-width="0.5"/>
        <rect x="92" y="135" width="16" height="12" fill="url(#pi-ch-base)"/>
        <rect x="75" y="147" width="50" height="10" fill="url(#pi-ch-base)" rx="2"/>
        <rect x="72" y="155" width="56" height="6" fill="#2c1609" rx="1"/>
      </g>
      <g transform="translate(100, 55)">
        <path d="M 0 0 Q -4 -10 -2 -18 Q 0 -12 2 -20 Q 4 -10 6 -22 Q 2 -8 0 0 Z" fill="url(#pi-ch-flame)"/>
        <path d="M 0 0 Q -2 -8 -1 -14 Q 2 -10 0 0 Z" fill="#fef08a" opacity="0.8"/>
      </g>
      <g transform="translate(35, 95) rotate(-10)">
        <path d="M 5 0 L -5 15 L 2 15 L -3 30 L 10 12 L 3 12 Z" fill="url(#pi-ch-flame)" stroke="#7c2d12" stroke-width="0.5"/>
      </g>
      <g transform="translate(165, 100)">
        <circle cx="0" cy="0" r="14" fill="white" stroke="#ef4444" stroke-width="2"/>
        <rect x="-3" y="-18" width="6" height="4" fill="#ef4444" rx="1"/>
        <line x1="0" y1="0" x2="0" y2="-8" stroke="#ef4444" stroke-width="2" stroke-linecap="round"/>
        <line x1="0" y1="0" x2="6" y2="3" stroke="#1e293b" stroke-width="2" stroke-linecap="round"/>
        <circle cx="0" cy="0" r="1.5" fill="#1e293b"/>
      </g>
      <g>
        <rect x="25" y="40" width="4" height="8" fill="#8b5cf6" rx="1" transform="rotate(30 27 44)"/>
        <rect x="165" y="45" width="4" height="8" fill="#06b6d4" rx="1" transform="rotate(-25 167 49)"/>
        <rect x="40" y="160" width="4" height="8" fill="#ec4899" rx="1" transform="rotate(15 42 164)"/>
        <rect x="155" y="155" width="4" height="8" fill="#10b981" rx="1" transform="rotate(-30 157 159)"/>
      </g>
      <g fill="#fbbf24">
        <path d="M 20 70 L 22 75 L 27 76 L 22 77 L 20 82 L 18 77 L 13 76 L 18 75 Z" opacity="0.9"/>
        <path d="M 175 60 L 177 65 L 182 66 L 177 67 L 175 72 L 173 67 L 168 66 L 173 65 Z" opacity="0.8"/>
      </g>
    </svg>`,
    d6t: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pi-d6t-bldg" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#f3e8ff"/><stop offset="100%" stop-color="#c4b5fd"/></linearGradient>
        <linearGradient id="pi-d6t-roof" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#4c1d95"/></linearGradient>
        <linearGradient id="pi-d6t-window" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fef08a"/><stop offset="100%" stop-color="#f59e0b"/></linearGradient>
        <linearGradient id="pi-d6t-key" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#d97706"/></linearGradient>
        <linearGradient id="pi-d6t-sign" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#34d399"/><stop offset="100%" stop-color="#059669"/></linearGradient>
        <radialGradient id="pi-d6t-shadow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="rgba(124,58,237,0.4)"/><stop offset="100%" stop-color="rgba(124,58,237,0)"/></radialGradient>
      </defs>
      <ellipse cx="100" cy="178" rx="70" ry="7" fill="url(#pi-d6t-shadow)"/>
      <!-- Apartment building (center) -->
      <g>
        <!-- Roof -->
        <path d="M 55 80 L 100 55 L 145 80 L 140 85 L 60 85 Z" fill="url(#pi-d6t-roof)"/>
        <!-- Main body -->
        <rect x="60" y="85" width="80" height="80" fill="url(#pi-d6t-bldg)" rx="2"/>
        <!-- Right shadow strip -->
        <rect x="130" y="85" width="10" height="80" fill="rgba(124,58,237,0.1)"/>
        <!-- Windows (3x3 grid) -->
        <g fill="url(#pi-d6t-window)">
          <rect x="68" y="94" width="14" height="16" rx="2"/>
          <rect x="93" y="94" width="14" height="16" rx="2"/>
          <rect x="118" y="94" width="14" height="16" rx="2"/>
          <rect x="68" y="118" width="14" height="16" rx="2"/>
          <rect x="93" y="118" width="14" height="16" rx="2"/>
          <rect x="118" y="118" width="14" height="16" rx="2"/>
        </g>
        <!-- Window frames -->
        <g stroke="#fcd34d" stroke-width="1" fill="none">
          <line x1="75" y1="94" x2="75" y2="110"/><line x1="68" y1="102" x2="82" y2="102"/>
          <line x1="100" y1="94" x2="100" y2="110"/><line x1="93" y1="102" x2="107" y2="102"/>
          <line x1="125" y1="94" x2="125" y2="110"/><line x1="118" y1="102" x2="132" y2="102"/>
          <line x1="75" y1="118" x2="75" y2="134"/><line x1="68" y1="126" x2="82" y2="126"/>
          <line x1="100" y1="118" x2="100" y2="134"/><line x1="93" y1="126" x2="107" y2="126"/>
          <line x1="125" y1="118" x2="125" y2="134"/><line x1="118" y1="126" x2="132" y2="126"/>
        </g>
        <!-- Door (bottom center) -->
        <rect x="92" y="140" width="16" height="25" fill="#6d28d9" rx="2"/>
        <circle cx="104" cy="153" r="1.5" fill="#fbbf24"/>
      </g>
      <!-- Key (floating bottom left) -->
      <g transform="translate(35, 130) rotate(-15)">
        <circle cx="0" cy="0" r="10" fill="none" stroke="url(#pi-d6t-key)" stroke-width="5"/>
        <rect x="5" y="-2" width="30" height="4" fill="url(#pi-d6t-key)" rx="1"/>
        <rect x="28" y="-4" width="4" height="8" fill="url(#pi-d6t-key)"/>
        <rect x="22" y="-4" width="3" height="6" fill="url(#pi-d6t-key)"/>
      </g>
      <!-- "À louer" sign (top right) -->
      <g transform="translate(155, 55) rotate(8)">
        <rect x="0" y="0" width="36" height="22" fill="url(#pi-d6t-sign)" rx="2"/>
        <rect x="-2" y="-2" width="40" height="4" fill="#065f46" rx="1"/>
        <text x="18" y="14" text-anchor="middle" fill="white" font-family="Geist, sans-serif" font-size="8" font-weight="700">À LOUER</text>
        <!-- Pole -->
        <rect x="16" y="22" width="4" height="15" fill="#065f46"/>
      </g>
      <!-- Sparkles -->
      <g fill="#fbbf24">
        <path d="M 25 70 L 27 75 L 32 76 L 27 77 L 25 82 L 23 77 L 18 76 L 23 75 Z" opacity="0.85"/>
        <circle cx="175" cy="120" r="2" opacity="0.6"/><circle cx="50" cy="45" r="1.5" opacity="0.5"/>
      </g>
    </svg>`
  };

  // Expose les illustrations pour les cards de la landing
  window.MBK_ILLUSTRATIONS = ILLUSTRATIONS;

  // Titres premium pour chaque dossier (Instrument Serif)
  const TITLES = {
    d5:  { eyebrow: "Dossier 5", title: "L'<em>arrivée</em>",     ar: "الوصول — اختر النشاط الذي تريد التدرب عليه", meta: { a: 7, t: "~45", s: 0 } },
    d6:  { eyebrow: "Dossier 6", title: "Une <em>visite</em>",     ar: "زيارة — استكشف الأماكن وتعلم مفرداتها",      meta: { a: 6, t: "~35", s: 0 } },
    d7:  { eyebrow: "Dossier 7", title: "Au <em>restaurant</em>",  ar: "في المطعم — اطلب وجبتك المفضلة",             meta: { a: 8, t: "~50", s: 0 } },
    d8:  { eyebrow: "Dossier 8", title: "Au <em>magasin</em>",     ar: "في المتجر — تسوق بالفرنسية",                  meta: { a: 6, t: "~40", s: 0 } },
    d9:  { eyebrow: "Examen blanc · 11ème", title: "Examen <em>blanc</em>", ar: "الامتحان التجريبي — 11ème année",  meta: { a: 5, t: "120", s: 0 } },
    d4t: { eyebrow: "Dossier 4 · 12ème", title: "Une <em>fête</em>",        ar: "حفلة — احتفل بالفرنسية",               meta: { a: 7, t: "~40", s: 0 } },
    d5t: { eyebrow: "Dossier 5 · 12ème", title: "Une <em>maladie</em>",     ar: "مرض — تعلم مفردات الصحة",              meta: { a: 7, t: "~45", s: 0 } },
    d6t: { eyebrow: "Dossier 6 · 12ème", title: "Un <em>logement</em>",     ar: "سكن — تعلم مفردات المسكن",             meta: { a: 7, t: "~45", s: 0 } },
    ebt: { eyebrow: "Examen blanc · 12ème", title: "Examen <em>blanc</em>", ar: "الامتحان التجريبي — 12ème année",   meta: { a: 5, t: "120", s: 0 } },
    challenge: { eyebrow: "Défi ultime", title: "Le <em>challenge</em>",     ar: "التحدي الكبير — كل الوحدات",            meta: { a: 20, t: "~25", s: 0 } }
  };

  // Container CSS to inject
  const HERO_STYLES = `
<style id="premium-hero-styles">
  .premium-hero {
    position: relative;
    padding: 32px 16px 20px;
    text-align: center;
    margin-bottom: 18px;
    perspective: 1400px;
    overflow: hidden;
  }
  /* Orbes décoratives flottantes */
  .prem-orb {
    position: absolute; border-radius: 50%;
    pointer-events: none;
    filter: blur(0.5px);
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: transform;
  }
  .prem-orb-1 { width: 52px; height: 52px; top: 14%; left: 10%;
    background: radial-gradient(circle at 30% 30%, #c4b5fd, #7c3aed);
    box-shadow: 0 18px 36px -8px rgba(124, 58, 237, 0.5), inset 0 -6px 16px rgba(0,0,0,0.2), inset 4px 4px 10px rgba(255,255,255,0.4);
    animation: orbitA 13s ease-in-out infinite; }
  .prem-orb-2 { width: 36px; height: 36px; top: 38%; right: 14%;
    background: radial-gradient(circle at 30% 30%, #fdba74, #ea580c);
    box-shadow: 0 14px 28px -7px rgba(234, 88, 12, 0.5), inset 0 -5px 14px rgba(0,0,0,0.2), inset 3px 3px 8px rgba(255,255,255,0.4);
    animation: orbitB 10s ease-in-out infinite; }
  .prem-orb-3 { width: 22px; height: 22px; top: 72%; left: 18%;
    background: radial-gradient(circle at 30% 30%, #f9a8d4, #db2777);
    box-shadow: 0 9px 18px -4px rgba(219, 39, 119, 0.5), inset 0 -3px 8px rgba(0,0,0,0.2);
    animation: orbitC 11s ease-in-out infinite; }
  .prem-orb-4 { width: 16px; height: 16px; top: 55%; right: 22%;
    background: radial-gradient(circle at 30% 30%, #6ee7b7, #059669);
    box-shadow: 0 7px 14px -3px rgba(5, 150, 105, 0.5), inset 0 -2px 6px rgba(0,0,0,0.2);
    animation: orbitB 15s ease-in-out infinite reverse; }
  @keyframes orbitA { 0%,100% { transform: translate3d(0,0,0) rotate(0); } 50% { transform: translate3d(25px,-18px,0) rotate(180deg); } }
  @keyframes orbitB { 0%,100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(-18px,13px,0); } }
  @keyframes orbitC { 0%,100% { transform: translate3d(0,0,0) scale(1); } 50% { transform: translate3d(13px,-10px,0) scale(1.2); } }

  /* Eyebrow badge */
  .premium-hero-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 5px 13px; border-radius: 999px;
    background: rgba(255,255,255,0.55);
    -webkit-backdrop-filter: blur(12px); backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,0.7);
    font-family: 'Geist', sans-serif;
    font-size: 10px; font-weight: 600; letter-spacing: 0.08em;
    color: var(--mid, #6b7280); text-transform: uppercase;
    margin-bottom: 10px; position: relative; z-index: 2;
  }
  body.dark-mode .premium-hero-eyebrow { background: rgba(30,22,60,0.55); border-color: rgba(255,255,255,0.08); color: var(--mid); }
  .premium-hero-eyebrow .pulse {
    width: 6px; height: 6px; border-radius: 50%;
    background: #8b5cf6; box-shadow: 0 0 0 0 rgba(139,92,246,0.6);
    animation: pulseOrb 2s infinite;
  }
  @keyframes pulseOrb { 0% { box-shadow: 0 0 0 0 rgba(139,92,246,0.6); } 70% { box-shadow: 0 0 0 8px rgba(139,92,246,0); } 100% { box-shadow: 0 0 0 0 rgba(139,92,246,0); } }

  .premium-hero-illust {
    display: inline-block;
    width: 120px; height: 120px;
    filter: drop-shadow(0 16px 30px rgba(139, 92, 246, 0.3)) drop-shadow(0 4px 8px rgba(236, 72, 153, 0.15));
    animation: premHeroBob 5s ease-in-out infinite;
    vertical-align: middle;
    position: relative; z-index: 2;
  }
  .premium-hero-illust svg { width: 100%; height: 100%; display: block; overflow: visible; }
  @keyframes premHeroBob {
    0%, 100% { transform: rotate(-3deg) translateY(0); }
    50% { transform: rotate(2deg) translateY(-6px); }
  }
  .premium-hero-title {
    font-family: 'Instrument Serif', serif !important;
    font-size: clamp(32px, 8vw, 52px);
    line-height: 1.05; letter-spacing: -0.02em;
    font-weight: 400; margin: 8px 0 6px;
    color: var(--dark);
    display: inline-flex; align-items: center; gap: 14px;
    justify-content: center; flex-wrap: wrap;
    position: relative; z-index: 2;
  }
  body.dark-mode .premium-hero-illust {
    filter: drop-shadow(0 20px 40px rgba(167, 139, 250, 0.4)) drop-shadow(0 4px 8px rgba(236, 72, 153, 0.25));
  }
  body.dark-mode .premium-hero-sub {
    color: var(--mid, #a89fd8);
  }
  .premium-hero-title em {
    font-style: italic;
    background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 50%, #f97316 100%);
    background-size: 200% 100%;
    -webkit-background-clip: text; background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: premShimmer 6s ease-in-out infinite;
  }
  @keyframes premShimmer { 0%,100%{background-position:0% 50%;} 50%{background-position:100% 50%;} }
  .premium-hero-sub {
    font-family: 'Readex Pro', sans-serif;
    color: var(--light, #8892a4);
    font-size: 0.95rem; font-weight: 500;
    margin: 4px 0 14px;
    direction: rtl; text-align: center;
    position: relative; z-index: 2;
  }

  /* Meta row */
  .premium-hero-meta {
    display: inline-flex; gap: 14px; align-items: center;
    padding: 9px 16px; border-radius: 999px;
    background: rgba(255,255,255,0.55);
    -webkit-backdrop-filter: blur(16px); backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.7);
    box-shadow: 0 1px 0 rgba(255,255,255,0.9) inset, 0 10px 28px -10px rgba(139,92,246,0.3);
    font-family: 'Geist', sans-serif;
    font-size: 12px; color: var(--mid, #6b7280);
    position: relative; z-index: 2;
  }
  body.dark-mode .premium-hero-meta { background: rgba(30,22,60,0.55); border-color: rgba(255,255,255,0.08); }
  .premium-hero-meta-item { display: flex; align-items: center; gap: 5px; font-weight: 600; }
  .premium-hero-meta-item strong { color: var(--dark); font-weight: 700; }
  .premium-hero-meta-item svg { width: 13px; height: 13px; stroke: #8b5cf6; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
  .premium-hero-meta-divider { width: 1px; height: 12px; background: currentColor; opacity: 0.2; }

  @media (max-width: 480px) {
    .premium-hero-illust { width: 95px; height: 95px; }
    .premium-hero-title { font-size: 32px; gap: 10px; }
    .premium-hero-meta { font-size: 11px; gap: 10px; padding: 7px 13px; }
    .prem-orb-1 { width: 36px; height: 36px; }
    .prem-orb-2 { width: 26px; height: 26px; }
  }
</style>`;

  function buildHeroHTML(dossierKey) {
    const illust = ILLUSTRATIONS[dossierKey];
    const d = TITLES[dossierKey];
    if (!illust || !d) return '';
    return `
      <div class="prem-orb prem-orb-1"></div>
      <div class="prem-orb prem-orb-2"></div>
      <div class="prem-orb prem-orb-3"></div>
      <div class="prem-orb prem-orb-4"></div>
      <div class="premium-hero-eyebrow"><span class="pulse"></span>${d.eyebrow}</div>
      <h1 class="premium-hero-title">
        ${d.title}
        <span class="premium-hero-illust">${illust}</span>
      </h1>
      <div class="premium-hero-sub">${d.ar}</div>
      <div class="premium-hero-meta">
        <span class="premium-hero-meta-item">
          <svg viewBox="0 0 24 24"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
          <strong>${d.meta.a}</strong> activités
        </span>
        <span class="premium-hero-meta-divider"></span>
        <span class="premium-hero-meta-item">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <strong>${d.meta.t}</strong> min
        </span>
        <span class="premium-hero-meta-divider"></span>
        <span class="premium-hero-meta-item">
          <svg viewBox="0 0 24 24"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
          <strong>${d.meta.s}</strong> jours
        </span>
      </div>
    `;
  }

  function injectHero(sectionId, dossierKey) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    if (section.querySelector('.premium-hero')) return;
    const html = buildHeroHTML(dossierKey);
    if (!html) return;

    const hero = document.createElement('div');
    hero.className = 'premium-hero';
    hero.innerHTML = html;

    const oldHeader = section.querySelector('div[style*="text-align:center"]');
    if (oldHeader) oldHeader.style.display = 'none';

    section.insertBefore(hero, section.firstChild);
  }

  // Injection spéciale pour les panels Challenge (pas de .section)
  function injectChallengeHero(panelId, dossierKey) {
    const panel = document.getElementById(panelId);
    if (!panel) return;
    if (panel.querySelector('.premium-hero')) return;
    const html = buildHeroHTML(dossierKey);
    if (!html) return;
    const hero = document.createElement('div');
    hero.className = 'premium-hero';
    hero.style.paddingTop = '32px';
    hero.innerHTML = html;
    panel.insertBefore(hero, panel.firstChild);
  }

  // Couleurs par classe active (reprises du site)
  const DOT_COLORS = {
    'active-d5': 'linear-gradient(135deg,#8b5cf6,#6366f1)',
    'active-d6': 'linear-gradient(135deg,#c084fc,#a855f7)',
    'active-d7': 'linear-gradient(135deg,#fb923c,#f97316)',
    'active-d8': 'linear-gradient(135deg,#fb7185,#e11d48)',
    'active-d9': 'linear-gradient(135deg,#2dd4bf,#0f766e)',
    'active-d4t': 'linear-gradient(135deg,#f472b6,#ec4899)',
    'active-d5t': 'linear-gradient(135deg,#ef4444,#b91c1c)',
    'active-d6t': 'linear-gradient(135deg,#a78bfa,#7c3aed)',
    'active-ebt': 'linear-gradient(135deg,#60a5fa,#2563eb)',
    'active-challenge': 'linear-gradient(135deg,#fbbf24,#ef4444)',
    'active-challenge12': 'linear-gradient(135deg,#fbbf24,#ef4444)'
  };

  // Mapping d'index d'onglet → classe de couleur (pour tabs qui ne sont pas actives)
  function guessDotColor(tab) {
    const txt = (tab.textContent || '');
    if (txt.match(/\b5\b/) && !txt.match(/12ème|Une maladie/)) return DOT_COLORS['active-d5'];
    if (txt.match(/\b6\b/) && !txt.match(/12ème|Un logement/)) return DOT_COLORS['active-d6'];
    if (txt.match(/\b7\b/)) return DOT_COLORS['active-d7'];
    if (txt.match(/\b8\b/)) return DOT_COLORS['active-d8'];
    if (txt.match(/\b4\b/)) return DOT_COLORS['active-d4t'];
    if (txt.match(/Examen/i)) return DOT_COLORS['active-d9'];
    if (txt.match(/Challenge/i)) return DOT_COLORS['active-challenge'];
    return DOT_COLORS['active-d5'];
  }

  // Reformat une tab : dot coloré + numéro (compact) + label italique (montré si actif)
  function reformatTab(tab) {
    if (tab.dataset.premiumReformatted) return;
    // Extract le label existant s'il est là
    const labelEl = tab.querySelector('.dtab-label');
    const labelText = labelEl ? labelEl.textContent.trim() : '';
    // Extract le numéro / nom depuis le texte (entre emoji et label)
    const fullText = (tab.textContent || '').trim();
    // Regex pour récupérer "Dossier X", "Examen", "Challenge"
    let displayName = '';
    const dossierMatch = fullText.match(/Dossier\s*(\d+)/i);
    if (dossierMatch) {
      displayName = dossierMatch[1];
    } else if (/Examen/i.test(fullText)) {
      displayName = 'Examen';
    } else if (/Challenge/i.test(fullText)) {
      displayName = 'Challenge';
    } else {
      // fallback : tout ce qui n'est pas emoji ni label
      displayName = fullText.replace(labelText, '').trim().slice(0, 12);
    }
    // Nettoie aussi le label (enlève le "·" et l'arabe qui suit dans certains cas)
    let cleanLabel = labelText.split('·')[0].trim();

    // Récupère la couleur (depuis classe active ou deviner)
    let color = null;
    for (const cls in DOT_COLORS) {
      if (tab.classList.contains(cls)) { color = DOT_COLORS[cls]; break; }
    }
    if (!color) color = guessDotColor(tab);

    // Reconstruit le contenu
    tab.innerHTML = `
      <span class="dtab-dot-prem" style="background:${color}"></span>
      <span class="dtab-num-prem">${displayName}</span>
      <span class="dtab-label-prem">${cleanLabel}</span>
    `;
    tab.dataset.premiumReformatted = '1';
    tab.dataset.premColor = color;
  }

  // Réorganise les dossier tabs en 2 groupes (Cours / Évaluations)
  function reorganizeDossierTabs() {
    const allTabContainers = document.querySelectorAll('.dossier-tabs');
    allTabContainers.forEach(container => {
      if (container.dataset.premiumOrganized) return;
      const tabs = Array.from(container.querySelectorAll('.dtab'));
      if (tabs.length === 0) return;

      // Reformat chaque tab
      tabs.forEach(reformatTab);

      // Identifie : cours vs évaluations
      const coursTabs = [];
      const evalTabs = [];
      tabs.forEach(tab => {
        const txt = (tab.textContent || '').toLowerCase();
        if (txt.includes('examen') || txt.includes('challenge') || txt.includes('défi') || txt.includes('تحدي') || txt.includes('امتحان')) {
          evalTabs.push(tab);
        } else {
          coursTabs.push(tab);
        }
      });

      // Vide et restructure
      container.innerHTML = '';
      container.classList.add('dtabs-grouped');

      if (coursTabs.length) {
        const g1 = document.createElement('div');
        g1.className = 'dgroup';
        g1.innerHTML = '<div class="dgroup-label">Cours · الوحدات</div><div class="dtabs-row"></div>';
        coursTabs.forEach(t => g1.querySelector('.dtabs-row').appendChild(t));
        container.appendChild(g1);
      }
      if (evalTabs.length) {
        const g2 = document.createElement('div');
        g2.className = 'dgroup';
        g2.innerHTML = '<div class="dgroup-label">Évaluations · الاختبارات</div><div class="dtabs-row"></div>';
        evalTabs.forEach(t => g2.querySelector('.dtabs-row').appendChild(t));
        container.appendChild(g2);
      }

      container.dataset.premiumOrganized = '1';
    });

    // Inject CSS for groups
    if (!document.getElementById('premium-dtabs-styles')) {
      const s = document.createElement('style');
      s.id = 'premium-dtabs-styles';
      s.textContent = `
        .dossier-tabs.dtabs-grouped {
          display: flex !important;
          flex-direction: column !important;
          gap: 12px !important;
          padding: 18px 24px 14px !important;
          justify-content: stretch !important;
          overflow: visible !important;
        }
        @media (min-width: 720px) {
          .dossier-tabs.dtabs-grouped { flex-direction: row !important; align-items: flex-start; gap: 24px !important; }
          .dossier-tabs.dtabs-grouped .dgroup { flex: 1; }
          .dossier-tabs.dtabs-grouped .dgroup:last-child { flex: 0 0 auto; min-width: 280px; }
        }
        .dossier-tabs.dtabs-grouped .dgroup { display: flex; flex-direction: column; gap: 6px; }
        .dossier-tabs.dtabs-grouped .dgroup-label {
          font-family: 'Geist', sans-serif;
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--mid, #6b7280);
          padding-left: 4px;
          display: flex; align-items: center; gap: 8px;
        }
        .dossier-tabs.dtabs-grouped .dgroup-label::after {
          content: ""; flex: 1; height: 1px;
          background: linear-gradient(to right, rgba(139,92,246,0.15), transparent);
        }
        .dossier-tabs.dtabs-grouped .dtabs-row {
          display: flex; gap: 6px; flex-wrap: wrap;
        }
        /* Reset les dtabs dans les groupes */
        .dossier-tabs.dtabs-grouped .dtab {
          flex: 1 1 auto !important;
          min-height: 44px !important;
          flex-direction: row !important;
          padding: 10px 16px !important;
          border-radius: 14px !important;
          min-width: 60px !important;
          gap: 8px !important;
          justify-content: center;
          align-items: center !important;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
          font-family: 'Geist', sans-serif !important;
        }
        /* Tab active s'étire */
        .dossier-tabs.dtabs-grouped .dtab[class*="active-"] {
          flex: 2.8 1 auto !important;
        }
        /* Dot coloré */
        .dossier-tabs.dtabs-grouped .dtab-dot-prem {
          width: 9px; height: 9px; border-radius: 50%;
          flex-shrink: 0;
          box-shadow: 0 0 0 2px rgba(255,255,255,0.5);
        }
        .dossier-tabs.dtabs-grouped .dtab[class*="active-"] .dtab-dot-prem {
          background: white !important; box-shadow: 0 0 0 2px rgba(255,255,255,0.3);
        }
        /* Numéro compact */
        .dossier-tabs.dtabs-grouped .dtab-num-prem {
          font-size: 14px; font-weight: 700;
          white-space: nowrap; line-height: 1;
          color: var(--dark);
        }
        .dossier-tabs.dtabs-grouped .dtab[class*="active-"] .dtab-num-prem {
          color: white !important;
        }
        /* Label italique — caché sauf si actif */
        .dossier-tabs.dtabs-grouped .dtab-label-prem {
          font-family: 'Instrument Serif', serif;
          font-style: italic;
          font-size: 13px; font-weight: 400;
          max-width: 0; overflow: hidden; white-space: nowrap;
          opacity: 0; transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          color: var(--mid);
        }
        .dossier-tabs.dtabs-grouped .dtab[class*="active-"] .dtab-label-prem {
          opacity: 0.95; max-width: 180px;
          color: white !important;
          margin-left: 4px;
        }
        /* Cache les anciens éléments */
        .dossier-tabs.dtabs-grouped .dtab-emoji,
        .dossier-tabs.dtabs-grouped .dtab-progress { display: none !important; }
      `;
      document.head.appendChild(s);
    }
  }

  // Couleurs des icônes de carte (par type d'activité)
  const CARD_ICON_COLORS = {
    dialogue:   'linear-gradient(135deg,#8b5cf6,#6366f1)',
    compreh:    'linear-gradient(135deg,#a78bfa,#7c3aed)',
    vocab:      'linear-gradient(135deg,#06b6d4,#0891b2)',
    'comp-orale': 'linear-gradient(135deg,#ec4899,#db2777)',
    co:         'linear-gradient(135deg,#ec4899,#db2777)',
    gram:       'linear-gradient(135deg,#fb923c,#f97316)',
    comm:       'linear-gradient(135deg,#10b981,#059669)',
    'quiz-final': 'linear-gradient(135deg,#fbbf24,#f59e0b)',
    quiz:       'linear-gradient(135deg,#fbbf24,#f59e0b)'
  };

  // Détecte le type de carte depuis le onclick ou contenu
  function detectCardType(card) {
    const onclick = card.getAttribute('onclick') || '';
    const title = (card.querySelector('.home-card-title') || {}).textContent || '';
    if (onclick.includes('dialogue') || /Dialogue/i.test(title)) return 'dialogue';
    if (onclick.includes('compreh') && !onclick.includes('comp-orale')) return 'compreh';
    if (onclick.includes('vocab')) return 'vocab';
    if (onclick.includes('group-co\'') || onclick.includes('group-co"') || /Comp\. Orale/i.test(title) || /Orale/i.test(title)) return 'co';
    if (onclick.includes('gram') || /Grammaire/i.test(title)) return 'gram';
    if (onclick.includes('comm') || /Comm/i.test(title)) return 'comm';
    if (onclick.includes('quiz-final') || /Quiz final/i.test(title)) return 'quiz-final';
    return 'dialogue';
  }

  // Transforme chaque home-grid en bento layout + icônes gradient
  function upgradeHomeGrids() {
    const grids = document.querySelectorAll('.home-grid');
    grids.forEach(grid => {
      if (grid.dataset.bentoUpgraded) return;
      grid.classList.add('bento-grid');
      const cards = Array.from(grid.querySelectorAll('.home-card'));
      cards.forEach((card, idx) => {
        if (card.dataset.bentoCard) return;
        card.dataset.bentoCard = '1';

        const type = detectCardType(card);
        const color = CARD_ICON_COLORS[type] || CARD_ICON_COLORS.dialogue;
        card.dataset.cardType = type;
        card.style.setProperty('--card-grad', color);

        // Attribue taille selon position
        // 7 cartes : 1ère = LG, 2e = MD, 3-6 = SM, 7e = WIDE
        if (cards.length === 7) {
          if (idx === 0) card.classList.add('bento-lg');
          else if (idx === 1) card.classList.add('bento-md');
          else if (idx === 6) card.classList.add('bento-wide');
          else card.classList.add('bento-sm');
        } else {
          card.classList.add('bento-sm');
        }

        // Wrap l'icône dans un container gradient
        const iconEl = card.querySelector('.home-card-icon');
        if (iconEl && !iconEl.classList.contains('bento-iconized')) {
          iconEl.classList.add('bento-iconized');
          if (iconEl.querySelector('img.dossier-icon')) {
            iconEl.classList.add('has-dossier-icon');
          }
        }

        // Ajoute flèche bas-droite
        if (!card.querySelector('.bento-arrow')) {
          const arrow = document.createElement('div');
          arrow.className = 'bento-arrow';
          arrow.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
          card.appendChild(arrow);
        }

      });
      grid.dataset.bentoUpgraded = '1';
    });

    // Inject bento CSS
    if (!document.getElementById('premium-bento-styles')) {
      const s = document.createElement('style');
      s.id = 'premium-bento-styles';
      s.textContent = `
        .home-grid.bento-grid {
          display: grid !important;
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 14px !important;
          max-width: 1100px !important;
          margin: 0 auto !important;
        }
        @media (min-width: 720px) {
          .home-grid.bento-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 18px !important;
          }
        }
        @media (min-width: 1024px) {
          .home-grid.bento-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        /* Toutes les cartes même taille — uniforme */
        .home-grid.bento-grid .home-card {
          position: relative;
          padding: 20px !important;
          border-radius: 24px !important;
          overflow: hidden;
          display: flex !important;
          flex-direction: column !important;
          align-items: stretch !important;
          text-align: left !important;
          min-height: 200px !important;
          height: 100% !important;
          justify-content: flex-start !important;
          cursor: pointer;
        }
        /* Désactive les variations — uniforme */
        .home-grid.bento-grid .bento-lg,
        .home-grid.bento-grid .bento-md,
        .home-grid.bento-grid .bento-sm {
          grid-column: auto !important;
          grid-row: auto !important;
        }
        /* Quiz final = rectangle qui remplit la fin de ligne */
        .home-grid.bento-grid .bento-wide {
          grid-column: span 2 !important;
        }
        @media (min-width: 720px) {
          .home-grid.bento-grid .bento-wide {
            grid-column: span 3 !important;  /* pleine largeur sur tablette 3-col */
          }
        }
        @media (min-width: 1024px) {
          .home-grid.bento-grid .bento-wide {
            grid-column: span 2 !important;  /* remplit l'espace vide sur desktop 4-col */
          }
        }
        /* Sur la carte wide : layout horizontal plus élégant */
        @media (min-width: 720px) {
          .home-grid.bento-grid .bento-wide .home-card-icon {
            width: 64px !important; height: 64px !important;
            border-radius: 18px !important;
          }
          .home-grid.bento-grid .bento-wide .home-card-title {
            font-size: 1.8rem !important;
          }
        }
        /* Glow radial interne coloré */
        .home-grid.bento-grid .home-card::after {
          content: ""; position: absolute;
          top: -30%; right: -20%; width: 70%; height: 140%;
          background: var(--card-grad);
          opacity: 0.15;
          filter: blur(40px);
          pointer-events: none;
          transition: opacity 0.4s;
        }
        .home-grid.bento-grid .home-card:hover::after { opacity: 0.3; }
        /* Border gradient fine via pseudo */
        .home-grid.bento-grid .home-card::before {
          content: ""; position: absolute; inset: 0;
          border-radius: 24px; padding: 1px;
          background: var(--card-grad);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          pointer-events: none; opacity: 0.5;
        }
        /* Icône en carré gradient (cas emoji uniquement) */
        .home-grid.bento-grid .home-card-icon {
          width: 48px !important; height: 48px !important;
          border-radius: 14px !important;
          background: var(--card-grad) !important;
          display: grid !important;
          place-items: center !important;
          font-size: 1.5rem !important;
          margin-bottom: 12px !important;
          box-shadow: 0 6px 16px -4px rgba(99,102,241,0.4), inset 0 1px 0 rgba(255,255,255,0.3);
          position: relative; z-index: 1;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.08));
        }
        .home-grid.bento-grid .home-card-icon img.emoji {
          filter: drop-shadow(0 1px 2px rgba(0,0,0,0.2));
          height: 1.3em !important; width: 1.3em !important;
        }
        /* Quand l'icône est une vraie image 3D (.dossier-icon webp) :
           pas de container gradient — l'icône a déjà son propre style claymorphism */
        .home-grid.bento-grid .home-card-icon.has-dossier-icon {
          width: auto !important; height: auto !important;
          background: transparent !important;
          box-shadow: none !important;
          filter: none !important;
          border-radius: 0 !important;
          display: block !important;
          line-height: 0 !important;
          padding: 0 !important;
        }
        .home-grid.bento-grid .home-card-icon.has-dossier-icon img.dossier-icon {
          width: 64px !important; height: 64px !important;
          display: block;
          filter: drop-shadow(0 8px 16px rgba(0,0,0,0.18));
          transition: transform 0.3s cubic-bezier(.4,0,.2,1), filter 0.3s ease;
        }
        .home-grid.bento-grid .home-card:hover .home-card-icon.has-dossier-icon img.dossier-icon {
          transform: translateY(-3px) scale(1.06);
          filter: drop-shadow(0 12px 24px rgba(0,0,0,0.25));
        }
        .home-grid.bento-grid .bento-wide .home-card-icon.has-dossier-icon img.dossier-icon {
          width: 72px !important; height: 72px !important;
        }
        /* Titre */
        .home-grid.bento-grid .home-card-title {
          font-family: 'Instrument Serif', serif !important;
          font-style: italic;
          font-size: 1.4rem !important;
          font-weight: 400 !important;
          line-height: 1.1 !important;
          margin-bottom: 4px !important;
          letter-spacing: -0.01em;
          position: relative; z-index: 1;
        }
        /* Arabic (tant qu'on reste pas en écrasement total) */
        .home-grid.bento-grid .home-card-ar {
          font-family: 'Readex Pro', sans-serif !important;
          font-size: 0.9rem !important;
          color: var(--mid, #6b7280) !important;
          margin-bottom: 10px !important;
          position: relative; z-index: 1;
          direction: rtl; text-align: right;
        }
        /* Badge devient pill glass */
        .home-grid.bento-grid .home-card-badge {
          margin-top: auto !important;
          padding: 4px 10px !important;
          border-radius: 999px !important;
          background: rgba(255,255,255,0.7) !important;
          border: 1px solid rgba(255,255,255,0.8);
          color: var(--mid, #6b7280) !important;
          font-size: 11px !important;
          font-weight: 600 !important;
          font-family: 'Geist', sans-serif !important;
          align-self: flex-start;
          display: inline-block;
          position: relative; z-index: 1;
          -webkit-backdrop-filter: blur(8px);
          backdrop-filter: blur(8px);
        }
        body.dark-mode .home-grid.bento-grid .home-card-badge {
          background: rgba(255,255,255,0.08) !important;
          border-color: rgba(255,255,255,0.08);
        }
        /* Flèche arrow bottom right */
        .home-grid.bento-grid .bento-arrow {
          position: absolute;
          bottom: 16px; right: 16px;
          width: 32px; height: 32px; border-radius: 50%;
          background: var(--card-grad);
          display: grid; place-items: center;
          color: white;
          box-shadow: 0 4px 12px -2px rgba(99,102,241,0.35);
          z-index: 2;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .home-grid.bento-grid .bento-arrow svg { width: 14px; height: 14px; }
        .home-grid.bento-grid .home-card:hover .bento-arrow { transform: translateX(3px) rotate(-8deg); }
        /* Progress ring (1ère carte large) */
        .home-grid.bento-grid .bento-ring {
          position: absolute; top: 20px; right: 20px;
          width: 52px; height: 52px; z-index: 2;
        }
        .home-grid.bento-grid .bento-ring svg { display: block; }
        .home-grid.bento-grid .bento-ring-txt {
          position: absolute; inset: 0;
          display: grid; place-items: center;
          font-size: 12px; font-weight: 700;
          font-family: 'Geist', sans-serif;
          color: var(--dark);
        }
      `;
      document.head.appendChild(s);
    }
  }

  function init() {
    // Injecte le CSS
    if (!document.getElementById('premium-hero-styles')) {
      document.head.insertAdjacentHTML('beforeend', HERO_STYLES);
    }

    // Réorganise les dossier tabs en 2 groupes
    reorganizeDossierTabs();

    // Upgrade bento grids
    upgradeHomeGrids();
    // 11ème cours
    injectHero('d5-home', 'd5');
    injectHero('d6-home', 'd6');
    injectHero('d7-home', 'd7');
    injectHero('d8-home', 'd8');
    // 11ème Examen blanc
    injectHero('exam-accueil', 'd9');
    // 12ème cours
    injectHero('d4t-home', 'd4t');
    injectHero('d5t-home', 'd5t');
    injectHero('d6t-home', 'd6t');
    // 12ème Examen blanc
    const ebtPanel = document.getElementById('panel-ebt');
    if (ebtPanel) {
      const ebtAccueil = ebtPanel.querySelector('.section.active') || ebtPanel.querySelector('.section');
      if (ebtAccueil && ebtAccueil.id) injectHero(ebtAccueil.id, 'ebt');
    }
    // Challenges (pas de .section, structure différente)
    injectChallengeHero('panel-challenge11', 'challenge');
    injectChallengeHero('panel-challenge12', 'challenge');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
