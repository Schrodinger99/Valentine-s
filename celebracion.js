// Crear confeti en la página de celebración
window.addEventListener('load', () => {
    crearConfeti();
    crearConfeti();
});

function crearConfeti() {
    const confettiContainer = document.querySelector('.confetti');
    
    for (let i = 0; i < 100; i++) {
        const confeti = document.createElement('div');
        confeti.classList.add('confetti-piece');
        confeti.style.left = Math.random() * window.innerWidth + 'px';
        confeti.style.background = ['#ff1493', '#ff69b4', '#ffb6c1', '#ffc0cb', '#ff00ff'][Math.floor(Math.random() * 5)];
        confeti.style.animationDelay = (Math.random() * 2) + 's';
        
        const angle = Math.random() * Math.PI * 2;
        confeti.style.setProperty('--tx', Math.cos(angle) * 100 + 'px');
        
        confettiContainer.appendChild(confeti);
        
        setTimeout(() => {
            confeti.remove();
        }, 5000);
    }
}
                corazon.style.opacity = opacity;
                corazon.style.transform = `scale(${1 - explosionTime / 2000})`;
                
                requestAnimationFrame(() => animateExplosion(explosionTime));
             else {
                corazon.remove();
            };
        
        animateLaunch();
