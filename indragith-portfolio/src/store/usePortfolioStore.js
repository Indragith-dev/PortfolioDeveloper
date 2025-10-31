import { create } from 'zustand';

const usePortfolioStore = create(() => ({
  // Personal Information
  personal: {
    name: 'Indragith N S',
    title: 'Frontend Developer',
    email: 'nsindragith@gmail.com',
    phone: '+91-9747770467',
    linkedin: 'linkedin.com/in/nsindragith',
    github: 'github.com/Indragith-dev',
    location: 'Trivandrum, Kerala, India',
  },

  // Hero Section
  hero: {
    label: 'FRONTEND DEVELOPER',
    title: 'Building the',
    highlight: 'Future',
    subtitle: 'of Web',
    description:
      'Frontend Developer with 3+ years of professional experience specializing in React.js, TypeScript, and modern JavaScript ecosystems. Proven track record of delivering 20+ enterprise-grade production applications.',
    primaryButton: 'View Work',
    secondaryButton: 'Get in Touch',
  },

  // Professional Summary
  summary:
    'Frontend Developer with 3+ years of professional experience specializing in React.js, TypeScript, and modern JavaScript ecosystems. Proven track record of delivering 20+ enterprise-grade production applications with emphasis on scalable architecture, performance optimization, and clean code practices. Expertise in leading frontend development initiatives, mentoring developers, and collaborating with cross-functional teams to deliver exceptional user experiences.',

  // Technical Skills
  technicalSkills: {
    languages: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
    frameworks: ['React.js', 'Redux Toolkit', 'Node.js', 'Express.js'],
    technologies: ['RESTful APIs', 'SharePoint', 'Git', 'Webpack'],
    tools: ['VS Code', 'Chrome DevTools', 'Postman', 'Figma'],
  },

  // Soft Skills
  softSkills: [
    'Team Coordination',
    'Leadership',
    'Mentoring',
    'Cross-functional Collaboration',
    'Problem Solving',
    'Communication',
  ],

  // Professional Experience
  experience: [
    {
      company: 'MAV-S Innovations LLP',
      role: 'Frontend Developer',
      period: 'Nov 2023 - Present',
      location: 'Trivandrum, Kerala',
      achievements: [
        'Developed 20+ enterprise-grade web applications using React.js, TypeScript, JavaScript, HTML5/CSS3',
        'Implemented advanced performance optimization strategies achieving 40% reduction in initial load times and 35% improvement in overall application performance',
        'Mentored junior developers on best practices, React design patterns, and modern frontend development techniques',
      ],
      tech: [
        'React.js',
        'TypeScript',
        'JavaScript',
        'HTML5/CSS3',
        'Redux Toolkit',
      ],
    },
    {
      company: 'Kodnest',
      role: 'Full Stack Developer Intern',
      period: 'Feb 2023 - July 2023',
      location: 'Bangalore, Karnataka',
      achievements: [
        'Completed full-stack internship focusing on React.js development, component lifecycle, hooks, and advanced state management patterns',
        'Built multiple projects implementing responsive UI with modern CSS and RESTful API integration',
        'Collaborated with mentors on real-world projects and adopted industry best practices for clean, maintainable code',
      ],
      tech: ['React.js', 'Node.js', 'RESTful APIs', 'CSS3'],
    },
    {
      company: 'K2web Solutions Pvt Ltd',
      role: 'Junior Frontend Developer',
      period: 'Sep 2021 - Jan 2023',
      location: 'Kochi, Kerala',
      achievements: [
        'Developed responsive web applications using HTML5, CSS3, JavaScript (ES6+), and React.js for diverse client projects',
        'Translated UI/UX designs into pixel-perfect implementations with cross-browser compatibility and responsive design patterns',
        'Built and maintained both dynamic single-page applications and static websites, ensuring optimal performance',
      ],
      tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
    },
  ],

  // Key Projects
  keyProjects: [
    {
      id: 1,
      title: 'Project Management Tool (JIRA-like PMT)',
      description:
        'Designed and developed comprehensive Project Management Tool featuring task tracking, sprint planning, kanban boards, burndown charts, real-time collaboration, and comprehensive project analytics with customizable dashboards.',
      technologies: ['React.js', 'SharePoint', 'TypeScript', 'Redux Toolkit'],
      features: [
        'Task tracking and sprint planning',
        'Kanban boards and burndown charts',
        'Real-time collaboration',
        'SharePoint API integration',
        'Customizable dashboards',
      ],
    },
    {
      id: 2,
      title: 'Employee Portal with Integrated HRMS',
      description:
        'Built scalable Employee Portal with integrated HRMS system for complete employee lifecycle management including onboarding, attendance tracking, leave management, performance reviews, payroll integration, and automated workflow approvals.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'RESTful APIs'],
      features: [
        'Complete employee lifecycle management',
        'Role-based access control',
        'Secure authentication system',
        'Automated workflow approvals',
        'Reusable component library',
      ],
    },
  ],

  // Portfolio Projects (for the projects section)
  projects: [
    {
      id: 1,
      title: 'Project Management Tool',
      description:
        'JIRA-like comprehensive project management tool with real-time collaboration, kanban boards, and advanced analytics.',
      tags: ['React.js', 'TypeScript', 'SharePoint', 'Redux Toolkit'],
      status: 'Deployed',
      glow: true,
      features: [
        'Task Tracking',
        'Sprint Planning',
        'Real-time Collaboration',
        'Analytics Dashboard',
      ],
    },
    {
      id: 2,
      title: 'HRMS Employee Portal',
      description:
        'Scalable employee portal with integrated HR management system for complete employee lifecycle management.',
      tags: ['React.js', 'Node.js', 'Express.js', 'RESTful APIs'],
      status: 'Deployed',
      glow: true,
      features: [
        'Onboarding',
        'Attendance Tracking',
        'Leave Management',
        'Performance Reviews',
      ],
    },
    {
      id: 3,
      title: 'Quantum Project Management',
      description:
        'Advanced project management tool with AI-powered insights and immersive 3D project visualization.',
      tags: ['React.js', 'Three.js', 'WebSocket', 'AI/ML'],
      status: 'In Development',
      glow: true,
      features: [
        'AI Insights',
        '3D Visualization',
        'Real-time Updates',
        'Predictive Analytics',
      ],
    },
  ],

  // Education
  education: [
    {
      degree: 'Bachelor of Technology',
      institution: 'College of Engineering Muttathara',
      period: '2017 - 2021',
      location: 'Kerala, India',
      score: 'CGPA: 7.73/10.0',
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'SVRV NSS HSS, Vazhoor',
      period: '2014 - 2016',
      location: 'Kerala, India',
      score: 'CGPA: 9.49/10.0',
    },
  ],

  // Certifications
  certifications: [
    {
      name: 'Java Full Stack',
      issuer: 'KODNEST',
      year: '2024',
    },
    {
      name: 'Google Cloud Fundamentals',
      issuer: 'Coursera',
      year: '2020',
    },
  ],

  // About Section
  about: {
    intro:
      'FRONTEND DEVELOPER crafting digital experiences at the intersection of design and technology. Specializing in React.js, TypeScript, and immersive 3D web applications.',
    mission:
      'Pushing the boundaries of web development with performance-optimized, scalable solutions and cutting-edge user interfaces.',
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'Three.js',
      'WebGL',
      'Redux Toolkit',
      'Node.js',
      'RESTful APIs',
      'Performance Optimization',
      'Webpack',
      'Git & GitHub',
      'HTML5/CSS3',
      'SharePoint',
      'Express.js',
    ],
    stats: [
      { value: '3+', label: 'Years Experience' },
      { value: '20+', label: 'Projects Completed' },
      { value: '40%', label: 'Performance Gain' },
    ],
  },

  // Contact Information
  contact: {
    email: 'nsindragith@gmail.com',
    phone: '+91-9747770467',
    location: 'Trivandrum, Kerala, India',
    socials: [
      {
        name: 'GitHub',
        url: 'https://github.com/Indragith-dev',
        icon: '🚀',
        handle: '@Indragith-dev',
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/nsindragith',
        icon: '💼',
        handle: '/nsindragith',
      },
      {
        name: 'Email',
        url: 'mailto:nsindragith@gmail.com',
        icon: '📧',
        handle: 'nsindragith@gmail.com',
      },
    ],
  },

  // Resume Download
  resume: {
    fileUrl: '/IndragithNS_Resume.pdf',
    fileName: 'IndragithNS_Resume.pdf',
  },
}));

export default usePortfolioStore;
