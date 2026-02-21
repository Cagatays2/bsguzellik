/* ── NAV SCROLL ── */
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

/* ── MOBILE MENU ── */
const ham = document.getElementById('ham');
const mob = document.getElementById('mob');

ham.addEventListener('click', () => {
  ham.classList.toggle('open');
  mob.classList.toggle('open');
  document.body.style.overflow = mob.classList.contains('open') ? 'hidden' : '';
});

function closeMenu() {
  ham.classList.remove('open');
  mob.classList.remove('open');
  document.body.style.overflow = '';
}
