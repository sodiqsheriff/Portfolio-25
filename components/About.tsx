"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-blue to-blue-600 rounded-3xl blur-2xl opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="relative w-96 h-96 rounded-3xl overflow-hidden border-4 border-primary-blue/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/sheriff-profile.jpg"
                  alt="Sheriff Sodiq - MERN Stack Developer & 3D Enthusiast"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-6">
              MERN Stack Engineer & <span className="gradient-text">3D Enthusiast</span>
            </h3>

            <p className="text-gray-400 leading-relaxed text-lg">
              I am a full-stack Engineer with a strong passion for Software Engineering, building clean, responsive
              interfaces and real-world web applications that actually work well and look good. I have worked on
              everything from e-commerce platforms to real-time chat apps, using tools like React, Next.js, TypeScript, Dart, Flutter
              and MongoDB.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg">
              Along the way, I have mentored juniors, contributed to open-source, and kept learning by doing. Whether
              leading a feature or refining performance, I bring sharp execution, curiosity, and a builder's mindset to
              every project.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg">
              Recently, I've been exploring the exciting world of 3D web development with Three.js and React Three
              Fiber, creating immersive experiences that push the boundaries of what's possible on the web.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
                <h4 className="text-primary-blue font-semibold mb-2">Experience</h4>
                <p className="text-2xl font-bold">4+ Years</p>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
                <h4 className="text-primary-blue font-semibold mb-2">Projects</h4>
                <p className="text-2xl font-bold">50+ Completed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
