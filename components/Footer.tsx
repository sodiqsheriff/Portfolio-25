"use client"

import { motion } from "framer-motion"
import { FiHeart } from "react-icons/fi"
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si"

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-gray-400 font-inter">Built</span>
            <span className="text-gray-400 font-inter">using</span>
          </div>

          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <SiNextdotjs className="w-5 h-5 text-white" />
              <span className="font-fira text-sm">Next.js</span>
            </div>
            <div className="flex items-center gap-2">
              <SiTypescript className="w-5 h-5 text-blue-500" />
              <span className="font-fira text-sm">TypeScript</span>
            </div>
            <div className="flex items-center gap-2">
              <SiTailwindcss className="w-5 h-5 text-cyan-500" />
              <span className="font-fira text-sm">Tailwind CSS</span>
            </div>
          </div>

          <p className="text-gray-500 font-inter">© 2025 Sodiq Sheriff. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
