document.addEventListener('DOMContentLoaded', () => {
    const btnPacman = document.getElementById('btnPacman');
    const soundToggle = document.getElementById('soundToggle');

    // Cargamos el archivo de sonido de PacMan
    const sonidoPacman = new Audio('sounds/pacman.mp3');

    if (btnPacman) {
        btnPacman.addEventListener('click', () => {
            // Deshabilitamos el botón durante la animación
            btnPacman.disabled = true;

            // Verificamos si el SFX está encendido (por clase active o texto "ON")
            const sfxActivado = soundToggle && (
                soundToggle.classList.contains('active') ||
                soundToggle.textContent.includes('ON')
            );

            // Solo reproduce si el sonido está en ON
            if (sfxActivado) {
                sonidoPacman.loop = true;
                sonidoPacman.currentTime = 0;
                sonidoPacman.play();
            }

            // Crear el elemento de Pacman persiguiendo un fantasma
            const runner = document.createElement('div');
            runner.className = 'pacman-runner';
            runner.textContent = 'ᗧ ··· ᗣ';

            document.body.appendChild(runner);

            // Eliminar el elemento y cortar el sonido al finalizar (4 segundos)
            setTimeout(() => {
                runner.remove();

                // Frenar el audio en seco si estaba sonando
                sonidoPacman.loop = false;
                sonidoPacman.pause();
                sonidoPacman.currentTime = 0;

                btnPacman.disabled = false;
            }, 4000);
        });
    }
});