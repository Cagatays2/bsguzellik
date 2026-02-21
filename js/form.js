/* ── CONTACT FORM ── */
function submitForm(e) {
  e.preventDefault();
  document.getElementById('form').style.display = 'none';
  document.getElementById('fOk').classList.add('show');
}
