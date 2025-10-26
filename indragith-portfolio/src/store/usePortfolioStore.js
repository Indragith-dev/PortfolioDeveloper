import { create } from 'zustand';

const usePortfolioStore = create((set) => ({
  about: {
    intro:
      "I'm a passionate front-end developer specializing in creating beautiful, interactive web experiences. I love working with modern JavaScript frameworks and exploring the possibilities of 3D web graphics.",
    skills: [
      'React',
      'JavaScript',
      'Three.js',
      'React Three Fiber',
      'HTML/CSS',
      'Zustand',
      'Vite',
      'Styled Components',
      'Git',
      'Responsive Design',
    ],
  },
  projects: [
    {
      id: 1,
      title: '3D Portfolio Website',
      description:
        'An interactive portfolio featuring 3D graphics and smooth animations built with React Three Fiber.',
      tags: ['React', 'Three.js', 'WebGL'],
      link: '#',
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description:
        'A full-featured online store with cart functionality and payment integration.',
      tags: ['React', 'Redux', 'API'],
      link: '#',
    },
    {
      id: 3,
      title: 'Task Management App',
      description:
        'A collaborative task manager with real-time updates and team features.',
      tags: ['React', 'Firebase', 'Tailwind'],
      link: '#',
    },
  ],
  contact: {
    email: 'indragith@example.com',
    socials: [
      { name: 'GitHub', url: 'https://github.com' },
      { name: 'LinkedIn', url: 'https://linkedin.com' },
      { name: 'Twitter', url: 'https://twitter.com' },
    ],
  },
  addProject: (project) =>
    set((state) => ({ projects: [project, ...state.projects] })),
  setProjects: (projects) => set({ projects }),
  updateAbout: (about) =>
    set((state) => ({ about: { ...state.about, ...about } })),
  updateContact: (contact) =>
    set((state) => ({ contact: { ...state.contact, ...contact } })),
}));

export default usePortfolioStore;
