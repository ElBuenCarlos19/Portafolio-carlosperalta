"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { FaArrowDown } from "react-icons/fa"
import Image from "next/image"

interface HeroProps {
  dict: any
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  baseOpacity: number
  currentOpacity: number
  glowIntensity: number
  effectActive: boolean
  effectTimer: number
  speedMultiplier: number
}

export function Hero({ dict }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])
  const [triggerEffect, setTriggerEffect] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configurar el canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }



    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Crear partículas
    const createParticles = () => {
      const particles: Particle[] = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000)

      for (let i = 0; i < particleCount; i++) {
        const baseOpacity = Math.random() * 0.3 + 0.1

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 2 + 1,
          baseOpacity,
          currentOpacity: baseOpacity,
          glowIntensity: 0,
          effectActive: false,
          effectTimer: 0,
          speedMultiplier: 1,
        })
      }
      return particles
    }

    particlesRef.current = createParticles()

    // Función de animación
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        // Manejar el efecto temporal
        if (particle.effectActive) {
          particle.effectTimer -= 16 // Aproximadamente 16ms por frame (60fps)

          if (particle.effectTimer <= 0) {
            // Efecto terminado, volver al estado normal
            particle.effectActive = false
            particle.glowIntensity = 0
            particle.currentOpacity = particle.baseOpacity
            particle.speedMultiplier = 1
          } else {
            // Efecto activo
            const progress = particle.effectTimer / 1500 // Normalizar (1.5 segundos)
            particle.speedMultiplier = 1 + progress * 3 // Velocidad hasta 4x
            particle.glowIntensity = progress * 0.8
            particle.currentOpacity = particle.baseOpacity + progress * 0.7
          }
        }

        // Actualizar posición con la velocidad actual
        particle.x += particle.vx * particle.speedMultiplier
        particle.y += particle.vy * particle.speedMultiplier

        // Rebotar en los bordes
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1
          particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1
          particle.y = Math.max(0, Math.min(canvas.height, particle.y))
        }

        // Dibujar partícula
        ctx.save()

        // Efecto de brillo cuando está activo
        if (particle.effectActive && particle.glowIntensity > 0) {
          const glowSize = particle.size + particle.glowIntensity * 5
          const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, glowSize)
          gradient.addColorStop(0, `rgba(255, 255, 255, ${particle.currentOpacity})`)
          gradient.addColorStop(0.3, `rgba(255, 255, 255, ${particle.currentOpacity * 0.5})`)
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2)
          ctx.fill()
        }

        // Partícula principal
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${particle.currentOpacity})`)
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Efecto para activar las partículas cuando se hace hover
  useEffect(() => {
    if (triggerEffect) {
      particlesRef.current.forEach((particle) => {
        if (!particle.effectActive) {
          particle.effectActive = true
          particle.effectTimer = 1500 // 1.5 segundos de efecto
        }
      })
      setTriggerEffect(false)
    }
  }, [triggerEffect])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const downloadCV = () => {
    const link = document.createElement("a")
    link.href = "/HV.pdf"
    link.download = "Carlos_Peralta_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  
  const handleMouseEnter = () => {
    setTriggerEffect(true)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Canvas para las partículas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-20"
        style={{ mixBlendMode: "screen" }}
      />

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/image.png" alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/80 via-dark/60 to-dark/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 cursor-default"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            onMouseEnter={handleMouseEnter}
          >
            <span className="bg-gradient-to-r from-mint via-pink to-yellow bg-clip-text text-transparent">
              {dict.hero.greeting}
            </span>
          </motion.h1>

          <motion.h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 sm:mb-12 font-light px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {dict.hero.title}
          </motion.h2>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(83, 210, 178, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={handleMouseEnter}
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-mint to-blue text-dark font-semibold px-6 sm:px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg text-sm sm:text-base w-full sm:w-auto"
            >
              {dict.hero.cta.primary}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={handleMouseEnter}
              onClick={downloadCV}
              className="border-2 border-mint text-mint font-semibold px-6 sm:px-8 py-3 rounded-full hover:bg-mint hover:text-dark transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
            >
              {dict.hero.cta.secondary}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="text-mint cursor-pointer"
        >
          <FaArrowDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.div>
      </motion.div>

      {/* Floating Elements - Hidden on mobile for performance */}
      <div className="hidden md:block">
        <motion.div
          className="absolute top-1/4 left-10 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-pink/60 to-purple/60 blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/3 right-16 w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-yellow/60 to-orange/60 blur-xl"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/4 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-blue/60 to-mint/60 blur-xl"
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  )
}
