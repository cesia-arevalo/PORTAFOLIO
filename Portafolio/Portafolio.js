let isSpanish = true;

function toggleLanguage() {
    
    
    isSpanish = !isSpanish; 
    document.documentElement.lang = isSpanish ? "es" : "en";

    
    const nameBrand = document.getElementById('name-brand');
    const sloganBrand = document.getElementById('slogan-brand');
    const navHome = document.getElementById("nav-home");
    const navAbout = document.getElementById("nav-about");
    const navSkills = document.getElementById("nav-skills");
    const navProjects = document.getElementById("nav-projects");

    
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
    
    
    const projectCompu1Name = document.getElementById('project-compu1-name');
    const projectCompu1DescTitle = document.getElementById('project-compu1-desc-title');
    const projectCompu1DescText = document.getElementById('project-compu1-desc-text');
    const projectCompu1RoleTitle = document.getElementById('project-compu1-role-title');
    const projectCompu1RoleText = document.getElementById('project-compu1-role-text');
    const projectCompu1TechTitle = document.getElementById('project-compu1-tech-title');

    
    const projectCase1Name = document.getElementById('project-case1-name');
    const projectCase1DescTitle = document.getElementById('project-case1-desc-title');
    const projectCase1DescText = document.getElementById('project-case1-desc-text');
    const projectCase1RoleTitle = document.getElementById('project-case1-role-title');
    const projectCase1RoleText = document.getElementById('project-case1-role-text');
    const projectCase1TechTitle = document.getElementById('project-case1-tech-title');
    

    if (!isSpanish) {
        
        
        
        if (nameBrand) nameBrand.textContent = 'Cesia Damaris Arévalo Romero';
        if (sloganBrand) sloganBrand.textContent = '“Solutions that inspire confidence.”';

        if (navHome) navHome.textContent = "Home";
        if (navAbout) navAbout.textContent = "About Me";
        if (navSkills) navSkills.textContent = "My Skills";
        if (navProjects) navProjects.textContent = "Projects";

        
        if (homeText) homeText.textContent = "Hello, I'm Cesia Damaris Arévalo Romero, a Systems and Network Engineering student at Gerardo Barrios University (UGB) in Usulután. Passionate about technology and computer maintenance, I am always looking to learn and improve my use of technology.";

        
        if (aboutTitle) aboutTitle.textContent = "About Me";
        if (aboutText) aboutText.textContent = "I am a student of Computer Systems and Network Engineering at Gerardo Barrios University (UGB) in Usulután. I am passionate about technology and lifelong learning, with a special interest in computer maintenance. I am always looking to learn and contribute practical and innovative solutions.";
        if (btnCvText) btnCvText.textContent = "Download Resume";
        
        
        if (skillsTitle) skillsTitle.textContent = 'My Skills';
        if (hardSkillsTitle) hardSkillsTitle.innerHTML = '💻 Hard Skills';
        if (softSkillsTitle) softSkillsTitle.innerHTML = '🤝 Soft Skills';
        if (valuesTitle) valuesTitle.innerHTML = '🌟 Professional Values';

        if (skillHardware) skillHardware.innerHTML = '<i class="fas fa-tools"></i> Hardware and Maintenance';
        if (skillSoftware) skillSoftware.innerHTML = '<i class="fas fa-laptop-code"></i> Software and Systems';
        if (skillCommunication) skillCommunication.innerHTML = '<i class="fas fa-comments"></i> Communication';
        if (skillTeamwork) skillTeamwork.innerHTML = '<i class="fas fa-users"></i> Teamwork';
        if (skillProblemSolving) skillProblemSolving.innerHTML = '<i class="fas fa-lightbulb"></i> Problem Solving';
        
        if (valueResponsibility) valueResponsibility.innerHTML = '<i class="fas fa-check-circle"></i> Responsibility';
        if (valueHonesty) valueHonesty.innerHTML = '<i class="fas fa-handshake"></i> Honesty';
        if (valueCommitment) valueCommitment.innerHTML = '<i class="fas fa-user-shield"></i> Commitment';
        if (valueRespect) valueRespect.innerHTML = '<i class="fas fa-heart"></i> Respect';
        
        
        if (projectsTitle) projectsTitle.textContent = "Projects";

        
        if (projectCompu1Name) projectCompu1Name.textContent = "Software for Divino Niño Pharmacy"; 
        if (projectCompu1DescTitle) projectCompu1DescTitle.textContent = "Description:";
        if (projectCompu1DescText) projectCompu1DescText.textContent = "Custom software for the company that automates and optimizes some of the tasks carried out by the Divino Niño Pharmacy.";

        if (projectCompu1RoleTitle) projectCompu1RoleTitle.textContent = "Role:";
        if (projectCompu1RoleText) projectCompu1RoleText.textContent = "Designer and Documenter.";
        if (projectCompu1TechTitle) projectCompu1TechTitle.textContent = "Technologies used:";

        
        if (projectCase1Name) projectCase1Name.textContent = "Citizen Complaint"; 
        if (projectCase1DescTitle) projectCase1DescTitle.textContent = "Description:";
        if (projectCase1DescText) projectCase1DescText.textContent = "Mobile application to provide communities with an accessible space where users can report various problems in their environment.";
        if (projectCase1RoleTitle) projectCase1RoleTitle.textContent = "Role:";
        if (projectCase1RoleText) projectCase1RoleText.textContent = "Designer.";
        if (projectCase1TechTitle) projectCase1TechTitle.textContent = "Technologies used:";

    } else {
        
        
        
        if (nameBrand) nameBrand.textContent = 'Cesia Arévalo';
        if (sloganBrand) sloganBrand.textContent = '“Soluciones que inspiran confianza.”';

        if (navHome) navHome.textContent = "Inicio";
        if (navAbout) navAbout.textContent = "Sobre mí";
        if (navSkills) navSkills.textContent = "Mis Habilidades";
        if (navProjects) navProjects.textContent = "Proyectos";

        
        if (homeText) homeText.textContent = "Hola soy Cesia Damaris Arévalo Romero, estudiante de Técnico en Ingeniería en Sistemas y Redes Informáticas de la Universidad Gerardo Barrios (UGB) Usulután. Apasionada por la tecnología y el mantenimiento de computadoras y siempre busco aprender para mejorar el uso de la tecnología.";

        
        if (aboutTitle) aboutTitle.textContent = "Sobre mí";
        if (aboutText) aboutText.textContent = "Soy estudiante de la carrera de Técnico en Ingeniería en Sistemas y Redes Informáticas de la Universidad Gerardo Barrios (UGB) Usulután. Me apasiona la tecnología y el aprendizaje continuo, con especial interés en el mantenimiento de computadoras, siempre buscando aprender y aportar soluciones prácticas e innovadoras.";
        if (btnCvText) btnCvText.textContent = "Descargar CV";
        
        
        if (skillsTitle) skillsTitle.textContent = 'Mis Habilidades';
        if (hardSkillsTitle) hardSkillsTitle.innerHTML = '💻 Habilidades Duras';
        if (softSkillsTitle) softSkillsTitle.innerHTML = '🤝 Habilidades Blandas';
        if (valuesTitle) valuesTitle.innerHTML = '🌟 Valores Profesionales';
        
        if (skillHardware) skillHardware.innerHTML = '<i class="fas fa-tools"></i> Hardware y mantenimiento';
        if (skillSoftware) skillSoftware.innerHTML = '<i class="fas fa-laptop-code"></i> Software y sistemas';
        if (skillCommunication) skillCommunication.innerHTML = '<i class="fas fa-comments"></i> Comunicación';
        if (skillTeamwork) skillTeamwork.innerHTML = '<i class="fas fa-users"></i> Trabajo en equipo';
        if (skillProblemSolving) skillProblemSolving.innerHTML = '<i class="fas fa-lightbulb"></i> Resolución de problemas';

        if (valueResponsibility) valueResponsibility.innerHTML = '<i class="fas fa-check-circle"></i> Responsabilidad';
        if (valueHonesty) valueHonesty.innerHTML = '<i class="fas fa-handshake"></i> Honestidad';
        if (valueCommitment) valueCommitment.innerHTML = '<i class="fas fa-user-shield"></i> Compromiso';
        if (valueRespect) valueRespect.innerHTML = '<i class="fas fa-heart"></i> Respeto';
        
        
        if (projectsTitle) projectsTitle.textContent = "Proyectos";

        
        if (projectCompu1Name) projectCompu1Name.textContent = "Software a farmacia Divino Niño";
        if (projectCompu1DescTitle) projectCompu1DescTitle.textContent = "Descripción:";
        if (projectCompu1DescText) projectCompu1DescText.textContent = "Software a la medida para la empresa que automatice y optimice algunas tareas que lleva a cabo la farmacia.";
        if (projectCompu1RoleTitle) projectCompu1RoleTitle.textContent = "Rol:";
        if (projectCompu1RoleText) projectCompu1RoleText.textContent = "Diseñadora y Documentadora.";
        if (projectCompu1TechTitle) projectCompu1TechTitle.textContent = "Tecnologías usadas:";

        
        if (projectCase1Name) projectCase1Name.textContent = "Denuncia Ciudadana";
        if (projectCase1DescTitle) projectCase1DescTitle.textContent = "Descripción:";
        if (projectCase1DescText) projectCase1DescText.textContent = "Aplicación móvil para proporcionar a las comunidades un espacio accesible donde los usuarios puedan reportar diversos problemas en su entorno.";
        if (projectCase1RoleTitle) projectCase1RoleTitle.textContent = "Rol:";
        if (projectCase1RoleText) projectCase1RoleText.textContent = "Diseñadora.";
        if (projectCase1TechTitle) projectCase1TechTitle.textContent = "Tecnologías usadas:";
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