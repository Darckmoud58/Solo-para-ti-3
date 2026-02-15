// CONFIGURACIÓN
const fechaInicio = new Date("2023-05-20T00:00:00");
const fotos = [
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

// 1. ABRIR SOBRE
function abrirSobre() {
    document.getElementById("musica").play().catch(e => console.log("Click necesario para audio"));
    document.getElementById("sobre").classList.add("abierto");
    document.querySelector(".texto-instruccion").style.opacity = "0";

    setTimeout(() => {
        document.getElementById("pantalla-sobre").style.display = "none";
        document.getElementById("escenario").style.opacity = "1";
        crecerArbol();
    }, 1000);
}

// 2. CRECER ÁRBOL
function crecerArbol() {
    document.querySelector(".arbol-container").classList.add("crecer-tronco");

    // Esperar a que se dibuje el tronco para sacar hojas
    setTimeout(() => {
        generarCopaCorazon(200); // 200 Hojas

        // Mover árbol y mostrar carta
        setTimeout(() => {
            document.querySelector(".arbol-container").classList.add("mover-izquierda");
            document.getElementById("carta").classList.add("visible");
            escribirCarta();
            iniciarViento();
        }, 3500);

    }, 2500);
}

// 3. GENERAR HOJAS EN FORMA DE CORAZÓN (La clave del diseño)
function generarCopaCorazon(cantidad) {
    const follaje = document.getElementById("follaje");

    for (let i = 0; i < cantidad; i++) {
        setTimeout(() => {
            const el = document.createElement("div");
            el.innerHTML = "❤️";
            el.style.position = "absolute";
            el.style.fontSize = (Math.random() * 15 + 10) + "px";
            el.style.color = ["#ff4d6d", "#ff758f", "#d90429", "#ffccd5"][Math.floor(Math.random() * 4)];

            // FÓRMULA MATEMÁTICA DEL CORAZÓN
            // Esto asegura que las hojas formen un corazón perfecto sobre el tronco
            const t = Math.random() * Math.PI * 2;
            const r = Math.sqrt(Math.random()); // Para rellenar por dentro

            // Ajustar tamaño del corazón (Escala)
            const escala = 12;

            // Posición X e Y
            const x = escala * 16 * Math.pow(Math.sin(t), 3);
            const y = -escala * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

            // Aplicamos aleatoriedad para que se vea natural (efecto árbol)
            const finalX = (x * r) + 250; // Centrado en 250 (mitad del SVG)
            const finalY = (y * r) + 150; // Altura de la copa

            el.style.left = finalX + "px";
            el.style.top = finalY + "px";
            el.style.opacity = "0";
            el.style.transition = "opacity 0.8s, transform 3s";

            follaje.appendChild(el);
            setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "scale(1.1)"; // Efecto latido leve
            }, 50);

        }, i * 10);
    }
}

// 4. VIENTO (Corazones volando)
function iniciarViento() {
    setInterval(() => {
        const c = document.createElement("div");
        c.classList.add("corazon-viento");
        c.innerHTML = "❤️";
        c.style.left = Math.random() * 100 + "vw";
        c.style.animationDuration = (Math.random() * 3 + 4) + "s";
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 6000);
    }, 400);
}

// 5. CARTA Y TIEMPO
function escribirCarta() {
    const texto = "Cada día a tu lado es mi regalo favorito. Eres mi paz, mi amor y mi vida entera. Gracias por elegirme para caminar juntos.";
    const p = document.getElementById("mensaje-texto");
    let i = 0;
    function type() {
        if (i < texto.length) { p.innerHTML += texto.charAt(i); i++; setTimeout(type, 50); }
    }
    type();
}

setInterval(() => {
    const diff = new Date() - fechaInicio;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    document.getElementById("tiempo").innerText = `${d} días, ${h}h ${m}m ${s}s`;
}, 1000);

// 6. FINAL
function animacionFinal() {
    document.getElementById("anillo-container").style.display = "flex";
    document.getElementById("luna").style.opacity = "1";
    setTimeout(() => {
        document.getElementById("anillo-container").style.display = "none";
        document.getElementById("galeria").style.display = "flex";

        let idx = 0;
        const img = document.getElementById("foto-actual");
        img.src = fotos[0];
        setInterval(() => {
            idx = (idx + 1) % fotos.length;
            img.src = fotos[idx];
        }, 3000);
    }, 3000);
}