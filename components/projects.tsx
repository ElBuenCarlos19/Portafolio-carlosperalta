"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaExternalLinkAlt, FaPython, FaHtml5, FaJs, FaCss3, FaTimes } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiExpo, SiNestjs } from "react-icons/si"
import { DiMysql } from "react-icons/di"
import { RiSupabaseFill } from "react-icons/ri"
import { IoLogoElectron } from "react-icons/io5"

interface ProjectsProps {
  dict: any
}

export function Projects({ dict }: ProjectsProps) {
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState<"github" | "demo">("github")

  const handleUnavailableClick = (type: "github" | "demo") => {
    setModalType(type)
    setShowModal(true)
  }

  const projects = [
    {
      id: 1,
      title: dict.projects.list[0].title,
      description: dict.projects.list[0].description,
      image: "/project1.png",
      technologies: [
        { icon: SiExpo, name: "Expo", color: "#000000" },
        { icon: FaPython, name: "Python", color: "#3776AB" },
        { icon: DiMysql, name: "MySQL", color: "#47A248" },
      ],
      github: "https://github.com/ElBuenCarlos19/App-Movil-ESP32",
      demo: "#",
    },
    {
      id: 2,
      title: dict.projects.list[1].title,
      description: dict.projects.list[1].description,
      image: "/project2.png",
      technologies: [
        { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
        { icon: RiSupabaseFill, name: "Supabase", color: "#339933" },
        { icon: SiTailwindcss, name: "Tailwind CSS", color: "#61DAFB" },
      ],
      github: "#",
      demo: "https://lab-ten-mu.vercel.app",
    },
    {
      id: 3,
      title: dict.projects.list[2].title,
      description: dict.projects.list[2].description,
      image: "/project3.png",
      technologies: [
        { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
        { icon: FaPython, name: "Python", color: "#3776AB" },
        { icon: SiTailwindcss, name: "Tailwind CSS", color: "#61DAFB" },
      ],
      github: "https://github.com/ElBuenCarlos19/Sistemasdecontrol",
      demo: "https://esp32-webcontrol-carlos-peraltas-projects-f946e101.vercel.app",
    },
    {
      id: 4,
      title: dict.projects.list[3].title,
      description: dict.projects.list[3].description,
      image: "/project4.png",
      technologies: [
        { icon: FaHtml5, name: "HTML5", color: "#e34f26" },
        { icon: FaJs, name: "JavaScript", color: "#f7df1e" },
        { icon: FaCss3, name: "CSS3", color: "#3178c6" },
      ],
      github: "https://github.com/ElBuenCarlos19/GestorMuestrasDeProyecto",
      demo: "https://elbuencarlos19.github.io/GestorMuestrasDeProyecto/",
    },
    {
      id: 5,
      title: dict.projects.list[4].title,
      description: dict.projects.list[4].description,
      image: "/project5.png",
      technologies: [
        { icon: SiExpo, name: "Expo", color: "#000000" },
        { icon: RiSupabaseFill, name: "Supabase", color: "#339933" },
      ],
      github: "https://github.com/ElBuenCarlos19/AppBaqPark",
      demo: "#",
    },
    {
      id: 6,
      title: dict.projects.list[5].title,
      description: dict.projects.list[5].description,
      image: "/project6.png",
      technologies: [
        { icon: IoLogoElectron, name: "Electron", color: "#61DAFB" },
        { icon: RiSupabaseFill, name: "Supabase", color: "#339933" },
        { icon: FaJs, name: "JavaScript", color: "#f7df1e" },
      ],
      github: "https://github.com/ElBuenCarlos19/AppBaqPark",
      demo: "#",
    },
    {
      id: 7,
      title: dict.projects.list[6].title,
      description: dict.projects.list[6].description,
      image: "/project7.png",
      technologies: [
        { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
        { icon: SiTailwindcss, name: "Tailwind CSS", color: "#61DAFB" },
      ],
      github: "https://github.com/ElBuenCarlos19/Portafolio-Web",
      demo: "https://portafolio-web-psi-three.vercel.app",
    },
    {
      id: 8,
      title: dict.projects.list[7].title,
      description: dict.projects.list[7].description,
      image: "/project8.png",
      technologies: [
        { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
        { icon: SiNestjs, name: "Nest.js", color: "#e34f26" },
      ],
      github: "https://github.com/ElBuenCarlos19/Usodenest",
      demo: "#",
    },
    {
      id: 9,
      title: dict.projects.list[8].title,
      description: dict.projects.list[8].description,
      image: "/project9.png",
      technologies: [{ icon: SiNextdotjs, name: "Next.js", color: "#000000" }],
      github: "#",
      demo: "https://colombia-forest-app.vercel.app",
    },
  ]

  const handleLinkClick = (url: string, type: "github" | "demo") => {
    if (url === "#") {
      handleUnavailableClick(type)
    } else {
      window.open(url, "_blank")
    }
  }

  return (
    <>
      <section
        id="projects"
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-dark to-dark/95 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent">
                {dict.projects.title}
              </span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">{dict.projects.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-dark/80 to-dark/60 backdrop-blur-sm border border-mint/20 rounded-xl overflow-hidden hover:border-mint/40 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-mint transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-1 px-2 py-1 bg-dark/50 rounded-full border border-mint/20"
                      >
                        <tech.icon className="w-3 h-3" style={{ color: tech.color }} />
                        <span className="text-xs text-gray-300">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      onClick={() => handleLinkClick(project.github, "github")}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-mint/20 text-mint rounded-lg hover:bg-mint/30 transition-colors duration-300 text-sm font-medium"
                    >
                      <FaGithub className="w-4 h-4" />
                      {dict.projects.buttons.code}
                    </motion.button>
                    <motion.button
                      onClick={() => handleLinkClick(project.demo, "demo")}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-blue/20 text-blue rounded-lg hover:bg-blue/30 transition-colors duration-300 text-sm font-medium"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      {dict.projects.buttons.demo}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-pink/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-purple/5 to-transparent rounded-full blur-3xl" />
      </section>

      {/* Modal para enlaces no disponibles */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-gradient-to-br from-dark/95 to-dark/90 backdrop-blur-md border border-mint/30 rounded-2xl p-6 sm:p-8 max-w-md w-full mx-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-zinc-700/20 to-rose-300/20 rounded-xl flex items-center justify-center">
                    {modalType === "github" ? (
                      <FaGithub className="w-6 h-6 text-white" />
                    ) : (
                      <FaExternalLinkAlt className="w-6 h-6 text-orange" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white">{dict.projects.unavailable.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="mb-8">
                <p className="text-gray-300 leading-relaxed text-center">{dict.projects.unavailable.message}</p>
              </div>

              {/* Action Button */}
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(83, 210, 178, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowModal(false)}
                className="w-full bg-gradient-to-r from-mint to-blue text-dark font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                {dict.projects.unavailable.button}
              </motion.button>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-mint/10 to-blue/10 rounded-full blur-xl" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-pink/10 to-purple/10 rounded-full blur-xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
