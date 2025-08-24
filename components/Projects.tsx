"use client"

import { motion } from "framer-motion"
import { FiExternalLink, FiGithub, FiPlay } from "react-icons/fi"
import { SiSolidity, SiEthereum, SiOpenai, SiReact, SiNextdotjs, SiMongodb, SiSocketdotio, SiTypescript } from "react-icons/si"
import { TbBrandThreejs } from "react-icons/tb"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "Web3 Job Platform",
    description:
      "Decentralized freelancing platform where employers and devs interact trustlessly. Built with Solidity smart contracts, IPFS résumé storage, and DAO dispute resolution.",
    image: "/decentralized.png",
    tags: ["Next.js", "Solidity", "The Graph", "Wagmi"],
      live: "https://web3-job-platform.vercel.app/",
    etherscan: "#",
    featured: true,
    type: "blockchain",
    icons: [SiSolidity, SiEthereum, SiNextdotjs],
    animation: "token-rewards",
  },
  {
    id: 2,
    title: "Fund-R",
    description:
      "A smart contract-based crowdfunding platform with personalized campaign recommendations.",
    image: "/fund.png?height=300&width=500",
    tags: ["OpenAI API", "LangChain", "MongoDB", "Next.js"],
    live: "https://fund-r-app.vercel.app/",
    demo: true,
    featured: true,
    type: "ai",
    icons: [SiTypescript, SiNextdotjs],
    animation: "ai-avatar",
  },
  {
    id: 3,
    title: "Real-Time Figma Clone",
    description:
      "Figma-like collaborative editor with multiplayer cursors, version history, and export options. Powered by CRDTs and WebSockets.",
    image: "/figma-clone.png?height=300&width=500",
    tags: ["Socket.io", "Liveblocks", "Fabric.js", "Supabase"],
    live: "https://custom-figma-app.vercel.app/",
    featured: true,
    type: "realtime",
    icons: [SiSocketdotio, SiReact],
    realTime: true,
    animation: "live-cursors",
  },
  {
    id: 4,
    title: "3D Developer Dashboard",
    description:
      "Immersive 3D dashboard visualizing my dev stack. Built with Three.js and react-three-fiber. Supports touch/gyroscope on mobile.",
    image: "/3d-dashboard.png?height=300&width=500",
    tags: ["Three.js", "R3F", "GSAP", "Blender"],
    live: "https://3d-developer-dashboard.vercel.app/",
    featured: true,
    type: "3d",
    icons: [TbBrandThreejs, SiReact],
    animation: "3d-scene",
  },
]

const filters = ["All", "Blockchain", "AI", "3D", "Real-time"]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [showDemo, setShowDemo] = useState(false)

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.type === activeFilter.toLowerCase())

  const handleDemoClick = () => {
    setShowDemo(true)
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work spanning Web3, AI, 3D, and real-time applications
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeFilter === filter ? "bg-primary-blue text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden card-hover group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />

                {/* Special animations overlay */}
                {project.animation === "token-rewards" && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-6 h-6 bg-yellow-400 rounded-full"
                        style={{
                          left: `${30 + i * 20}%`,
                          top: `${40 + i * 10}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0, 1, 0],
                          scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Special badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.featured && (
                    <div className="bg-primary-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                  {project.realTime && (
                    <motion.div
                      className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      Live
                    </motion.div>
                  )}
                </div>

                {/* Floating icons for special projects */}
                {project.type === "ai" && (
                  <motion.div
                    className="absolute top-4 right-4"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <SiOpenai className="w-8 h-8 text-green-400" />
                  </motion.div>
                )}

                {project.type === "3d" && (
                  <motion.div
                    className="absolute top-4 right-4"
                    animate={{
                      rotateY: [0, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <TbBrandThreejs className="w-8 h-8 text-white" />
                  </motion.div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.icons?.map((Icon, i) => (
                      <motion.div key={i} whileHover={{ scale: 1.2, rotate: 10 }} className="p-1">
                        <Icon className="w-5 h-5 text-primary-blue" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 bg-gray-800 text-primary-blue rounded-full text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: tagIndex * 0.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-blue hover:text-blue-400 transition-colors font-semibold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink className="w-5 h-5" />
                      Live Demo
                    </motion.a>
                  )}

                  {project.demo && (
                    <motion.button
                      onClick={handleDemoClick}
                      className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-semibold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiPlay className="w-5 h-5" />
                      Try Demo
                    </motion.button>
                  )}

                  {project.etherscan && (
                    <motion.a
                      href={project.etherscan}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors font-semibold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <SiEthereum className="w-5 h-5" />
                      Etherscan
                    </motion.a>
                  )}

                  
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Demo Modal */}
        {showDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setShowDemo(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gray-900 rounded-xl p-6 max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">AI Code Review Assistant Demo</h3>
              <div className="bg-gray-800 rounded-xl p-4 mb-4">
                <pre className="text-green-400 font-mono text-sm">
                  {`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`}
                </pre>
              </div>
              <div className="bg-blue-900/30 border border-blue-500/30 rounded-xl p-4">
                <p className="text-blue-300 mb-2">🤖 AI Analysis:</p>
                <p className="text-gray-300">
                  This recursive Fibonacci implementation has exponential time complexity O(2^n). Consider using dynamic
                  programming or memoization for better performance. The function will be very slow for large values of
                  n.
                </p>
              </div>
              <button
                onClick={() => setShowDemo(false)}
                className="mt-4 bg-primary-blue hover:bg-blue-600 text-white px-6 py-2 rounded-xl transition-colors"
              >
                Close Demo
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
