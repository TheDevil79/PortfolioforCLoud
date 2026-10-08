import {
  PersonalInfo,
  StatItem,
  SkillCategory,
  ProjectItem,
  ExperienceItem,
  AchievementItem,
  EducationItem,
} from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Vaibhav',
  role: 'Computer Science Student & Developer',
  college: 'VIT Chennai',
  cgpa: 9.53,
  sem1Sgpa: 9.40,
  sem2Sgpa: 9.64,
  interests: [
    'Full-stack development',
    'AI / ML',
    'Cloud computing',
    'IoT',
    'Computer vision',
    'Hackathons',
    'Problem solving',
  ],
  statusText: 'Currently building & learning',
  heroSubtitle: 'Computer Science Student • Developer • Builder',
  heroDescription:
    'I build software, AI-powered systems, and IoT solutions that turn interesting ideas into working products.',
  aboutBio:
    'I am a Computer Science undergraduate at VIT Chennai with a deep passion for building practical, high-impact systems across software, artificial intelligence, cloud architectures, and hardware. I thrive in hackathons, enjoy solving algorithmic challenges, and focus on turning complex technical concepts into robust, intuitive products.',
  socials: {
    github: 'https://github.com/TheDevil79',
    linkedin: 'https://www.linkedin.com/in/vaibhav-bisaria-3836a93b5/',
    email: 'vaibhav.student@example.com',
    resumeUrl: 'resume.pdf',
    leetcode: 'https://leetcode.com/your-username',
  },
};

