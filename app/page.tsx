"use client"

import { AnimatePresence, motion } from "framer-motion"
import CanvasBackground from "@/components/CanvasBackground"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
// import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <CanvasBackground />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <Hero />
          <About />
          {/* <Experience /> */}
          <Projects />
          <Skills />
          <Contact />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </main>
  )
}
