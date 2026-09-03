// Función propia de Lucas Katz: Contador de Power-Ups con Reset y Feedback
const botonLike = document.getElementById('btnLikeLucas');
const botonReset = document.getElementById('btnResetLucas');
const textoContador = document.getElementById('contadorLikes');
const mensajeFeedback = document.getElementById('mensajePowerUp');

if (botonLike && textoContador) {
    // Cargar puntos guardados o arrancar en 0
    let puntos = localStorage.getItem('powerUpsLucas') || 0;
    textoContador.textContent = 'Power-Ups recibidos: ' + puntos;

    // Botón para sumar Power-Up
    botonLike.addEventListener('click', () => {
        puntos++;
        localStorage.setItem('powerUpsLucas', puntos);
        textoContador.textContent = 'Power-Ups recibidos: ' + puntos;

        if (mensajeFeedback) {
            mensajeFeedback.textContent = '⚡ +1 POWER UP!';
            mensajeFeedback.classList.add('visible');

            setTimeout(() => {
                mensajeFeedback.classList.remove('visible');
            }, 800);
        }

        if (typeof playCoinSound === 'function') {
            playCoinSound();
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
                }, 800);
            }
        });
    }
}