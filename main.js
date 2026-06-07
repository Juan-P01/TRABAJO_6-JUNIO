// Banco de datos con los 30 términos obligatorios para la tabla bilingüe
const glossaryData = [
    { en: "Artificial Intelligence", es: "Inteligencia Artificial", defEs: "Sistemas informáticos que simulan procesos cognitivos humanos.", defEn: "Computer systems that simulate human cognitive processes." },
    { en: "Automation", es: "Automatización", defEs: "Uso de tecnologías para ejecutar tareas sin intervención humana.", defEn: "The use of technology to execute tasks without human intervention." },
    { en: "User Interface (UI)", es: "Interfaz de Usuario", defEs: "Elementos visuales con los que el jugador interactúa en pantalla.", defEn: "Visual elements that the player interacts with on the screen." },
    { en: "User Experience (UX)", es: "Experiencia de Usuario", defEs: "Sensación y facilidad de uso que experimenta el usuario.", defEn: "The overall feeling and ease of use experienced by the user." },
    { en: "Machine Learning", es: "Aprendizaje Automático", defEs: "Rama de la IA que permite a los sistemas aprender de datos.", defEn: "A branch of AI that allows systems to learn from data." },
    { en: "Scalability", es: "Escalabilidad", defEs: "Capacidad de un sistema para crecer y soportar más carga informática.", defEn: "The capacity of a system to grow and handle increased software load." },
    { en: "Localization", es: "Localización", defEs: "Adaptación cultural, idiomática y regional de un software o videojuego.", defEn: "The cultural, linguistic, and regional adaptation of software or games." },
    { en: "Cognitive Brain", es: "Cerebro Cognitivo", defEs: "Núcleo lógico de un agente de IA encargado de procesar decisiones.", defEn: "The logical core of an AI agent responsible for making decisions." },
    { en: "Auto Layout", es: "Diseño Automático", defEs: "Herramienta de Figma para crear estructuras responsivas que se ajustan solas.", defEn: "Figma tool used to create dynamic, self-adjusting responsive layouts." },
    { en: "Variants", es: "Variantes", defEs: "Propiedad en Figma que agrupa estados de un mismo componente bajo un solo nombre.", defEn: "A Figma property that groups states of the same component under one name." },
    { en: "HUD Stats", es: "Estadísticas de HUD", defEs: "Indicadores en pantalla sobre recursos del jugador como salud o energía.", defEn: "On-screen indicators of player resources such as health or energy." },
    { en: "Foundations", es: "Cimientos", defEs: "Reglas visuales base del diseño como paletas de colores y tipografías.", defEn: "Base visual rules of design such as color palettes and typographies." },
    { en: "Action Prompts", es: "Indicadores de Acción", defEs: "Señales visuales que invitan al usuario a interactuar con un comando.", defEn: "Visual cues inviting the user to interact with a specific command." },
    { en: "Asset Optimization", es: "Optimización de Activos", defEs: "Reducción del peso de archivos visuales para mejorar rendimiento.", defEn: "Reducing the file size of visual assets to enhance performance." },
    { en: "Cloud Computing", es: "Computación en la Nube", defEs: "Servicios y recursos informáticos bajo demanda ofrecidos por Internet.", defEn: "On-demand computing services and resources offered over the Internet." },
    { en: "Big Data", es: "Datos Masivos", defEs: "Conjuntos de datos extremadamente grandes y complejos de analizar.", defEn: "Extremely large and complex datasets difficult to analyze." },
    { en: "Cybersecurity", es: "Ciberseguridad", defEs: "Práctica de proteger sistemas y redes informáticas contra ataques digitales.", defEn: "The practice of protecting systems and networks from digital attacks." },
    { en: "Blockchain", es: "Cadena de Bloques", defEs: "Registro compartido e inmutable para la seguridad de transferencias.", defEn: "A shared, immutable ledger for securing digital data transfers." },
    { en: "Mid-core Gaming", es: "Videojuegos Mid-core", defEs: "Juegos que equilibran accesibilidad casual con profundidad sistémica.", defEn: "Games balancing casual accessibility with systemic depth." },
    { en: "Bilingual Documentation", es: "Documentación Bilingüe", defEs: "Registro técnico redactado de forma paralela en dos idiomas.", defEn: "Technical records written in parallel across two distinct languages." },
    { en: "Software Ethics", es: "Ética del Software", defEs: "Principios morales que guían el desarrollo y uso de tecnologías.", defEn: "Moral principles guiding technology development and usage." },
    { en: "Rigging", es: "Esqueleto de Animación", defEs: "Creación de una estructura ósea digital para articular y mover un modelo.", defEn: "Creating a digital bone structure to articulate and move a 3D model." },
    { en: "Sprites", es: "Sprites / Mapas de Bits", defEs: "Imágenes bidimensionales integradas en escenas u objetos de un juego.", defEn: "Two-dimensional images integrated into game scenes or elements." },
    { en: "Testing Automation", es: "Automatización de Pruebas", defEs: "Uso de scripts de software para buscar fallos de código automáticamente.", defEn: "Using software scripts to scan for code bugs automatically." },
    { en: "Responsive Design", es: "Diseño Responsivo", defEs: "Habilidad de una interfaz para adaptarse a pantallas móviles o computadoras.", defEn: "Ability of an interface to adapt properly to mobile or desktop screens." },
    { en: "FrontEnd Technologies", es: "Tecnologías FrontEnd", defEs: "Herramientas de desarrollo enfocadas puramente en el lado del cliente.", defEn: "Development tools focused entirely on the client-side user experience." },
    { en: "Dark Patterns", es: "Patrones Oscuros", defEs: "Diseños malintencionados creados para manipular las decisiones del usuario.", defEn: "Deceptive interfaces crafted to trick or manipulate user decisions." },
    { en: "Marketplace Integration", es: "Integración de Mercado", defEs: "Sistemas digitales para comercio e intercambio de bienes virtuales.", defEn: "Digital systems for trading and exchanging virtual assets." },
    { en: "Choreography", es: "Coreografía Visual", defEs: "Orden y ritmo secuencial con el que aparecen los elementos gráficos.", defEn: "The structural order and pacing of graphic elements appearing on screen." },
    { en: "Professional Responsibility", es: "Responsabilidad Profesional", defEs: "Compromiso ético del programador ante el impacto social de su código.", defEn: "Ethical commitment of a programmer regarding the social impact of their code." }
];

