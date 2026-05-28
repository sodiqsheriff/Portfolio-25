"use client"

import { motion } from "framer-motion"
import { FiExternalLink, FiGithub } from "react-icons/fi"
import { SiSolidity, SiEthereum, SiReact, SiNextdotjs, SiNodedotjs, SiSocketdotio, SiIpfs } from "react-icons/si"
import { TbBrandThreejs } from "react-icons/tb"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "Web3 Freelancing Platform",
    description: "Trustless freelancing marketplace on Ethereum. Employers lock payment in Solidity smart contracts, funds release on delivery. IPFS used for decentralized CV storage with DAO-based dispute resolution.",
    image: "/images/decentralized.png",
    tags: ["Solidity", "IPFS", "React", "Node.js", "Ethereum"],
    type: "web3",
    icons: [SiSolidity, SiEthereum, SiIpfs],
    featured: true,
  },
  {
    id: 2,
    title: "Real-Time Collaborative Editor",
    description: "Multiplayer design tool reverse-engineered from Figma's core architecture. Features conflict-free concurrent editing using CRDT algorithms, live cursor sync via WebSockets, and sub-100ms latency.",
    image: "/images/figma-clone.png",
    tags: ["React", "CRDTs", "WebSockets", "Node.js"],
    type: "realtime",
    icons: [SiReact, SiSocketdotio, SiNodedotjs],
    realTime: true,
  },
  {
    id: 3,
    title: "3D Developer Dashboard",
    description: "Immersive WebGL experience, gyroscope-controlled on mobile and mouse-tracked on desktop. Features custom lighting rigs, camera transitions, and lazy-loaded assets keeping load time under 2 seconds.",
    image: "/images/3d-dashboard.png",
    tags: ["Three.js", "react-three-fiber", "WebGL", "React"],
    type: "3d",
    icons: [TbBrandThreejs, SiReact],
    featured: true,
  },
]

const filters = ["All", "Web3", "Realtime", "3D"]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.type === activeFilter.toLowerCase())

  return (
    <section id="projects" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Selected <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter 
                  ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]" 
                  : "glass hover:bg-white/10 text-gray-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card flex flex-col group overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-10 mix-blend-overlay"></div>
                {/* Fallback pattern since images might not exist yet */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  {project.featured && (
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                      Featured
                    </span>
                  )}
                  {project.realTime && (
                    <motion.span
                      className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                      Live
                    </motion.span>
                  )}
                </div>
                
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                   {project.icons?.map((Icon, i) => (
                      <div key={i} className="p-1.5 glass rounded-full text-white/80 backdrop-blur-md">
                        <Icon className="w-4 h-4" />
                      </div>
                    ))}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 glass text-xs font-medium text-gray-300 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <motion.a
                    href="#"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    <FiGithub className="w-4 h-4" />
                    Source Code
                  </motion.a>
                  <motion.a
                    href="#"
                    className="flex items-center gap-2 text-sm text-primary hover:text-blue-400 transition-colors ml-auto"
                    whileHover={{ x: 2 }}
                  >
                    View Details
                    <FiExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
