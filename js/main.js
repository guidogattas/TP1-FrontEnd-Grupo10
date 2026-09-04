// 1. MENU RESPONSIVE (Para mobile)
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}

// 2. BOTON SFX (ON / OFF)
const botonSonido = document.getElementById('soundToggle');

if (botonSonido) {
    botonSonido.addEventListener('click', () => {
        botonSonido.classList.toggle('active');

        if (botonSonido.classList.contains('active')) {
            botonSonido.textContent = 'SFX: ON';
        } else {
            botonSonido.textContent = 'SFX: OFF';
        }
    });
}

// 3. RULETA DE PERSONAJES AL AZAR
const botonRuleta = document.getElementById('btnArcadeRandom');
const tarjetas = document.querySelectorAll('.team-grid .card');
const textoEstado = document.querySelector('.selection-status');

// Sonido de Cowabunga
const sonidoCowabunga = new Audio('sounds/tmnt-turtles-in-time-ost-cowabunga.mp3');

if (botonRuleta) {
    botonRuleta.addEventListener('click', () => {
        botonRuleta.disabled = true;
        if (textoEstado) textoEstado.textContent = 'Eligiendo personaje...';

        tarjetas.forEach(t => t.classList.remove('selected-arcade', 'arcade-winner'));

        let vueltas = 0;
        let elegido = 0;

        const timer = setInterval(() => {
            tarjetas.forEach(t => t.classList.remove('selected-arcade'));

            elegido = Math.floor(Math.random() * tarjetas.length);
            tarjetas[elegido].classList.add('selected-arcade');

            vueltas++;

            if (vueltas >= 12) {
                clearInterval(timer);

                const tarjetaFinal = tarjetas[elegido];
                tarjetaFinal.classList.remove('selected-arcade');
                tarjetaFinal.classList.add('arcade-winner');

                // Desplaza la vista suavemente hasta la tarjeta elegida
                tarjetaFinal.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });

                if (textoEstado) textoEstado.textContent = 'COWABUNGA!';

                if (botonSonido && botonSonido.textContent.includes('ON')) {
                    sonidoCowabunga.currentTime = 0;
                    sonidoCowabunga.play().catch(() => {});
                }

                const link = tarjetaFinal.querySelector('.card-btn').href;

                // La pantalla va al elegido y después entra al link
                setTimeout(() => {
                    botonRuleta.disabled = false;
                    window.location.href = link;
                }, 1000);
            }
        }, 120);
    });
}