// js/guido.js - Recomendador Arcade al azar con efecto ruleta visual y enlace directo

document.addEventListener('DOMContentLoaded', () => {
  const btnRecomendar = document.getElementById('btnRecomendar');
  const textoRecomendacion = document.getElementById('textoRecomendacion');
  const tarjetas = Array.from(document.querySelectorAll('.favorites-grid .fav-card'));

  if (!btnRecomendar || !textoRecomendacion || tarjetas.length === 0) return;

  btnRecomendar.addEventListener('click', () => {
    // Evitar clics múltiples mientras gira la selección
    btnRecomendar.disabled = true;
    textoRecomendacion.textContent = '🎰 PROCESANDO SELECCIÓN ARCADE...';
    textoRecomendacion.style.color = 'var(--neon-cyan)';

    // Limpiar destacados y estilos de giros anteriores
    tarjetas.forEach(t => {
      t.classList.remove('destacado');
      t.style.transform = '';
      t.style.boxShadow = '';
    });

    let vueltas = 0;
    const totalSaltos = 16 + Math.floor(Math.random() * 8); // Entre 16 y 24 saltos antes de frenar
    let indiceActual = -1;
    let velocidad = 65; // Milisegundos iniciales

    function animarRuleta() {
      // Remover resalte previo
      if (indiceActual >= 0) {
        tarjetas[indiceActual].classList.remove('destacado');
        tarjetas[indiceActual].style.transform = '';
        tarjetas[indiceActual].style.boxShadow = '';
      }

      // Siguiente tarjeta en ciclo
      indiceActual = (indiceActual + 1) % tarjetas.length;
      const tarjetaActual = tarjetas[indiceActual];

      tarjetaActual.classList.add('destacado');
      tarjetaActual.style.transform = 'scale(1.05)';
      tarjetaActual.style.boxShadow = '0 0 15px var(--neon-cyan)';

      vueltas++;

      // Va frenando de forma progresiva hacia el final
      if (vueltas > totalSaltos - 6) {
        velocidad += 50;
      }

      if (vueltas < totalSaltos) {
        setTimeout(animarRuleta, velocidad);
      } else {
        // --- PREMIO FINAL ---
        const tarjetaGanadora = tarjetas[indiceActual];
        const titulo = tarjetaGanadora.querySelector('h3')?.textContent || 'Recomendado';
        const link = tarjetaGanadora.querySelector('a')?.href || '#';
        const esPelicula = tarjetaGanadora.querySelector('.poster-movie') !== null;

        // Resalte de victoria en la tarjeta ganadora
        tarjetaGanadora.style.transform = 'scale(1.08)';
        tarjetaGanadora.style.boxShadow = '0 0 25px var(--neon-yellow), 0 0 10px var(--neon-pink)';
        tarjetaGanadora.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Texto contextual con botón/enlace directo al medio
        const icono = esPelicula ? '🎬' : '🎧';
        const accion = esPelicula ? 'HOY MIRATE:' : 'HOY ESCUCHATE:';
        const textoLink = esPelicula ? 'ABRIR EN IMDB ↗' : 'ESCUCHAR ÁLBUM ↗';

        textoRecomendacion.innerHTML = `
          ${icono} ${accion} <strong>"${titulo.toUpperCase()}"</strong> 
          <a href="${link}" target="_blank" rel="noopener noreferrer" 
             style="color: var(--neon-yellow); text-decoration: underline; margin-left: 8px; display: inline-block;">
             [${textoLink}]
          </a>
        `;
        textoRecomendacion.style.color = 'var(--neon-green)';

        btnRecomendar.disabled = false;
      }
    }

    animarRuleta();
  });
});