// js/gonzalo.js

function iniciarRadarZombie() {
    const botonZombie = document.getElementById('btnZombie');
    const textoZombie = document.getElementById('textoZombie');
    const botonSonido = document.getElementById('soundToggle');

    if (!botonZombie || !textoZombie) return;

    const reportesZombie = [
        '⚠️ ¡ALERTA! Horda detectada a 50 metros. Buscá refugio.',
        '☣️ Infección en el sector: 78%. Estado: ¡CORRÉ!',
        '🛡️ Zona despejada por ahora. Nivel de amenaza: BAJO.',
        '🧠 Señal biológica detectada... Parecen infectados lentos.',
        '💀 Supervivencia estimada: 12%. No hagas ruido.'
    ];

    botonZombie.addEventListener('click', () => {
        // 1. Bloqueo visual del botón
        botonZombie.disabled = true;
        textoZombie.textContent = '☣️ Escaneando señales biológicas...';

        // 2. Audio seguro (creado al momento del clic para evitar bloqueos del navegador)
        const sfxActivo = botonSonido && (
            botonSonido.classList.contains('active') ||
            botonSonido.textContent.includes('ON')
        );

        if (sfxActivo) {
            const audio = new Audio('sounds/radar-scan.mp3');
            audio.play().catch(() => { });
        }

        // 3. Resultado tras 1.5 segundos
        setTimeout(() => {
            const azar = Math.floor(Math.random() * reportesZombie.length);
            textoZombie.textContent = reportesZombie[azar];
            botonZombie.disabled = false;
        }, 1500);
    });
}

// Se ejecuta esté o no cargado el DOM completamente
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarRadarZombie);
} else {
    iniciarRadarZombie();
}