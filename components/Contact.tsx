"use client"

import type React from "react"

import { motion } from "framer-motion"
import { FiMail, FiSend, FiCheck, FiAlertCircle } from "react-icons/fi"
import { useState, useRef, useEffect } from "react"
import emailjs from "@emailjs/browser"

interface FormData {
  user_name: string
  user_email: string
  message: string
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error"
  message: string
}

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState<FormData>({
    user_name: "",
    user_email: "",
    message: "",
  })

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  })

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    if (publicKey) {
      emailjs.init(publicKey)
    } else {
      console.error("EmailJS Public Key is not set. Please add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY to your .env.local")
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.current) return
    setStatus({ type: "loading", message: "Sending message..." })

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "blaze_official"
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_ahnyvog"
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!publicKey) {
        throw new Error("EmailJS Public Key is missing.")
      }

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey,
      )

      if (result.status === 200) {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon. 🚀",
        })
        setFormData({ user_name: "", user_email: "", message: "" })
        if (form.current) {
          form.current.reset()
        }
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error("EmailJS Error:", error)
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again or contact me directly at sodiqsheriff9@gmail.com",
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    if (status.type !== "idle") {
      setStatus({ type: "idle", message: "" })
    }
  }

  return (
    <section id="contact" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Let's discuss your next ambitious project.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Let's talk about your project</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always interested in new opportunities, complex scalable architectures, and exciting 3D creative projects. I'll get back to you within 24-48 hours.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                className="flex items-center gap-4 glass-card p-6"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-4 bg-primary/10 rounded-xl">
                  <FiMail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="font-semibold text-white">sodiqsheriff9@gmail.com</p>
                </div>
              </motion.div>

              <div className="glass-card p-6 border-l-4 border-l-primary">
                <h4 className="font-semibold mb-2 text-white">Response Time</h4>
                <p className="text-gray-400 text-sm">Usually within 24-48 hours</p>
              </div>

              <div className="glass-card p-6 border-l-4 border-l-emerald-400">
                <h4 className="font-semibold mb-2 text-white">What I'm Looking For</h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Senior/Lead Full-Stack roles</li>
                  <li>• Web3 & Decentralized platform engineering</li>
                  <li>• High-performance 3D & WebGL frontends</li>
                  <li>• Innovative freelance collaborations</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6 glass-card p-8">
              <div>
                <label htmlFor="user_name" className="block text-sm font-semibold mb-2 text-gray-300">
                  Name *
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={formData.user_name} 
                  onChange={handleChange}
                  required
                  minLength={2}
                  maxLength={100}
                  disabled={status.type === "loading"}
                  className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-xl focus:border-primary focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="user_email" className="block text-sm font-semibold mb-2 text-gray-300">
                  Email *
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={formData.user_email}  
                  onChange={handleChange}
                  required
                  disabled={status.type === "loading"}
                  className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-xl focus:border-primary focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                  maxLength={1000}
                  rows={6}
                  disabled={status.type === "loading"}
                  className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-xl focus:border-primary focus:outline-none transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed text-white"
                  placeholder="Tell me about your project, ideas, or just say hello..."
                />
                <p className="text-xs text-gray-500 mt-2 text-right">{formData.message.length}/1000 characters</p>
              </div>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl flex items-center gap-3 ${
                    status.type === "success"
                      ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                      : status.type === "error"
                        ? "bg-rose-500/10 border border-rose-500/30 text-rose-400"
                        : "bg-blue-500/10 border border-blue-500/30 text-blue-400"
                  }`}
                >
                  {status.type === "success" && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    >
                      <FiCheck className="w-5 h-5" />
                    </motion.div>
                  )}
                  {status.type === "error" && <FiAlertCircle className="w-5 h-5" />}
                  {status.type === "loading" && (
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  )}
                  <p className="text-sm">{status.message}</p>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={status.type === "loading" || status.type === "success"}
                className={`w-full px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  status.type === "success"
                    ? "bg-emerald-600 text-white cursor-default"
                    : status.type === "loading"
                      ? "bg-white/10 text-white cursor-not-allowed"
                      : "bg-primary hover:bg-primary/90 text-white"
                }`}
                whileHover={status.type === "idle" || status.type === "error" ? { scale: 1.02 } : {}}
                whileTap={status.type === "idle" || status.type === "error" ? { scale: 0.98 } : {}}
              >
                {status.type === "loading" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending Message...
                  </>
                ) : status.type === "success" ? (
                  <>
                    <FiCheck className="w-5 h-5" />
                    Message Sent Successfully!
                  </>
                ) : (
                  <>
                    Send Message
                    <FiSend className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              {status.type === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <button
                    type="button"
                    onClick={() => {
                      setStatus({ type: "idle", message: "" })
                      setFormData({ user_name: "", user_email: "", message: "" })
                    }}
                    className="text-primary hover:text-white text-sm transition-colors mt-2"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}