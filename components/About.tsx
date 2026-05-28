"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Bridging <span className="text-gradient">Logic</span> & <span className="text-gradient-web3">Creativity</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Profile Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative aspect-[4/5] w-full max-w-sm rounded-2xl overflow-hidden glass-card p-2">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <img
                    src="/images/sheriff-profile.jpg"
                    alt="Sheriff Sodiq - Full-Stack & Web3 Engineer"
                  
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <h3 className="text-2xl md:text-3xl font-semibold leading-tight text-gray-200">
              Full-Stack Architecture meets <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Web3 & Real-Time Innovation</span>
            </h3>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I am a lead full-stack engineer who thrives at the intersection of robust backend systems and high-impact creative frontends. My expertise lies in designing scalable architecture using React, Next.js, Node.js, and AWS, ensuring systems are both performant and production-ready.
              </p>
              
              <p>
                What sets me apart is my ability to transcend traditional web development. I architect decentralized trustless systems on Ethereum using Solidity and IPFS, and engineer real-time multiplayer platforms utilizing WebSockets and CRDTs. 
              </p>

              <p>
                Beyond logic and data flow, I craft immersive 3D experiences. Using Three.js and WebGL, I build interfaces that don't just function flawlessly—they captivate. Whether it's a DAO dispute resolution system or a gyroscope-controlled 3D dashboard, I deliver end-to-end excellence.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div className="glass-card p-4 text-center">
                <h4 className="text-primary font-medium mb-1">Experience</h4>
                <p className="text-2xl font-bold text-white">5+ Years</p>
              </div>
              <div className="glass-card p-4 text-center">
                <h4 className="text-emerald-400 font-medium mb-1">Focus</h4>
                <p className="text-lg font-bold text-white">Web3 & 3D</p>
              </div>
              <div className="glass-card p-4 text-center col-span-2 md:col-span-1">
                <h4 className="text-purple-400 font-medium mb-1">Cloud</h4>
                <p className="text-lg font-bold text-white">AWS Certified</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
