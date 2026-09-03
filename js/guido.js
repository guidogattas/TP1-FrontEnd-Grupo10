// Función recomendador Arcade al azar con efecto ruleta

document.addEventListener('DOMContentLoaded', () => {
  const btnRecomendar = document.getElementById('btnRecomendar');
  const textoRecomendacion = document.getElementById('textoRecomendacion');
  const tarjetas = Array.from(document.querySelectorAll('.favorites-grid .fav-card'));

  if (!btnRecomendar || !textoRecomendacion || tarjetas.length === 0) return;

  btnRecomendar.addEventListener('click', () => {

    // Evitar clics múltiples mientras gira la selección

    btnRecomendar.disabled = true;
    textoRecomendacion.textContent = 'SELECCIONANDO...';
    textoRecomendacion.style.color = 'var(--neon-cyan)';

    // Limpiar destacados previos
    tarjetas.forEach(t => t.classList.remove('destacado'));

    let vueltas = 0;
    const totalSaltos = 14 + Math.floor(Math.random() * 6); // Entre 14 y 20 saltos antes de frenar
    let indiceActual = -1;
    let velocidad = 70; // Milisegundos entre cada salto inicial

    function animarRuleta() {
      // Sacamos el destacado de la tarjeta anterior
      if (indiceActual >= 0) {
        tarjetas[indiceActual].classList.remove('destacado');
      }

      // Pasamos a la siguiente tarjeta en ciclo
      indiceActual = (indiceActual + 1) % tarjetas.length;
      tarjetas[indiceActual].classList.add('destacado');

      // Si el sistema global de sonido está activo (el SFX), suena el tick
      if (typeof playBeepSound === 'function') {
        playBeepSound();
      }

      vueltas++;

      // Va frenando de a poco hacia el final
      if (vueltas > totalSaltos - 6) {
        velocidad += 45;
      }

      if (vueltas < totalSaltos) {
        setTimeout(animarRuleta, velocidad);
      } else {

        // Frenó en la tarjeta definitiva
        const tituloElegido = tarjetas[indiceActual].querySelector('h3')?.textContent || 'Recomendado';
        textoRecomendacion.textContent = `TE RECOMIENDO: "${tituloElegido.toUpperCase()}"!`;
        textoRecomendacion.style.color = 'var(--neon-yellow)';

        // Scroll suave hacia la tarjeta si está fuera de pantalla
        tarjetas[indiceActual].scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Sonido de confirmación final
        if (typeof playCoinSound === 'function') {
          playCoinSound();
        }

        btnRecomendar.disabled = false;
      }
    }

    animarRuleta();
  });
});