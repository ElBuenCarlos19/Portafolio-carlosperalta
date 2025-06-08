"use client"

import { motion } from "framer-motion"
import { FaExternalLinkAlt } from "react-icons/fa"
import { SiGoogle, SiMeta } from "react-icons/si"
import { DiScrum } from "react-icons/di";
import { TbLockAccessOff } from "react-icons/tb";
import { IoAccessibilitySharp } from "react-icons/io5";


interface CertificatesProps {
  dict: any
}

export function Certificates({ dict }: CertificatesProps) {
  const certificates = [
    {
      id: 1,
      title: dict.certificates.list[0].title,
      issuer: dict.certificates.list[0].issuer,
      date: "2024",
      icon:  DiScrum,
      color: "#FF9900",
      description: dict.certificates.list[0].description,
      link: "/certificates/certificate1.pdf",
    },
    {
      id: 2,
      title: dict.certificates.list[1].title,
      issuer: dict.certificates.list[1].issuer,
      date: "2024",
      icon: TbLockAccessOff,
      color: "#4285F4",
      description: dict.certificates.list[1].description,
      link: "/certificates/certificate2.pdf",
    },
    // {
    //   id: 3,
    //   title: "Participacion presentacion de proyecto",
    //   issuer: "Ponencia de presentación AppBaqPark",
    //   date: "2023",
    //   icon: IoAccessibilitySharp,
    //   color: "#00A4EF",
    //   description: "Certificacion por una participacion activa en la explicacion del proyecto de investigacion universitario en Cruzando Fronteras a Traves del Saber",
    //   link: "/certificates/certificate3.pdf",
    // },
  ]

  return (
    <section id="certificates" className="py-16 sm:py-20 lg:py-24 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-yellow to-orange bg-clip-text text-transparent">
              {dict.certificates.title}
            </span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">{dict.certificates.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-dark/80 to-dark/60 backdrop-blur-sm border border-mint/20 rounded-xl p-6 sm:p-8 hover:border-mint/40 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-mint/20 to-blue/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <cert.icon className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: cert.color }} />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-mint transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base mb-2">{cert.issuer}</p>
                  <p className="text-mint text-sm font-medium">{cert.date}</p>
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">{cert.description}</p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                <motion.a
                  href={cert.link}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-mint/20 text-mint rounded-lg hover:bg-mint/30 transition-colors duration-300 text-sm font-medium w-fit"
                >
                  <FaExternalLinkAlt className="w-3 h-3" />
                  {dict.certificates.button}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8"
        >
          {[
            { number: "2", label: dict.certificates.label1 },
            { number: "2", label: dict.certificates.label2 },
            { number: "2024", label: dict.certificates.label3 },
            { number: "100%", label: dict.certificates.label4 },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
              viewport={{ once: true }}
              className="text-center p-4 bg-gradient-to-br from-dark/50 to-dark/80 backdrop-blur-sm border border-mint/20 rounded-xl"
            >
              <div className="text-2xl sm:text-3xl font-bold text-mint mb-1">{stat.number}</div>
              <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-yellow/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-orange/5 to-transparent rounded-full blur-3xl" />
    </section>
  )
}
