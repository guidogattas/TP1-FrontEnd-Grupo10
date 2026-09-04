# TP1 Front End - Grupo 10 (Retro Arcade)

Trabajo Práctico Grupal Nº 1 para la materia Desarrollo de Sistemas Web (Front-End 2026) - IFTS 29.

Sitio web responsivo inspirado en la temática de los salones arcade de los años 80 y 90. Presenta a los integrantes del equipo de desarrollo mediante fichas de jugador, navegación interna fluida, efectos de sonido retro e interacciones dinámicas individuales construidas en JavaScript vanilla.

---

## Deploy

El sitio se encuentra publicado y accesible en producción a través de Vercel:  
https://tp-1-front-end-grupo10.vercel.app/index.html

---

## Integrantes

* Guido Gattás - https://github.com/guidogattas (perfil: guido-gattas.html)
* Lucas Katz - https://github.com/LucasKatz (perfil: lucas-katz.html)
* Belén Gatto - https://github.com/belengatto (perfil: belen-gatto.html)
* Gonzalo Santini - https://github.com/gonzalo-333 (perfil: gonzalo-santini.html)

---

## Tecnologías utilizadas

* HTML5: Estructura semántica general (header, nav, main, section, article, footer) y metadatos accesibles.
* CSS3: Variables personalizadas (:root), Flexbox, CSS Grid, animaciones con @keyframes y diseño responsive adaptado a los breakpoints obligatorios de 1200px, 900px y 400px.
* JavaScript (Vanilla): Manipulación directa del DOM, control de flujo con setInterval y setTimeout, almacenamiento en localStorage y reproducción de audio vía Audio().
* Git y GitHub: Control de versiones colaborativo y administración del repositorio grupal mediante ramas de trabajo.
* Vercel: Despliegue continuo en la nube y hosting de los archivos estáticos.
* Google Fonts: Tipografías especializadas para la ambientación arcade y terminal.

---

## Estructura de archivos y carpetas

## Estructura de archivos y carpetas

```text
TP1-FrontEnd-Grupo10/
├── index.html              # Portada principal con ruleta arcade y cards del equipo
├── bitacora.html           # Registro cronologico del avance y reuniones
├── guido-gattas.html       # Perfil individual: Guido Gattas
├── lucas-katz.html         # Perfil individual: Lucas Katz
├── belen-gatto.html        # Perfil individual: Belen Gatto
├── gonzalo-santini.html    # Perfil individual: Gonzalo Santini
├── css/
│   └── styles.css          # Hoja de estilos compartida, variables y media queries
├── js/
│   ├── main.js             # Menu hamburguesa, control general de SFX y ruleta de portada
│   ├── guido.js            # Recomendador aleatorio de peliculas y musica
│   ├── lucas.js            # Contador de power-ups, combos y persistencia
│   ├── belen.js            # Animacion interactiva de Pac-Man cruzando la pantalla
│   └── gonzalo.js          # Radar detector de perimetro zombie con audio
├── img/                    # Imagenes de perfiles, afiches de peliculas y discos
└── sounds/                 # Efectos de audio en formato mp3
```
---

## Guía de estilos

### Paleta de colores y códigos hexadecimales
* Fondo principal (--bg-color): #0d0221
* Fondo de tarjetas (--card-bg): #190a35
* Hover de tarjetas (--card-hover): #260f50
* Resalte neón rosa (--neon-pink): #ff007f
* Resalte neón cyan (--neon-cyan): #00f0ff
* Resalte neón amarillo (--neon-yellow): #ffe600
* Resalte neón verde (--neon-green): #00ff66
* Texto base (--text-color): #f3e8ff
* Texto atenuado (--text-muted): #b9a2dc

### Tipografías (Google Fonts)
* Titulares principales, botones y detalles arcade: 'Press Start 2P', monospace
* Párrafos, metadatos, descripciones y enlaces: 'VT323', monospace

### Criterios visuales y diseño
* Interfaz de contraste alto basada en estética cyberpunk y gabinetes arcade CRT.
* Bordes luminosos mediante sombras neón (box-shadow) para indicar interactividad y foco.
* Desplazamientos y animaciones suaves para evitar saltos bruscos durante la navegación.

---

## Funciones JavaScript

