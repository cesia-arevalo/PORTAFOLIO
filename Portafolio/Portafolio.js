let isSpanish = true;



function toggleLanguage() {

   

    isSpanish = !isSpanish;

    document.documentElement.lang = isSpanish ? "es" : "en";



    const nameBrand = document.getElementById('name-brand');

    const sloganBrand = document.getElementById('slogan-brand');



    const homeText = document.getElementById('home-text');

    const aboutTitle = document.getElementById('about-title');

    const aboutText = document.getElementById('about-text');

    const btnCvText = document.getElementById('btn-cv-text');



    const skillsTitle = document.getElementById('skills-title-cont');

    const hardSkillsTitle = document.getElementById('hard-skills-title-cont');

    const softSkillsTitle = document.getElementById('soft-skills-title-cont');

    const valuesTitle = document.getElementById('values-title-cont');



    const skillHardware = document.getElementById('skill-hardware-cont');

    const skillSoftware = document.getElementById('skill-software-cont');

    const skillCommunication = document.getElementById('skill-communication-cont');

    const skillTeamwork = document.getElementById('skill-teamwork-cont');

    const skillProblemSolving = document.getElementById('skill-problemsolving-cont');



    const valueResponsibility = document.getElementById('value-responsibility-cont');

    const valueHonesty = document.getElementById('value-honesty-cont');

    const valueCommitment = document.getElementById('value-commitment-cont');

    const valueRespect = document.getElementById('value-respect-cont');



    const projectsTitle = document.getElementById('projects-title');

    const projectsPlaceholder = document.getElementById('projects-placeholder');





    if (!isSpanish) {

       

        nameBrand.textContent = 'Cesia Arévalo';

        sloganBrand.textContent = "Your equipment in good hands, assured performance."



        document.getElementById("nav-home").textContent = "Home";

        document.getElementById("nav-about").textContent = "About Me";

        document.getElementById("nav-skills").textContent = "My Skills";

        document.getElementById("nav-projects").textContent = "Projects";



        homeText.textContent = "Hello, I'm Cesia Damaris Arévalo Romero, a Systems and Network Engineering student at Gerardo Barrios University (UGB) in Usulután. I'm passionate about technology and computer maintenance, and I'm always looking to learn to improve my use of technology.";



        aboutTitle.textContent = "About Me";

        aboutText.textContent = "I am a student of Computer Systems and Network Engineering at Gerardo Barrios University (UGB) in Usulután. I am passionate about technology and lifelong learning, with a special interest in computer maintenance. I am always looking to learn and contribute practical and innovative solutions.";

        btnCvText.textContent = "Download Resume";

       

        skillsTitle.textContent = 'My Skills';

        hardSkillsTitle.innerHTML = '💻 Hard Skills';

        softSkillsTitle.innerHTML = '🤝 Soft Skills';

        valuesTitle.innerHTML = '🌟 Professional Values';



        skillHardware.innerHTML = '<i class="fas fa-tools"></i> Hardware and Maintenance';

        skillSoftware.innerHTML = '<i class="fas fa-laptop-code"></i> Software and Systems';

        skillCommunication.innerHTML = '<i class="fas fa-comments"></i> Communication';

        skillTeamwork.innerHTML = '<i class="fas fa-users"></i> Teamwork';

        skillProblemSolving.innerHTML = '<i class="fas fa-lightbulb"></i> Problem Solving';

       

        valueResponsibility.innerHTML = '<i class="fas fa-check-circle"></i> Responsibility';

        valueHonesty.innerHTML = '<i class="fas fa-handshake"></i> Honesty';

        valueCommitment.innerHTML = '<i class="fas fa-user-shield"></i> Commitment';

        valueRespect.innerHTML = '<i class="fas fa-heart"></i> Respect';

       

        projectsTitle.textContent = "Projects";

        projectsPlaceholder.textContent = "This is where you will add the detailed description, technologies used, and images of your projects.";

       

    } else {

       

        nameBrand.textContent = 'Cesia Arévalo';

        sloganBrand.textContent = "Tu equipo en buenas manos, funcionamiento asegurado."



        document.getElementById("nav-home").textContent = "Inicio";

        document.getElementById("nav-about").textContent = "Sobre mí";

        document.getElementById("nav-skills").textContent = "Mis Habilidades";

        document.getElementById("nav-projects").textContent = "Proyectos";



        homeText.textContent = "Hola soy Cesia Damaris Arévalo Romero, estudiante de Técnico en Ingeniería en Sistemas y Redes Informáticas de la Universidad Gerardo Barrios (UGB) Usulután. Apasionada por la tecnología y el mantenimiento de computadoras y siempre busco aprender para mejorar el uso de la tecnología.";



        aboutTitle.textContent = "Sobre mí";

        aboutText.textContent = "Soy estudiante de la carrera de Técnico en Ingeniería en Sistemas y Redes Informáticas de la Universidad Gerardo Barrios (UGB) Usulután. Me apasiona la tecnología y el aprendizaje continuo, con especial interés en el mantenimiento de computadoras, siempre buscando aprender y aportar soluciones prácticas e innovadoras.";

        btnCvText.textContent = "Descargar CV";

       

        skillsTitle.textContent = 'Mis Habilidades';

        hardSkillsTitle.innerHTML = '💻 Habilidades Duras';

        softSkillsTitle.innerHTML = '🤝 Habilidades Blandas';

        valuesTitle.innerHTML = '🌟 Valores Profesionales';

       

        skillHardware.innerHTML = '<i class="fas fa-tools"></i> Hardware y mantenimiento';

        skillSoftware.innerHTML = '<i class="fas fa-laptop-code"></i> Software y sistemas';

        skillCommunication.innerHTML = '<i class="fas fa-comments"></i> Comunicación';

        skillTeamwork.innerHTML = '<i class="fas fa-users"></i> Trabajo en equipo';

        skillProblemSolving.innerHTML = '<i class="fas fa-lightbulb"></i> Resolución de problemas';



        valueResponsibility.innerHTML = '<i class="fas fa-check-circle"></i> Responsabilidad';

        valueHonesty.innerHTML = '<i class="fas fa-handshake"></i> Honestidad';

        valueCommitment.innerHTML = '<i class="fas fa-user-shield"></i> Compromiso';

        valueRespect.innerHTML = '<i class="fas fa-heart"></i> Respeto';

       

        projectsTitle.textContent = "Proyectos";

        projectsPlaceholder.textContent = "Aquí es donde añadirás la descripción detallada, tecnologías usadas e imágenes de tus proyectos.";

    }

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