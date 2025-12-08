let isSpanish = true;

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

const projectBookmoodName = document.getElementById('project-bookmood-name');
const projectBookmoodDescTitle = document.getElementById('project-bookmood-desc-title');
const projectBookmoodDescText = document.getElementById('project-bookmood-desc-text');
const projectBookmoodRoleTitle = document.getElementById('project-bookmood-role-title');
const projectBookmoodRoleText = document.getElementById('project-bookmood-role-text');
const projectBookmoodTechTitle = document.getElementById('project-bookmood-tech-title');

const projectBookmoodTechVSCode = document.getElementById('project-bookmood-tech-visual studio code');
const projectBookmoodTechJS = document.getElementById('project-bookmood-tech-javascript'); 
const projectBookmoodTechHTML = document.getElementById('project-bookmood-tech-html');
const projectBookmoodTechCSS = document.getElementById('project-bookmood-tech-css');

// --- Variables de Contacto ---
const navContact = document.getElementById("nav-contact");
const contactTitle = document.getElementById('contact-title');
const labelName = document.getElementById('label-name');
const labelEmail = document.getElementById('label-email');
const labelMessage = document.getElementById('label-message');
const btnSubmit = document.getElementById('btn-submit');
const copyrightText = document.getElementById('copyright-text');
const recognitionTitle = document.getElementById('recognition-title');


// --- Variables de Testimonios ---
const navTestimonials = document.getElementById('nav-testimonials'); 
const testimonialsTitle = document.getElementById('testimonials-title');

// Nuevas variables para los cargos/profesiones
const professionCarla = document.getElementById('profession-carla');
const professionHerbert = document.getElementById('profession-herbert');
const professionOscar = document.getElementById('profession-oscar');
const professionMarvin = document.getElementById('profession-marvin');


