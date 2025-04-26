
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-casa');
  const nome = document.getElementById('nome');
  const luogo = document.getElementById('luogo');
  const foto = document.getElementById('foto');
  const prezzo = document.getElementById('prezzo');
  const areaAnnunci = document.querySelector('.annunci');

  if (form && areaAnnunci) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const div = document.createElement('div');
      div.className = 'casa';
      div.innerHTML = `
        <img src="${foto.value}" alt="${nome.value}">
        <h3>${nome.value}</h3>
        <p>Luogo: ${luogo.value}</p>
        <p><strong>Prezzo:</strong> €${parseFloat(prezzo.value).toLocaleString()}</p>
      `;

      areaAnnunci.appendChild(div);
      form.reset();
    });
  }
});