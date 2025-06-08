"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaEnvelope,
  FaUser,
  FaCommentDots,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa"
import { MdOutlineMarkAsUnread } from "react-icons/md";

interface ContactProps {
  dict: any
}

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface ModalState {
  isOpen: boolean
  type: "success" | "error"
  message: string
}

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "carlosperalta19102004@gmail.com",
    color: "#53d2b2",
  },

  {
    icon: FaPhone,
    label: "Teléfono",
    value: "+57 300 234 5328",
    color: "#389dd7",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Ubicación",
    value: "Barranquilla, Colombia",
    color: "#d1457b",
  },
]

const socialLinks = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/carlos-peralta-a87a0624b", color: "#0077B5" },
  { icon: FaGithub, href: "https://github.com/ElBuenCarlos19", color: "#333" },
  { icon: FaInstagram, href: "https://www.instagram.com/carlos.__.1910?igsh=MTd3YXhmaHl2MHlkMw==", color: "#d1457b" },
]

export function Contact({ dict }: ContactProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    type: "success",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          language: dict.contact ? "es" : "en", // Detectar idioma basado en la estructura del dict
        }),
      })

      const result = await response.json()

      if (result.success) {
        setModal({
          isOpen: true,
          type: "success",
          message: result.message,
        })
        // Limpiar formulario
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        setModal({
          isOpen: true,
          type: "error",
          message: result.message,
        })
      }
    } catch (error) {
      setModal({
        isOpen: true,
        type: "error",
        message: dict.contact?.form.errors.network || "Error de conexión. Por favor intenta más tarde.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const closeModal = () => {
    setModal((prev) => ({ ...prev, isOpen: false }))
  }

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-dark relative overflow-hidden">

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-mint to-blue bg-clip-text text-transparent">
              {dict.contact?.title || "Contacto"}
            </span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            {dict.contact?.description || "Envíame un mensaje y te responderé lo antes posible"}
          </p>
        </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-dark/80 to-dark/60 backdrop-blur-sm border border-mint/20 rounded-xl p-2 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">{dict.contact.contactme}</h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-mint/10 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-mint/20 to-blue/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-5 h-5" style={{ color: info.color }} />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">{info.label}</div>
                      <div className="text-white font-medium overflow-hidden text-sm">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-mint/20">
                <h4 className="text-white font-semibold mb-4">Sígueme en:</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                      whileHover={{ scale: 1.2, y: -2 }}
                      viewport={{ once: true }}
                      className="w-10 h-10 bg-gradient-to-br from-mint/20 to-blue/20 rounded-lg flex items-center justify-center hover:bg-mint/30 transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5" style={{ color: social.color }} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <div className="max-w-4xl ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-dark/80 to-dark/60 backdrop-blur-sm border border-mint/20 rounded-xl p-6 sm:p-8 lg:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nombre */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    <FaUser className="inline mr-2" />
                    {dict.contact?.form.name || "Nombre"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark/50 border border-mint/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-mint focus:ring-2 focus:ring-mint/20 transition-all duration-300"
                    placeholder={dict.contact?.form.placeholders.name || "Tu nombre completo"}
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    <FaEnvelope className="inline mr-2" />
                    {dict.contact?.form.email || "Email"}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark/50 border border-mint/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-mint focus:ring-2 focus:ring-mint/20 transition-all duration-300"
                    placeholder={dict.contact?.form.placeholders.email || "tu@email.com"}
                  />
                </motion.div>
              </div>

              {/* Asunto */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  <MdOutlineMarkAsUnread className="inline mr-2" />
                  {dict.contact?.form.subject || "Asunto"}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark/50 border border-mint/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-mint focus:ring-2 focus:ring-mint/20 transition-all duration-300"
                  placeholder={dict.contact?.form.placeholders.subject || "¿En qué puedo ayudarte?"}
                />
              </motion.div>

              {/* Mensaje */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  <FaCommentDots className="inline mr-2" />
                  {dict.contact?.form.message || "Mensaje"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark/50 border border-mint/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-mint focus:ring-2 focus:ring-mint/20 transition-all duration-300 resize-vertical"
                  placeholder={dict.contact?.form.placeholders.message || "Escribe tu mensaje aquí..."}
                />
              </motion.div>

              {/* Botón de envío */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.05 }}
                  whileTap={{ scale: isLoading ? 1 : 0.95 }}
                  className={`inline-flex items-center px-8 py-3 rounded-full font-semibold text-dark transition-all duration-300 ${
                    isLoading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-mint to-blue hover:shadow-lg hover:shadow-mint/30"
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-dark mr-2"></div>
                      {dict.contact?.form.sending || "Enviando..."}
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      {dict.contact?.form.send || "Enviar mensaje"}
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>

      </div>
                  
      {/* Modal */}
      <AnimatePresence>
        {modal.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              className="bg-dark border border-mint/20 rounded-xl p-6 max-w-md w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    modal.type === "success" ? "bg-green-500/20" : "bg-red-500/20"
                  }`}
                >
                  {modal.type === "success" ? (
                    <FaCheckCircle className="w-8 h-8 text-green-500" />
                  ) : (
                    <FaExclamationTriangle className="w-8 h-8 text-red-500" />
                  )}
                </div>

                <h3
                  className={`text-xl font-semibold mb-2 ${
                    modal.type === "success" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {modal.type === "success"
                    ? dict.contact?.modal.success.title || "¡Mensaje enviado!"
                    : dict.contact?.modal.error.title || "Error"}
                </h3>

                <p className="text-gray-300 mb-6">{modal.message}</p>

                <button
                  onClick={closeModal}
                  className="inline-flex items-center px-6 py-2 bg-mint text-dark rounded-full font-semibold hover:bg-mint/90 transition-colors duration-300"
                >
                  <FaTimes className="mr-2" />
                  {dict.contact?.modal.close || "Cerrar"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-mint/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-120 w-64 h-64 bg-gradient-to-tr from-blue/10 to-transparent rounded-full blur-3xl" />
    </section>
  )
}
