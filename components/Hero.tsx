"use client"

import { motion } from "framer-motion"
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiSolidity } from "react-icons/si"
import { TbBrandThreejs } from "react-icons/tb"

const techIcons = [
  { Icon: SiReact, name: "React", delay: 0 },
  { Icon: SiNextdotjs, name: "Next.js", delay: 0.1 },
  { Icon: SiTypescript, name: "TypeScript", delay: 0.2 },
  { Icon: SiNodedotjs, name: "Node.js", delay: 0.3 },
  { Icon: SiSolidity, name: "Solidity", delay: 0.4 },
  { Icon: TbBrandThreejs, name: "Three.js", delay: 0.5 },
]

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const downloadCV = () => {
    const link = document.createElement("a")
    link.href = "/Sodiq_Sheriff_CV_ProductFullStack.pdf"
    link.download = "Sodiq_Sheriff_CV_ProductFullStack.pdf"
    link.click()
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 pt-16">
      <div className="max-w-5xl mx-auto z-10 w-full flex flex-col items-center">
        
        {/* Floating Glass Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass px-6 py-2 rounded-full mb-8 inline-flex items-center gap-2"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-sm font-medium tracking-wide text-gray-300">Available for new opportunities</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          >
            Hi, I'm <span className="text-gradient">Sheriff Sodiq</span>
          </motion.h1>

          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-xl md:text-3xl font-medium mb-8"
          >
            <span className="text-gray-200">Full-Stack Engineer</span>
            <span className="hidden md:block text-gray-600">•</span>
            <span className="text-gradient-web3">Web3 & Creative Dev</span>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I build and scale production applications — from <span className="text-gray-200 font-medium">decentralized Web3 platforms</span> and complex backends to <span className="text-gray-200 font-medium">immersive 3D experiences</span> that most frontend developers cannot deliver.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button
              onClick={scrollToProjects}
              className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 group shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={downloadCV}
              className="glass hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300"
            >
              <FiDownload className="w-5 h-5" />
              Download CV
            </button>
          </motion.div>

          <motion.div
            className="flex justify-center gap-8"
          >
            {[
              { Icon: FiGithub, href: "https://github.com/sodiqsheriff", label: "GitHub" },
              { Icon: FiLinkedin, href: "https://www.linkedin.com/in/sodiq-sheriff-a65aa8231/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BfAamA3UuQ02BkMdtJClS8Q%3D%3D", label: "LinkedIn" },
              { Icon: FiMail, href: "mailto:sodiqheriff9@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-7 h-7" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle tech stack marquee or floating icons at the bottom */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-6 md:gap-12 opacity-40">
        {techIcons.map(({ Icon, name, delay }) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + delay, duration: 0.8 }}
            className="flex flex-col items-center gap-2 group"
          >
            <Icon className="w-6 h-6 md:w-8 md:h-8 group-hover:text-primary transition-colors" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
