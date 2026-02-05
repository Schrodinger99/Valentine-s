let clicksNo = 0;

const preguntas = [
    "¿Segura????",
    "¿Estás completamente segura?",
    "¿SEGURAAA????",
    "Pero... ¿ni un poquito?",
    "Aaaaaandaleeeeee",
    "¿Neta presionaste No?",
    "¿En serio? ¿De verdad verdad?",
    "Yo se que si quiereeees",
    "Pooor Favooooooooor",
    "Ya me está doliendo :(",
    "Última y ahora si",
    "Ya esta es la definitiva"
];

function presionarNo() {
    const btnNo = document.getElementById('btn-no');
    const btnSi = document.getElementById('btn-si');
    const mensajesContainer = document.getElementById('mensajes-container');

    if (clicksNo < preguntas.length) {
        mensajesContainer.textContent = preguntas[clicksNo];
    }

    clicksNo++;

    const sizelAumento = 20 * clicksNo;
    const newSize = 15 + sizelAumento;
    btnSi.style.padding = `${15 + clicksNo * 3}px ${30 + sizelAumento}px`;
    btnSi.style.fontSize = `${1.1 + clicksNo * 0.2}em`;

    btnSi.style.boxShadow = `0 ${5 + clicksNo * 2}px ${15 + clicksNo * 3}px rgba(102, 187, 106, ${0.5 + clicksNo * 0.1})`;

    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 200;
    btnNo.style.transform = `translate(${randomX}px, ${randomY}px)`;

    if (clicksNo > 5) {
        const newOpacity = Math.max(0, 1 - (clicksNo - 5) * 0.15);
        btnNo.style.opacity = newOpacity;
        btnNo.style.pointerEvents = newOpacity === 0 ? 'none' : 'auto';
    }

    if (clicksNo > 8) {
        btnSi.style.width = '100%';
    }
}

function presionarSi() {
    
    crearConfeti();

    setTimeout(() => {
        window.location.href = 'celebracion.html';
    }, 500);
}

function crearConfeti() {
    const confettiContainer = document.querySelector('.pregunta-content') || document.body;
    
    for (let i = 0; i < 50; i++) {
        const confeti = document.createElement('div');
        confeti.style.position = 'fixed';
        confeti.style.left = Math.random() * window.innerWidth + 'px';
        confeti.style.top = '-10px';
        confeti.style.width = '10px';
        confeti.style.height = '10px';
        confeti.style.background = '#ff1493';
        confeti.style.borderRadius = '50%';
        confeti.style.pointerEvents = 'none';
        confeti.style.zIndex = '9999';
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = 3 + Math.random() * 5;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let x = parseFloat(confeti.style.left);
        let y = parseFloat(confeti.style.top);
        
        document.body.appendChild(confeti);
        
        const interval = setInterval(() => {
            x += vx;
            y += vy;
            confeti.style.left = x + 'px';
            confeti.style.top = y + 'px';
            confeti.style.opacity = Math.max(0, 1 - (y / window.innerHeight));
            
            if (y > window.innerHeight) {
                clearInterval(interval);
                confeti.remove();
            }
        }, 30);
    }
}
