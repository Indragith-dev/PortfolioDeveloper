import create from "zustand";

const usePortfolioStore = create((set) => ({
  projects: [
    {
      id: 1,
      title: "3D Sphere Hero",
      description: "Interactive 3D hero built with React Three Fiber and drei.",
      tags: ["React", "Three.js", "Vite"],
      link: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Responsive portfolio built with modern React patterns.",
      tags: ["React", "Styled-Components", "Vite"],
      link: "#",
    },
  ],
  about: {
    intro:
      "Front-End Developer focused on building accessible and performant web experiences. I love React, Three.js and crafting delightful UI.",
    skills: ["React", "JavaScript", "Three.js", "CSS", "Vite"],
  },
  contact: {
    email: "you@example.com",
    socials: [
      { name: "GitHub", url: "https://github.com/your" },
      { name: "LinkedIn", url: "https://linkedin.com/in/your" },
    ],
  },

  // actions
  addProject: (project) =>
    set((state) => ({ projects: [project, ...state.projects] })),
  setProjects: (projects) => set({ projects }),
  updateAbout: (about) => set((state) => ({ about: { ...state.about, ...about } })),
  updateContact: (contact) => set((state) => ({ contact: { ...state.contact, ...contact } })),
}));

export default usePortfolioStore;
