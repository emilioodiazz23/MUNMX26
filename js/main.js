// Elementos del DOM
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const btnStart = document.getElementById('btn-start');
const btnBack = document.getElementById('btn-back');
const btnContinue = document.getElementById('btn-continue');
const btnSelectAgain = document.getElementById('btn-select-again');
const profileButtons = document.querySelectorAll('.btn-profile');
const landing = document.getElementById('landing');
const profileSelection = document.getElementById('profile-selection');
const profileConfirmation = document.getElementById('profile-confirmation');
const confirmationTitle = document.getElementById('confirmation-title');
const confirmationMessage = document.getElementById('confirmation-message');

// Elementos de comités
const tabButtons = document.querySelectorAll('.tab-btn');
const comitesLevels = document.querySelectorAll('.comites-level');

// Elementos de botones volver
const btnBackComites = document.getElementById('btn-back-comites');
const btnBackComitesMain = document.getElementById('btn-back-comites-main');
const btnBackMesa = document.getElementById('btn-back-mesa');
const btnBackSecretaria = document.getElementById('btn-back-secretaria');
const btnBackHorarios = document.getElementById('btn-back-horarios');
const btnBackGaleria = document.getElementById('btn-back-galeria');

// Elementos de botones galería
const btnGuiaRedaccion = document.getElementById('btn-guia-redaccion');
const btnProcedimientos = document.getElementById('btn-procedimientos');

// Almacenar perfil seleccionado
let selectedProfile = null;

// Mapeo de perfiles a textos descriptivos
const profileTexts = {
    'delegado-prepa': {
        title: '¡Bienvenido, Delegado de Preparatoria!',
        message: 'Eres el representante de tu institución en MUNMX 2026. Prepárate para debatir en asambleas generales.'
    },
    'delegado-sec': {
        title: '¡Bienvenido, Delegado de Secundaria!',
        message: 'Eres el representante de tu escuela en MUNMX 2026. Listos para participar activamente en el modelo.'
    },
    'mesa': {
        title: '¡Bienvenido, Miembro de Mesa!',
        message: 'Tu rol es crucial para coordinar los debates y mantener el orden durante MUNMX 2026.'
    },
    'secretaria': {
        title: '¡Bienvenido, Secretaría General!',
        message: 'Administrarás la conferencia y gestionarás los recursos de MUNMX 2026. ¡Liderazgo en acción!'
    }
};

// Función para cambiar de sección
function switchSection(sectionId) {
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// Función para mostrar pantalla de perfil
function showProfileSelection() {
    landing.style.display = 'none';
    profileSelection.style.display = 'block';
    profileConfirmation.style.display = 'none';
}

// Función para volver a la portada
function backToLanding() {
    landing.style.display = 'block';
    profileSelection.style.display = 'none';
    profileConfirmation.style.display = 'none';
}

// Función para mostrar confirmación
function showConfirmation(profile) {
    selectedProfile = profile;
    const profileData = profileTexts[profile];
    confirmationTitle.textContent = profileData.title;
    confirmationMessage.textContent = profileData.message;
    
    profileSelection.style.display = 'none';
    profileConfirmation.style.display = 'block';
}

// Función para continuar después de confirmación
function continueAfterConfirmation() {
    alert(`Perfil ${selectedProfile} registrado. Entrando al modelo...`);
}

// Event Listeners - Navegación principal
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');
        switchSection(sectionId);
    });
});

// Event Listeners - Botones en landing
btnStart.addEventListener('click', () => {
    landing.style.display = 'none';
    document.getElementById('comites-main').style.display = 'block';
});
btnBack.addEventListener('click', backToLanding);
btnContinue.addEventListener('click', continueAfterConfirmation);
btnSelectAgain.addEventListener('click', showProfileSelection);

// Event Listeners - Selección de perfil
profileButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const profile = button.getAttribute('data-profile');
        showConfirmation(profile);
    });
});

// Event Listeners - Tabs de comités
tabButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const level = button.getAttribute('data-level');
        comitesLevels.forEach(level_div => level_div.classList.remove('active'));
        document.getElementById(`comites-${level}`).classList.add('active');
    });
});

// Event Listeners - Botones volver
if (btnBackComitesMain) {
    btnBackComitesMain.addEventListener('click', backToLanding);
}

if (btnBackComites) {
    btnBackComites.addEventListener('click', () => switchSection('inicio'));
}

if (btnBackMesa) {
    btnBackMesa.addEventListener('click', () => switchSection('inicio'));
}

if (btnBackSecretaria) {
    btnBackSecretaria.addEventListener('click', () => switchSection('inicio'));
}

if (btnBackHorarios) {
    btnBackHorarios.addEventListener('click', () => switchSection('inicio'));
}

if (btnBackGaleria) {
    btnBackGaleria.addEventListener('click', () => switchSection('inicio'));
}

// Event Listeners - Botones de galería
if (btnGuiaRedaccion) {
    btnGuiaRedaccion.addEventListener('click', () => {
        alert('La guía de redacción será descargada pronto. Asegúrate de seguir el formato estándar de resoluciones en MUN.');
        // Aquí puedes agregar el enlace a descargar un PDF
        // window.location.href = 'ruta/a/guia-redaccion.pdf';
    });
}

if (btnProcedimientos) {
    btnProcedimientos.addEventListener('click', () => {
        alert('Los procedimientos serán proporcionados pronto. Familiarízate con las reglas del modelo.');
        // Aquí puedes agregar el enlace a descargar un PDF
        // window.location.href = 'ruta/a/procedimientos.pdf';
    });
}

// Scroll suave y efectos visuales adicionales
document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    }
});

// Inicializar
window.addEventListener('load', () => {
    switchSection('inicio');
    console.log('MUNMX 2026 - ¡Bienvenido al Modelo de Naciones Unidas!');
});
