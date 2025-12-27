import {
  mobile,
  backend,
  uiux,
  web,
  css,
  figma,
  git,
  html,
  javascript,
  nodejs,
  reactjs,
  tailwind,
  java,
  laravel,
  mysql,
  python,
  vue,
  goodpage,
  wela,
  vsu,
  psv,
  pss,
  trn,
  dims,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: uiux,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Vue.js",
    icon: vue,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Social Media Manager",
    company_name: "GoodPage",
    icon: goodpage,
    iconBg: "#383E56",
    date: "Sep 2020 - Present",
    points: [
      "Developing and executing social media strategies to increase brand awareness and audience engagement.",
      "Keeping page profile up-to-date.",
      "Managing and sharing content.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Wela School Systems",
    icon: wela,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Aug 2024",
    points: [
      "Development of dynamic print formats, contributing to both frontend interfaces and backend logic.",
      "Collaborating with senior developers to troubleshoot bugs, refactor code, and improve script performance.",
      "Gaining hands-on experience with Python and JavaScript integration in a professional production environment.",
    ],
  },
];

// Changed content to education and experience and I was too lazy to modify the variable names

const testimonials = [
  {
    testimonial:
      "Graduated with a focus on Software Engineering and Web Development.",
    name: "Bachelor of Computer Science",
    designation: "Batch",
    company: "2021 - 2025",
    image: vsu,
  },
  {
    testimonial:
      "Thesis involved creating an innovative Pageant Scoring System web application using Vue, PHP/Laravel, MySQL, and Node as the tech stack.",
    name: "Pageant Scoring System",
    designation: "Thesis Project",
    company: "2025",
    image: psv,
  },
  {
    testimonial:
      "Consistently maintained high academic standards throughout the 4-year degree program.",
    name: "Dean's and Chairman's Lister",
    designation: "Honor Student",
    company: "2021 - 2022",
    image: vsu,
  },
];

const projects = [
  {
    name: "Pageant Scoring System",
    description:
      "Web-based pageant scoring system for a real-time judge and tabulator interaction. Allows judges to send scores while the system automatically calculates the final score, providing a convenient and efficient solution for scoring needs.",
    tags: [
      {
        name: "vue",
        color: "green-text-gradient",
      },
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
    ],
    image: pss,
    source_code_link: "https://github.com/rendznicoy/pageant-frontend",
  },
  {
    name: "Transactiq",
    description:
      "An innovative, all-in-one mobile POS solution tailored for the efficiency and digital integration of Philippine MSEs.",
    tags: [
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "swift",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
    ],
    image: trn,
    source_code_link: "https://github.com/josuafalguera/bayad-system",
  },
  {
    name: "Inventory System",
    description:
      "A Windows Form-based desktop application designed to streamline inventory, order management, and delivery logistics for a local bakery in Ormoc City, replacing inefficient manual workflows with a secure digital solution.",
    tags: [
      {
        name: "c-sharp",
        color: "green-text-gradient",
      },
      {
        name: ".net",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
    ],
    image: dims,
    source_code_link: "https://github.com/rendznicoy/GigisCakesAndPastries",
  },
];

export { services, technologies, experiences, testimonials, projects };
