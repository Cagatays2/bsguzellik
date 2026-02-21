/* ── COUNT-UP STATS ── */
(function () {
  const DURATION = 1800; /* ms — all counters share this so they end together */

  function easeOut(t) { return 1 - Math.pow(1 - t, 4); }

  function animateCounter(el) {
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || '';
    const start  = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / DURATION, 1);
      el.textContent = Math.round(easeOut(progress) * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* Fire once the hero stats have faded in (~600ms after load) */
  setTimeout(() => {
    document.querySelectorAll('.stat-n[data-count]').forEach(animateCounter);
  }, 600);
})();