let currentLang = 'es';

document.addEventListener("DOMContentLoaded", () => {
    // Renderizado inicial del glosario en español
    renderGlossary();
    
    const toggleBtn = document.getElementById("lang-toggle");
    
    toggleBtn.addEventListener("click", () => {
        // Alternar el estado idiomático
        currentLang = currentLang === 'es' ? 'en' : 'es';
        
        // Transformación del propio botón (Cambio cíclico mutuo)
        toggleBtn.querySelector(".lang-text").textContent = currentLang === 'es' ? 'English' : 'Español';
        
        // Buscar y conmutar todos los nodos con propiedades de idiomas mapeadas
        document.querySelectorAll("[data-es]").forEach(el => {
            const translation = el.getAttribute(`data-${currentLang}`);
            if (translation) {
                el.textContent = translation;
            }
        });

        // Actualizar dinámicamente las definiciones internas de la tabla
        renderGlossary();
    });
});

function renderGlossary() {
    const tbody = document.getElementById("glossary-tbody");
    if (!tbody) return;
    
    tbody.innerHTML = "";
    
    glossaryData.forEach(item => {
        const tr = document.createElement("tr");
        
        const tdEn = document.createElement("td");
        tdEn.textContent = item.en;
        
        const tdEs = document.createElement("td");
        tdEs.textContent = item.es;
        
        const tdDef = document.createElement("td");
        tdDef.textContent = currentLang === 'es' ? item.defEs : item.defEn;
        
        tr.appendChild(tdEn);
        tr.appendChild(tdEs);
        tr.appendChild(tdDef);
        tbody.appendChild(tr);
    });
}