export const statsData: StatItem[] = [
  {
    value: '9.53',
    label: 'CGPA',
    sublabel: 'VIT Chennai (Sem 1: 9.40 | Sem 2: 9.64)',
    iconName: 'Award',
  },
  {
    value: '5+',
    label: 'Key Projects',
    sublabel: 'Across AI, IoT, Web & Database',
    iconName: 'Code2',
  },
  {
    value: '100+',
    label: 'LeetCode Solved',
    sublabel: 'Data Structures & Algorithms in C/C++',
    iconName: 'Cpu',
  },
  {
    value: '24h',
    label: 'Hackathon Sprint',
    sublabel: 'Geminathon 2026 — Disaster Track',
    iconName: 'Flame',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    icon: 'Terminal',
    skills: [
      { name: 'C', isHighlight: false },
      { name: 'C++', isHighlight: true },
      { name: 'Java', isHighlight: false },
      { name: 'Python', isHighlight: true },
      { name: 'JavaScript', isHighlight: false },
      { name: 'TypeScript', isHighlight: true },
      { name: 'SQL', isHighlight: true },
    ],
  },
  {
    category: 'Frontend',
    icon: 'Layout',
    skills: [
      { name: 'React', isHighlight: true },
      { name: 'TypeScript', isHighlight: true },
      { name: 'Tailwind CSS', isHighlight: true },
      { name: 'HTML5', isHighlight: false },
      { name: 'CSS3', isHighlight: false },
    ],
  },
  {
    category: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Node.js', isHighlight: true },
      { name: 'Express', isHighlight: false },
      { name: 'Flask', isHighlight: true },
      { name: 'REST APIs', isHighlight: true },
    ],
  },
  {
    category: 'Database',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', isHighlight: true },
      { name: 'SQLite', isHighlight: false },
      { name: 'Supabase', isHighlight: true },
      { name: 'Prisma ORM', isHighlight: true },
    ],
  },
  {
    category: 'AI / Computer Vision',
    icon: 'Brain',
    skills: [
      { name: 'Gemini API', isHighlight: true },
      { name: 'MediaPipe', isHighlight: true },
      { name: 'OpenCV', isHighlight: true },
      { name: 'AI/ML Fundamentals', isHighlight: false },
    ],
  },
  {
    category: 'Cloud / Tools',
    icon: 'Cloud',
    skills: [
      { name: 'AWS', isHighlight: true },
      { name: 'Git', isHighlight: true },
      { name: 'GitHub', isHighlight: false },
      { name: 'Arduino', isHighlight: true },
      { name: 'Linux', isHighlight: false },
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'sentinel',
    title: 'Sentinel',
    tagline: 'AI-Powered Crisis Response & Disaster Management Platform',
    category: 'AI / ML',
    highlight: 'Geminathon 2026',
    isFeatured: true,
    description:
      'An AI-powered crisis response platform designed for natural disaster mitigation, enabling rapid citizen reporting, real-time multilingual NLP assessment, live incident clustering on interactive maps, and automated victim-to-shelter resource dispatch.',
    keyFeatures: [
      'Citizen disaster reporting with geolocation tagging',
      'NLP processing for instant triage & urgency extraction',
      'AI severity scoring powered by Gemini API',
      'Automated multi-language translation for diverse populations',
      'Interactive crisis mapping & incident clustering',
      'Victim & relief resource density visualization',
      'First-responder dispatch & mission coordination',
      'Emergency shelter & supply capacity matching',
    ],
    techStack: [
      'Gemini API',
      'React',
      'JavaScript',
      'Interactive Maps',
      'AI / NLP',
      'Tailwind CSS',
    ],
    githubUrl: 'https://github.com/TheDevil79/Disaster-Management',
    demoUrl: 'https://sentinel-demo.placeholder.app',
    architecturePoints: [
      'Disaster Report Ingestion via web/mobile portal',
      'Gemini API LLM pipeline for severity classification & translation',
      'Geospatial clustering layer for responder dispatch coordination',
    ],
  },
  {
    id: 'evidencelens',
    title: 'EvidenceLens',
    tagline: 'AI-Assisted Fact Verification & Evidence Synthesis Platform',
    category: 'AI / ML',
    highlight: 'Evidence-Backed AI Research',
    isFeatured: false,
    description:
      'An AI-assisted evidence verification platform that moves beyond simple generative answers. The system systematically queries reliable external sources, analyzes contradicting claims, and provides transparent, citation-backed rationale so users can understand why a claim is true, false, or uncertain.',
    keyFeatures: [
      'Multi-source authoritative evidence crawling',
      'Claim decomposition & semantic validation',
      'Transparent credibility scoring & citation tracking',
      'Evidence-backed verdict breakdown instead of black-box answers',
      'Contradiction and consensus highlighting',
    ],
    techStack: ['Python', 'AI/ML', 'Gemini API', 'React', 'TypeScript', 'REST APIs'],
    githubUrl: 'https://github.com/TheDevil79/EvidenceLens',
    demoUrl: 'https://evidencelens-demo.placeholder.app',
  },
  {
    id: 'smart-energy-classroom',
    title: 'Smart Energy Classroom',
    tagline: 'Autonomous Occupancy-Driven Power Automation System',
    category: 'IoT & Automation',
    highlight: 'Computer Vision + IoT + Automation',
    isFeatured: false,
    description:
      'An end-to-end intelligent classroom automation system that detects human occupancy and seating distribution in real time using computer vision, dynamically orchestrating electrical appliances (fans and lights) through microcontrollers and relay modules.',
    keyFeatures: [
      'Real-time human pose & count detection via computer vision',
      'Autonomous dynamic fan and lighting control',
      'Serial communication bridge with Arduino microcontrollers',
      'Heavy-duty relay module circuit switching',
      'Local analytics & energy savings monitoring dashboard',
    ],
    techStack: [
      'Python',
      'MediaPipe',
      'OpenCV',
      'Flask',
      'Arduino',
      'Relay Module',
    ],
    githubUrl: 'https://github.com/TheDevil79/Smart-Energy-Classroom',
  },
  {
    id: 'national-health-vault',
    title: 'National Health Vault',
    tagline: 'Secure Digital Healthcare Records & Role-Based Vault',
    category: 'Full Stack',
    highlight: 'Full-Stack Web & Healthcare',
    isFeatured: false,
    description:
      'A comprehensive digital healthcare records platform designed to centralize and securely manage longitudinal patient health records, diagnostic reports, and prescription histories with robust role-based access controls for patients, doctors, nurses, and hospital admins.',
    keyFeatures: [
      'Granular role-based access (Patient, Doctor, Nurse, Admin)',
      'Longitudinal medical record tracking & diagnostic report archiving',
      'Active medication scheduling & adherence monitoring',
      'High-performance PostgreSQL database schema with Prisma ORM',
      'Encrypted health data storage backed by Supabase',
    ],
    techStack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Prisma',
      'Supabase',
    ],
    githubUrl: 'https://github.com/SAMJOD07-devz/National-Health-Vault',
    demoUrl: 'https://healthvault-demo.placeholder.app',
  },
  {
    id: 'library-management-system',
    title: 'Library Management System',
    tagline: 'Normalized Relational Database Architecture & Management System',
    category: 'Database',
    highlight: 'Relational Database & EER Modeling',
    isFeatured: false,
    description:
      'A structured, database-driven library management system architected on rigorous relational principles. Implements complete entity-relationship (EER) modeling, 3NF normalization, transactional integrity, and automated circulation tracking.',
    keyFeatures: [
      'Comprehensive book title, edition, and copy-level tracking',
      'Student membership & patron circulation management',
      'Atomic borrow, return, and overdue fine transactions',
      'Subject taxonomy & cross-reference categorization',
      'Fully normalized schemas adhering to 3NF standards',
    ],
    techStack: [
      'SQL',
      'Relational Database',
      'ER/EER Modeling',
      'Schema Normalization',
    ],
    githubUrl: 'https://github.com/TheDevil79/library-management-system',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'geminathon-2026',
    title: 'Geminathon 2026',
    roleOrType: '24-Hour Hackathon',
    subtitle: 'Natural Disaster Mitigation Track',
    date: '2026',
    badge: 'Hackathon Sprint',
    description:
      'Designed, built, and pitched Sentinel — an AI-powered disaster crisis response platform leveraging the Gemini API to analyze emergency citizen reports, compute severity matrices, and coordinate disaster relief units in real time.',
    highlights: [
      'Engineered real-time emergency NLP triage using Google Gemini API',
      'Built interactive geospatial crisis maps for victim & responder coordination',
      'Implemented automated severity scoring and multilingual dispatch routing',
      'Collaborated within an intensive 24-hour sprint environment',
    ],
    technologies: ['Gemini API', 'React', 'JavaScript', 'Interactive Maps', 'NLP'],
  },
  {
    id: 'gdg-workshop',
    title: 'Google Developer Groups Workshop',
    roleOrType: 'Technical Workshop',
    subtitle: 'CTRL + ML + ALT + DL',
    date: 'Workshop Experience',
    badge: 'AI / Deep Learning',
    description:
      'Immersive training on foundational and applied artificial intelligence, machine learning architectures, and deep neural networks, focusing on practical deployment patterns.',
    highlights: [
      'Studied foundational concepts in Machine Learning & Deep Learning',
      'Explored model training pipelines, computer vision, and neural network architectures',
      'Gained hands-on insights into modern AI development ecosystems',
    ],
    technologies: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Python'],
  },
];

