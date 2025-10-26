import { create } from 'zustand';

const usePortfolioStore = create(() => ({
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
    ],
    stats: [
      { value: '3+', label: 'Years Experience' },
      { value: '40%', label: 'Performance Gain' },
      { value: '∞', label: 'Passion for Code' },
    ],
  },
  experience: [
    {
      company: 'MAV-S Innovations LLP',
      role: 'Frontend Developer',
      period: '2023 - Present',
      location: 'Trivandrum, Kerala',
      achievements: [
        'Engineered enterprise-grade applications using React.js & Next.js',
        'Optimized performance achieving 40% reduction in load times',
        'Mentored junior developers in modern React patterns',
      ],
      tech: ['React.js', 'Next.js', 'TypeScript', 'Redux Toolkit'],
    },
    {
      company: 'Kodnest',
      role: 'Full Stack Developer Intern',
      period: '2023',
      location: 'Bangalore, Karnataka',
      achievements: [
        'Developed full-stack applications with modern frameworks',
        'Implemented responsive UI designs with RESTful API integration',
        'Mastered component lifecycle and state management patterns',
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    },
  ],
  projects: [
    {
      id: 1,
      title: 'Quantum Project Management',
      description:
        'Advanced project management tool with real-time collaboration, AI-powered insights, and immersive 3D project visualization.',
      tags: ['React.js', 'Three.js', 'WebSocket', 'AI/ML'],
      status: 'Active',
      glow: true,
    },
    {
      id: 2,
      title: 'Nexus HRMS Portal',
      description:
        'Next-generation HR management system with biometric integration, predictive analytics, and virtual onboarding experiences.',
      tags: ['Next.js', 'Node.js', 'TensorFlow.js', 'WebRTC'],
      status: 'Deployed',
      glow: true,
    },
    {
      id: 3,
      title: 'Cosmic Design System',
      description:
        'Futuristic component library with 3D interactive elements, neural network themes, and zero-runtime styling.',
      tags: ['React', 'WebGL', 'CSS-in-JS', 'Design Systems'],
      status: 'In Development',
      glow: true,
    },
  ],
  contact: {
    email: 'nsindragith@gmail.com',
    phone: '+91-9747770467',
    socials: [
      { name: 'GitHub', url: 'https://github.com/Indragith-dev', icon: '🚀' },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/nsindragith',
        icon: '💼',
      },
      { name: 'Email', url: 'mailto:nsindragith@gmail.com', icon: '📧' },
    ],
  },
}));

export default usePortfolioStore;
