/* ── SCROLL REVEAL ── */
const revEls = document.querySelectorAll('.rv');
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('on');
      revObs.unobserve(e.target);
    }
  });
}, { threshold: .1, rootMargin: '0px 0px -32px 0px' });

revEls.forEach(el => revObs.observe(el));

/* Hero elements reveal immediately on load */
document.querySelectorAll('.hero .rv').forEach((el, i) =>
  setTimeout(() => el.classList.add('on'), 180 + i * 90)
);
