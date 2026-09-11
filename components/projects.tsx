"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaGithub,
  FaExternalLinkAlt,
  FaPython,
  FaHtml5,
  FaJs,
  FaCss3,
  FaJava,
  FaSearch,
  FaTimes,
  FaLayerGroup,
  FaGlobe,
  FaMobileAlt,
  FaBrain,
  FaDesktop,
} from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiExpo, SiNestjs, SiTypescript } from "react-icons/si"
import { DiMysql } from "react-icons/di"
import { RiSupabaseFill } from "react-icons/ri"
import { IoLogoElectron } from "react-icons/io5"

interface ProjectsProps {
  dict: any
}

type ProjectCategory = "all" | "web" | "mobile_iot" | "data_ml" | "desktop"

export function Projects({ dict }: ProjectsProps) {
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState<"github" | "demo">("github")
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all")
  const [searchQuery, setSearchQuery] = useState("")

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
      category: "mobile_iot" as ProjectCategory,
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
      category: "web" as ProjectCategory,
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
      category: "mobile_iot" as ProjectCategory,
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
      category: "web" as ProjectCategory,
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
      category: "mobile_iot" as ProjectCategory,
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
      category: "desktop" as ProjectCategory,
      technologies: [
        { icon: IoLogoElectron, name: "Electron", color: "#61DAFB" },
        { icon: RiSupabaseFill, name: "Supabase", color: "#339933" },
        { icon: FaJs, name: "JavaScript", color: "#f7df1e" },
      ],
      github: "https://github.com/ElBuenCarlos19/GestorDeFerreteria-",
      demo: "#",
    },
    {
      id: 7,
      title: dict.projects.list[6].title,
      description: dict.projects.list[6].description,
      image: "/project7.png",
      category: "web" as ProjectCategory,
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
      category: "web" as ProjectCategory,
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
      category: "web" as ProjectCategory,
      technologies: [{ icon: SiNextdotjs, name: "Next.js", color: "#000000" }],
      github: "#",
      demo: "https://colombia-forest-app.vercel.app",
    },
    {
      id: 10,
      title: dict.projects.list[9].title,
      description: dict.projects.list[9].description,
      image: "/project10.png",
      category: "data_ml" as ProjectCategory,
      technologies: [
        { icon: FaJava, name: "Java", color: "#fffff" },
        { icon: FaPython, name: "Python", color: "#3776AB" },
      ],
      github: "https://github.com/ElBuenCarlos19/practicaappmineriadedatos",
      demo: "#",
    },
    {
      id: 11,
      title: dict.projects.list[10].title,
      description: dict.projects.list[10].description,
      image: "/project11.png",
      category: "web" as ProjectCategory,
      technologies: [
        { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
        { icon: SiTailwindcss, name: "Tailwind CSS", color: "#61DAFB" },
        { icon: SiTypescript, name: "TypeScript", color: "#3178c6" },
      ],
      github: "https://github.com/ElBuenCarlos19/proyectcom",
      demo: "https://proyectcomsas.com",
    },
    {
      id: 12,
      title: dict.projects.list[11].title,
      description: dict.projects.list[11].description,
      image: "/project12.png",
      category: "data_ml" as ProjectCategory,
      technologies: [
        { icon: SiExpo, name: "Expo", color: "#000000" },
        { icon: FaPython, name: "Python", color: "#3776AB" },
        { icon: DiMysql, name: "MySQL", color: "#47A248" },
      ],
      github: "https://github.com/ElBuenCarlos19/VG_Sales_MachineLearning",
      demo: "#",
    },
  ]

  const categories = [
    { id: "all" as const, label: dict.projects.categories.all, icon: FaLayerGroup },
    { id: "web" as const, label: dict.projects.categories.web, icon: FaGlobe },
    { id: "mobile_iot" as const, label: dict.projects.categories.mobile_iot, icon: FaMobileAlt },
    { id: "data_ml" as const, label: dict.projects.categories.data_ml, icon: FaBrain },
    { id: "desktop" as const, label: dict.projects.categories.desktop, icon: FaDesktop },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory
    const query = searchQuery.toLowerCase().trim()
    const matchesSearch =
      !query ||
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.technologies.some((tech) => tech.name.toLowerCase().includes(query))

    return matchesCategory && matchesSearch
  })

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
        className="py-16 sm:py-20 lg:py-24 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-pink via-purple to-mint bg-clip-text text-transparent">
                {dict.projects.title}
              </span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">{dict.projects.subtitle}</p>
          </motion.div>

          {/* Search & Filter Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => {
                const Icon = cat.icon
                const isSelected = selectedCategory === cat.id
                const count =
                  cat.id === "all"
                    ? projects.length
                    : projects.filter((p) => p.category === cat.id).length

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${
                      isSelected
                        ? "bg-mint text-dark font-semibold border-mint shadow-lg shadow-mint/20 scale-105"
                        : "bg-dark/60 text-gray-300 border-mint/20 hover:border-mint/50 hover:bg-dark/90 hover:text-white"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.label}</span>
                    <span
                      className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                        isSelected ? "bg-dark/20 text-dark" : "bg-mint/10 text-mint"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-3.5 h-3.5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={dict.projects.searchPlaceholder || "Buscar proyectos..."}
                className="w-full pl-9 pr-8 py-2 bg-dark/70 border border-mint/20 rounded-full text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:border-mint focus:ring-1 focus:ring-mint transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <FaTimes className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          {/* Projects Grid with Layout Animations */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-gradient-to-br from-dark/90 to-dark/60 backdrop-blur-sm border border-mint/20 rounded-xl overflow-hidden hover:border-mint/50 hover:shadow-2xl hover:shadow-mint/10 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-mint transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <div
                            key={tech.name}
                            className="flex items-center gap-1 px-2.5 py-1 bg-dark/60 rounded-full border border-mint/20 text-xs text-gray-300"
                          >
                            <tech.icon className="w-3 h-3" style={{ color: tech.color }} />
                            <span>{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-0">
                    <div className="flex gap-3">
                      <motion.button
                        onClick={() => handleLinkClick(project.github, "github")}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-mint/15 text-mint rounded-lg hover:bg-mint hover:text-dark transition-all duration-300 text-sm font-semibold border border-mint/30"
                      >
                        <FaGithub className="w-4 h-4" />
                        {dict.projects.buttons.code}
                      </motion.button>
                      <motion.button
                        onClick={() => handleLinkClick(project.demo, "demo")}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue/15 text-blue rounded-lg hover:bg-blue hover:text-dark transition-all duration-300 text-sm font-semibold border border-blue/30"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        {dict.projects.buttons.demo}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state if no projects match */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16 px-4"
            >
              <p className="text-gray-400 text-lg mb-4">{dict.projects.noProjectsFound}</p>
              <button
                onClick={() => {
                  setSelectedCategory("all")
                  setSearchQuery("")
                }}
                className="px-6 py-2 bg-mint text-dark font-semibold rounded-full hover:bg-mint/90 transition-colors text-sm"
              >
                {dict.projects.categories.all}
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal para enlaces no disponibles */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-gradient-to-br from-dark/95 to-dark/90 backdrop-blur-md border border-mint/30 rounded-2xl p-6 sm:p-8 max-w-md w-full mx-4 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-mint/10 border border-mint/20 rounded-xl flex items-center justify-center">
                  {modalType === "github" ? (
                    <FaGithub className="w-6 h-6 text-mint" />
                  ) : (
                    <FaExternalLinkAlt className="w-6 h-6 text-blue" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-white">{dict.projects.unavailable.title}</h3>
              </div>

              <div className="mb-8">
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {dict.projects.unavailable.message}
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowModal(false)}
                className="w-full bg-gradient-to-r from-mint to-blue text-dark font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-mint/20"
              >
                {dict.projects.unavailable.button}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
