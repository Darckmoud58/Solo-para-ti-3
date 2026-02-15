/* Estrellas */
for (let i = 0; i < 100; i++) {
    let e = document.createElement("div");
    e.className = "estrella";
    e.style.left = Math.random() * window.innerWidth + "px";
    e.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(e);
}

/* Abrir sobre */
function abrirSobre() {

    document.getElementById("sobre").classList.add("abrir");

    setTimeout(() => {

        document.getElementById("sobre").style.display = "none";

        /* Mostrar árbol centrado */
        /* Mostrar el árbol en primer plano antes de la carta */
        mostrarArbolPrimerPlano();

    }, 1000);
}

/* Mostrar árbol en primer plano y animarlo (tronco grande + corazones) */
function mostrarArbolPrimerPlano() {
    let arbol = document.querySelector('.arbol');
    arbol.classList.add('primer-plano');
    arbol.style.opacity = '1';

    /* Hacer crecer el tronco más grande en primer plano */
    let tronco = document.querySelector('.tronco');
    tronco.classList.add('crecer-tronco');
    setTimeout(() => {
        tronco.classList.add('crecer-tronco-grande');
    }, 100);

    /* Después de crecer, formar corazones (más densos) */
    const cont = document.getElementById('follaje');
    cont.innerHTML = '';

    /* Crear ramas con curvatura y corazones */
    const ramas = 12;
    for (let b = 0; b < ramas; b++) {
        const rama = document.createElement('div');
        rama.className = 'rama';
        rama.style.top = (30 + b * 5) + '%';
        const ang = -60 + b * 10; // ángulo más natural
        rama.style.transform = 'rotate(' + ang + 'deg)';
        rama.style.height = '0px';
        cont.appendChild(rama);

        // Animar crecimiento de la rama
        setTimeout(((r, idx) => {
            return () => {
                r.style.height = (100 + idx * 10) + 'px';
            };
        })(rama, b), 700 + b * 200);

        // Crear hojas (corazones) en la rama
        setTimeout(((r, idx) => {
            return () => {
                const hojas = 8 + Math.floor(Math.random() * 5);
                for (let h = 0; h < hojas; h++) {
                    const cor = document.createElement('div');
                    cor.className = 'corazon';
                    cor.innerHTML = '❤️';
                    const posX = 10 + Math.random() * 60;
                    const posY = (h / hojas) * (parseInt(r.style.height || 100));
                    cor.style.left = (50 + (posX - 30) * (idx % 2 === 0 ? 1 : -1)) + 'px';
                    cor.style.top = (parseInt(r.style.top || 0) + posY / 2) + 'px';
                    if (Math.random() < 0.3) {
                        cor.classList.add('volar');
                        const dx = (Math.random() * 400 + 100) * (Math.random() < 0.5 ? -1 : 1);
                        const dy = -(Math.random() * 300 + 100);
                        cor.style.setProperty('--dx', dx + 'px');
                        cor.style.setProperty('--dy', dy + 'px');
                        cor.style.animationDelay = (Math.random() * 1.2) + 's';
                        cor.style.animationDuration = (2 + Math.random() * 2) + 's';
                    }
                    cont.appendChild(cor);
                }
            };
        })(rama, b), 900 + b * 220);
    }

    /* Generar un relleno denso de corazones en forma de corazón */
    setTimeout(() => {
        generarCorazonesDensos(cont, 200);
    }, 2000);

    /* Completar formación y luego mover el árbol a la derecha mostrando la carta */
    const totalDelay = 900 + ramas * 220 + 1000;
    setTimeout(() => {
        formarCorazon(true);
    }, 2500);

    setTimeout(() => {
        arbol.classList.add('to-right');
        setTimeout(() => {
            arbol.classList.remove('primer-plano');
            arbol.style.zIndex = '';
        }, 800);
        setTimeout(() => {
            const carta = document.getElementById('carta');
            carta.classList.add('mostrar');
            document.getElementById('musica').play();
            escribir();
        }, 900);
    }, totalDelay + 400);
}