### 1. Portada (js/main.js)
* Ruleta aleatoria de personajes: Al accionar el botón principal, un temporizador recorre las tarjetas del equipo alternando clases de selección visual. Al detenerse en la tarjeta ganadora, aplica una clase de resalte, desplaza suavemente la vista del navegador hacia el centro del elemento mediante scrollIntoView, reproduce el efecto sonoro de Cowabunga si el audio está habilitado y redirige tras dos segundos hacia el perfil individual correspondiente.
* Interruptor global de SFX: Permite activar o desactivar los efectos sonoros de todo el sitio alternando el estado visual del botón en el header.
* Menú colapsable: Controla el despliegue del menú de navegación en pantallas intermedias y teléfonos móviles.

### 2. Perfil Guido Gattás (js/guido.js)
* Selector aleatorio de recomendaciones: Aplica un ciclo de sorteo tipo ruleta sobre su grilla de películas y discos. Tras frenar gradualmente, centra la vista en la recomendación elegida, destaca la tarjeta y genera un enlace contextual directo hacia la ficha de IMDb o álbum de Spotify.

### 3. Perfil Lucas Katz (js/lucas.js)
* Contador de Power-Ups con rachas: Permite acumular puntos que persisten en el navegador utilizando localStorage. Reproduce un efecto sonoro arcade de moneda en cada clic y arroja avisos de combo cada cinco y diez puntos. Cuenta además con un botón de reinicio a cero.

### 4. Perfil Belén Gatto (js/belen.js)
* Animación de Pac-Man: Al presionar el botón interactivo, inyecta elementos temporales en el DOM que cruzan la pantalla de forma animada mediante CSS y JavaScript, coordinados con el sonido característico del juego.

### 5. Perfil Gonzalo Santini (js/gonzalo.js)
* Radar detector de amenazas: Simula un escaneo ambiental por sonar acompañado de un efecto sonoro de radar. Al concluir el intervalo de búsqueda, genera un diagnóstico de nivel de amenaza y estado de perímetro aleatorio.

---

## Evolución futura del proyecto

Para las siguientes etapas de la cursada y trabajos integradores, el proyecto podría expandirse mediante:
* Migración de componentes hacia librerías modernas como React o Next.js para optimizar el renderizado y reutilizar módulos de tarjetas.
* Conexión con APIs públicas REST (Spotify Web API y OMDb API) para cargar metadatos, tráilers y portadas de discos en tiempo real.
* Integración con una base de datos y backend centralizado para unificar el contador de power-ups entre todos los usuarios y permitir un libro de visitas o tabla de puntuaciones más altas (High Scores).

---

## Uso de Inteligencia Artificial

* Herramienta y modelo: Google Gemini Pro (Modelo Gemini 3.8 Flash - Asistencia General).
* Plan utilizado: Plan Pro.
* Experiencia previa: El equipo poseía conocimientos previos en el uso de modelos de lenguaje para resolver consultas puntuales de lógica y sintaxis.
* Alcance de la asistencia:
  * Consultas sobre optimización de estructuras de control y manejo de eventos en JavaScript (coordinación de setTimeout, scrollIntoView y reproducción de audio con control de errores).
  * Revisión de la sintaxis de media queries para asegurar el cumplimiento estricto de los breakpoints exigidos (1200px, 900px y 400px).
  * Apoyo en la formulación semántica de estructuras HTML y chequeo de accesibilidad básica.
* Imágenes y recursos gráficos: Los afiches de películas y tapas de discos fueron recopilados de sitios web oficiales y bases de datos públicas de música y cine. Generamos los avatares con IA de ChatGPT y Gemini.
* Criterio de revisión humana: Todas las respuestas e implementaciones sugeridas fueron evaluadas, probadas localmente, depuradas y adaptadas por los integrantes del equipo para asegurar la coherencia del diseño, la comprensión total del código y el cumplimiento de las consignas de la materia.

---

## Cómo correrlo en local

No se requiere instalación de dependencias ni gestores de paquetes:

1. Clonar el repositorio:
   git clone https://github.com/guidogattas/TP1-FrontEnd-Grupo10.git
2. Abrir la carpeta del proyecto.
3. Ejecutar el archivo index.html en cualquier navegador web o abrirlo mediante la extensión Live Server de VS Code.
