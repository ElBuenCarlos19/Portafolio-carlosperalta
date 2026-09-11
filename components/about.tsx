"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaUser,
  FaLaptopCode,
  FaCode,
  FaGuitar,
  FaNetworkWired,
  FaMicrochip,
  FaProjectDiagram,
  FaNodeJs,
  FaPython,
  FaMusic,
  FaHeadphones,
  FaCube,
  FaChartBar,
  FaVideo,
  FaJava,
  FaFileAudio,
} from "react-icons/fa"
import { SiTypescript, SiJavascript, SiNextdotjs } from "react-icons/si"
import { BiMath } from "react-icons/bi"
import Image from "next/image"
import { DiMysql } from "react-icons/di"
import { VscGraphLine } from "react-icons/vsc"
import { RiTailwindCssFill, RiTeamFill } from "react-icons/ri"
import { HiMiniCursorArrowRays } from "react-icons/hi2"
import { LiaGit } from "react-icons/lia"
import { GiBrain } from "react-icons/gi"
import { TbMath } from "react-icons/tb"

interface AboutProps {
  dict: any
}

type TabId = "general" | "engineer" | "developer" | "musician" | "hobbies"

export function About({ dict }: AboutProps) {
  const [activeTab, setActiveTab] = useState<TabId>("general")

  // Definir las pestañas con traducciones
  const tabs = [
    { id: "general" as const, label: dict.about.tabs.general.title, icon: FaUser, color: "#53d2b2" },
    { id: "engineer" as const, label: dict.about.tabs.engineer.title, icon: FaLaptopCode, color: "#389dd7" },
    { id: "developer" as const, label: dict.about.tabs.developer.title, icon: FaCode, color: "#d1457b" },
    { id: "musician" as const, label: dict.about.tabs.musician.title, icon: FaGuitar, color: "#f4cb4f" },
    { id: "hobbies" as const, label: dict.about.tabs.hobbies.title, icon: BiMath, color: "#a857e0" },
  ]

  // Contenido para cada pestaña usando las traducciones
  const getTabContent = (tabId: TabId) => {
    const tabData = dict.about.tabs[tabId]

    const iconMappings = {
      general: [
        { icon: FaUser, label: tabData.icons.age, color: "#53d2b2" },
        { icon: HiMiniCursorArrowRays, label: tabData.icons.proactive, color: "#a857e0" },
        { icon: RiTeamFill, label: tabData.icons.teamwork, color: "#f4cb4f" },
        { icon: GiBrain, label: tabData.icons.fastLearner, color: "#389dd7" },
      ],
      engineer: [
        { icon: FaProjectDiagram, label: tabData.icons.lifecycle, color: "#389dd7" },
        { icon: FaNetworkWired, label: tabData.icons.networks, color: "#53d2b2" },
        { icon: LiaGit, label: tabData.icons.versionControl, color: "#389dd7" },
        { icon: FaMicrochip, label: tabData.icons.iot, color: "#d1457b" },
        { icon: DiMysql, label: tabData.icons.databases, color: "#f4cb4f" },
        { icon: VscGraphLine, label: tabData.icons.dataAnalysis, color: "#a857e0" },
      ],
      developer: [
        { icon: SiJavascript, label: tabData.icons.javascript, color: "#f7df1e" },
        { icon: SiTypescript, label: tabData.icons.typescript, color: "#3178c6" },
        { icon: SiNextdotjs, label: tabData.icons.nextjs, color: "#61dafb" },
        { icon: FaNodeJs, label: tabData.icons.nodejs, color: "#339933" },
        { icon: FaPython, label: tabData.icons.python, color: "#3776ab" },
        { icon: FaJava, label: tabData.icons.java, color: "#007396" },
        { icon: RiTailwindCssFill, label: tabData.icons.tailwind, color: "#f4cb4f" },
      ],
      musician: [
        { icon: FaGuitar, label: tabData.icons.guitar, color: "#f4cb4f" },
        { icon: FaMusic, label: tabData.icons.musicTheory, color: "#d1457b" },
        { icon: FaHeadphones, label: tabData.icons.production, color: "#389dd7" },
        { icon: FaFileAudio, label: tabData.icons.audioEditing, color: "#a857e0" },
      ],
      hobbies: [
        { icon: FaCube, label: tabData.icons.puzzles, color: "#a857e0" },
        { icon: FaChartBar, label: tabData.icons.excel, color: "#53d2b2" },
        { icon: FaVideo, label: tabData.icons.videoEditing, color: "#d1457b" },
        { icon: TbMath, label: tabData.icons.mathLogic, color: "#389dd7" },
      ],
    }

    const imageMapping = {
      general: "/photosobremi1.png",
      engineer: "/photosobremi2.png",
      developer: "/photosobremi3.png",
      musician: "/photosobremi4.png",
      hobbies: "/photosobremi5.png",
    }

    return {
      title: tabData.title,
      description: tabData.description,
      content: tabData.content,
      icons: iconMappings[tabId],
      image: imageMapping[tabId],
    }
  }

  const currentTab = getTabContent(activeTab)

  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId)
  }

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          {dict.about?.subtitle && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-mint/30 bg-mint/10 text-mint text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
              {dict.about.subtitle}
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-mint to-blue bg-clip-text text-transparent">{dict.about.title}</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">{dict.about.description}</p>
        </motion.div>

        {/* Contenido principal */}
        <div className="bg-gradient-to-br from-dark/80 to-dark/60 backdrop-blur-sm border border-mint/20 rounded-xl overflow-hidden">
          {/* Contenido de la pestaña activa */}
          <div className="p-4 sm:p-8 lg:p-10 min-h-[500px] sm:min-h-[420px]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center h-full">
              {/* Imagen con AnimatePresence */}
              <div className="flex justify-center lg:justify-start col-span-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`image-${activeTab}`}
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 overflow-hidden rounded-2xl border-2 shadow-2xl"
                    style={{ borderColor: currentTab.icons[0]?.color || "#53d2b2" }}
                  >
                    <Image
                      src={currentTab.image || "/placeholder.svg"}
                      alt={currentTab.title}
                      fill
                      sizes="(max-width: 768px) 280px, 320px"
                      priority
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-dark/80 text-white border border-white/20 backdrop-blur-sm">
                        {currentTab.title}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Texto e iconos con AnimatePresence */}
              <div className="col-span-1 lg:col-span-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`content-${activeTab}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6 flex flex-col justify-start"
                  >
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{currentTab.title}</h3>
                      <p className="text-mint font-medium text-sm sm:text-base mb-4">{currentTab.description}</p>
                    </div>

                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{currentTab.content}</p>

                    {/* Iconos */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {currentTab.icons.map((item, index) => (
                        <motion.div
                          key={`${activeTab}-icon-${index}`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          whileHover={{ scale: 1.08, y: -3 }}
                          className="flex items-center gap-2 bg-dark/70 backdrop-blur-sm border border-mint/20 rounded-xl px-3.5 py-2 hover:border-mint/50 transition-all duration-300 shadow-md"
                        >
                          <item.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: item.color }} />
                          <span className="text-xs sm:text-sm text-gray-200 font-medium">{item.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Barra de navegación inferior */}
          <div className="flex overflow-x-auto border-t border-mint/20 bg-dark/80 backdrop-blur-md">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex-1 min-w-[100px] flex flex-col items-center py-3 px-2 transition-all duration-300 relative ${
                  activeTab === tab.id ? "text-white" : "text-gray-400 hover:text-gray-300"
                }`}
              >
                <tab.icon className="w-5 h-5 mb-1" style={{ color: activeTab === tab.id ? tab.color : undefined }} />
                <span className="text-xs sm:text-sm font-medium">{tab.label}</span>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ backgroundColor: tab.color }} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
