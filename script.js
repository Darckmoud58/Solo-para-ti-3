const FECHA_INICIO = new Date("2023-05-20T00:00:00");
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
    document.getElementById('musica').play().catch(() => {});
    
    setTimeout(() => {
        document.getElementById('pantalla-inicio').style.opacity = "0";
        setTimeout(() => {
            document.getElementById('pantalla-inicio').style.display = "none";
            document.getElementById('escenario').style.display = "block";
            generarHojas();
        }, 1000);
    }, 800);
}

function generarHojas() {
    const follaje = document.getElementById('follaje');
    // Puntos de las miniramas en el SVG
    const puntas = [
        {x: 460, y: 220}, {x: 40, y: 230}, {x: 150, y: 70}, 
        {x: 350, y: 70}, {x: 250, y: 150}, {x: 340, y: 240}, {x: 160, y: 250}
    ];

    for (let i = 0; i < 300; i++) {
        setTimeout(() => {
            const hoja = document.createElement('div');
            hoja.className = 'corazon-hoja';
            const p = puntas[Math.floor(Math.random() * puntas.length)];
            const x = p.x + (Math.random() - 0.5) * 100;
            const y = p.y + (Math.random() - 0.5) * 100;
            
            hoja.style.left = `${(x/500)*100}%`;
            hoja.style.top = `${(y/600)*100}%`;
            hoja.style.transform = `rotate(${Math.random()*360}deg) scale(${Math.random()*0.5 + 0.5})`;
            follaje.appendChild(hoja);
        }, i * 8);
    }

    setTimeout(() => {
        document.getElementById('arbol-contenedor').classList.add('arbol-izquierda');
        setTimeout(() => {
            document.getElementById('mensaje-box').classList.add('mensaje-visible');
            escribir();
        }, 1500);
    }, 4500);
}

function escribir() {
    const t = "Cada día contigo es un regalo. Eres mi persona favorita en el mundo entero. ❤️";
    let i = 0;
    const dest = document.getElementById('texto-carta');
    function type() { if(i < t.length){ dest.innerHTML += t.charAt(i); i++; setTimeout(type, 50); } }
    type();
}

setInterval(() => {
    const diff = new Date() - FECHA_INICIO;
    const d = Math.floor(diff / (1000*60*60*24));
    const h = Math.floor((diff / (1000*60*60)) % 24);
    const m = Math.floor((diff / (1000*60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    document.getElementById("timer").innerText = `${d}d ${h}h ${m}m ${s}s`;
}, 1000);

function mostrarGaleria() {
    const g = document.getElementById('galeria-final');
    g.style.display = "flex";
    let idx = 0;
    const img = document.getElementById('foto-actual');
    img.src = FOTOS[0];
    setInterval(() => { idx = (idx+1)%FOTOS.length; img.src = FOTOS[idx]; }, 3000);
}