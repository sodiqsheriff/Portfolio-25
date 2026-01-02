"use client";

import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
} from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

const techIcons = [
  { Icon: SiReact, name: "React", delay: 0 },
  { Icon: SiNextdotjs, name: "Next.js", delay: 0.2 },
  { Icon: SiTypescript, name: "TypeScript", delay: 0.4 },
  { Icon: SiTailwindcss, name: "Tailwind", delay: 0.6 },
  { Icon: SiMongodb, name: "MongoDB", delay: 0.8 },
  { Icon: SiNodedotjs, name: "Node.js", delay: 1.0 },
  { Icon: TbBrandThreejs, name: "Three.js", delay: 1.2 },
];

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/My_Resume_.pdf";
    link.download = "Sheriff_Sodiq_CV.pdf";
    link.click();
  };
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-16"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 via-transparent to-primary-blue/5 animate-pulse-slow" />
      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none">
        {techIcons.map(({ Icon, name, delay }, index) => (
          <motion.div
            key={name}
            className="absolute tech-icon"
            style={{
              left: `${15 + index * 12}%`,
              top: `${25 + (index % 3) * 25}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 0.1,
              scale: 1,
              y: [0, -20, 0],
            }}
            transition={{
              delay,
              duration: 2,
              y: {
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
            }}
          >
            <Icon className="w-12 h-12 text-primary-blue" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="gradient-text ">Sheriff Sodiq</span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            MERN Stack Engineer & 3D Enthusiast
          </motion.h2>

          <motion.p
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Building functional & scalable full-stack web applications with
            modern technologies. Passionate about creating immersive 3D
            experiences and exceptional user interfaces.
          </motion.p>

          <motion.div
            className="flex flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={scrollToProjects}
              className="bg-primary-blue hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              onClick={downloadCV}
              className="border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="w-5 h-5" />
              Download CV
            </motion.button>
          </motion.div>

          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              {
                Icon: FiGithub,
                href: "https://github.com/sodiqsheriff",
                label: "GitHub",
              },
              {
                Icon: FiLinkedin,
                href: "https://linkedin.com/in/sodiqsheriff",
                label: "LinkedIn",
              },
              {
                Icon: FiMail,
                href: "mailto:sodiqheriff9@gmail.com",
                label: "Email",
              },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-700 rounded-xl hover:border-primary-blue hover:text-primary-blue transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
