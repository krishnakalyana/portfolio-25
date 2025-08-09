// Central, reusable portfolio configuration.
// To adapt for yourself: change the fields below. No code edits required elsewhere.

export const portfolio = {
  // Basic info
  name: "Krishna Kalyana",
  role: "Senior Software Engineer",
  location: "Delhi, India",
  summary:
    "Skilled professional with four years of hands‑on experience in JavaScript, ReactJS, HTML, CSS, Material UI, and Next.js. Delivered multiple industry‑level projects, crafting robust, user‑centric solutions and translating design concepts into functional, responsive interfaces.",

  // Public assets
  avatarUrl: "", // e.g. "/avatar.jpg" placed in public/
  resumeUrl: "/resume.pdf", // file is already copied to public

  // Contacts and social links (show only those you fill in)
  contacts: {
    email: "krishnakalyanax@gmail.com",
    phone: "9024477043",
    website: "https://portfolio-smoky-ten-84.vercel.app/",
    github: "https://github.com/krishnakalyana",
    linkedin: "https://linkedin.com/in/krishnakalyanax/",
    twitter: "",
  },

  // Skills to highlight
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "Redux Toolkit",
    "Context API",
    "React Router",
    "Material UI",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Styled Components",
    "Framer Motion",
    "Chart.js",
    "Axios",
    "Google Maps React",
    "Figma",
  ],

  // Work experience
  experience: [
    {
      company: "HCLTech",
      role: "Technical Lead",
      start: "2025/08",
      end: "Present",
      location: "",
      bullets: [
        "Delegated work and assignments to team members, ensuring efficient task distribution and timely completion.",
        "Collaborated with the team to identify and resolve technical problems, optimizing development workflows.",
        "Analyzed users' needs to design applications enhancing UX and meeting business objectives.",
        "Led frontend development by establishing coding standards, best practices, and reusable components.",
        "Researched emerging technologies and implemented innovative solutions to enhance performance.",
        "Mentored junior developers, conducted code reviews, and fostered continuous learning.",
        "Drove UI/UX improvements with designers to deliver seamless experiences.",
        "Coordinated with backend developers for efficient API integration and data flow.",
      ],
      stack: ["React", "Next.js", "Redux", "Material UI"],
    },
    {
      company: "Propel",
      role: "Senior Software Engineer",
      start: "2024/06",
      end: "2025/08",
      location: "",
      bullets: [
        "Developed and maintained clean, elegant, and scalable React applications with best practices.",
        "Led end‑to‑end application architecture with focus on performance, security, scalability, maintainability.",
        "Conducted performance optimizations to enhance speed, responsiveness, and UX.",
        "Implemented security best practices and ensured compliance with industry standards.",
        "Designed and executed unit, integration, and E2E testing strategies.",
        "Improved codebase stability via refined architecture, state management, and component reuse.",
        "Mentored and trained team members; performed thorough code reviews.",
        "Collaborated with cross‑functional teams and promoted consistency via patterns and scalable solutions.",
      ],
      stack: ["React", "Redux Toolkit", "Next.js", "TypeScript"],
    },
    {
      company: "SFLHub",
      role: "Technical Lead",
      start: "2022/12",
      end: "2024/05",
      location: "New Delhi, India",
      bullets: [
        "Led frontend architecture and implementation in React, establishing best practices.",
        "Initiated architectural building blocks for upcoming features; drove R&D for new features.",
        "Enhanced performance, responsiveness, and stability across the codebase.",
        "Coordinated with backend teams and drove UI/UX improvements with designers.",
      ],
      stack: ["React", "Redux", "Redux Toolkit", "Axios", "Material UI", "Chart.js", "Google Maps React"],
    },
    {
      company: "Snehix",
      role: "Software Engineer",
      start: "2020/06",
      end: "2022/12",
      location: "Bengaluru, India",
      bullets: [
        "Wrote well‑structured, maintainable, and testable code ensuring scalability.",
        "Implemented best coding practices to improve readability, modularity, and reusability.",
        "Integrated software components into cohesive systems; optimized data flow and performance.",
        "Designed and maintained unit, integration, and E2E tests for reliability.",
      ],
      stack: ["React", "Redux", "Context API", "Axios", "Material UI"],
    },
  ],

  // Selected projects
  projects: [
    {
      name: "Propel Widget",
      description:
        "Customer engagement widget for websites with personalized messaging, intelligent chatbots, real‑time support, and seamless integration.",
      link: "",
      repo: "",
      highlights: [
        "Boosted conversion rates and satisfaction via easy customization and effective query management.",
      ],
      stack: ["React", "Next.js", "Redux Toolkit"],
    },
    {
      name: "SFL Insights",
      description:
        "White‑label web app for shipment visibility, tracking, document uploads, and analytics powered by CargoWise One data.",
      link: "",
      repo: "",
      highlights: [
        "Led implementation and architecture in ReactJS; set foundations for upcoming features.",
      ],
      stack: ["React", "Redux", "Redux Toolkit", "Axios", "Chart.js", "Material UI", "Google Maps React"],
    },
    {
      name: "Asia Shipping",
      description:
        "Web application for shipment visibility, tracking, document uploads, and analytics powered by CargoWise One data.",
      link: "",
      repo: "",
      highlights: [
        "Elevated code stability, responsiveness, and performance via targeted enhancements.",
      ],
      stack: ["React", "Redux", "Redux Toolkit", "Axios", "Material UI", "Google Maps React"],
    },
    {
      name: "User Portal",
      description:
        "Portal enabling educators to connect and collaborate, with direct upload/download of handwritten notes.",
      link: "",
      repo: "",
      highlights: [
        "Engineered reusable components focused on React for future apps; prioritized readability and reuse.",
      ],
      stack: ["React", "Redux", "Context API", "Axios", "Material UI"],
    },
  ],

  // Education
  education: [
    {
      school: "Mewar University",
      degree: "B.Tech in Computer Science and Engineering",
      start: "2016",
      end: "2019",
      location: "Chittorgarh, India",
      cgpa: "7.41",
    },
    {
      school: "Mewar University",
      degree: "Diploma in Computer Science and Engineering",
      start: "2013",
      end: "2016",
      location: "Chittorgarh, India",
      cgpa: "6.25",
    },
    {
      school: "Central Academy",
      degree: "Class X",
      start: "2012",
      end: "2013",
      location: "Chittorgarh, India",
      cgpa: "6.00",
    },
  ],
};

export default portfolio;


