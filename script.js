const FECHA_INICIO = new Date("2023-05-20T00:00:00"); // Cambia tu fecha aquí
const FOTOS = [
    "img/WhatsApp Image 2026-02-14 at 8.44.24 PM (1).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.24 PM (2).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.24 PM (3).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.24 PM (4).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.24 PM (5).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.24 PM (6).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.24 PM (7).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.24 PM (8).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.24 PM (9).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.24 PM.jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.25 PM (1).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.25 PM (10).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.25 PM (11).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.25 PM (2).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.25 PM (3).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.25 PM (4).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.25 PM (5).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.25 PM (6).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.25 PM (7).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.25 PM (8).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.25 PM (9).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.25 PM.jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.26 PM (1).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.26 PM (2).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.26 PM (3).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.26 PM (4).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.26 PM (5).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.26 PM (6).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.26 PM (7).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.26 PM.jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.46.09 PM (1).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.46.09 PM (2).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.46.09 PM (3).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.46.09 PM (4).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.46.09 PM (5).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.46.09 PM (6).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.46.09 PM (7).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.46.09 PM.jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.46.10 PM (1).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.46.10 PM (10).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.46.10 PM (11).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.46.10 PM (2).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.46.10 PM (3).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.46.10 PM (4).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.46.10 PM (5).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.46.10 PM (6).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.46.10 PM (7).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.46.10 PM (8).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.46.10 PM (9).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.46.10 PM.jpeg"
];

function iniciar() {
    document.querySelector('.tapa').style.transform = "rotateX(180deg)";
    document.getElementById('musica').play().catch(() => { });

    setTimeout(() => {
        document.getElementById('pantalla-inicio').style.opacity = "0";
        setTimeout(() => {
            document.getElementById('pantalla-inicio').style.display = "none";
            const esc = document.getElementById('escenario');
            esc.style.display = "block";
            setTimeout(() => esc.style.opacity = "1", 100);
            generarFollajeRealista();
        }, 1000);
    }, 800);
}

function generarFollajeRealista() {
    const follaje = document.getElementById('follaje');

    // Coordenadas aproximadas de las puntas de las ramas y miniramas
    const puntosRamas = [
        { x: 440, y: 260 }, { x: 340, y: 240 }, { x: 60, y: 270 },
        { x: 160, y: 250 }, { x: 170, y: 110 }, { x: 330, y: 110 },
        { x: 250, y: 150 }, { x: 380, y: 320 }, { x: 120, y: 330 }
    ];

    let hojasCreadas = 0;
    const totalHojas = 400; // Árbol bien frondoso

    function crearHoja() {
        if (hojasCreadas >= totalHojas) return;

        const hoja = document.createElement('div');
        hoja.className = 'corazon-hoja';

        // Elegir una rama al azar y dispersar hojas alrededor de su punta
        const ramaAleatoria = puntosRamas[Math.floor(Math.random() * puntosRamas.length)];
        const dispersion = 60; // Qué tan lejos de la rama están

        const x = ramaAleatoria.x + (Math.random() - 0.5) * dispersion * 2;
        const y = ramaAleatoria.y + (Math.random() - 0.5) * dispersion * 1.5;

        hoja.style.left = `${x}px`;
        hoja.style.top = `${y}px`;

        // Variación de tamaño y rotación
        const scale = Math.random() * 0.6 + 0.4;
        hoja.style.transform = `rotate(${Math.random() * 360}deg) scale(${scale})`;

        follaje.appendChild(hoja);
        hojasCreadas++;
        setTimeout(crearHoja, 10); // Crea una hoja cada 10ms para efecto visual
    }

    crearHoja();

    // Transición a la carta
    setTimeout(() => {
        document.getElementById('arbol-contenedor').classList.add('arbol-izquierda');
        setTimeout(() => {
            document.getElementById('mensaje-box').classList.add('mensaje-visible');
            escribirMensaje();
        }, 1500);
    }, 5000);
}

function escribirMensaje() {
    const texto = "Cada rama de este árbol representa un momento a tu lado. Gracias por florecer conmigo todos los días. Te amo infinitamente.";
    let i = 0;
    const p = document.getElementById('texto-carta');
    function tipear() {
        if (i < texto.length) {
            p.innerHTML += texto.charAt(i);
            i++;
            setTimeout(tipear, 40);
        }
    }
    tipear();
}

// Reloj
setInterval(() => {
    const ahora = new Date();
    const diff = ahora - FECHA_INICIO;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    document.getElementById("timer").innerText = `${d}d ${h}h ${m}m ${s}s`;
}, 1000);

function mostrarGaleria() {
    const gal = document.getElementById('galeria-final');
    gal.style.display = "flex";
    let idx = 0;
    const img = document.getElementById('foto-actual');
    img.src = FOTOS[0];
    setInterval(() => {
        idx = (idx + 1) % FOTOS.length;
        img.src = FOTOS[idx];
    }, 3000);
}