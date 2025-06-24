// src/components/TechStack.jsx
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiTableau,
  SiPython,
  SiR,
  SiGit,
  SiJupyter,
} from "react-icons/si";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { DiVisualstudio } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { DiFirebase } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { RiReactjsFill } from "react-icons/ri";

const PowerBIIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="256" height="256" rx="60" fill="#F2C811" />
    <path
      d="M93 170c0 3.3-2.7 6-6 6H69c-3.3 0-6-2.7-6-6V90c0-3.3 2.7-6 6-6h18c3.3 0 6 2.7 6 6v80zm47 0c0 3.3-2.7 6-6 6h-18c-3.3 0-6-2.7-6-6v-49c0-3.3 2.7-6 6-6h18c3.3 0 6 2.7 6 6v49zm47 0c0 3.3-2.7 6-6 6h-18c-3.3 0-6-2.7-6-6v-27c0-3.3 2.7-6 6-6h18c3.3 0 6 2.7 6 6v27z"
      fill="#000"
    />
  </svg>
);


const techStack = [
  { name: "MySQL", icon: <DiMysql size={32} color="#00758F" /> },
  { name: "PostgreSQL", icon: <BiLogoPostgresql size={32} color="#336791" /> },
  { name: "Excel", icon: <PiMicrosoftExcelLogoFill size={32} color="#217346" /> },
  { name: "Tableau", icon: <SiTableau size={32} color="#E97627" /> },
  { name: "Python", icon: <SiPython size={32} color="#3776AB" /> },
  { name: "Power BI", icon: <PowerBIIcon /> }, // Already styled with yellow bars
  { name: "R", icon: <SiR size={32} color="#276DC3" /> },
  { name: "VS Code", icon: <DiVisualstudio size={32} color="#007ACC" /> },
  { name: "Git", icon: <SiGit size={32} color="#F05032" /> },
  { name: "Jupyter", icon: <SiJupyter size={32} color="#F37726" /> },
  { name: "NumPy", icon: <SiNumpy size={32} color="#013243" /> },
  { name: "Pandas", icon: <SiPandas size={32} color="#150458" /> },
  { name: "Firebase", icon: <DiFirebase size={32} color="#FFCA28" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={32} color="#06B6D4" /> },
  { name: "JavaScript", icon: <DiJavascript1 size={32} color="#F7DF1E" /> },
  { name: "React JS", icon: <RiReactjsFill size={32} color="#61DAFB" /> },
];


export const Tech = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-16 px-4 md:px-8 lg:px-24 min-h-[100vh] mb-32">
  <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 text-center">
        Tech <span className="text-foreground">Skills</span>
      </h2>
      <div className="w-24 h-1 bg-purple-500 mx-auto mb-12 rounded"></div>

      <div
        ref={ref}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="group relative p-4 rounded-xl bg-muted hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors duration-300"
            variants={itemVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.3, delay: index * 0.07 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {tech.icon}
            <span className="absolute opacity-0 group-hover:opacity-100 transition-all text-sm bg-foreground text-background px-2 py-1 rounded shadow-lg -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-10">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
