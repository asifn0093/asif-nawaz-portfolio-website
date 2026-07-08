import { FaReact, FaNodeJs, FaShopify, FaFigma, FaPython, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMongodb, SiFirebase, SiNextdotjs } from "react-icons/si";

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
    ],
  },
  {
    title: "E-Commerce & Design",
    skills: [
      { name: "Shopify", icon: FaShopify, color: "#7AB55C" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
    ],
  },
];
