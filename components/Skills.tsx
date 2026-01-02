"use client"

import { motion } from "framer-motion"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiSupabase,
  SiGit,
  SiFlutter,
  SiDart,
} from "react-icons/si"
import { TbBrandThreejs } from "react-icons/tb"

const skills = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Express", Icon: SiExpress, color: "#000000" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Three.js", Icon: TbBrandThreejs, color: "#000000" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
  { name: "Flutter", Icon: SiFlutter, color: "#02569B" },
  { name: "Dart", Icon: SiDart, color: "#0175C2" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies I work with to build modern, scalable applications
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full px-4 py-2 hover:border-primary-blue/50 transition-all duration-300 group cursor-pointer chip-hover"
              style={{ 
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.2)",
                transform: "translateZ(0)",
                willChange: "transform"
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <skill.Icon
                className="w-5 h-5 group-hover:scale-110 transition-transform"
                style={{ color: skill.color }}
              />
              <span className="text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .chip-hover:hover {
          background: linear-gradient(145deg, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.5));
          box-shadow: 0 6px 12px -2px rgba(0, 0, 0, 0.3), 
                      0 0 0 1px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </section>
  )
}