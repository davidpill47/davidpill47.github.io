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
      bio:         'Ingeniero en Ciencias de la Computación con trayectoria internacional — Ecuador, Budapest, Madrid. Investigo IA aplicada a la educación en la UAM (beca de excelencia), donde participo en proyectos de investigación con proyección a publicación científica y construyo sistemas que aprenden. Miembro de GDG on Campus UAM. Creo que la tecnología de verdad se construye donde la curiosidad técnica se encuentra con trabajo en equipo.',
      btnContact:  'Contáctame',
      btnCV:       'Descargar CV',
      location:    'Madrid, España',
      badge1:      'IT Engineer',
      badge2:      'GDG on Campus UAM',
    },

    // ── About ───────────────────────────────────────────────
    about: {
      title:   'Sobre mí',
      body:    'Mi camino va de redes físicas en Ecuador a sistemas inteligentes en Madrid, pasando por Data Science en Budapest. No solo estudio IA — la aplico: investigo generación automática de ejercicios con LLMs, construyo robots con ROS2 y modelizo comportamiento humano con sistemas adaptativos. Con bases sólidas en infraestructura IT, programación y análisis de datos, puedo contribuir desde el primer día en equipos técnicos exigentes.',
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
          role:     'Técnico de Soporte IT',
          company:  'Coopmego',
          period:   'Ene 2024 – Jul 2024',
          location: 'Ecuador',
          bullets: [
            'Resolví incidencias de hardware y software para +80 usuarios internos, mejorando la trazabilidad con flujos de ticketing en GLPI y Jira.',
            'Coordiné con equipos de desarrollo el despliegue de actualizaciones críticas, garantizando continuidad de servicio.',
            'Implementé flujos de soporte remoto (TeamViewer, AnyDesk) que redujeron los tiempos de resolución de incidencias.',
          ],
        },
        {
          role:     'Prácticas IT — Bases de Datos y Software',
          company:  'UTPL',
          period:   'Oct 2022 – Abr 2023',
          location: 'Ecuador',
          bullets: [
            'Mantuve y optimicé bases de datos institucionales, asegurando integridad y disponibilidad de datos críticos.',
            'Mejoré procesos de software interno reduciendo fricciones operativas del equipo de administración.',
          ],
        },
        {
          role:     'Técnico de Mantenimiento de Redes',
          company:  'Telydata Telecomunicaciones',
          period:   'Oct 2019 – Dic 2022',
          location: 'Ecuador',
          bullets: [
            'Desplegué infraestructura de red para clientes residenciales y empresariales (routers, switches, cableado estructurado).',
            'Diagnóstico y resolución de fallos de conectividad en campo y de forma remota, optimizando tiempos de inactividad.',
            'Monitoreo continuo de red para anticipar riesgos y mantener cumplimiento normativo.',
          ],
        },
      ],
    },

    // ── Projects ────────────────────────────────────────────
    projects: {
      title: 'Proyectos',
      items: [
        {
          name:     'eduPy — Generación Automática de Ejercicios Python',
          origin:   'Investigación UAM',
          desc:     'Investigación activa en la UAM: extensión de Wodel-EDU que usa LLMs y mutación de modelos para generar y evaluar automáticamente ejercicios de programación en Python. Trabajo en colaboración con profesores de la UAM con proyección a publicación científica — donde la IA deja de ser una herramienta y se convierte en colaboradora del proceso educativo.',
          tags:     ['Python', 'MDE', 'LLMs', 'Educación', 'Wodel-EDU'],
          github:   'https://github.com/davidpill47',
        },
        {
          name:     'Adaptech — Sistema Adaptativo de Tutoría',
          origin:   'Máster UAM',
          desc:     'Sistema inteligente de tutoría adaptativa que modela el perfil del estudiante en tiempo real y personaliza el contenido educativo en consecuencia. Combina técnicas de User Modelling con lógica de adaptación — el tipo de sistema que marca la diferencia en EdTech.',
          tags:     ['Python', 'IA', 'Sistemas Adaptativos', 'Machine Learning'],
          github:   'https://github.com/davidpill47/AdapTech',
        },
        {
          name:     'CNN Face Gender Classification',
          origin:   'Máster UAM',
          desc:     'Exploración de Deep Learning aplicado a visión por computadora: diseñé y entrené una CNN desde cero sobre el dataset LFW y la comparé con Transfer Learning. Análisis riguroso con métricas de precisión, F1 y curvas ROC para validar decisiones de arquitectura.',
          tags:     ['Keras', 'TensorFlow', 'scikit-learn', 'Python', 'CNN'],
          github:   'https://github.com/davidpill47/cnn-face-gender-classification',
        },
        {
          name:     'Seoul Bike Sharing Demand Prediction',
          origin:   'Máster UAM',
          desc:     'Predije la demanda horaria de bicicletas en Seúl integrando variables climáticas, temporales y de calendario. Evalué y comparé Ridge Regression, MLP y SVR con validación cruzada y GridSearchCV — demostrando cómo los datos correctos transforman un problema complejo en un modelo accionable.',
          tags:     ['scikit-learn', 'pandas', 'seaborn', 'Python', 'ML'],
          github:   'https://github.com/davidpill47/seoul-bike-sharing-prediction',
        },
        {
          name:     'ROS2 Robot Dog — Full Software Stack',
          origin:   'Máster UAM',
          desc:     'Stack de software completo para un robot perro físico real. Arquitectura multi-nodo ROS2 con visión en tiempo real (OpenCV), evasión autónoma de obstáculos, control por gamepad y telemetría de batería. Contenerizado con Docker y desplegado en Raspberry Pi — un sistema embebido de principio a fin.',
          tags:     ['ROS2', 'Python', 'OpenCV', 'Docker', 'Raspberry Pi', 'GPIO'],
          github:   'https://github.com/DanielAlonsoPardo/robo-lad',
        },
        {
          name:     'RoundTable — Toma de Decisiones en Grupo',
          origin:   'Máster UAM',
          desc:     'Plataforma web colaborativa en tiempo real para toma de decisiones en grupo. Diseñada con foco en interacción persona-ordenador y experiencia de usuario — porque la mejor tecnología es la que la gente realmente quiere usar.',
          tags:     ['JavaScript', 'Web', 'Tiempo real', 'UX'],
          github:   'https://github.com/acevezl/roundtable-app',
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
        { name: 'ITIL Foundation',                      issuer: 'Integrate 45',            year: '2024' },
        { name: 'Cisco — Switching, Routing & Wireless', issuer: 'Cisco Networking Academy', year: '2022' },
        { name: 'Microsoft 365 Fundamentals',            issuer: 'Microsoft',               year: 'En progreso' },
        { name: 'Project Management & Agile',            issuer: 'Santander Open Academy',  year: '2024' },
      ],
    },

    // ── Community ───────────────────────────────────────────
    community: {
      title:   'Comunidad',
      org:     'GDG on Campus UAM',
      role:    'Miembro activo',
      since:   'Desde marzo 2026',
      desc:    'El GDG on Campus UAM es donde la curiosidad técnica se convierte en comunidad. Participo en charlas, workshops y eventos donde compartimos lo que estamos construyendo, aprendiendo y rompiendo — con tecnologías Google y más allá.',
      link:    'https://gdguam.es',
    },

    // ── Contact ─────────────────────────────────────────────
    contact: {
      title:       'Hablemos',
      subtitle:    'Estoy buscando mi próximo reto — prácticas, proyectos o colaboraciones donde la IA, los datos o los sistemas tengan algo interesante que resolver. Escríbeme.',
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
      bio:         "Computer Science Engineer with an international track — Ecuador, Budapest, Madrid. Currently researching AI applied to education at UAM (excellence scholarship), contributing to scientific research projects and building systems that actually learn. Member of GDG on Campus UAM. I do best where technical curiosity meets real teamwork — and that's exactly where I want to be.",
      btnContact:  'Contact me',
      btnCV:       'Download CV',
      location:    'Madrid, Spain',
      badge1:      'IT Engineer',
      badge2:      'GDG on Campus UAM',
    },

    about: {
      title: 'About me',
      body:  "From network infrastructure in Ecuador to intelligent systems in Madrid — with a Data Science stop in Budapest along the way. I don't just study AI: I apply it. I research automatic exercise generation with LLMs, build robots with ROS2 and model user behavior with adaptive systems. Grounded in IT infrastructure and software development, I can contribute from day one in demanding technical environments.",
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
            'Resolved hardware and software incidents for 80+ internal users, improving traceability through structured ticketing flows in GLPI and Jira.',
            'Coordinated with development teams on critical software update deployments, ensuring service continuity.',
            'Implemented remote support workflows (TeamViewer, AnyDesk) that reduced incident resolution times.',
          ],
        },
        {
          role:     'IT Intern — Database & Software Support',
          company:  'UTPL',
          period:   'Oct 2022 – Apr 2023',
          location: 'Ecuador',
          bullets: [
            'Maintained and optimized institutional databases, ensuring integrity and availability of critical data.',
            'Improved internal software processes, reducing operational friction for the administration team.',
          ],
        },
        {
          role:     'Network Maintenance Technician',
          company:  'Telydata Telecommunications',
          period:   'Oct 2019 – Dec 2022',
          location: 'Ecuador',
          bullets: [
            'Deployed network infrastructure for residential and enterprise clients (routers, switches, structured cabling).',
            'Diagnosed and resolved connectivity failures on-site and remotely, minimizing client downtime.',
            'Continuous network monitoring to proactively identify risks and maintain regulatory compliance.',
          ],
        },
      ],
    },

    projects: {
      title: 'Projects',
      items: [
        {
          name:   'eduPy — Automatic Python Exercise Generation',
          origin: 'UAM Research',
          desc:   'Active research at UAM: an extension of Wodel-EDU that uses LLMs and model mutation to automatically generate and grade Python programming exercises. Developed in collaboration with UAM professors, with publication potential — where AI stops being just a tool and becomes a collaborator in the educational process.',
          tags:   ['Python', 'MDE', 'LLMs', 'Education', 'Wodel-EDU'],
          github: 'https://github.com/davidpill47',
        },
        {
          name:   'Adaptech — Adaptive Tutoring System',
          origin: "Master's UAM",
          desc:   'Intelligent adaptive tutoring system that models the student profile in real time and personalizes educational content accordingly. Combines User Modelling techniques with adaptive logic — the kind of system that makes a real difference in EdTech.',
          tags:   ['Python', 'AI', 'Adaptive Systems', 'Machine Learning'],
          github: 'https://github.com/davidpill47/AdapTech',
        },
        {
          name:   'CNN Face Gender Classification',
          origin: "Master's UAM",
          desc:   'Deep Learning applied to computer vision: designed and trained a CNN from scratch on the LFW dataset, then compared it against a Transfer Learning approach. Rigorous evaluation using accuracy, F1 and ROC curves to validate architectural decisions.',
          tags:   ['Keras', 'TensorFlow', 'scikit-learn', 'Python', 'CNN'],
          github: 'https://github.com/davidpill47/cnn-face-gender-classification',
        },
        {
          name:   'Seoul Bike Sharing Demand Prediction',
          origin: "Master's UAM",
          desc:   'Predicted hourly bike rental demand in Seoul by integrating weather, time and calendar variables. Evaluated and compared Ridge Regression, MLP and SVR with cross-validation and GridSearchCV — demonstrating how the right data transforms a complex problem into an actionable model.',
          tags:   ['scikit-learn', 'pandas', 'seaborn', 'Python', 'ML'],
          github: 'https://github.com/davidpill47/seoul-bike-sharing-prediction',
        },
        {
          name:   'ROS2 Robot Dog — Full Software Stack',
          origin: "Master's UAM",
          desc:   'Full software stack for a physical robot dog. Multi-node ROS2 architecture with real-time computer vision (OpenCV), autonomous obstacle evasion, gamepad control and battery telemetry. Containerized with Docker and deployed on Raspberry Pi — an embedded system end to end.',
          tags:   ['ROS2', 'Python', 'OpenCV', 'Docker', 'Raspberry Pi', 'GPIO'],
          github: 'https://github.com/DanielAlonsoPardo/robo-lad',
        },
        {
          name:   'RoundTable — Group Decision Making',
          origin: "Master's UAM",
          desc:   'Real-time collaborative web platform for group decision-making. Designed with a focus on human-computer interaction and user experience — because the best technology is the kind people actually want to use.',
          tags:   ['JavaScript', 'Web', 'Real-time', 'UX'],
          github: 'https://github.com/acevezl/roundtable-app',
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
      desc:    'GDG on Campus UAM is where technical curiosity becomes community. I participate in talks, workshops and events where we share what we are building, learning and breaking — with Google technologies and beyond.',
      link:    'https://gdguam.es',
    },

    contact: {
      title:       "Let's talk",
      subtitle:    "I'm looking for my next challenge — internships, projects or collaborations where AI, data or systems have something interesting to solve. Reach out.",
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
