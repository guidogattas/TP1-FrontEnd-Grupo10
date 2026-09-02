// Función para recomendar una película o disco al azar

const botonRecomendar = document.getElementById('btnRecomendar');
const textoResultado = document.getElementById('textoRecomendacion');
const tarjetas = document.querySelectorAll('.fav-card');

if (botonRecomendar) {
  botonRecomendar.addEventListener('click', () => {
    // Le quitamos la clase destacada a todas las tarjetas
    tarjetas.forEach(tarjeta => {
      tarjeta.classList.remove('destacado');
    });

    // Elegimos una tarjeta al azar
    const numeroAzar = Math.floor(Math.random() * tarjetas.length);
    const elegida = tarjetas[numeroAzar];

    // Le agregamos la clase para resaltarla
    elegida.classList.add('destacado');

    // Leemos el título del h3 y lo mostramos en el mensaje
    const titulo = elegida.querySelector('h3').textContent;
    textoResultado.textContent = 'Te recomiendo: ' + titulo;
  });
}