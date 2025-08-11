"use client"

import type React from "react"

import { motion } from "framer-motion"
import { FiMail, FiSend, FiCheck, FiAlertCircle } from "react-icons/fi"
import { useState, useRef, useEffect } from "react" // Import useEffect
import emailjs from "@emailjs/browser"

interface FormData {
  name: string
  email: string
  message: string
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error"
  message: string
}

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  })

  // Initialize EmailJS once when the component mounts
  useEffect(() => {
    // Ensure these environment variables are set in your .env.local file
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
        serviceId, // Your service ID
        templateId, // Your template ID
        form.current,
        publicKey, // Your public key from EmailJS
      )

      if (result.status === 200) {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon. 🚀",
        })
        setFormData({ name: "", email: "", message: "" })

        // Reset form
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

    // Clear status when user starts typing
    if (status.type !== "idle") {
      setStatus({ type: "idle", message: "" })
    }
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Let's discuss your next project or just say hello</p>
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
              <h3 className="text-2xl font-bold mb-6">Let's talk about your project</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                want to say hi, I'll try my best to get back to you within 24-48 hours!
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 bg-primary-blue/10 rounded-lg">
                  <FiMail className="w-6 h-6 text-primary-blue" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="font-semibold">sodiqsheriff9@gmail.com</p>
                </div>
              </motion.div>

              <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700">
                <h4 className="font-semibold mb-2 text-primary-blue">Response Time</h4>
                <p className="text-gray-400 text-sm">Usually within 24-48 hours</p>
              </div>

              <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700">
                <h4 className="font-semibold mb-2 text-primary-blue">What I'm Looking For</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Frontend/Full-stack opportunities</li>
                  <li>• 3D web development projects</li>
                  <li>• Freelance collaborations</li>
                  <li>• Open source contributions</li>
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
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  minLength={2}
                  maxLength={100}
                  disabled={status.type === "loading"}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-primary-blue focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="user_email" className="block text-sm font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status.type === "loading"}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-primary-blue focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
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
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-primary-blue focus:outline-none transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me about your project, ideas, or just say hello..."
                />
                <p className="text-xs text-gray-500 mt-1">{formData.message.length}/1000 characters</p>
              </div>

              {/* Status Message */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg flex items-center gap-3 ${
                    status.type === "success"
                      ? "bg-green-900/30 border border-green-500/30 text-green-300"
                      : status.type === "error"
                        ? "bg-red-900/30 border border-red-500/30 text-red-300"
                        : "bg-blue-900/30 border border-blue-500/30 text-blue-300"
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
                    <div className="w-5 h-5 border-2 border-blue-300 border-t-transparent rounded-full animate-spin" />
                  )}
                  <p className="text-sm">{status.message}</p>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={status.type === "loading" || status.type === "success"}
                className={`w-full px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  status.type === "success"
                    ? "bg-green-600 text-white cursor-default"
                    : status.type === "loading"
                      ? "bg-gray-600 text-white cursor-not-allowed"
                      : "bg-primary-blue hover:bg-blue-600 text-white"
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
                  <motion.button
                    onClick={() => {
                      setStatus({ type: "idle", message: "" })
                      setFormData({ name: "", email: "", message: "" })
                    }}
                    className="text-primary-blue hover:text-blue-400 text-sm underline transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    Send another message
                  </motion.button>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
