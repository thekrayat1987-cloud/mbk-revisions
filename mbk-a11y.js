(function(){
  function enhance(){
    const nodes = document.querySelectorAll('[onclick]');
    nodes.forEach(el => {
      const tag = el.tagName.toLowerCase();
      if (tag === 'button' || tag === 'a') return;
      if (!el.hasAttribute('role')) el.setAttribute('role', 'button');
      if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
      if (el.dataset.kbBound) return;
      el.dataset.kbBound = '1';
      el.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          el.click();
        }
      });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhance);
  } else {
    enhance();
  }
  const mo = new MutationObserver(() => enhance());
  mo.observe(document.documentElement, { childList: true, subtree: true });
})();
