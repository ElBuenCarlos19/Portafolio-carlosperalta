"use client"

import { useState } from "react"
import { motion } from "framer-motion"
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
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            <span className="bg-gradient-to-r from-mint to-blue bg-clip-text text-transparent">{dict.about.title}</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">{dict.about.description}</p>
        </motion.div>

        {/* Contenido principal */}
        <div className="bg-gradient-to-br from-dark/80 to-dark/60 backdrop-blur-sm border border-mint/20 rounded-xl overflow-hidden">
          {/* Contenido de la pestaña activa */}
          <div className="p-2 sm:p-8 lg:p-10 min-h-[860px] sm:min-h-[400px]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 items-start h-full">
              {/* Imagen */}
              <motion.div
                key={`image-${activeTab}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center transform translate-x-5 lg:justify-start col-span-1"
              >
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-xl border-2 border-mint/30">
                  <Image
                    src={currentTab.image || "/placeholder.svg"}
                    alt={currentTab.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                    <h3 className="text-xl font-bold text-white">{currentTab.title}</h3>
                  </div>
                </div>
              </motion.div>

              {/* Texto e iconos */}
              <motion.div
                key={`content-${activeTab}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 min-h-[300px] flex flex-col justify-start col-span-2"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{currentTab.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{currentTab.content}</p>

                {/* Iconos */}
                <div className="flex flex-wrap gap-4">
                  {currentTab.icons.map((item, index) => (
                    <motion.div
                      key={`${activeTab}-icon-${index}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="flex flex-col items-center gap-2 bg-dark/50 backdrop-blur-sm border border-mint/20 rounded-lg p-3 hover:border-mint/40 transition-all duration-300"
                    >
                      <item.icon className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: item.color }} />
                      <span className="text-xs sm:text-sm text-gray-300">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
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

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-mint/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-70 left-0 w-64 h-64 bg-gradient-to-tr from-blue/10 to-transparent rounded-full blur-3xl" />
    </section>
  )
}
