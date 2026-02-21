/* ── CONTACT FORM ── */
function submitForm(e) {
  e.preventDefault();

  const ad    = document.getElementById('f-ad').value.trim();
  const soyad = document.getElementById('f-soyad').value.trim();
  const tel   = document.getElementById('f-tel').value.trim();
  const hiz   = document.getElementById('f-hiz').value;
  const msg   = document.getElementById('f-msg').value.trim();

  const lines = [
    '🌸 Randevu Talebi',
    '',
    'Ad Soyad: ' + ad + ' ' + soyad,
    'Telefon: ' + tel,
    'Hizmet: ' + hiz,
  ];
  if (msg) lines.push('Mesaj: ' + msg);

  document.getElementById('form').style.display = 'none';
  document.getElementById('fOk').classList.add('show');

  window.open(
    'https://wa.me/9005303680893?text=' + encodeURIComponent(lines.join('\n')),
    '_blank'
  );
}
