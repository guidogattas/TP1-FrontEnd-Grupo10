/* Manejo de menu responsive */
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}

/* ==========================================================
   MOTOR DE AUDIO 8-BIT (Web Audio API)
   ========================================================== */
let audioCtx = null;
let soundEnabled = false;

const soundToggle = document.getElementById('soundToggle');

// Inicializar contexto de audio con un clic del usuario
function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// Generador de sonidos arcade
function playBeep(freq = 440, type = 'square', duration = 0.08) {
    if (!soundEnabled || !audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
}

// Sonido de victoria / moneda seleccionada
function playCoinSound() {
    if (!soundEnabled || !audioCtx) return;
    playBeep(987.77, 'square', 0.1);
    setTimeout(() => playBeep(1318.51, 'square', 0.25), 100);
}

// Alternar estado de sonido
if (soundToggle) {
    soundToggle.addEventListener('click', () => {
        initAudio();
        soundEnabled = !soundEnabled;

        if (soundEnabled) {
            soundToggle.textContent = '🔊 SFX: ON';
            soundToggle.classList.add('active');
            playCoinSound();
        } else {
            soundToggle.textContent = '🔇 SFX: OFF';
            soundToggle.classList.remove('active');
        }
    });
}

// Sonido de hover en botones y enlaces
document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        playBeep(300, 'triangle', 0.04);
    });
});

/* ==========================================================
   INTERACCIÓN DINÁMICA: RULETA ARCADE (RANDOM PICK)
   ========================================================== */
const btnRandom = document.getElementById('btnRandomPlayer');
const statusText = document.getElementById('selectionStatus');
const cards = document.querySelectorAll('.team-grid .card');

if (btnRandom && cards.length > 0) {
    btnRandom.addEventListener('click', () => {
        initAudio();
        btnRandom.disabled = true;
        statusText.textContent = '> RANDOMIZING CHARACTER...';

        // Limpiar selección previa
        cards.forEach(c => c.classList.remove('selected-arcade'));

        let currentIndex = 0;
        let laps = 0;
        const totalLaps = 20 + Math.floor(Math.random() * 8); // Vueltas totales
        let speed = 80; // Velocidad en ms

        function spin() {
            cards.forEach(c => c.classList.remove('selected-arcade'));
            cards[currentIndex].classList.add('selected-arcade');

            playBeep(450 + (currentIndex * 80), 'square', 0.05);

            currentIndex = (currentIndex + 1) % cards.length;
            laps++;

            if (laps < totalLaps) {

                // Va frenando hacia el final
                
                if (laps > totalLaps - 6) speed += 60;
                setTimeout(spin, speed);
            } else {

                // Jugador elegido final

                const winnerCard = document.querySelector('.card.selected-arcade');
                const winnerName = winnerCard.querySelector('h3').textContent;
                statusText.textContent = `> SELECTED: ${winnerName.toUpperCase()}! READY!`;
                playCoinSound();
                btnRandom.disabled = false;
            }
        }

        spin();
    });
}