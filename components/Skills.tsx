"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Web3 & Blockchain",
    skills: ["Solidity", "Ethereum", "Web3.js", "IPFS", "Smart Contracts", "The Graph", "DAO", "EVM"],
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "Creative & 3D",
    skills: ["Three.js", "react-three-fiber", "WebGL", "GSAP", "Canvas API", "Motion Graphics"],
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Vue.js", "Tailwind CSS", "Redux", "Zustand"],
    color: "from-blue-400 to-cyan-400"
  },
  {
    title: "Backend & Systems",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "RESTful APIs", "Socket.io", "WebSockets"],
    color: "from-emerald-400 to-green-500"
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Vercel", "Docker", "CI/CD pipelines", "Git", "Firebase", "Supabase"],
    color: "from-orange-400 to-amber-500"
  },
  {
    title: "Mobile & Tools",
    skills: ["React Native (iOS/Android)", "Jest", "Storybook", "Figma", "Agile/Scrum"],
    color: "from-gray-400 to-gray-500"
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass-card p-6 flex flex-col group"
            >
              <h3 className={`text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 glass text-sm font-medium text-gray-300 rounded-md border border-white/5 group-hover:border-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}