export const achievementsData: AchievementItem[] = [
  {
    id: 'academic-excellence',
    title: 'Academic Excellence',
    value: '9.53 CGPA',
    subtitle: 'VIT Chennai',
    description:
      'Consistently strong academic performance with 9.40 SGPA in Semester 1 and 9.64 SGPA in Semester 2 in Computer Science and Engineering.',
    icon: 'Award',
    tag: 'Academics',
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving',
    value: '100+ Problems',
    subtitle: 'LeetCode & Competitive Coding',
    description:
      'Active algorithmic problem solving in C and C++, focusing on core Data Structures, Dynamic Programming, Graph Algorithms, and Optimization.',
    icon: 'Code',
    tag: 'Algorithms',
  },
  {
    id: 'hackathon',
    title: 'Hackathon Builder',
    value: 'Geminathon 2026',
    subtitle: '24-Hour Sprint',
    description:
      'Built and deployed Sentinel under strict 24-hour hackathon constraints for natural disaster management using Gemini API.',
    icon: 'Flame',
    tag: 'Hackathon',
  },
  {
    id: 'cross-domain-building',
    title: 'Cross-Domain Engineering',
    value: '4 Core Pillars',
    subtitle: 'AI • IoT • Full Stack • Cloud',
    description:
      'Demonstrated versatility by shipping projects integrating hardware relays, computer vision models, relational database schemas, and modern web apps.',
    icon: 'Layers',
    tag: 'Engineering',
  },
];

export const educationData: EducationItem = {
  institution: 'Vellore Institute of Technology (VIT)',
  degree: 'Bachelor of Technology (B.Tech) in Computer Science and Engineering',
  cgpa: 9.53,
  semesters: [
    { sem: 'Semester 1 SGPA', sgpa: 9.40 },
    { sem: 'Semester 2 SGPA', sgpa: 9.64 },
  ],
  courseworkHighlights: [
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Object Oriented Programming (C++ / Java)',
    'Computer Architecture',
    'Discrete Mathematics & Graph Theory',
  ],
};

export const terminalCommands: { command: string; output: string[] }[] = [
  {
    command: 'whoami',
    output: ['Vaibhav', 'Computer Science Student & Developer @ VIT Chennai'],
  },
  {
    command: 'cgpa --current',
    output: ['Overall: 9.53 / 10.0', 'Sem 1: 9.40  |  Sem 2: 9.64'],
  },
  {
    command: 'interests',
    output: [
      '• Full-stack development',
      '• AI / Machine Learning (Gemini API, MediaPipe)',
      '• Cloud computing (AWS)',
      '• IoT & Computer Vision (OpenCV, Arduino)',
      '• Problem Solving & Hackathons',
    ],
  },
  {
    command: 'status',
    output: ['🟢 Currently building & learning', '⚡ Open to internships & hackathon collabs'],
  },
];
