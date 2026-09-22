export type Lang = 'es' | 'en'

export const ui = {
  es: {
    // ── Navbar ──────────────────────────────────────────────
    nav: {
      about:       'Sobre mí',
      skills:      'Habilidades',
      experience:  'Experiencia',
      projects:    'Proyectos',
      education:   'Educación',
      community:   'Comunidad',
      contact:     'Contacto',
    },

    // ── Hero ────────────────────────────────────────────────
    hero: {
      greeting:    'Hola, soy',
      name:        'David Pillco',
      title:       'Ingeniero en Computación | IA, Sistemas & Desarrollo de Software',
      bio:         'Ingeniero en Ciencias de la Computación con experiencia internacional en sistemas, redes y desarrollo de software. Actualmente cursando un Máster en Sistemas Interactivos Inteligentes en la UAM con beca de excelencia, donde investigo aplicaciones de IA en educación y colaboro en publicaciones científicas. Miembro activo de GDG on Campus UAM. Me muevo bien planificando desde cero o respondiendo ante lo inesperado — y creo que la tecnología se construye mejor en equipo.',
      btnContact:  'Contáctame',
      btnCV:       'Descargar CV',
      location:    'Madrid, España',
      badge1:      'IT Engineer',
      badge2:      'GDG on Campus UAM',
    },

    // ── About ───────────────────────────────────────────────
    about: {
      title:   'Sobre mí',
      body:    'Ingeniero en Ciencias de la Computación con experiencia internacional en sistemas, redes y desarrollo de software. Formado en Ecuador, Budapest y Madrid, combino bases técnicas sólidas con habilidades en programación, análisis de datos e inteligencia artificial. Actualmente cursando un Máster en Sistemas Interactivos Inteligentes en la UAM con beca de excelencia, con enfoque en IA aplicada a la educación y sistemas adaptativos.',
      stat1:   { value: '3+',  label: 'años de experiencia' },
      stat2:   { value: '3',   label: 'países' },
      stat3:   { value: '4',   label: 'certificaciones' },
    },

    // ── Skills ──────────────────────────────────────────────
    skills: {
      title: 'Habilidades',
      categories: [
        { name: 'Sistemas & OS',    tags: ['Windows Server', 'Linux', 'macOS', 'Virtualización'],                                    level: 90 },
        { name: 'Redes',            tags: ['Cisco', 'TCP/IP', 'LAN/WAN', 'VPN', 'RDP'],                                             level: 80 },
        { name: 'Programación',     tags: ['Python', 'SQL', 'C++', 'Shell Scripting', 'ROS2', 'JavaScript'],                         level: 75 },
        { name: 'IA & Data',        tags: ['Machine Learning', 'TensorFlow', 'OpenCV', 'scikit-learn', 'LLMs', 'NLP'],               level: 75 },
        { name: 'Herramientas IT',  tags: ['Jira', 'GLPI', 'TeamViewer', 'AnyDesk', 'Zabbix'],                                      level: 85 },
        { name: 'Desarrollo Web',   tags: ['Astro', 'Tailwind CSS', 'HTML', 'Git', 'GitHub Actions'],                               level: 70 },
      ],
    },

    // ── Experience ──────────────────────────────────────────
    experience: {
      title: 'Experiencia',
      jobs: [
        {
          role:     'Technical Support Engineer',
          company:  'Coopmego',
          period:   'Ene 2024 – Jul 2024',
          location: 'Ecuador',
          bullets: [
            'Gestioné instalación, configuración y mantenimiento de hardware y software para usuarios internos.',
            'Soporte técnico Nivel 1 y 2 con herramientas remotas (TeamViewer, AnyDesk) y ticketing (GLPI, Jira).',
            'Colaboré con equipos de desarrollo en despliegue de actualizaciones y resolución de problemas de integración.',
          ],
        },
        {
          role:     'IT Intern — Database & Software Support',
          company:  'UTPL',
          period:   'Oct 2022 – Abr 2023',
          location: 'Ecuador',
          bullets: [
            'Gestión y actualización de bases de datos garantizando la integridad de los datos.',
            'Soporte en optimización de software de gestión interna, mejorando la eficiencia operativa.',
          ],
        },
        {
          role:     'Network Maintenance Technician',
          company:  'Telydata Telecomunicaciones',
          period:   'Oct 2019 – Dic 2022',
          location: 'Ecuador',
          bullets: [
            'Instalación y configuración de infraestructura de red (routers, switches, cableado).',
            'Diagnóstico remoto y presencial de problemas de conectividad, reduciendo tiempos de inactividad.',
            'Monitoreo de infraestructura para identificar riesgos y garantizar cumplimiento normativo.',
          ],
        },
      ],
    },

    // ── Projects ────────────────────────────────────────────
    projects: {
      title: 'Proyectos',
      items: [
        {
          name:     'ROS2 Robot Dog — Full Software Stack',
          origin:   'Máster UAM',
          desc:     'Sistema de software completo para un robot perro físico. Arquitectura multi-nodo en ROS2 con visión por computadora, evasión autónoma de obstáculos, control por gamepad y monitoreo de batería. Desplegado en Raspberry Pi con Docker.',
          tags:     ['ROS2', 'Python', 'OpenCV', 'Docker', 'Raspberry Pi', 'GPIO'],
          github:   'https://github.com/DanielAlonsoPardo/robo-lad',
        },
        {
          name:     'CNN Face Gender Classification',
          origin:   'Máster UAM',
          desc:     'Red neuronal convolucional para clasificar géneros a partir de imágenes faciales usando el dataset LFW. Comparé arquitectura propia desde cero vs. Transfer Learning, evaluando con métricas de precisión y curvas ROC.',
          tags:     ['Keras', 'TensorFlow', 'scikit-learn', 'Python', 'CNN'],
          github:   'https://github.com/davidpill47/cnn-face-gender-classification',
        },
        {
          name:     'Seoul Bike Sharing Demand Prediction',
          origin:   'Máster UAM',
          desc:     'Modelo predictivo de demanda horaria de bicicletas en Seúl integrando variables climáticas y de calendario. Comparé modelos (Ridge, MLP, SVR) con validación cruzada y optimización de hiperparámetros.',
          tags:     ['scikit-learn', 'pandas', 'seaborn', 'Python', 'ML'],
          github:   'https://github.com/davidpill47/seoul-bike-sharing-prediction',
        },
        {
          name:     'Automobile Dataset Analysis',
          origin:   'Universidad UTPL',
          desc:     'Análisis exploratorio y preprocesamiento de un dataset de automóviles. Limpieza de datos, imputación de valores faltantes, normalización y clasificación con modelos de Machine Learning.',
          tags:     ['pandas', 'scikit-learn', 'matplotlib', 'Python'],
          github:   'https://github.com/davidpill47/Automovile-Proyect',
        },
        {
          name:     'Adaptech — Sistema Adaptativo de Tutoría',
          origin:   'Máster UAM',
          desc:     'Sistema inteligente de tutoría adaptativa que personaliza el contenido educativo según el perfil del estudiante. Desarrollado como proyecto de la asignatura Sistemas Adaptativos y Modelado de Usuarios.',
          tags:     ['Python', 'IA', 'Sistemas Adaptativos', 'Machine Learning'],
          github:   'https://github.com/davidpill47',
        },
        {
          name:     'RoundTable — Toma de Decisiones en Grupo',
          origin:   'Máster UAM',
          desc:     'Aplicación web en tiempo real para facilitar la toma de decisiones colaborativa en grupo. Proyecto grupal del Máster con enfoque en interacción persona-ordenador y experiencia de usuario.',
          tags:     ['JavaScript', 'Web', 'Tiempo real', 'UX'],
          github:   'https://github.com/davidpill47',
        },
        {
          name:     'eduPy — Generación Automática de Ejercicios Python',
          origin:   'Investigación UAM',
          desc:     'Extensión de Wodel-EDU para generar y evaluar automáticamente ejercicios de programación en Python mediante mutación de modelos. Trabajo de investigación en colaboración con profesores de la UAM, orientado a publicación científica.',
          tags:     ['Python', 'MDE', 'LLMs', 'Educación', 'Wodel-EDU'],
          github:   'https://github.com/davidpill47',
        },
      ],
    },

    // ── Education ───────────────────────────────────────────
    education: {
      title: 'Educación & Certificaciones',
      degrees: [
        {
          degree:  'Máster en Sistemas Interactivos Inteligentes',
          school:  'Universidad Autónoma de Madrid',
          period:  'Sep 2025 – Presente',
          note:    'Beca de Excelencia Académica',
        },
        {
          degree:  'Movilidad Internacional — Ciencias de la Computación',
          school:  'Eötvös Loránd University, Budapest',
          period:  'Ago 2024 – May 2025',
          note:    'Data Science · Programa en inglés',
        },
        {
          degree:  'Ingeniería en Ciencias de la Computación',
          school:  'Universidad Técnica Particular de Loja (UTPL)',
          period:  '2018 – 2023',
          note:    '',
        },
      ],
      certs: [
        { name: 'ITIL Foundation',                     issuer: 'Integrate 45',            year: '2024' },
        { name: 'Cisco — Switching, Routing & Wireless', issuer: 'Cisco Networking Academy', year: '2022' },
        { name: 'Microsoft 365 Fundamentals',           issuer: 'Microsoft',               year: 'En progreso' },
        { name: 'Project Management & Agile',           issuer: 'Santander Open Academy',  year: '2024' },
      ],
    },

    // ── Community ───────────────────────────────────────────
    community: {
      title:   'Comunidad',
      org:     'GDG on Campus UAM',
      role:    'Miembro activo',
      since:   'Desde marzo 2026',
      desc:    'Comunidad oficial universitaria de la Universidad Autónoma de Madrid donde conectamos, aprendemos y creamos con tecnologías de Google. Participo activamente en charlas técnicas, workshops y eventos de networking.',
      link:    'https://gdguam.es',
    },

    // ── Contact ─────────────────────────────────────────────
    contact: {
      title:       'Hablemos',
      subtitle:    'Estoy abierto a nuevas oportunidades. Si tienes un proyecto o una oferta interesante, escríbeme.',
      email:       'contact.davidpill@gmail.com',
      linkedin:    'linkedin.com/in/dapillco47',
      github:      'github.com/davidpill47',
      formName:    'Nombre',
      formEmail:   'Email',
      formMessage: 'Mensaje',
      formSend:    'Enviar mensaje',
    },
  },

  // ────────────────────────────────────────────────────────────
  // ENGLISH
  // ────────────────────────────────────────────────────────────
  en: {
    nav: {
      about:       'About',
      skills:      'Skills',
      experience:  'Experience',
      projects:    'Projects',
      education:   'Education',
      community:   'Community',
      contact:     'Contact',
    },

    hero: {
      greeting:    "Hi, I'm",
      name:        'David Pillco',
      title:       'Computer Science Engineer | AI, Systems & Software Development',
      bio:         "Computer Science Engineer with international experience in systems, networking and software development. Currently pursuing a Master's in Intelligent Interactive Systems at UAM on an excellence scholarship, researching AI applications in education and co-authoring scientific publications. Active member of GDG on Campus UAM. I'm equally comfortable planning from scratch or adapting on the fly — and I genuinely believe technology is built better together.",
      btnContact:  'Contact me',
      btnCV:       'Download CV',
      location:    'Madrid, Spain',
      badge1:      'IT Engineer',
      badge2:      'GDG on Campus UAM',
    },

    about: {
      title: 'About me',
      body:  "Computer Science Engineer with international experience in systems, networking and software development. Educated in Ecuador, Budapest and Madrid, I combine strong technical foundations with programming, data analysis and AI skills. Currently pursuing a Master's in Intelligent Interactive Systems at UAM on an excellence scholarship, focused on AI applied to education and adaptive systems.",
      stat1: { value: '3+', label: 'years of experience' },
      stat2: { value: '3',  label: 'countries' },
      stat3: { value: '4',  label: 'certifications' },
    },

    skills: {
      title: 'Skills',
      categories: [
        { name: 'Systems & OS',   tags: ['Windows Server', 'Linux', 'macOS', 'Virtualization'],                                   level: 90 },
        { name: 'Networking',     tags: ['Cisco', 'TCP/IP', 'LAN/WAN', 'VPN', 'RDP'],                                            level: 80 },
        { name: 'Programming',    tags: ['Python', 'SQL', 'C++', 'Shell Scripting', 'ROS2', 'JavaScript'],                        level: 75 },
        { name: 'AI & Data',      tags: ['Machine Learning', 'TensorFlow', 'OpenCV', 'scikit-learn', 'LLMs', 'NLP'],              level: 75 },
        { name: 'IT Tools',       tags: ['Jira', 'GLPI', 'TeamViewer', 'AnyDesk', 'Zabbix'],                                     level: 85 },
        { name: 'Web Dev',        tags: ['Astro', 'Tailwind CSS', 'HTML', 'Git', 'GitHub Actions'],                              level: 70 },
      ],
    },

    experience: {
      title: 'Experience',
      jobs: [
        {
          role:     'Technical Support Engineer',
          company:  'Coopmego',
          period:   'Jan 2024 – Jul 2024',
          location: 'Ecuador',
          bullets: [
            'Managed installation, configuration and maintenance of hardware and software for internal users.',
            'Level 1 & 2 technical support via remote tools (TeamViewer, AnyDesk) and ticketing systems (GLPI, Jira).',
            'Collaborated with dev teams on software update deployments and system integration troubleshooting.',
          ],
        },
        {
          role:     'IT Intern — Database & Software Support',
          company:  'UTPL',
          period:   'Oct 2022 – Apr 2023',
          location: 'Ecuador',
          bullets: [
            'Database management and updates to ensure data integrity.',
            'Support for internal management software optimization, improving workflow efficiency.',
          ],
        },
        {
          role:     'Network Maintenance Technician',
          company:  'Telydata Telecommunications',
          period:   'Oct 2019 – Dec 2022',
          location: 'Ecuador',
          bullets: [
            'Installation and configuration of network infrastructure (routers, switches, cabling).',
            'Remote and on-site diagnosis of connectivity issues, significantly reducing client downtime.',
            'Network infrastructure monitoring to proactively identify risks and ensure regulatory compliance.',
          ],
        },
      ],
    },

    projects: {
      title: 'Projects',
      items: [
        {
          name:   'ROS2 Robot Dog — Full Software Stack',
          origin: "Master's UAM",
          desc:   'Full software stack for a physical robot dog. Multi-node ROS2 architecture integrating real-time computer vision, autonomous obstacle evasion, gamepad control, buzzer sound system and live battery monitoring. Deployed on Raspberry Pi using Docker.',
          tags:   ['ROS2', 'Python', 'OpenCV', 'Docker', 'Raspberry Pi', 'GPIO'],
          github: 'https://github.com/DanielAlonsoPardo/robo-lad',
        },
        {
          name:   'CNN Face Gender Classification',
          origin: "Master's UAM",
          desc:   'Deep CNN to classify gender from facial images using the LFW dataset. Compared a custom architecture against a Transfer Learning approach, evaluating results through accuracy metrics and ROC curves.',
          tags:   ['Keras', 'TensorFlow', 'scikit-learn', 'Python', 'CNN'],
          github: 'https://github.com/henrikfolz/apr_auto',
        },
        {
          name:   'Seoul Bike Sharing Demand Prediction',
          origin: "Master's UAM",
          desc:   'Predictive model for hourly bike rental demand in Seoul using weather and calendar data. Compared regression models (Ridge, MLP, SVR) with cross-validation and hyperparameter tuning via GridSearchCV.',
          tags:   ['scikit-learn', 'pandas', 'seaborn', 'Python', 'ML'],
          github: 'https://github.com/henrikfolz/apr_auto',
        },
        {
          name:   'Automobile Dataset Analysis',
          origin: 'UTPL University',
          desc:   'Exploratory analysis and preprocessing of an automobile dataset. Data cleaning, missing value imputation, normalization and classification with Machine Learning models.',
          tags:   ['pandas', 'scikit-learn', 'matplotlib', 'Python'],
          github: 'https://github.com/davidpill47/Automovile-Proyect',
        },
        {
          name:   'Adaptech — Adaptive Tutoring System',
          origin: "Master's UAM",
          desc:   'Intelligent adaptive tutoring system that personalizes educational content based on the student profile. Developed for the Adaptive Systems and User Modelling course.',
          tags:   ['Python', 'AI', 'Adaptive Systems', 'Machine Learning'],
          github: 'https://github.com/davidpill47',
        },
        {
          name:   'RoundTable — Group Decision Making',
          origin: "Master's UAM",
          desc:   'Real-time web application for collaborative group decision-making. Group project focused on human-computer interaction and user experience design.',
          tags:   ['JavaScript', 'Web', 'Real-time', 'UX'],
          github: 'https://github.com/davidpill47',
        },
        {
          name:   'eduPy — Automatic Python Exercise Generation',
          origin: 'UAM Research',
          desc:   'Extension of Wodel-EDU to automatically generate and grade Python programming exercises through model mutation. Research collaboration with UAM professors, aimed at scientific publication.',
          tags:   ['Python', 'MDE', 'LLMs', 'Education', 'Wodel-EDU'],
          github: 'https://github.com/davidpill47',
        },
      ],
    },

    education: {
      title: 'Education & Certifications',
      degrees: [
        {
          degree: "Master's in Intelligent Interactive Systems",
          school: 'Autonomous University of Madrid',
          period: 'Sep 2025 – Present',
          note:   'Excellence Scholarship recipient',
        },
        {
          degree: 'International Mobility — Computer Science',
          school: 'Eötvös Loránd University, Budapest',
          period: 'Aug 2024 – May 2025',
          note:   'Data Science · English-taught program',
        },
        {
          degree: 'BSc Computer Science Engineering',
          school: 'Private Technical University of Loja (UTPL)',
          period: '2018 – 2023',
          note:   '',
        },
      ],
      certs: [
        { name: 'ITIL Foundation',                      issuer: 'Integrate 45',            year: '2024' },
        { name: 'Cisco — Switching, Routing & Wireless', issuer: 'Cisco Networking Academy', year: '2022' },
        { name: 'Microsoft 365 Fundamentals',            issuer: 'Microsoft',               year: 'In progress' },
        { name: 'Project Management & Agile',            issuer: 'Santander Open Academy',  year: '2024' },
      ],
    },

    community: {
      title:   'Community',
      org:     'GDG on Campus UAM',
      role:    'Active member',
      since:   'Since March 2026',
      desc:    'Official university community at the Autonomous University of Madrid where we connect, learn and build with Google technologies. I actively participate in technical talks, hands-on workshops and networking events.',
      link:    'https://gdguam.es',
    },

    contact: {
      title:       "Let's talk",
      subtitle:    "I'm open to new opportunities. If you have an interesting project or offer, reach out.",
      email:       'contact.davidpill@gmail.com',
      linkedin:    'linkedin.com/in/dapillco47',
      github:      'github.com/davidpill47',
      formName:    'Name',
      formEmail:   'Email',
      formMessage: 'Message',
      formSend:    'Send message',
    },
  },
} as const