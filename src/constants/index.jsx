// import styles from "../style";import arrow from

// import logo from "/src/assets/logo.png";
import behance from "/src/assets/behance.png";
import pole from "/src/assets/pole.png";
import email from "/src/assets/email.png";
import spokoj from "/src/assets/spokoj.png";
import format from "/src/assets/format.png";
import github from "/src/assets/github.png";
import behanceIcon from "/src/assets/behance.svg";
import githubIcon from "/src/assets/github.svg";
import linkedinIcon from "/src/assets/linkedin.svg";

export { behance, pole, email, spokoj, format, github };

export const mainLinks = [
  {
    id: "about",
    title: "about",
    to: "/about",
  },
  {
    id: "portfolio",
    title: "portfolio",
    to: "/portfolio",
  },
  {
    id: "experience",
    title: "experience",
    to: "/experience",
  },
  {
    id: "contact",
    title: "contact",
    to: "/contact",
  },
];

export const navLinks = [
  {
    id: "about",
    title: "about",
    to: "/about",
  },
  {
    id: "resume",
    title: "resume",
    to: "/resume",
  },
  {
    id: "socialMedia",
    title: "social media",
    to: "/socialmedia",
  },
  {
    id: "contact",
    title: "contact",
    to: "/contact",
  },
];

export const portfolioLinks = [
  {
    id: "pole",
    title: "pole. dwumiesięcznik",
    subtitle: "frontend",
    to: "http://poledwumiesiecznik.com/",
    src: `${pole}`,
    color: "#D32027",
  },
  {
    id: "spokoj",
    title: "Własny $pokój",
    subtitle: "design",
    to: "https://www.figma.com/proto/JnaJkSGiFa6LVdP95f1HIj/W%C5%82asnySpok%C3%B3j?page-id=0%3A1&type=design&node-id=163-204&viewport=867%2C77%2C0.22&t=uSO1X671EZL3AAMd-1&scaling=scale-down-width&starting-point-node-id=163%3A204",
    src: `${spokoj}`,
    color: "#E4BCB4",
  },
  {
    id: "email",
    title: "email design",
    subtitle: "design",
    to: "/emaildesign",
    src: `${email}`,
    color: "#F5F5F5",
  },
  {
    id: "malyFormat",
    title: "Mały Format",
    subtitle: "design",

    to: "/malyformat",
    src: `${format}`,
    color: "#ffffff",
  },

  {
    id: "github",
    title: "github",
    subtitle: "frontend",
    to: "https://github.com/katwar15",
    src: `${github}`,
    color: "#21262D",
  },
  {
    id: "behance",
    title: "behance",
    subtitle: "design",
    to: "https://www.behance.net/katarzynawarmuz",
    src: `${behance}`,
    color: "#053EFF",
  },
];

export const marqueAdje = [
  {
    id: "skill",
    title: "figma",
    src: `${email}`,
  },

  {
    id: "soft-skill",
    title: "ux thinking",
    src: `${email}`,
  },
  {
    id: "skill",
    title: "vanilla js",
    src: `${email}`,
  },
  {
    id: "soft-skill",
    title: "intuition",
    src: `${email}`,
  },
  {
    id: "skill",
    title: "react js",
    src: `${email}`,
  },

  {
    id: "soft-skill",
    title: "multitasking",
    src: `${email}`,
  },

  {
    id: "skill",
    title: "html & css",
    src: `${email}`,
  },
  {
    id: "soft-skill",
    title: "team player",
    src: `${email}`,
  },

  {
    id: "skill",
    title: "typescript",
    src: `${email}`,
  },
  {
    id: "soft-skill",
    title: "creativity",
    src: `${email}`,
  },

  {
    id: "skill",
    title: "Knowledge of HTPP and Rest API",
    src: `${email}`,
  },
  {
    id: "soft-skill",
    title: "Empathy",
    src: `${email}`,
  },
  {
    id: "skill",
    title: "Knowledge of W3C and WCAG standards",
    src: `${email}`,
  },
  {
    id: "soft-skill",
    title: "also jazz lover",
    src: `${email}`,
  },
];

export const hopsaImages = [
  {
    job: "frontend",
    src: `${pole}`,
    years: "2022-2023",
    link: "/experience/design-frontend",
  },
  {
    job: "ux/ui design",
    src: `${behance}`,
    years: "2022-2023",
    link: "/experience/design-frontend",
  },
  {
    job: "CRM",
    src: `${email}`,
    years: 2023,
    link: "/experience/crm",
  },
  {
    job: "copywriting",
    src: `${spokoj}`,
    years: "2015-2023",
    link: "/experience/copywriting",
  },
];

export const footerIcons = [
  { icon: `${githubIcon}`, to: "https://github.com/katwar15" },
  { icon: `${behanceIcon}`, to: "https://www.behance.net/katarzynawarmuz" },
  {
    icon: `${linkedinIcon}`,
    to: "https://www.linkedin.com/in/katarzyna-warmuz-631364230/",
  },
];
