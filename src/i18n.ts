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
      title:       'IT Engineer | Systems, Networks & Software Development',
      bio:         'Ingeniero en Ciencias de la Computación apasionado por crear soluciones tecnológicas y resolver problemas reales. Me muevo igual de bien planificando un proyecto desde cero que respondiendo ante lo inesperado. Con experiencia internacional en sistemas, redes y desarrollo de software — y formación en Data Science en Budapest y un Máster en la UAM — aporto una visión técnica amplia y un perfil versátil. Dicen que soy carismático y fácil de trabajar: creo que la tecnología se construye mejor en equipo, y eso se nota en cómo trabajo.',
      btnContact:  'Contáctame',
      btnCV:       'Descargar CV',
      location:    'Madrid, España',
      badge1:      'IT Engineer',
      badge2:      'GDG on Campus UAM',
    },

    // ── About ───────────────────────────────────────────────
    about: {
      title:   'Sobre mí',
      body:    'Ingeniero en Ciencias de la Computación con experiencia internacional en sistemas, redes y desarrollo de software. Formado en Ecuador, Budapest y Madrid, combino sólidas bases técnicas con habilidades de programación y análisis de datos. Actualmente cursando un Máster en Sistemas Interactivos Inteligentes en la UAM con beca de excelencia.',
      stat1:   { value: '3+',  label: 'años de experiencia' },
      stat2:   { value: '3',   label: 'países' },
      stat3:   { value: '4',   label: 'certificaciones' },
    },

    // ── Skills ──────────────────────────────────────────────
    skills: {
      title: 'Habilidades',
      categories: [
        { name: 'Sistemas & OS',    tags: ['Windows Server', 'Linux', 'macOS', 'Virtualización'],       level: 90 },
        { name: 'Redes',            tags: ['Cisco', 'TCP/IP', 'LAN/WAN', 'VPN', 'RDP'],                level: 80 },
        { name: 'Programación',     tags: ['Python', 'SQL', 'C++', 'Shell Scripting', 'ROS2'],          level: 75 },
        { name: 'Herramientas IT',  tags: ['Jira', 'GLPI', 'TeamViewer', 'AnyDesk', 'Zabbix'],         level: 85 },
        { name: 'IA & Data',        tags: ['Machine Learning', 'TensorFlow', 'OpenCV', 'scikit-learn'], level: 70 },
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
          github:   'https://github.com/henrikfolz/apr_auto',
        },
        {
          name:     'Seoul Bike Sharing Demand Prediction',
          origin:   'Máster UAM',
          desc:     'Modelo predictivo de demanda horaria de bicicletas en Seúl integrando variables climáticas y de calendario. Comparé modelos (Ridge, MLP, SVR) con validación cruzada y optimización de hiperparámetros.',
          tags:     ['scikit-learn', 'pandas', 'seaborn', 'Python', 'ML'],
          github:   'https://github.com/henrikfolz/apr_auto',
        },
        {
          name:     'Automobile Dataset Analysis',
          origin:   'Universidad UTPL',
          desc:     'Análisis exploratorio y preprocesamiento de un dataset de automóviles. Limpieza de datos, imputación de valores faltantes, normalización y clasificación con modelos de Machine Learning.',
          tags:     ['pandas', 'scikit-learn', 'matplotlib', 'Python'],
          github:   'https://github.com/davidpill47/Automovile-Proyect',
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
      title:       'IT Engineer | Systems, Networks & Software Development',
      bio:         "Computer Science Engineer passionate about building technology and solving real-world problems. I'm equally comfortable planning projects from the ground up and staying sharp when things don't go as expected. With international experience across systems, networking, and software development — including Data Science studies in Budapest and a Master's at UAM — I bring both technical depth and adaptability. People say I'm charismatic and easy to work with: I genuinely believe technology is built better together, and that shows in how I work.",
      btnContact:  'Contact me',
      btnCV:       'Download CV',
      location:    'Madrid, Spain',
      badge1:      'IT Engineer',
      badge2:      'GDG on Campus UAM',
    },

    about: {
      title: 'About me',
      body:  "Computer Science Engineer with international experience in systems, networking and software development. Educated in Ecuador, Budapest and Madrid, I combine strong technical foundations with programming and data analysis skills. Currently pursuing a Master's in Intelligent Interactive Systems at UAM on an excellence scholarship.",
      stat1: { value: '3+', label: 'years of experience' },
      stat2: { value: '3',  label: 'countries' },
      stat3: { value: '4',  label: 'certifications' },
    },

    skills: {
      title: 'Skills',
      categories: [
        { name: 'Systems & OS',     tags: ['Windows Server', 'Linux', 'macOS', 'Virtualization'],        level: 90 },
        { name: 'Networking',       tags: ['Cisco', 'TCP/IP', 'LAN/WAN', 'VPN', 'RDP'],                 level: 80 },
        { name: 'Programming',      tags: ['Python', 'SQL', 'C++', 'Shell Scripting', 'ROS2'],           level: 75 },
        { name: 'IT Tools',         tags: ['Jira', 'GLPI', 'TeamViewer', 'AnyDesk', 'Zabbix'],          level: 85 },
        { name: 'AI & Data',        tags: ['Machine Learning', 'TensorFlow', 'OpenCV', 'scikit-learn'],  level: 70 },
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