const testimonialCarlaText = document.getElementById('testimonial-carla-text');
const testimonialHerbertText = document.getElementById('testimonial-herbert-text');
const testimonialOscarText = document.getElementById('testimonial-oscar-text');
const testimonialMarvinText = document.getElementById('testimonial-marvin-text');



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
    
    if (!isSpanish) {
        
        // --- Navegación ---
        if (nameBrand) nameBrand.textContent = 'Cesia Arévalo';
        if (sloganBrand) sloganBrand.textContent = '“Solutions that inspire confidence.”';

        if (navHome) navHome.textContent = "Home";
        if (navAbout) navAbout.textContent = "About Me";
        if (navSkills) navSkills.textContent = "My Skills";
        if (navProjects) navProjects.textContent = "Projects";
        if (navTestimonials) navTestimonials.textContent = "Testimonials"; 
        if (navContact) navContact.textContent = "Contact"; 
        
        // --- Inicio ---
        if (homeText) homeText.textContent = "Hello, I'm Cesia Damaris Arévalo Romero, a Systems and Network Engineering student at Gerardo Barrios University (UGB) in Usulután. Passionate about technology and computer maintenance, I am always looking to learn and improve my use of technology.";

        
        // --- Sobre Mí ---
        if (aboutTitle) aboutTitle.textContent = "About Me";
        if (aboutText) aboutText.textContent = "I am a student of Computer Systems and Network Engineering at Gerardo Barrios University (UGB) in Usulután. I am passionate about technology and lifelong learning, with a special interest in computer maintenance. I am always looking to learn and contribute practical and innovative solutions.";
        if (btnCvText) btnCvText.textContent = "Download Resume";

        if (recognitionTitle) recognitionTitle.textContent = "Recognitions";
        
        
        // --- Habilidades ---
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

        
        // --- Proyectos ---
        if (projectsTitle) projectsTitle.textContent = 'Projects';
        
        if (projectCompu1DescTitle) projectCompu1DescTitle.textContent = 'Description:';
        if (projectCompu1DescText) projectCompu1DescText.textContent = 'Custom software for the company to automate and optimize some tasks carried out by the pharmacy.';
        if (projectCompu1RoleTitle) projectCompu1RoleTitle.textContent = 'Role:';
        if (projectCompu1RoleText) projectCompu1RoleText.textContent = 'Designer and Documenter.';
        if (projectCompu1TechTitle) projectCompu1TechTitle.textContent = 'Technologies used:';
        
        if (projectCase1DescTitle) projectCase1DescTitle.textContent = 'Description:';
        if (projectCase1DescText) projectCase1DescText.textContent = 'Mobile application to provide communities with an accessible space where users can report various problems in their environment.';
        if (projectCase1RoleTitle) projectCase1RoleTitle.textContent = 'Role:';
        if (projectCase1RoleText) projectCase1RoleText.textContent = 'Designer.';
        if (projectCase1TechTitle) projectCase1TechTitle.textContent = 'Technologies used:';

        if (projectBookmoodDescTitle) projectBookmoodDescTitle.textContent = 'Description:';
        if (projectBookmoodDescText) projectBookmoodDescText.textContent = 'BookMood is an e-commerce website designed and created so users can quickly, reliably, and personally search, purchase, and receive books. It offers a simple, secure, and attractive shopping experience.';
        if (projectBookmoodRoleTitle) projectBookmoodRoleTitle.textContent = 'Role:';
        if (projectBookmoodRoleText) projectBookmoodRoleText.textContent = 'Scrum Master and Front end.';
        if (projectBookmoodTechTitle) projectBookmoodTechTitle.textContent = 'Technologies used:';

        
        // --- Testimonios ---
        if (testimonialsTitle) testimonialsTitle.textContent = 'Testimonials';
        
        if (professionCarla) professionCarla.textContent = 'Computer Science Graduate';
        if (testimonialCarlaText) testimonialCarlaText.textContent = 'A graduate student of Systems Engineering Technician from the Faculty of Science and Technology at Gerardo Barrios University, Usulután Regional Center, she has training in Software Engineering I, II, and Free Software; she shows significant learning in acquiring technical and life skills related to her career; she promotes values such as resilience, creativity, respect, and ethical behavior. Developing professional qualities like a positive attitude.';
        
        if (professionHerbert) professionHerbert.textContent = 'Computer Science Graduate';
        if (testimonialHerbertText) testimonialHerbertText.textContent = 'She has shown respect for teachers and colleagues, complete dedication to study activities and projects. She demonstrates good skills, teamwork, and a great sense of responsibility.';
        
        if (professionOscar) professionOscar.textContent = 'Computer Science Graduate';
        if (testimonialOscarText) testimonialOscarText.textContent = 'I affirm that she is a person of very good conduct, very good in her studies, honest, unimpeachable, responsible in all her actions, and willing to share all her knowledge with a progressive society.';
        
        if (professionMarvin) professionMarvin.textContent = 'Systems and computer network engineer';
        if (testimonialMarvinText) testimonialMarvinText.textContent = 'She is a responsible person, studious, and a good colleague. During her time at Gerardo Barrios University Usulután Campus, she has always shown a collaborative nature, great capacity for work, and good predisposition to work in a team. Her strategic way of thinking makes her very suitable for developing any task.';


        // --- Contacto ---
        if (contactTitle) contactTitle.textContent = 'Contact';
        if (labelName) labelName.textContent = 'Name';
        if (labelEmail) labelEmail.textContent = 'Email';
        if (labelMessage) labelMessage.textContent = 'Message';
        if (btnSubmit) btnSubmit.textContent = 'Send Message';

        if (copyrightText) copyrightText.textContent = "© 2025 Cesia Arévalo. All rights reserved.";

    } else {
        
        // --- Navegación ---
        if (nameBrand) nameBrand.textContent = 'Cesia Arévalo';
        if (sloganBrand) sloganBrand.textContent = '“Soluciones que inspiran confianza.”';

        if (navHome) navHome.textContent = "Inicio";
        if (navAbout) navAbout.textContent = "Sobre mí";
        if (navSkills) navSkills.textContent = "Mis Habilidades";
        if (navProjects) navProjects.textContent = "Proyectos";
        if (navTestimonials) navTestimonials.textContent = "Testimonios"; 
        if (navContact) navContact.textContent = "Contacto"; 
        
        // --- Inicio ---
        if (homeText) homeText.textContent = "Hola soy Cesia Damaris Arévalo Romero, estudiante de Técnico en Ingeniería en Sistemas y Redes Informáticas de la Universidad Gerardo Barrios (UGB) Usulután. Apasionada por la tecnología y el mantenimiento de computadoras y siempre busco aprender para mejorar el uso de la tecnología.";

        
        // --- Sobre Mí ---
        if (aboutTitle) aboutTitle.textContent = "Sobre mí";
        if (aboutText) aboutText.textContent = "Soy estudiante de la carrera de Técnico en Ingeniería en Sistemas y Redes Informáticas de la Universidad Gerardo Barrios (UGB) Usulután. Me apasiona la tecnología y el aprendizaje continuo, con especial interés en el mantenimiento de computadoras, siempre buscando aprender y aportar soluciones prácticas e innovadoras.";
        if (btnCvText) btnCvText.textContent = "Descargar CV";

        if (recognitionTitle) recognitionTitle.textContent = "Reconocimientos";
        
        
        // --- Habilidades ---
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

        
        // --- Proyectos ---
        if (projectsTitle) projectsTitle.textContent = 'Proyectos';
        
        if (projectCompu1DescTitle) projectCompu1DescTitle.textContent = 'Descripción:';
        if (projectCompu1DescText) projectCompu1DescText.textContent = 'Software a la medida para la empresa que automatice y optimice algunas tareas que lleva a cabo la farmacia.';
        if (projectCompu1RoleTitle) projectCompu1RoleTitle.textContent = 'Rol:';
        if (projectCompu1RoleText) projectCompu1RoleText.textContent = 'Diseñadora y Documentadora.';
        if (projectCompu1TechTitle) projectCompu1TechTitle.textContent = 'Tecnologías usadas:';
        
        if (projectCase1DescTitle) projectCase1DescTitle.textContent = 'Descripción:';
        if (projectCase1DescText) projectCase1DescText.textContent = 'Aplicación móvil para proporcionar a las comunidades un espacio accesible donde los usuarios puedan reportar diversos problemas en su entorno.';
        if (projectCase1RoleTitle) projectCase1RoleTitle.textContent = 'Rol:';
        if (projectCase1RoleText) projectCase1RoleText.textContent = 'Diseñadora.';
        if (projectCase1TechTitle) projectCase1TechTitle.textContent = 'Tecnologías usadas:';

        if (projectBookmoodDescTitle) projectBookmoodDescTitle.textContent = 'Descripción:';
        if (projectBookmoodDescText) projectBookmoodDescText.textContent = 'BookMood es un sitio web de comercio electrónico (e-commerce) diseñado y creado para que los usuarios puedan buscar, comprar y recibir libros de manera rápida, confiable y personalizada. Ofrece una experiencia de compra sencilla, segura y atractiva.';
        if (projectBookmoodRoleTitle) projectBookmoodRoleTitle.textContent = 'Rol:';
        if (projectBookmoodRoleText) projectBookmoodRoleText.textContent = 'Scrum Master y Front end.';
        if (projectBookmoodTechTitle) projectBookmoodTechTitle.textContent = 'Tecnologías usadas:';
        
        // --- Testimonios ---
        if (testimonialsTitle) testimonialsTitle.textContent = 'Testimonios';
        
        if (professionCarla) professionCarla.textContent = 'Licenciada en Computación';
        if (testimonialCarlaText) testimonialCarlaText.textContent = 'Estudiante egresada de Técnico en Ingeniería en Sistemas de la Facultad de Ciencia y Tecnología de la Universidad Gerardo Barrios Centro Regional de Usulután, posee formación en las áreas de Ingeniería de Software I, II y Software Libre; muestra un aprendizaje importante en la adquisición de habilidades técnicas relacionadas a su carrera y para la vida; promueve valores como la resiliencia, creatividad, respeto y con una actuación ética. Desarrollando cualidades profesionales como una actitud positiva.';
        
        if (professionHerbert) professionHerbert.textContent = 'Licenciado en Computación';
        if (testimonialHerbertText) testimonialHerbertText.textContent = 'Ha mostrado respeto a los docentes y compañeros, completa dedicación a las actividades y proyectos de estudio. Demuestra poseer buenas habilidades, trabajo en equipo y gran sentido de responsabilidad.';
        
        if (professionOscar) professionOscar.textContent = 'Licenciado en Computación';
        if (testimonialOscarText) testimonialOscarText.textContent = 'Afirmo que ella es una persona de muy buena conducta, muy buena en su estudio, honrada, intachable, responsable en todos sus actos y dispuesta a compartir todos sus conocimientos a una sociedad en progreso.';
        
        if (professionMarvin) professionMarvin.textContent = 'Ingeniero en sistemas y redes informáticas';
        if (testimonialMarvinText) testimonialMarvinText.textContent = 'Es una persona responsable, estudiosa y buena compañera. Durante el tiempo que ha estado en la Universidad Gerardo Barrios Campus Usulután siempre ha mostrado un carácter colaborador, gran capacidad de trabajo y buena predisposición para trabajar en equipo. Su forma de pensar estratégica la hace muy apta para desarrollar cualquier tarea.';

        // --- Contacto ---
        if (contactTitle) contactTitle.textContent = 'Contacto';
        if (labelName) labelName.textContent = 'Nombre';
        if (labelEmail) labelEmail.textContent = 'Correo Electrónico';
        if (labelMessage) labelMessage.textContent = 'Mensaje';
        if (btnSubmit) btnSubmit.textContent = 'Enviar Mensaje';

        if (copyrightText) copyrightText.textContent = "© 2025 Cesia Arévalo. Todos los derechos reservados.";

    }
}

// Inicializar la sección
document.addEventListener('DOMContentLoaded', () => {
    // Asegura que solo la sección de inicio esté visible al cargar
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === 'inicio') {
            section.classList.add('active');
        }
    });
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}