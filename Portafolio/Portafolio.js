let isSpanish = true;

function toggleLanguage() {
    document.documentElement.lang = isSpanish ? "en" : "es";
    isSpanish = !isSpanish;

    document.getElementById("title").textContent = isSpanish ? "Mi portafolio" : "my portfolio";
    document.getElementById("nav-home").textContent = isSpanish ? "Inicio" : "Home";
    document.getElementById("nav-about").textContent = isSpanish ? "Sobre mí" : "About Me";
    document.getElementById("nav-skills").textContent = isSpanish ? "Mis habilidades" : "My Skills";
    document.getElementById("nav-linkedin").textContent = isSpanish ? "LinkedIn" : "LinkedIn";
    document.getElementById("nav-cv").textContent = isSpanish ? "Currículum" : "Resume";

    document.getElementById("home-title").textContent = isSpanish ? "Inicio" : "Home";
    document.getElementById("home-text").textContent = isSpanish
        ? "Hola, soy Cesia Damaris Arévalo Romero, estudiante de Técnico en Ingeniería en Sistemas y Redes Informáticas de la Universidad Gerardo Barrios (UGB) Usulután. Apasionada por la tecnología y el mantenimiento de computadoras y siempre busco aprender para mejorar el uso de la tecnología."
        : "Hello, I'm Cesia Damaris Arévalo Romero, a Systems and Network Engineering student at Gerardo Barrios University (UGB) in Usulután. I'm passionate about technology and computer maintenance, and I'm always looking to learn to improve my use of technology.";

    document.getElementById("about-title").textContent = isSpanish ? "Sobre mí" : "About Me";
    document.getElementById("about-text").textContent = isSpanish
        ? "Soy estudiante de la carrera de Técnico en Ingeniería en Sistemas y Redes Informáticas de la Universidad Gerardo Barrios (UGB) Usulután. Me apasiona la tecnología y el aprendizaje continuo, con especial interés en el mantenimiento de computadoras, siempre buscando aprender y aportar soluciones prácticas e innovadoras."
        : "I am a student of Computer Systems and Network Engineering at Gerardo Barrios University (UGB) in Usulután. I am passionate about technology and lifelong learning, with a special interest in computer maintenance. I am always looking to learn and contribute practical and innovative solutions.";

    document.getElementById("skills-title").textContent = isSpanish ? "Mis Habilidades" : "My Skills";

    document.getElementById("hard-skills-title").textContent = isSpanish ? "💻 Habilidades Duras" : "💻 Hard Skills";
    document.getElementById("skill-hardware").innerHTML = isSpanish
        ? '<i class="fas fa-tools"></i> Hardware y mantenimiento'
        : '<i class="fas fa-tools"></i> Hardware and Maintenance';
    document.getElementById("skill-software").innerHTML = isSpanish
        ? '<i class="fas fa-laptop-code"></i> Software y sistemas'
        : '<i class="fas fa-laptop-code"></i> Software and Systems';

    document.getElementById("soft-skills-title").textContent = isSpanish ? "🤝 Habilidades Blandas" : "🤝 Soft Skills";
    document.getElementById("skill-communication").innerHTML = isSpanish
        ? '<i class="fas fa-comments"></i> Comunicación'
        : '<i class="fas fa-comments"></i> Communication';
    document.getElementById("skill-teamwork").innerHTML = isSpanish
        ? '<i class="fas fa-users"></i> Trabajo en equipo'
        : '<i class="fas fa-users"></i> Teamwork';
    document.getElementById("skill-problemsolving").innerHTML = isSpanish
        ? '<i class="fas fa-lightbulb"></i> Resolución de problemas'
        : '<i class="fas fa-lightbulb"></i> Problem Solving';

    document.getElementById("values-title").textContent = isSpanish ? "🌟 Valores Profesionales" : "🌟 Professional Values";
    document.getElementById("value-responsibility").innerHTML = isSpanish
        ? '<i class="fas fa-check-circle"></i> Responsabilidad'
        : '<i class="fas fa-check-circle"></i> Responsibility';
    document.getElementById("value-honesty").innerHTML = isSpanish
        ? '<i class="fas fa-handshake"></i> Honestidad'
        : '<i class="fas fa-handshake"></i> Honesty';
    document.getElementById("value-commitment").innerHTML = isSpanish
        ? '<i class="fas fa-user-shield"></i> Compromiso'
        : '<i class="fas fa-user-shield"></i> Commitment';
    document.getElementById("value-respect").innerHTML = isSpanish
        ? '<i class="fas fa-heart"></i> Respeto'
        : '<i class="fas fa-heart"></i> Respect';

    document.getElementById("linkedin-title").textContent = isSpanish ? "LinkedIn" : "LinkedIn";
    document.getElementById("linkedin-text").textContent = isSpanish
        ? "Visita mi perfil profesional:"
        : "Visit my professional profile:";

    document.getElementById("cv-title").textContent = isSpanish ? "Currículum" : "Resume";
    document.getElementById("cv-text").textContent = isSpanish
        ? "Ver currículum aquí:"
        : "You can view my resume here:";
}

function showSection(id) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) {
        target.classList.add('active');
    }
}