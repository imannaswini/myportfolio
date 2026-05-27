import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGithub,
  FaCode,
  FaBolt
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiFirebase,
  SiGooglecloud,
  SiNextdotjs,
  SiSalesforce
} from "react-icons/si";

export const portfolioData = {
  hero: {
    name: "P A Mannaswini",
    tagline: "Full Stack Developer & Aspiring AI Engineer",

    description:
      "Full Stack Developer passionate about building scalable web applications, AI-powered platforms, and impactful digital experiences.",

    miniStatus: "Currently Learning GenAI & Cloud",

    socials: {
      github: "https://github.com/imannaswini",
      linkedin: "https://linkedin.com/in/mannaswini",
      email: "mailto:iammannaswini@gmail.com",
      hackerrank: "https://www.hackerrank.com/profile/iammannas_24",
      resume: "https://docs.google.com/document/d/1LZs7u4JHJwPGoQ4y6Yez_9_q2__u16i3p9k8df3lrL4/edit?usp=sharing",
    },
  },

  about: {
    introduction:
      "Computer Science undergraduate passionate about Full Stack Development, Generative AI, and Cloud Computing. Experienced in building scalable web applications, authentication systems, REST APIs, and AI-powered platforms through hackathons, open-source programs, and academic projects.",

    goals:
      "My goal is to become an AI Engineer and build intelligent systems that combine modern web technologies with machine learning and cloud infrastructure.",
  },

  skills: [
    {
      name: "React.js",
      icon: FaReact,
      category: "Frontend",
      color: "text-blue-500",
    },

    {
      name: "Next.js",
      icon: SiNextdotjs,
      category: "Frontend",
      color: "text-white",
    },
    {
  name: "C",
  icon: FaCode,
  category: "Programming",
  color: "text-blue-300",
},
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      category: "Frontend",
      color: "text-teal-400",
    },

    {
      name: "Node.js",
      icon: FaNodeJs,
      category: "Backend",
      color: "text-green-500",
    },

    {
      name: "Java",
      icon: FaJava,
      category: "Programming",
      color: "text-red-500",
    },

    {
      name: "Python",
      icon: FaPython,
      category: "Programming",
      color: "text-yellow-500",
    },

    {
      name: "MongoDB",
      icon: SiMongodb,
      category: "Database",
      color: "text-green-600",
    },

    {
      name: "MySQL",
      icon: SiMysql,
      category: "Database",
      color: "text-blue-600",
    },

    {
      name: "Firebase",
      icon: SiFirebase,
      category: "Cloud",
      color: "text-yellow-400",
    },

    {
      name: "Google Cloud",
      icon: SiGooglecloud,
      category: "Cloud",
      color: "text-blue-400",
    },

    // {
    //   name: "Generative AI",
    //   icon: SiOpenai,
    //   category: "AI/GenAI",
    //   color: "text-emerald-500",
    // },

    {
      name: "Git/GitHub",
      icon: FaGithub,
      category: "Tools",
      color: "text-gray-400",
    },

    {
      name: "Salesforce",
      icon: SiSalesforce,
      category: "Cloud",
      color: "text-blue-500",
    },

    {
      name: "Apex",
      icon: FaCode,
      category: "Backend",
      color: "text-indigo-400",
    },

    {
      name: "LWC",
      icon: FaBolt,
      category: "Frontend",
      color: "text-cyan-400",
    },
    {
  name: "VS Code",
  icon: VscVscode,
  category: "Tools",
  color: "text-blue-400",
},
  ],

  projects: [
    {
      title: "SPARK – Task Management Platform",

      description:
        "Role-based full-stack task management platform with secure JWT authentication, admin/member dashboards, task tracking, and RESTful APIs.",

      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",

      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
      ],

      github: "https://github.com/imannaswini/TrelloClone",

      demo: "#",

      category: "Full Stack",
    },

    {
      title: "GradTrack – Student Skill Development Platform",

      description:
        "Full-stack student learning platform providing curated learning resources, events, and domain-based quizzes with MySQL integration.",

      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",

      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "MySQL",
      ],

      github: "https://github.com/imannaswini/GradTrack",

      demo: "#",

      category: "Full Stack",
    },

    {
      title: "HerPulse AI – Smart Period & PCOD Prediction Platform",

      description:
        "AI-powered women’s health platform featuring cycle tracking, PCOD risk analysis, AI chatbot support, smart notifications, and health reports.",

      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",

      tech: [
        "React.js",
        "Node.js",
        "Firebase",
        "Firestore",
        "Groq AI",
      ],

      github: "https://github.com/imannaswini/HerPulseAI",

      demo: "#",

      category: "AI/ML",
    },
    {
  title: "JobFit-AI – AI Job Candidate Matching Engine",

  description:
    "AI-powered job and candidate matching platform that analyzes user profiles and job postings to recommend the best-fit opportunities using intelligent matching algorithms.",

  image:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",

  tech: [
    "Python",
    "SQLite",
    "AI Matching Engine",
    "Backend Development"
  ],

  github: "https://github.com/imannaswini/jobfit-ai",

  demo: "#",

  featured: true,

  category: "AI/ML",
},
{
  title: "COASTGUARD-AI – Cyclone Risk Prediction & Coastal Surveillance Platform",

  description:
    "Real-time cyclonic surveillance and coastal risk intelligence platform transforming meteorological satellite data into predictive analytics through interactive geospatial dashboards and live AI-driven risk monitoring.",

  image:
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",

  tech: [
    "Python",
    "FastAPI",
    "SQLite",
    "Chart.js",
    "Leaflet.js",
    "JavaScript",
    "HTML/CSS"
  ],

  github: "https://github.com/imannaswini/India-Coastal-Climate-and-Cyclone-Prediction",

  demo: "#",

  featured: true,

  category: "AI/ML",
},
{
  title: "Salesforce App – CRM & Workflow Development",

  description:
    "Built Salesforce-based application components using Apex and Lightning Web Components (LWC), implementing frontend interactions, backend logic, and cloud-based workflows within Salesforce Developer Edition.",

  image:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",

  tech: [
    "Salesforce",
    "Apex",
    "LWC",
    "JavaScript"
  ],

  github: "https://github.com/imannaswini/salesforce-app",

  featured: false,

  category: "Cloud",
}
  ],

  experience: [
    {
      title: "Project Contributor",

      organization: "OSCI-25 Open Source Program",

      date: "2025",

      description:
        "Contributed to the Inboxly project by setting up frontend architecture using React (Vite) and Tailwind CSS and implementing the landing page UI.",

      type: "Open Source",
    },

    {
      title: "Project Contributor",

      organization: "DevTrack Club",

      date: "2024 - 2025",

      description:
        "Worked on student-focused tech initiatives and collaborated on frontend and UI/UX development projects.",

      type: "Community",
    },

    {
      title: "GSSoC Contributor",

      organization: "GirlScript Summer of Code",

      date: "2025",

      description:
        "Contributing to open-source repositories and improving frontend experiences through collaborative development.",

      type: "Open Source",
    },
    {
      title: "GSSoC Contributor",

      organization: "GirlScript Summer of Code",

      date: "2026",

      description:
        "Contributing to open-source repositories and improving frontend experiences through collaborative development.",

      type: "Open Source",
    },
    
  ],

  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",

      institution: "REVA University",

      period: "2023 - 2027",

      cgpa: "8.0",

      details:
        "Focused on Full Stack Development, Cloud Computing, and Artificial Intelligence.",
    },
  ],

  certifications: [
    "Prompt Design in Vertex AI - Google Cloud",

    "Java (Basic) - HackerRank",
        "Intoduction to Cloud Computing - Infosys Springboard",


    "AI Foundations - IBM"

  ],

  hackathons: [
    "Elite Her Hackathon - Finalist",

    "HackerRank Orchestrate – Participant",

    "Google Developer Student Clubs Solution Challenge 2025",

    "Code4Edtech Hackathon 2025",

    "Argonyx'24 Hackathon",

    "Designathon by DevTrack",
  ],

  currentlyExploring: [
    "Generative AI",

    "Cloud Computing",


    "Open Source Contributions",
  ],
};