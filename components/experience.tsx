"use client"

import { motion } from "framer-motion"
import { FaGraduationCap, FaFlask, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa"

interface ExperienceItem {
  period: string
  role: string
  institution: string
  location: string
  description: string
  badge: string
  type: "education" | "research" | "work"
}

interface ExperienceProps {
  dict: any
}

const typeConfig = {
  education: {
    icon: FaGraduationCap,
    color: "#53d2b2", // mint
    gradient: "from-mint/20 to-transparent",
    border: "border-mint/30",
    badgeBg: "bg-mint/10 text-mint border-mint/30",
  },
  research: {
    icon: FaFlask,
    color: "#389dd7", // blue
    gradient: "from-blue/20 to-transparent",
    border: "border-blue/30",
    badgeBg: "bg-blue/10 text-blue border-blue/30",
  },
  work: {
    icon: FaBriefcase,
    color: "#d1457b", // pink
    gradient: "from-pink/20 to-transparent",
    border: "border-pink/30",
    badgeBg: "bg-pink/10 text-pink border-pink/30",
  },
}

export function Experience({ dict }: ExperienceProps) {
  const items: ExperienceItem[] = dict.experience.items

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-mint via-blue to-purple bg-clip-text text-transparent">
              {dict.experience.title}
            </span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">{dict.experience.subtitle}</p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Central Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-mint via-blue to-pink opacity-40" />

          <div className="space-y-10 sm:space-y-12">
            {items.map((item, index) => {
              const config = typeConfig[item.type] || typeConfig.work
              const Icon = config.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-dark border-2 shadow-lg"
                       style={{ borderColor: config.color, boxShadow: `0 0 16px ${config.color}55` }}>
                    <Icon className="w-4 h-4" style={{ color: config.color }} />
                  </div>

                  {/* Spacer for desktop symmetry */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Container */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-10" : "md:pl-10"}`}>
                    <motion.div
                      whileHover={{ y: -4, scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      className={`relative bg-gradient-to-br from-dark/90 to-dark/60 backdrop-blur-md rounded-xl p-6 border ${config.border} shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group`}
                    >
                      {/* Top Gradient Accent */}
                      <div
                        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r"
                        style={{
                          backgroundImage: `linear-gradient(to right, ${config.color}, transparent)`,
                        }}
                      />

                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full border ${config.badgeBg}`}
                        >
                          {item.badge}
                        </span>

                        <div className="flex items-center text-xs text-gray-400 font-medium">
                          <FaCalendarAlt className="mr-1.5 opacity-70" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-mint transition-colors duration-300">
                        {item.role}
                      </h3>

                      <h4 className="text-sm font-semibold text-gray-300 mb-2">
                        {item.institution}
                      </h4>

                      <div className="flex items-center text-xs text-gray-400 mb-4">
                        <FaMapMarkerAlt className="mr-1.5 opacity-70" style={{ color: config.color }} />
                        <span>{item.location}</span>
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