/* Genera muchos corazones siguiendo la curva del corazón para crear un relleno denso */
function generarCorazonesDensos(cont, cantidad) {
    // usar la parametrización de la curva del corazón y dispersión aleatoria
    for (let i = 0; i < cantidad; i++) {
        const t = Math.random() * Math.PI * 2;
        const r = 12 + Math.random() * 6;
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);

        const cor = document.createElement('div');
        cor.className = 'corazon';
        cor.innerHTML = '❤️';

        // dispersión y escala para simular densidad
        const jitterX = (Math.random() - 0.5) * 30;
        const jitterY = (Math.random() - 0.5) * 30;

        const escala = 6 + Math.random() * 7;
        const left = (x * escala + 200) + jitterX;
        const top = (-y * escala + 160) + jitterY;

        cor.style.left = left + 'px';
        cor.style.top = top + 'px';

        // tamaños y colores variados
        const size = 12 + Math.floor(Math.random() * 18);
        cor.style.fontSize = size + 'px';
        const colors = ['#ff6b81', '#ff4d6d', '#ff7b9c', '#ff9aa2', '#ff3b5c'];
        cor.style.color = colors[Math.floor(Math.random() * colors.length)];

        // algunos vuelan
        if (Math.random() < 0.2) {
            cor.classList.add('volar');
            const dx = (Math.random() * 500 + 120) * (Math.random() < 0.5 ? -1 : 1);
            const dy = -(Math.random() * 400 + 120);
            cor.style.setProperty('--dx', dx + 'px');
            cor.style.setProperty('--dy', dy + 'px');
            cor.style.animationDelay = (Math.random() * 1.5) + 's';
            cor.style.animationDuration = (2 + Math.random() * 3) + 's';
        } else {
            // pequeños movimientos suaves
            cor.classList.add('sway');
            cor.style.animationDelay = (Math.random() * 1.2) + 's';
            cor.style.animationDuration = (3 + Math.random() * 3) + 's';
        }

        cont.appendChild(cor);
    }
}

/* Máquina escribir */
const texto = `Si pudiera elegir un lugar seguro, sería a tu lado.

Cuanto más tiempo estoy contigo, más te amo.

Eres mi lugar favorito en el mundo.

— I Love You ❤️`;

let i = 0;

function escribir() {
    if (i < texto.length) {
        document.getElementById("mensaje").innerHTML += texto.charAt(i);
        i++;
        setTimeout(escribir, 40);
    }
}

/* Contador */
const fecha = new Date("2023-05-20 00:00:00");

setInterval(() => {
    let ahora = new Date();
    let diff = ahora - fecha;

    let d = Math.floor(diff / (1000 * 60 * 60 * 24));
    let h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let m = Math.floor((diff / (1000 * 60)) % 60);
    let s = Math.floor((diff / 1000) % 60);

    document.getElementById("tiempo").innerHTML =
        `${d} días ${h} horas ${m} minutos ${s} segundos`;

}, 1000);

/* Corazón */
function formarCorazon() {
    let cont = document.getElementById("follaje");
    let t = 0;

    /* allow denser hearts when primer-plano */
    let dense = false;
    if (arguments.length && arguments[0] === true) dense = true;

    let step = dense ? 0.035 : 0.05;
    let escala = dense ? 9 : 7;

    let intervalo = setInterval(() => {

        if (t > Math.PI * 2) {
            clearInterval(intervalo);
            return;
        }

        let x = 16 * Math.pow(Math.sin(t), 3);
        let y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);

        let c = document.createElement("div");
        c.innerHTML = "❤️";
        c.className = "corazon";
        c.style.left = (x * escala + (dense ? 200 : 150)) + "px";
        c.style.top = (-y * escala + (dense ? 180 : 120)) + "px";
        if (dense) c.style.fontSize = '22px';

        cont.appendChild(c);

        t += step;

    }, dense ? 20 : 30);
}

/* Final */
function animacionFinal() {

    /* Intensificar latido */
    document.querySelectorAll(".corazon").forEach(c => {
        c.classList.add("corazon-final");
    });

    /* Mostrar luna */
    document.getElementById("luna").style.opacity = "1";

    /* Cambiar fondo a amanecer */
    setTimeout(() => {
        document.body.classList.add("amanecer");
    }, 2000);

    /* Crear onda de luz */
    let onda = document.createElement("div");
    onda.className = "onda";
    onda.style.left = "50%";
    onda.style.bottom = "250px";
    onda.style.transform = "translateX(-50%)";
    document.body.appendChild(onda);

    /* Mostrar galería después */
    setTimeout(() => {
        document.getElementById("galeria").style.display = "flex";
        iniciarCarousel();
    }, 4000);
}


/* Descargar */
function descargarFotos() {
    const imgs = Array.from(document.querySelectorAll('#galeria img'));
    imgs.forEach((img, index) => {
        let url = img.getAttribute('src');
        let parts = url.split('/');
        let filename = parts[parts.length - 1];
        let a = document.createElement('a');
        a.href = url;
        a.download = filename || ('Recuerdo_' + (index + 1) + '.jpg');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });

}

/* Carrusel automático para la galería */
let _carouselInterval = null;
function iniciarCarousel() {
    const imgs = Array.from(document.querySelectorAll('#galeria img'));
    if (!imgs.length) return;
    imgs.forEach(img => { img.classList.add('galeria-img'); img.style.display = 'none'; });
    let current = 0;
    imgs[current].style.display = 'block';
    if (_carouselInterval) clearInterval(_carouselInterval);
    _carouselInterval = setInterval(() => {
        imgs[current].style.display = 'none';
        current = (current + 1) % imgs.length;
        imgs[current].style.display = 'block';
    }, 3000);
}
