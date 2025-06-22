document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    const header = document.querySelector('header');
    
    menuToggle.addEventListener('click', () => {
        // Toggle las clases active
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Si el menú está activo
        if (navMenu.classList.contains('active')) {
            body.style.overflow = 'hidden';
            // Asegurarse que el menú esté visible
            navMenu.style.visibility = 'visible';
            navMenu.style.transform = 'translateX(0)';
            navMenu.style.opacity = '1';
            header.style.backgroundColor = 'transparent';
        } else {
            body.style.overflow = '';
            // Retrasar la ocultación del menú hasta que termine la animación
            setTimeout(() => {
                navMenu.style.visibility = 'hidden';
            }, 400); // Este tiempo debe coincidir con la duración de la transición en CSS
            header.style.backgroundColor = 'var(--color-primario)';
        }
    });

    // Cerrar el menú al hacer clic en un enlace (solo en móvil)
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            // Solo aplicar el comportamiento de cierre en dispositivos móviles
            if (window.innerWidth <= 768) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                body.style.overflow = '';
                header.style.backgroundColor = 'var(--color-primario)';
                
                // Retrasar la ocultación del menú
                setTimeout(() => {
                    navMenu.style.visibility = 'hidden';
                }, 400);
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const typed = new Typed('.typed', {
        strings: [
            'Desarrollador Full Stack',
            'Python Developer',
            'Flutter Developer',
            'Web Developer',
            'Software Engineer'
        ],
        typeSpeed: 75,
        backSpeed: 75,
        backDelay: 2000,
        loop: true
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.querySelector('.close-lightbox');

    // Abrir lightbox al hacer clic en una imagen de proyecto
    document.querySelectorAll('.proyecto-imagen img').forEach(img => {
        img.addEventListener('click', function() {
            lightboxImg.src = this.src;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevenir scroll
        });
    });

    // Cerrar lightbox al hacer clic en el botón de cerrar o fuera de la imagen
    lightbox.addEventListener('click', function(e) {
        if (e.target !== lightboxImg) {
            lightbox.classList.remove('active');
            document.body.style.overflow = ''; // Restaurar scroll
        }
    });

    // Cerrar con la tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Datos adicionales de formación
const formacionAdicional = [
    {
        titulo: "Desarrollo Backend con Python",
        lugar: "Platzi",
        fecha: "2021",
        tags: [
            { icon: "fab fa-python", nombre: "Python" },
            { icon: "fab fa-django", nombre: "Django" },
            { icon: "fas fa-database", nombre: "PostgreSQL" }
        ]
    },
    {
        titulo: "Cloud Computing & DevOps",
        lugar: "AWS Academy",
        fecha: "2021",
        tags: [
            { icon: "fab fa-aws", nombre: "AWS" },
            { icon: "fas fa-cloud", nombre: "Cloud" },
            { icon: "fab fa-docker", nombre: "Docker" },
            { icon: "fab fa-jenkins", nombre: "Jenkins" }
        ]
    },
    {
        titulo: "Desarrollo de Aplicaciones Móviles",
        lugar: "Google Developer Training",
        fecha: "2020",
        tags: [
            { icon: "fab fa-android", nombre: "Android" },
            { icon: "fab fa-kotlin", nombre: "Kotlin" },
            { icon: "fab fa-java", nombre: "Java" },
            { icon: "fas fa-mobile-alt", nombre: "Flutter" }
        ]
    },
    {
        titulo: "Desarrollo Web Full Stack",
        lugar: "Udemy",
        fecha: "2020",
        tags: [
            { icon: "fab fa-react", nombre: "React" },
            { icon: "fab fa-node", nombre: "Node.js" },
            { icon: "fab fa-vuejs", nombre: "Vue.js" },
            { icon: "fab fa-sass", nombre: "Sass" }
        ]
    },
    {
        titulo: "Desarrollo Web Frontend",
        lugar: "freeCodeCamp",
        fecha: "2019",
        tags: [
            { icon: "fab fa-html5", nombre: "HTML5" },
            { icon: "fab fa-css3-alt", nombre: "CSS3" },
            { icon: "fab fa-js", nombre: "JavaScript" },
            { icon: "fab fa-bootstrap", nombre: "Bootstrap" }
        ]
    },
    {
        titulo: "Administración de Sistemas Linux",
        lugar: "Linux Professional Institute",
        fecha: "2019",
        tags: [
            { icon: "fab fa-linux", nombre: "Linux" },
            { icon: "fas fa-terminal", nombre: "Bash" },
            { icon: "fas fa-server", nombre: "Sistemas" }
        ]
    },
    {
        titulo: "Certificación en Redes CCNA",
        lugar: "Cisco",
        fecha: "2019",
        tags: [
            { icon: "fas fa-network-wired", nombre: "Redes" },
            { icon: "fas fa-server", nombre: "Switching" },
            { icon: "fas fa-route", nombre: "Routing" }
        ]
    },
    {
        titulo: "Ciberseguridad y Ethical Hacking",
        lugar: "Cisco Networking Academy",
        fecha: "2018",
        tags: [
            { icon: "fas fa-shield-alt", nombre: "Ethical Hacking" },
            { icon: "fas fa-lock", nombre: "Pentesting" },
            { icon: "fab fa-linux", nombre: "Linux" },
            { icon: "fas fa-network-wired", nombre: "Redes" }
        ]
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const verMasBtn = document.getElementById('verMasBtn');
    const verMenosBtn = document.getElementById('verMenosBtn');
    const timeline = document.getElementById('timeline');
    let currentIndex = 0;
    let elementosOriginales = [];

    // Guardar los elementos originales
    timeline.querySelectorAll('.timeline-item').forEach(item => {
        elementosOriginales.push(item);
    });

    verMasBtn.addEventListener('click', function() {
        // Comportamiento de "Ver más"
        verMasBtn.classList.add('loading');
        verMasBtn.querySelector('i').classList.remove('fa-chevron-down');
        verMasBtn.querySelector('i').classList.add('fa-spinner');

        setTimeout(() => {
            // Agregar nuevos elementos
            for(let i = 0; i < 2 && currentIndex < formacionAdicional.length; i++) {
                const item = formacionAdicional[currentIndex];
                const timelineItem = createTimelineItem(item);
                timelineItem.classList.add('adicional'); // Marcar como elemento adicional
                timeline.appendChild(timelineItem);
                currentIndex++;
            }

            // Animar entrada de nuevos elementos
            const newItems = timeline.querySelectorAll('.timeline-item:not(.visible)');
            setTimeout(() => {
                newItems.forEach(item => item.classList.add('visible'));
            }, 50);

            // Actualizar estado del botón
            verMasBtn.classList.remove('loading');
            verMasBtn.querySelector('i').classList.remove('fa-spinner');
            verMasBtn.querySelector('i').classList.add('fa-chevron-down');

            // Mostrar botón de "Ver menos"
            verMenosBtn.classList.remove('oculto');

            // Ocultar botón de "Ver más" si no hay más elementos
            if (currentIndex >= formacionAdicional.length) {
                verMasBtn.style.display = 'none';
            }
        }, 800);
    });

    verMenosBtn.addEventListener('click', function() {
        // Comportamiento de "Ver menos"
        verMenosBtn.classList.add('loading');
        verMenosBtn.querySelector('i').classList.remove('fa-chevron-up');
        verMenosBtn.querySelector('i').classList.add('fa-spinner');

        setTimeout(() => {
            // Eliminar elementos adicionales con animación
            const elementosAdicionales = timeline.querySelectorAll('.timeline-item.adicional');
            elementosAdicionales.forEach(elemento => {
                elemento.style.opacity = '0';
                elemento.style.transform = 'translateY(20px)';
                setTimeout(() => elemento.remove(), 500);
            });

            // Restaurar estado inicial
            setTimeout(() => {
                verMenosBtn.classList.remove('loading');
                verMenosBtn.querySelector('i').classList.remove('fa-spinner');
                verMenosBtn.querySelector('i').classList.add('fa-chevron-up');
                verMenosBtn.classList.add('oculto');
                
                // Mostrar botón de "Ver más"
                verMasBtn.style.display = 'block';
                currentIndex = 0; // Reiniciar el índice
            }, 500);
        }, 800);
    });
});

function createTimelineItem(data) {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    timelineItem.style.opacity = '0';
    timelineItem.style.transform = 'translateY(20px)';
    
    timelineItem.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-content">
            <h3>${data.titulo}</h3>
            <p class="timeline-place">${data.lugar}</p>
            <p class="timeline-date">${data.fecha}</p>
            <div class="tags-container">
                ${data.tags.map(tag => `
                    <span class="tag">
                        <i class="${tag.icon}"></i> ${tag.nombre}
                    </span>
                `).join('')}
            </div>
        </div>
    `;

    // Agregar transición suave
    setTimeout(() => {
        timelineItem.style.transition = 'all 0.5s ease';
        timelineItem.style.opacity = '1';
        timelineItem.style.transform = 'translateY(0)';
    }, 50);

    return timelineItem;
}

// Agregar al inicio del archivo, junto con las otras constantes
const experienciasAdicionales = [
    {
        titulo: "Full Stack Developer - WDR Project",
        empresa: "Peru Inka",
        ubicacion: "Lima, Perú (Remoto)",
        periodo: "2022 - 2023",
        logo: "/Components/IMG/WDR.jpeg",
        logros: [
            "Desarrollo de WDR (Web Document Register), una aplicación web completa para gestión y edición de documentos",
            "Diseño e implementación de API RESTful para la gestión documental y autenticación",
            "Desarrollo de sistema de firmas digitales con validación en backend",
            "Integración con Google Drive API para almacenamiento seguro de documentos",
            "Implementación de microservicios para notificaciones por correo y seguimiento de documentos"
        ],
        tecnologias: [
            { icon: "fab fa-react", nombre: "React" },
            { icon: "fab fa-node", nombre: "Node.js" },
            { icon: "fab fa-google-drive", nombre: "Google Drive API" },
            { icon: "fas fa-database", nombre: "MongoDB" },
            { icon: "fas fa-server", nombre: "Express.js" }
        ]
    },
    // Puedes agregar más experiencias aquí
];

// Agregar después de los event listeners existentes
document.addEventListener('DOMContentLoaded', function() {
    const verMasExpBtn = document.getElementById('verMasExpBtn');
    const verMenosExpBtn = document.getElementById('verMenosExpBtn');
    const timelineExp = document.getElementById('experiencia-timeline');
    let currentExpIndex = 0;

    verMasExpBtn.addEventListener('click', function() {
        verMasExpBtn.classList.add('loading');
        verMasExpBtn.querySelector('i').classList.remove('fa-chevron-down');
        verMasExpBtn.querySelector('i').classList.add('fa-spinner');

        setTimeout(() => {
            for(let i = 0; i < 2 && currentExpIndex < experienciasAdicionales.length; i++) {
                const exp = experienciasAdicionales[currentExpIndex];
                const expItem = createExperienciaItem(exp);
                expItem.classList.add('adicional');
                timelineExp.appendChild(expItem);
                currentExpIndex++;
            }

            const newItems = timelineExp.querySelectorAll('.experiencia-item:not(.visible)');
            setTimeout(() => {
                newItems.forEach(item => item.classList.add('visible'));
            }, 50);

            verMasExpBtn.classList.remove('loading');
            verMasExpBtn.querySelector('i').classList.remove('fa-spinner');
            verMasExpBtn.querySelector('i').classList.add('fa-chevron-down');

            verMenosExpBtn.style.display = 'inline-flex';
            verMenosExpBtn.classList.remove('oculto');

            if (currentExpIndex >= experienciasAdicionales.length) {
                verMasExpBtn.style.display = 'none';
            }
        }, 800);
    });

    verMenosExpBtn.addEventListener('click', function() {
        verMenosExpBtn.classList.add('loading');
        verMenosExpBtn.querySelector('i').classList.remove('fa-chevron-up');
        verMenosExpBtn.querySelector('i').classList.add('fa-spinner');

        setTimeout(() => {
            const elementosAdicionales = timelineExp.querySelectorAll('.experiencia-item.adicional');
            elementosAdicionales.forEach(elemento => {
                elemento.style.opacity = '0';
                elemento.style.transform = 'translateY(20px)';
                setTimeout(() => elemento.remove(), 500);
            });

            setTimeout(() => {
                verMenosExpBtn.classList.remove('loading');
                verMenosExpBtn.querySelector('i').classList.remove('fa-spinner');
                verMenosExpBtn.querySelector('i').classList.add('fa-chevron-up');
                verMenosExpBtn.classList.add('oculto');
                
                // Ocultar completamente el botón de ver menos
                verMenosExpBtn.style.display = 'none';
                
                // Mostrar botón de ver más
                verMasExpBtn.style.display = 'block';
                currentExpIndex = 0;
            }, 500);
        }, 800);
    });
});

function createExperienciaItem(data) {
    const expItem = document.createElement('div');
    expItem.className = 'experiencia-item';
    expItem.style.opacity = '0';
    expItem.style.transform = 'translateY(20px)';
    
    expItem.innerHTML = `
        <div class="experiencia-header">
            <div class="experiencia-empresa">
                <img src="${data.logo}" alt="${data.empresa}" class="empresa-logo">
                <div class="empresa-info">
                    <h3>${data.titulo}</h3>
                    <p class="empresa-ubicacion">${data.ubicacion}</p>
                </div>
            </div>
            <div class="experiencia-periodo">
                <p>${data.periodo}</p>
            </div>
        </div>
        <p class="experiencia-posicion">${data.titulo}</p>
        <ul class="experiencia-logros">
            ${data.logros.map(logro => `<li>${logro}</li>`).join('')}
        </ul>
        <div class="experiencia-tecnologias">
            ${data.tecnologias.map(tech => `
                <span class="tech-tag">
                    <i class="${tech.icon}"></i> ${tech.nombre}
                </span>
            `).join('')}
        </div>
    `;

    setTimeout(() => {
        expItem.style.transition = 'all 0.5s ease';
        expItem.style.opacity = '1';
        expItem.style.transform = 'translateY(0)';
    }, 50);

    return expItem;
}

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Añadir clase de loading al botón
            const submitBtn = this.querySelector('.btn-enviar');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;
            
            // Simular envío del formulario (aquí deberías implementar tu lógica de envío real)
            setTimeout(() => {
                // Restaurar el botón
                submitBtn.innerHTML = '<span>Mensaje Enviado</span> <i class="fas fa-check"></i>';
                submitBtn.style.backgroundColor = '#4CAF50';
                
                // Limpiar el formulario
                contactForm.reset();
                
                // Restaurar el botón después de 3 segundos
                setTimeout(() => {
                    submitBtn.innerHTML = '<span>Enviar Mensaje</span> <i class="fas fa-paper-plane"></i>';
                    submitBtn.style.backgroundColor = '';
                    submitBtn.disabled = false;
                }, 3000);
            }, 2000);
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const filtros = document.querySelectorAll('.filtro-btn');
    const proyectos = document.querySelectorAll('.proyecto-card');
    const verMasBtn = document.getElementById('verMasProyectosBtn');
    const verMenosBtn = document.getElementById('verMenosProyectosBtn');
    const proyectosPorPagina = 6;

    // Función para mostrar/ocultar botones Ver más/menos
    const toggleVerMasBotones = (mostrar) => {
        verMasBtn.style.display = mostrar ? 'block' : 'none';
        verMenosBtn.style.display = 'none';
    };

    // Función para gestionar la visualización de proyectos
    const gestionarVisualizacionProyectos = (categoriaSeleccionada) => {
        let proyectosVisibles = 0;
        
        proyectos.forEach(proyecto => {
            const categoriaProyecto = proyecto.getAttribute('data-categoria');
            proyecto.classList.remove('proyecto-adicional', 'oculto');
            proyecto.style.opacity = '0';
            proyecto.style.transform = 'scale(0.8)';

            if (categoriaSeleccionada === 'todos') {
                // En "todos", mostrar solo los primeros 6 proyectos
                if (proyectosVisibles < proyectosPorPagina) {
                    proyecto.classList.remove('oculto');
                    proyectosVisibles++;
                } else {
                    proyecto.classList.add('proyecto-adicional', 'oculto');
                }
            } else if (categoriaSeleccionada === categoriaProyecto) {
                // En categorías específicas, mostrar todos los proyectos
                proyecto.classList.remove('oculto');
            } else {
                proyecto.classList.add('oculto');
            }

            if (!proyecto.classList.contains('oculto')) {
                setTimeout(() => {
                    proyecto.style.opacity = '1';
                    proyecto.style.transform = 'scale(1)';
                }, 10);
            }
        });

        // Mostrar/ocultar botones según la categoría
        toggleVerMasBotones(categoriaSeleccionada === 'todos' && document.querySelectorAll('.proyecto-card.proyecto-adicional').length > 0);
    };

    // Event listeners para los filtros
    filtros.forEach(filtro => {
        filtro.addEventListener('click', () => {
            filtros.forEach(f => f.classList.remove('activo'));
            filtro.classList.add('activo');
            const categoriaSeleccionada = filtro.getAttribute('data-filter');
            gestionarVisualizacionProyectos(categoriaSeleccionada);
        });
    });

    // Event listener para el botón "Ver más"
    verMasBtn.addEventListener('click', function() {
        verMasBtn.classList.add('loading');
        verMasBtn.querySelector('i').classList.remove('fa-chevron-down');
        verMasBtn.querySelector('i').classList.add('fa-spinner');

        setTimeout(() => {
            const proyectosOcultos = document.querySelectorAll('.proyecto-adicional.oculto');
            proyectosOcultos.forEach(proyecto => {
                proyecto.classList.remove('oculto');
                setTimeout(() => {
                    proyecto.style.opacity = '1';
                    proyecto.style.transform = 'scale(1)';
                }, 50);
            });

            verMasBtn.classList.remove('loading');
            verMasBtn.style.display = 'none';
            verMenosBtn.style.display = 'block';
        }, 800);
    });

    // Event listener para el botón "Ver menos"
    verMenosBtn.addEventListener('click', function() {
        verMenosBtn.classList.add('loading');
        verMenosBtn.querySelector('i').classList.remove('fa-chevron-up');
        verMenosBtn.querySelector('i').classList.add('fa-spinner');

        setTimeout(() => {
            const proyectosVisibles = Array.from(document.querySelectorAll('.proyecto-card')).filter(p => !p.classList.contains('oculto'));
            proyectosVisibles.forEach((proyecto, index) => {
                if (index >= proyectosPorPagina) {
                    proyecto.style.opacity = '0';
                    proyecto.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        proyecto.classList.add('oculto');
                    }, 300);
                }
            });

            setTimeout(() => {
                verMenosBtn.classList.remove('loading');
                verMenosBtn.style.display = 'none';
                verMasBtn.style.display = 'block';
            }, 500);
        }, 800);
    });

    // Inicializar con la vista "todos"
    gestionarVisualizacionProyectos('todos');
});
