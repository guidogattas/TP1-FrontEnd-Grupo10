// 1. MENÚ RESPONSIVE (MOBILE)
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}

// 2. BOTÓN SFX (ON / OFF)
const botonSonido = document.getElementById('soundToggle');

if (botonSonido) {
    botonSonido.addEventListener('click', () => {
        botonSonido.classList.toggle('active');

        // Cambiamos el texto entre ON y OFF
        if (botonSonido.classList.contains('active')) {
            botonSonido.textContent = '🔊 SFX: ON';
        } else {
            botonSonido.textContent = '🔊 SFX: OFF';
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
        // Desactivamos el botón mientras gira
        botonRuleta.disabled = true;
        if (textoEstado) textoEstado.textContent = 'Eligiendo personaje...';

        // Sacamos clases de giros anteriores
        tarjetas.forEach(t => t.classList.remove('selected-arcade', 'arcade-winner'));

        let vueltas = 0;
        let elegido = 0;

        // Efecto ruleta simple con setInterval
        const timer = setInterval(() => {
            tarjetas.forEach(t => t.classList.remove('selected-arcade'));

            elegido = Math.floor(Math.random() * tarjetas.length);
            tarjetas[elegido].classList.add('selected-arcade');

            vueltas++;

            // Frena a las 12 vueltas
            if (vueltas >= 12) {
                clearInterval(timer);

                const tarjetaFinal = tarjetas[elegido];
                tarjetaFinal.classList.remove('selected-arcade');
                tarjetaFinal.classList.add('arcade-winner');

                if (textoEstado) textoEstado.textContent = '¡COWABUNGA!';

                // Si el botón dice ON, reproduce el audio
                if (botonSonido && botonSonido.textContent.includes('ON')) {
                    sonidoCowabunga.currentTime = 0;
                    sonidoCowabunga.play();
                }

                // Buscamos el link del perfil
                const link = tarjetaFinal.querySelector('.card-btn').href;

                // Espera 2 segundos para que suene entero el Cowabunga y redirige
                setTimeout(() => {
                    botonRuleta.disabled = false;
                    window.location.href = link;
                }, 2000);
            }
        }, 120);
    });
}