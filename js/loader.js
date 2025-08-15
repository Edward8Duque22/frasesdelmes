// Separar las letras de BIENVENIDO
function animateLetters() {
    const welcomeText = document.getElementById('welcomeText');
    const text = welcomeText.textContent;
    welcomeText.innerHTML = '';
    
    text.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.className = 'letter';
        span.textContent = letter;
        span.setAttribute('data-letter', letter);
        span.style.animationDelay = `${index * 0.1}s, ${index * 0.1 + 1.5}s`;
        welcomeText.appendChild(span);
    });
}

// Inicializar animación de letras
animateLetters();

// Configuración de redirección
const REDIRECT_URL = 'inicio.html'; // Cambia esta URL por la página a la que quieres redirigir
const REDIRECT_TIME = 4000; // Tiempo en milisegundos (4 segundos)

// Función de redirección con efecto de salida
function redirectToPage() {
    // Efecto de desvanecimiento antes de redirigir
    document.body.style.transition = 'opacity 0.5s ease-out';
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        window.location.href = REDIRECT_URL;
    }, 500);
}

// Ejecutar redirección después del tiempo especificado
setTimeout(() => {
    console.log('Carga completada - Redirigiendo...');
    redirectToPage();
}, REDIRECT_TIME);

// Agregar más partículas dinámicamente
function createParticles() {
    const particleCount = 8;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = Math.random() * 8 + 4 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        document.body.appendChild(particle);
    }
}

createParticles();
