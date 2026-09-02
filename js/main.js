/* ==========================================================
   1. MENU RESPONSIVE (Global)
   ========================================================== */
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}

/* ==========================================================
   2. MOTOR DE AUDIO 8-BIT (Web Audio API - Global)
   ========================================================== */
let audioCtx = null;
let soundEnabled = false;

const soundToggle = document.getElementById('soundToggle');

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playBeep(freq = 440, type = 'square', duration = 0.08) {
    if (!soundEnabled || !audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
}

function playCoinSound() {
    if (!soundEnabled || !audioCtx) return;
    playBeep(987.77, 'square', 0.1);
    setTimeout(() => playBeep(1318.51, 'square', 0.2), 100);
}

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

// Bip retro al pasar el mouse por botones y enlaces
document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        playBeep(300, 'triangle', 0.03);
    });
});

/* ==========================================================
   3. RULETA ARCADE (Solo se activa si está en la portada)
   ========================================================== */
const btnRandom = document.getElementById('btnRandomPlayer');
const statusText = document.getElementById('selectionStatus');
const cards = document.querySelectorAll('.team-grid .card');

if (btnRandom && cards.length > 0) {
    btnRandom.addEventListener('click', () => {
        initAudio();
        btnRandom.disabled = true;
        if (statusText) statusText.textContent = '> RANDOMIZING CHARACTER...';

        cards.forEach(c => c.classList.remove('selected-arcade'));

        let currentIndex = 0;
        let laps = 0;
        const totalLaps = 16 + Math.floor(Math.random() * 8);
        let speed = 80;

        function spin() {
            cards.forEach(c => c.classList.remove('selected-arcade'));
            cards[currentIndex].classList.add('selected-arcade');

            playBeep(450 + (currentIndex * 80), 'square', 0.05);

            currentIndex = (currentIndex + 1) % cards.length;
            laps++;

            if (laps < totalLaps) {
                if (laps > totalLaps - 5) speed += 60;
                setTimeout(spin, speed);
            } else {
                const winnerCard = document.querySelector('.card.selected-arcade');
                const winnerName = winnerCard ? winnerCard.querySelector('h3').textContent : 'PLAYER';
                if (statusText) statusText.textContent = `> SELECTED: ${winnerName.toUpperCase()}! READY!`;
                playCoinSound();
                btnRandom.disabled = false;
            }
        }

        spin();
    });
}

/* ==========================================================
   4. INTERACCIÓN PARA PERFILES INDIVIDUALES (Global)
   ========================================================== */
// Efecto de foco y sonido al interactuar con las tarjetas de favoritos en cualquier perfil
document.querySelectorAll('.fav-card').forEach(card => {
    card.addEventListener('click', () => {
        playBeep(600, 'sine', 0.05);
    });
});