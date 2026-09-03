# TP1 Front End · Grupo 10 (Retro Arcade)

Trabajo Práctico Grupal Nº 1 para la materia **Desarrollo de Sistemas Web (Front-End 2026)** - IFTS 29.

Desarrollamos un sitio web responsivo inspirado en la onda de los salones arcade de los 80s y 90s. Usamos una base oscura con acentos neón en fucsia, cyan y amarillo, fuentes pixeladas y efectos de sonido clásicos de videojuegos retro.

---

##  Deploy

El sitio está subido a Vercel para probarlo directamente en vivo:  
 **https://tp-1-front-end-grupo10.vercel.app/index.html**

---

##  Integrantes

 **Guido Gattás** (`guido-gattas.html`)
 **Lucas Katz** (`lucas-katz.html`)
 **Belén Gatto** (`belen-gatto.html`)
 **Gonzalo Santini** (`gonzalo-santini.html`)

---

##  Tecnologías que usamos

**HTML5:** Estructura semántica en todas las vistas (`header`, `nav`, `main`, `section`, `article`, `footer`).
**CSS3:** Variables globales para colores y fuentes (`:root`), Flexbox, CSS Grid para las grillas de películas/discos, media queries para que sea responsive y animaciones con `@keyframes`.
**JavaScript (Vanilla):** Manejo del DOM, eventos de click, temporizadores con `setInterval` y `setTimeout`, y reproducción de efectos de sonido con `Audio()`.
**Git & GitHub:** Trabajo en equipo usando ramas por feature/perfil antes de hacer merge a `main`.

---

## Organización de carpetas

├── index.html              # Portada principal con la ruleta y las cards del equipo
├── bitacora.html           # Registro de reuniones y avance paso a paso
├── guido-gattas.html       # Perfil individual
├── lucas-katz.html         # Perfil individual
├── belen-gatto.html        # Perfil individual
├── gonzalo-santini.html    # Perfil individual
├── css/
│   └── styles.css          # Estilos compartidos, reset, variables y componentes
├── js/
│   ├── main.js             # Menú hamburguesa, botón SFX global y la ruleta del index
│   ├── guido.js            # Recomendador aleatorio de qué ver/escuchar
│   ├── lucas.js            # Contador interactivo de Power-Ups
│   ├── belen.js            # Animación de Pac-Man cruzando la pantalla
│   └── gonzalo.js          # Radar / escaneo de perímetro zombie
├── img/                    # Fotos de perfil, pósters de cine y tapas de discos
└── sounds/                 # Archivos de audio mp3 (Cowabunga, Pac-Man, Radar)



Funcionalidades del sitio
Ruleta de personajes (Index): Al tocar el botón, recorre las tarjetas de los integrantes al azar simulando una selección arcade, reproduce el "Cowabunga!" de las Tortugas Ninja y redirige al perfil que tocó.

Control de sonido (SFX ON/OFF): Botón en la barra de navegación que permite silenciar o activar todos los sonidos de la web en cualquier momento.

Páginas individuales: Cada integrante tiene su perfil con bio, ciudad, links a GitHub, habilidades técnicas, y sus películas/discos favoritos enlazados a IMDb, Spotify o YouTube.

Interacción propia por integrante:

Guido: Un recomendador al azar que elige una peli o disco de su lista para ver/escuchar hoy.

Lucas: Un contador de monedas/power-ups con botones para sumar o resetear.

Belén: Animación donde Pac-Man y un fantasma cruzan la pantalla acompañados por el sonido del juego.

Gonzalo: Detector/radar zombie con simulación de escaneo, sonido de radar y reportes aleatorios de amenaza.

Bitácora: Registro ordenado por fecha con las reuniones de Meet, decisiones de diseño, división del trabajo y cómo se fue armando el código.

---

##  Uso de Inteligencia Artificial

Durante el desarrollo del proyecto utilizamos la asistencia de **Google Gemini PRO (modelo 3.8 Flash)** como herramienta de soporte para:
* Refactorización y optimización de funciones en JavaScript (manejo de temporizadores, eventos y control seguro de audio).
* Consulta de sintaxis para animaciones CSS y corrección de bugs en la consola.
* Buenas prácticas de accesibilidad y estructuración semántica del HTML.

Todo el código sugerido fue analizado, adaptado e integrado manualmente por el equipo para mantener la coherencia estética y funcional del sitio.

**Cómo correrlo en local
No hace falta instalar nada ni usar npm:

Clonar el repo:

git clone [https://github.com/guidogattas/TP1-FrontEnd-Grupo10](https://github.com/guidogattas/TP1-FrontEnd-Grupo10)
Entrar a la carpeta y abrir el archivo index.html en el navegador (o usar la extensión Live Server de VS Code).