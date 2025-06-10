import { desc, label } from "framer-motion/client"

const dictionaries = {
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      certificates: "Certificados",
      music: "Música",
      contact: "Contacto",
    },
    hero: {
      greeting: "Carlos Peralta",
      title: "Ingeniero en sistemas & desarrollador de software",
      cta: {
        primary: "Ver mis proyectos",
        secondary: "Descargar CV",
      },
    },
    about: {
      title: "Sobre mí",
      subtitle: "Mi pasión por la tecnología",
      description:
        "Soy un desarrollador apasionado por crear soluciones innovadoras y experiencias digitales excepcionales.",
      tabs: {
        general: {
          title: "Sobre mí",
          description: "Soy un joven apasionado por la tecnología y la música con 20 años de edad.",
          content:
            "Soy un entusiasta de la tecnología con una pasión por crear soluciones innovadoras. A mis 20 años, domino gran parte de mi formación en ingeniería de sistemas y desarrollo de software. Me caracterizo por mi dedicación para enfrentar nuevos desafíos. Siempre estoy buscando expandir mis conocimientos y habilidades en diferentes áreas.",
          icons: {
            age: "20 años",
            proactive: "Proactivo",
            teamwork: "Trabajo en equipo",
            fastLearner: "Aprendiz rápido",
          },
        },
        engineer: {
          title: "Ingeniero en Sistemas",
          description: "Especializado en ciclo de vida del software, metodologías ágiles, redes y IoT.",
          content:
            "Como ingeniero en sistemas, tengo sólidos conocimientos en el ciclo de vida del desarrollo de software y metodologías ágiles como Scrum. Mi formación incluye experiencia en redes de computadoras, electrónica básica y aplicaciones de Internet de las Cosas (IoT). Aplico estos conocimientos para diseñar soluciones tecnológicas integrales que resuelven problemas reales, siempre enfocándome en la calidad y la eficiencia.",
          icons: {
            lifecycle: "Ciclo de vida",
            networks: "Redes",
            versionControl: "Control de versiones",
            iot: "IoT",
            databases: "Bases de datos",
            dataAnalysis: "Análisis de datos",
          },
        },
        developer: {
          title: "Desarrollador de Software",
          description: "Experiencia en múltiples lenguajes y frameworks para desarrollo web y móvil.",
          content:
            "Como desarrollador de software, manejo diversos lenguajes de programación como JavaScript, TypeScript, Python, PHP y Java. Me especializo en desarrollo web con React, Next.js y Node.js, creando aplicaciones modernas y responsivas. También tengo experiencia en desarrollo backend, APIs RESTful y bases de datos SQL y NoSQL. Siempre me mantengo actualizado con las últimas tecnologías y mejores prácticas de la industria.",
          icons: {
            javascript: "JavaScript",
            typescript: "TypeScript",
            nextjs: "Next.js",
            nodejs: "Node.js",
            python: "Python",
            java: "Java",
            tailwind: "Tailwind CSS",
          },
        },
        musician: {
          title: "Músico",
          description: "Guitarrista con conocimientos en teoría musical y producción de audio.",
          content:
            "La música es una de mis grandes pasiones. Toco la guitarra y tengo conocimientos sólidos en teoría musical. Me he adentrado en el mundo de la producción musical, utilizando programas como FL Studio y Audacity para crear y editar piezas musicales. Esta faceta artística complementa mi perfil técnico, aportándome creatividad y una perspectiva diferente para resolver problemas.",
          icons: {
            guitar: "Guitarra",
            musicTheory: "Teoría musical",
            production: "Producción",
            audioEditing: "Edición de audio",
          },
        },
        hobbies: {
          title: "Otros",
          description: "Aficionado a los puzzles, la lógica matemática y las herramientas de productividad.",
          content:
            "En mi tiempo libre, disfruto resolviendo puzzles como el cubo de Rubik y ejercicios de lógica matemática que mantienen mi mente ágil. También me gusta explorar herramientas ofimáticas avanzadas como Excel y Power BI para análisis de datos. La edición de video con programas como Filmora y OBS es otro de mis pasatiempos, permitiéndome crear contenido visual para diversos proyectos personales.",
          icons: {
            puzzles: "Puzzles",
            excel: "Excel/Power BI",
            videoEditing: "Edición de video",
            mathLogic: "Lógica matemática",
          },
        },
      },
    },
    projects: {
      title: "Mis Proyectos",
      subtitle: "Algunos de los proyectos en los que he trabajado",
      unavailable: {
        title: "No Disponible",
        message: "Este enlace no está disponible o el repositorio es privado",
        button: "Entendido",
      },
      buttons: {
        code: "Código",
        demo: "Demo",
      },
      list: [
        {
          title: "Aplicativo móvil para ESP32",
          description:
            "Plataforma para la gestión de componentes de un circuito integrado electrónico. Funciona con una API en Python y una base de datos en Clever Cloud.",
        },
        {
          title: "LAB",
          description: "Página web de un grupo de investigadores universitarios. Su objetivo es montar sus proyectos.",
        },
        {
          title: "Aplicativo web para ESP32",
          description:
            "Página web que permite controlar los componentes de un circuito que funciona con un ESP32. Funciona con una API y una base de datos local.",
        },
        {
          title: "Página web informativa para un gestor de muestras de proyectos",
          description:
            "Esta página busca dar información a los estudiantes de la CUL sobre cómo usar el gestor de muestras de proyectos. Un software aparte a la página web.",
        },
        {
          title: "AppBaqPark",
          description:
            "En conjunto con el semillero de investigación, se está desarrollando una aplicación móvil para los espacios de los parques biosaludables de Barranquilla.",
        },
        {
          title: "Gestor de ferretería",
          description:
            "Aplicación local de gestión de inventario, análisis de estadísticas y facturación para una ferretería.",
        },
        {
          title: "Portafolio web",
          description: "Diseño de un portafolio web inicial, funciona como frontend layout de un portafolio personal.",
        },
        {
          title: "CRUD API Rest",
          description:
            "Una aplicación web básica en la que se puede crear, leer, actualizar y eliminar datos de una base de datos mediante una API.",
        },
        {
          title: "Sistema de gestión de tala de árboles",
          description:
            "Un aplicativo web de interfaces en el cual se muestra la simulación de un sistema de gestión de tala de árboles.",
        },
      ],
    },
    certificates: {
      title: "Certificaciones",
      subtitle: "Mis logros y certificaciones profesionales",
      button: "Verificar",
      list: [
        {
          title: "Fundamentos de Scrum",
          issuer: "SoyLider.net",
          description: "Certificación en fundamentos de Scrum",
        },
        {
          title: "Control de accesos ZKTeco",
          issuer: "Fundamentos ZKBiosecurity",
          description: "Certificación en control de accesos basados en el software ZKTeco (Primeros modulos)",
        }
      ],
      label1: "Certificaciones",
      label2: "Plataformas",
      label3: "Última cert.",
      label4: "Verificadas",
    },
    music: {
      title: "Mi Música",
      subtitle: "La playlist que me acompaña mientras programo",
    },
    contact: {
      title: "Contacto",
      description: "¿Tienes un proyecto en mente? ¡Hablemos! Envíame un mensaje y te responderé lo antes posible.",
      contactme: "Contáctame",
      form: {
        name: "Nombre",
        email: "Email",
        subject: "Asunto",
        message: "Mensaje",
        send: "Enviar mensaje",
        sending: "Enviando...",
        placeholders: {
          name: "Tu nombre completo",
          email: "tu@email.com",
          subject: "¿En qué puedo ayudarte?",
          message: "Escribe tu mensaje aquí...",
        },
        errors: {
          network: "Error de conexión. Por favor intenta más tarde.",
        },
      },
      modal: {
        success: {
          title: "¡Mensaje enviado!",
        },
        error: {
          title: "Error",
        },
        close: "Cerrar",
      },
    },
  },
  en: {
    nav: {
      about: "About me",
      projects: "Projects",
      certificates: "Certificates",
      music: "Music",
      contact: "Contact",
    },
    hero: {
      greeting: "Carlos Peralta",
      title: "System Engineer & Software Developer",
      cta: {
        primary: "View my work",
        secondary: "Download CV",
      },
    },
    about: {
      title: "About me",
      subtitle: "My passion for technology",
      description:
        "I'm a developer passionate about creating innovative solutions and exceptional digital experiences.",
      tabs: {
        general: {
          title: "About me",
          description: "I'm a young person passionate about technology and music, 20 years old.",
          content:
            "I'm a technology enthusiast with a passion for creating innovative solutions. At 20 years old, I master a large part of my training in systems engineering and software development. I'm characterized by my dedication to face new challenges. I'm always looking to expand my knowledge and skills in different areas.",
          icons: {
            age: "20 years old",
            proactive: "Proactive",
            teamwork: "Teamwork",
            fastLearner: "Fast learner",
          },
        },
        engineer: {
          title: "Systems Engineer",
          description: "Specialized in software lifecycle, agile methodologies, networks and IoT.",
          content:
            "As a systems engineer, I have solid knowledge in software development lifecycle and agile methodologies like Scrum. My training includes experience in computer networks, basic electronics and Internet of Things (IoT) applications. I apply this knowledge to design comprehensive technological solutions that solve real problems, always focusing on quality and efficiency.",
          icons: {
            lifecycle: "Lifecycle",
            networks: "Networks",
            versionControl: "Version control",
            iot: "IoT",
            databases: "Databases",
            dataAnalysis: "Data analysis",
          },
        },
        developer: {
          title: "Software Developer",
          description: "Experience in multiple languages and frameworks for web and mobile development.",
          content:
            "As a software developer, I handle various programming languages like JavaScript, TypeScript, Python, PHP and Java. I specialize in web development with React, Next.js and Node.js, creating modern and responsive applications. I also have experience in backend development, RESTful APIs and SQL and NoSQL databases. I always stay updated with the latest technologies and industry best practices.",
          icons: {
            javascript: "JavaScript",
            typescript: "TypeScript",
            nextjs: "Next.js",
            nodejs: "Node.js",
            python: "Python",
            java: "Java",
            tailwind: "Tailwind CSS",
          },
        },
        musician: {
          title: "Musician",
          description: "Guitarist with knowledge in music theory and audio production.",
          content:
            "Music is one of my great passions. I play guitar and have solid knowledge in music theory. I've delved into the world of music production, using programs like FL Studio and Audacity to create and edit musical pieces. This artistic facet complements my technical profile, bringing me creativity and a different perspective to solve problems.",
          icons: {
            guitar: "Guitar",
            musicTheory: "Music theory",
            production: "Production",
            audioEditing: "Audio editing",
          },
        },
        hobbies: {
          title: "Others",
          description: "Fan of puzzles, mathematical logic and productivity tools.",
          content:
            "In my free time, I enjoy solving puzzles like the Rubik's cube and mathematical logic exercises that keep my mind sharp. I also like exploring advanced office tools like Excel and Power BI for data analysis. Video editing with programs like Filmora and OBS is another of my hobbies, allowing me to create visual content for various personal projects.",
          icons: {
            puzzles: "Puzzles",
            excel: "Excel/Power BI",
            videoEditing: "Video editing",
            mathLogic: "Mathematical logic",
          },
        },
      },
    },
    projects: {
      title: "My Projects",
      subtitle: "Some of the projects I've worked on",
      unavailable: {
        title: "Not Available",
        message: "This link is not available or the repository is private",
        button: "Got it",
      },
      buttons: {
        code: "Code",
        demo: "Demo",
      },
      list: [
        {
          title: "Mobile App for ESP32",
          description:
            "Platform for managing components of an electronic integrated circuit. Works with a Python API and a database in Clever Cloud.",
        },
        {
          title: "LAB",
          description: "Website for a group of university researchers. Its objective is to showcase their projects.",
        },
        {
          title: "Web App for ESP32",
          description:
            "Website that allows controlling the components of a circuit that works with an ESP32. Works with an API and a local database.",
        },
        {
          title: "Informative website for a project samples manager",
          description:
            "This page seeks to give information to CUL students about how to use the project samples manager. A separate software from the website.",
        },
        {
          title: "AppBaqPark",
          description:
            "Together with the research seedbed, a mobile application is being developed for the spaces of the bio-healthy parks of Barranquilla.",
        },
        {
          title: "Hardware store manager",
          description:
            "Local application for inventory management, statistics analysis and billing for a hardware store.",
        },
        {
          title: "Web portfolio",
          description: "Design of an initial web portfolio, works as a frontend layout for a personal portfolio.",
        },
        {
          title: "CRUD REST API",
          description:
            "A basic web application where you can create, read, update and delete data from a database through an API.",
        },
        {
          title: "Tree cutting management system",
          description:
            "A web application with interfaces that shows the simulation of a tree cutting management system.",
        },
      ],
    },
    certificates: {
      title: "Certificates",
      subtitle: "My achievements and professional certifications",
      button: "Verify",
      list: [
        {
          title: "Scrum Fundamentals",
          issuer: "SoyLider.net",
          description: "Certification in Scrum fundamentals",
        },
        {
          title: "Control de accesos ZKTeco",
          issuer: "Fundamentos ZKBiosecurity",
          description: "Certification in control of accesses based on the software ZKTeco (Primeros modulos)",
        },
      ],
      label1: "Certificates",
      label2: "Platforms",
      label3: "Last cert.",
      label4: "Verified",
    },
    music: {
      title: "My Music",
      subtitle: "The playlist that accompanies me while coding",
    },
    contact: {
      title: "Contact",
      description:
        "Have a project in mind? Let's talk! Send me a message and I'll get back to you as soon as possible.",
      contactme: "Contact me",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send message",
        sending: "Sending...",
        placeholders: {
          name: "Your full name",
          email: "your@email.com",
          subject: "How can I help you?",
          message: "Write your message here...",
        },
        errors: {
          network: "Connection error. Please try again later.",
        },
      },
      modal: {
        success: {
          title: "Message sent!",
        },
        error: {
          title: "Error",
        },
        close: "Close",
      },
    },
  },
}

export async function getDictionary(locale: string) {
  return dictionaries[locale as keyof typeof dictionaries] || dictionaries.es
}
