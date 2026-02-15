// CONFIGURACIÓN: Fecha de inicio de la relación
const fechaInicio = new Date("2023-05-20T00:00:00"); 

// Fotos para el final
const fotos = [
    "img/WhatsApp Image 2026-02-14 at 8.44.24 PM (1).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.24 PM (2).jpeg",
    "img/WhatsApp Image 2026-02-14 at 8.44.24 PM.jpeg"
];

// 1. ABRIR EL SOBRE
function abrirSobre() {
    const audio = document.getElementById("musica");
    audio.play().catch(e => console.log("Interacción requerida para audio"));

    document.getElementById("sobre").classList.add("abierto");
    document.querySelector(".texto-instruccion").style.opacity = "0";

    setTimeout(() => {
        document.getElementById("pantalla-sobre").style.display = "none";
        document.getElementById("escenario").style.opacity = "1";
        crecerArbol();
    }, 1000);
}

// 2. ANIMACIÓN DEL ÁRBOL
function crecerArbol() {
    const tronco = document.querySelector(".tronco");
    tronco.classList.add("crecido"); // Crece el tronco y las ramas

    // Esperar a que crezca el tronco para poner hojas
    setTimeout(() => {
        generarHojas(150); // Genera 150 corazones
        
        // MOVER ÁRBOL Y MOSTRAR CARTA (La transición clave)
        setTimeout(() => {
            document.querySelector(".arbol-container").classList.add("mover-izquierda");
            document.getElementById("carta").classList.add("visible");
            efectoMecanografia();
            iniciarViento(); // Inicia corazones volando
        }, 3000); // 3 segundos después de empezar a crecer

    }, 2000);
}

// 3. GENERAR HOJAS (Forma de corazón grande)
function generarHojas(cantidad) {
    const follaje = document.getElementById("follaje");
    
    for (let i = 0; i < cantidad; i++) {
        setTimeout(() => {
            const corazon = document.createElement("div");
            corazon.innerHTML = "❤️";
            corazon.style.position = "absolute";
            corazon.style.fontSize = (Math.random() * 15 + 10) + "px";
            corazon.style.color = ["#ff4d6d", "#ff758f", "#c9184a"][Math.floor(Math.random()*3)];
            
            // Matemáticas para forma de corazón
            const angle = Math.random() * Math.PI * 2;
            const r = Math.sqrt(Math.random()) * 120; // Radio disperso
            const x = r * Math.cos(angle); 
            const y = r * Math.sin(angle) - 20; // -20 para subirlo un poco

            corazon.style.left = x + "px";
            corazon.style.top = (y - 250) + "px"; // Ajuste vertical respecto al tronco
            
            // Animación de aparición
            corazon.style.opacity = "0";
            corazon.style.transition = "opacity 0.5s";
            
            follaje.appendChild(corazon);
            
            // Pequeño retardo para que aparezca
            setTimeout(() => corazon.style.opacity = "1", 50);

        }, i * 10);
    }
}

// 4. TEXTO TIPO MÁQUINA DE ESCRIBIR
function efectoMecanografia() {
    const texto = "Cada segundo a tu lado es un regalo. Eres mi refugio, mi paz y mi alegría. Te amo más de lo que las palabras pueden explicar.";
    const elemento = document.getElementById("mensaje-texto");
    let i = 0;
    
    function escribir() {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
            setTimeout(escribir, 40);
        }
    }
    escribir();
}

// 5. EFECTO VIENTO (Corazones volando de fondo)
function iniciarViento() {
    setInterval(() => {
        const c = document.createElement("div");
        c.classList.add("corazon-viento");
        c.innerHTML = "❤️";
        c.style.left = Math.random() * 100 + "vw";
        c.style.animationDuration = (Math.random() * 3 + 3) + "s";
        document.body.appendChild(c);
        
        setTimeout(() => c.remove(), 6000);
    }, 300);
}

// 6. CONTADOR DE TIEMPO
setInterval(() => {
    const ahora = new Date();
    const diff = ahora - fechaInicio;
    
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    
    document.getElementById("tiempo").innerText = `${d} días, ${h}h ${m}m ${s}s`;
}, 1000);

// 7. FINAL (Anillo y Galería)
function animacionFinal() {
    document.getElementById("anillo-container").style.display = "flex";
    document.getElementById("luna").style.opacity = "1";
    
    setTimeout(() => {
        document.getElementById("anillo-container").style.display = "none";
        document.getElementById("galeria").style.display = "flex";
        iniciarCarrusel();
    }, 3000);
}

// 8. CARRUSEL DE FOTOS
function iniciarCarrusel() {
    let index = 0;
    const img = document.getElementById("foto-actual");
    
    img.src = fotos[0]; // Primera foto
    
    setInterval(() => {
        index = (index + 1) % fotos.length;
        img.src = fotos[index];
    }, 3000);
}