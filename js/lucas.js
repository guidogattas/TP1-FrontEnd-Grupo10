// js/lucas.js - Contador Arcade de Lucas Katz con Audio y Rachas

document.addEventListener('DOMContentLoaded', () => {
    const botonLike = document.getElementById('btnLikeLucas');
    const botonReset = document.getElementById('btnResetLucas');
    const textoContador = document.getElementById('contadorLikes');
    const mensajeFeedback = document.getElementById('mensajePowerUp');
    const botonSonido = document.getElementById('soundToggle');

    // Audio descargado
    const sonidoMoneda = new Audio('sounds/coin.mp3');

    if (botonLike && textoContador) {
        // Cargar puntos guardados o arrancar en 0
        let puntos = parseInt(localStorage.getItem('powerUpsLucas')) || 0;
        textoContador.textContent = 'Power-Ups recibidos: ' + puntos;

        // Botón para sumar Power-Up
        botonLike.addEventListener('click', () => {
            puntos++;
            localStorage.setItem('powerUpsLucas', puntos);
            textoContador.textContent = 'Power-Ups recibidos: ' + puntos;

            // Reproducir sonido si el SFX global está en ON
            const sfxActivo = botonSonido && (
                botonSonido.classList.contains('active') ||
                botonSonido.textContent.includes('ON')
            );

            if (sfxActivo) {
                try {
                    sonidoMoneda.currentTime = 0;
                    sonidoMoneda.play().catch(() => { });
                } catch (e) { }
            }

            // Feedback visual con combos cada ciertos puntos
            if (mensajeFeedback) {
                if (puntos % 10 === 0) {
                    mensajeFeedback.textContent = '🔥 ¡COMBO X10! ¡ON FIRE!';
                } else if (puntos % 5 === 0) {
                    mensajeFeedback.textContent = '⭐ ¡SUPER POWER UP!';
                } else {
                    mensajeFeedback.textContent = '⚡ +1 POWER UP!';
                }

                mensajeFeedback.classList.add('visible');
                setTimeout(() => {
                    mensajeFeedback.classList.remove('visible');
                }, 700);
            }
        });

        // Botón para resetear a 0
        if (botonReset) {
            botonReset.addEventListener('click', () => {
                puntos = 0;
                localStorage.setItem('powerUpsLucas', 0);
                textoContador.textContent = 'Power-Ups recibidos: 0';

                if (mensajeFeedback) {
                    mensajeFeedback.textContent = '↺ PUNTOS REINICIADOS';
                    mensajeFeedback.classList.add('visible');
                    setTimeout(() => {
                        mensajeFeedback.classList.remove('visible');
                    }, 700);
                }
            });
        }
    }
});