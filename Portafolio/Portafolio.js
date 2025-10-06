let isSpanish = true;

function toggleLanguage() {
    document.documentElement.lang = isSpanish ? "en" : "es";
    isSpanish = !isSpanish;

    document.getElementById("nav-home").textContent = isSpanish ? "Inicio" : "Home";
    document.getElementById("nav-about").textContent = isSpanish ? "Sobre mí" : "About Me";
    document.getElementById("nav-skills").textContent = isSpanish ? "Mis Habilidades" : "My Skills";
    document.getElementById("nav-linkedin").textContent = isSpanish ? "LinkedIn" : "LinkedIn";

    document.getElementById("home-text").textContent = isSpanish
        ? "Hola soy Cesia Damaris Arévalo Romero, estudiante de Técnico en Ingeniería en Sistemas y Redes Informáticas de la Universidad Gerardo Barrios (UGB) Usulután. Apasionada por la tecnología y el mantenimiento de computadoras y siempre busco aprender para mejorar el uso de la tecnología."
        : "Hello, I'm Cesia Damaris Arévalo Romero, a Systems and Network Engineering student at Gerardo Barrios University (UGB) in Usulután. I'm passionate about technology and computer maintenance, and I'm always looking to learn to improve my use of technology.";

    document.getElementById("about-title").textContent = isSpanish ? "Sobre mí" : "About Me";
    document.getElementById("about-text").textContent = isSpanish
        ? "Soy estudiante de la carrera de Técnico en Ingeniería en Sistemas y Redes Informáticas de la Universidad Gerardo Barrios (UGB) Usulután. Me apasiona la tecnología y el aprendizaje continuo, con especial interés en el mantenimiento de computadoras, siempre buscando aprender y aportar soluciones prácticas e innovadoras."
        : "I am a student of Computer Systems and Network Engineering at Gerardo Barrios University (UGB) in Usulután. I am passionate about technology and lifelong learning, with a special interest in computer maintenance. I am always looking to learn and contribute practical and innovative solutions.";
    
    document.getElementById("btn-cv-text").textContent = isSpanish ? "Descargar CV" : "Download Resume";

    document.getElementById("skills-title-cont").textContent = isSpanish ? "Mis Habilidades" : "My Skills";

    document.getElementById("hard-skills-title-cont").textContent = isSpanish ? "💻 Habilidades Duras" : "💻 Hard Skills";
    document.getElementById("skill-hardware-cont").innerHTML = isSpanish
        ? '<i class="fas fa-tools"></i> Hardware y mantenimiento'
        : '<i class="fas fa-tools"></i> Hardware and Maintenance';
    document.getElementById("skill-software-cont").innerHTML = isSpanish
        ? '<i class="fas fa-laptop-code"></i> Software y sistemas'
        : '<i class="fas fa-laptop-code"></i> Software and Systems';

    document.getElementById("soft-skills-title-cont").textContent = isSpanish ? "🤝 Habilidades Blandas" : "🤝 Soft Skills";
    document.getElementById("skill-communication-cont").innerHTML = isSpanish
        ? '<i class="fas fa-comments"></i> Comunicación'
        : '<i class="fas fa-comments"></i> Communication';
    document.getElementById("skill-teamwork-cont").innerHTML = isSpanish
        ? '<i class="fas fa-users"></i> Trabajo en equipo'
        : '<i class="fas fa-users"></i> Teamwork';
    document.getElementById("skill-problemsolving-cont").innerHTML = isSpanish
        ? '<i class="fas fa-lightbulb"></i> Resolución de problemas'
        : '<i class="fas fa-lightbulb"></i> Problem Solving';

    document.getElementById("values-title-cont").textContent = isSpanish ? "🌟 Valores Profesionales" : "🌟 Professional Values";
    document.getElementById("value-responsibility-cont").innerHTML = isSpanish
        ? '<i class="fas fa-check-circle"></i> Responsabilidad'
        : '<i class="fas fa-check-circle"></i> Responsibility';
    document.getElementById("value-honesty-cont").innerHTML = isSpanish
        ? '<i class="fas fa-handshake"></i> Honestidad'
        : '<i class="fas fa-handshake"></i> Honesty';
    document.getElementById("value-commitment-cont").innerHTML = isSpanish
        ? '<i class="fas fa-user-shield"></i> Compromiso'
        : '<i class="fas fa-user-shield"></i> Commitment';
    document.getElementById("value-respect-cont").innerHTML = isSpanish
        ? '<i class="fas fa-heart"></i> Respeto'
        : '<i class="fas fa-heart"></i> Respect';

    document.getElementById("linkedin-title").textContent = isSpanish ? "LinkedIn" : "LinkedIn";
    document.getElementById("linkedin-text").textContent = isSpanish
        ? "Visita mi perfil profesional:"
        : "Visit my professional profile:";
}

function showSection(id) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) {
        target.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('inicio');
});