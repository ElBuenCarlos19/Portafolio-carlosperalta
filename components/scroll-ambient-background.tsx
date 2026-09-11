"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform, useSpring, useVelocity } from "framer-motion"

/**
 * Sistema de Iluminación Ambiental Infinitamente Difusa (Seamless Gaussian Ambient Aura)
 * - Decaimiento fotométrico continuo sin cortes ni bandas oscuras (anti-Mach banding)
 * - Transición de alfa suave (0.24 -> 0.16 -> 0.08 -> 0.03 -> 0.008 -> 0)
 * - Desenfoque cinematográfico expansivo (blur-[180px] a blur-[240px]) para eliminar cualquier borde visible
 * - Eliminación de viñetas rígidas o máscaras perimetrales que generen líneas de división
 */
export function ScrollAmbientBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const { scrollYProgress } = useScroll()

  // 1. Cinemática líquida de amortiguación alta (movimiento sereno sin mareos)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 24,
    damping: 40,
    mass: 1.2,
  })

  // 2. Micro-pulso sutil ante velocidad de scroll (apenas un 2.5% de respiración imperceptible)
  const scrollVelocity = useVelocity(smoothProgress)
  const dynamicScale = useTransform(scrollVelocity, [-2, 0, 2], [1.025, 1, 1.025])
  const dynamicOpacity = useTransform(scrollVelocity, [-2, 0, 2], [1, 0.94, 1])

  // =========================================================================
  // POSICIONAMIENTO SERENO Y CENTRADO
  // =========================================================================
  const orb1Y = useTransform(
    smoothProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["34vh", "38vh", "42vh", "40vh", "44vh", "46vh"]
  )

  const orb2Y = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["28vh", "24vh", "30vh", "26vh", "28vh"]
  )

  // =========================================================================
  // DECAIMIENTO FOTOMÉTRICO CONTINUO PARA LUZ PRINCIPAL
  // Cada parada comparte el mismo RGB y reduce el alfa exponencialmente hasta 0
  // para evitar por completo el defecto de "anillo oscuro" o bordes notorios.
  // =========================================================================
  const orb1Stop0 = useTransform(
    smoothProgress,
    [0, 0.16, 0.33, 0.52, 0.72, 0.88, 1],
    [
      "rgba(83, 210, 178, 0.26)", // Hero: Mint
      "rgba(83, 210, 178, 0.24)", // About: Mint
      "rgba(56, 157, 215, 0.25)", // Experience: Cyan
      "rgba(209, 69, 123, 0.26)", // Projects: Rosa
      "rgba(244, 203, 79, 0.25)", // Certificates: Ámbar Dorado
      "rgba(34, 197, 94, 0.24)",  // Spotify: Esmeralda
      "rgba(83, 210, 178, 0.25)", // Contact: Mint
    ]
  )
  const orb1Stop1 = useTransform(
    smoothProgress,
    [0, 0.16, 0.33, 0.52, 0.72, 0.88, 1],
    [
      "rgba(83, 210, 178, 0.17)",
      "rgba(83, 210, 178, 0.16)",
      "rgba(56, 157, 215, 0.16)",
      "rgba(209, 69, 123, 0.17)",
      "rgba(244, 203, 79, 0.16)",
      "rgba(34, 197, 94, 0.16)",
      "rgba(83, 210, 178, 0.16)",
    ]
  )
  const orb1Stop2 = useTransform(
    smoothProgress,
    [0, 0.16, 0.33, 0.52, 0.72, 0.88, 1],
    [
      "rgba(83, 210, 178, 0.09)",
      "rgba(83, 210, 178, 0.08)",
      "rgba(56, 157, 215, 0.08)",
      "rgba(209, 69, 123, 0.09)",
      "rgba(244, 203, 79, 0.08)",
      "rgba(34, 197, 94, 0.08)",
      "rgba(83, 210, 178, 0.08)",
    ]
  )
  const orb1Stop3 = useTransform(
    smoothProgress,
    [0, 0.16, 0.33, 0.52, 0.72, 0.88, 1],
    [
      "rgba(83, 210, 178, 0.035)",
      "rgba(83, 210, 178, 0.03)",
      "rgba(56, 157, 215, 0.03)",
      "rgba(209, 69, 123, 0.035)",
      "rgba(244, 203, 79, 0.03)",
      "rgba(34, 197, 94, 0.03)",
      "rgba(83, 210, 178, 0.03)",
    ]
  )
  const orb1Stop4 = useTransform(
    smoothProgress,
    [0, 0.16, 0.33, 0.52, 0.72, 0.88, 1],
    [
      "rgba(83, 210, 178, 0.008)",
      "rgba(83, 210, 178, 0.008)",
      "rgba(56, 157, 215, 0.008)",
      "rgba(209, 69, 123, 0.008)",
      "rgba(244, 203, 79, 0.008)",
      "rgba(34, 197, 94, 0.008)",
      "rgba(83, 210, 178, 0.008)",
    ]
  )
  const orb1StopEnd = useTransform(
    smoothProgress,
    [0, 0.16, 0.33, 0.52, 0.72, 0.88, 1],
    [
      "rgba(83, 210, 178, 0)",
      "rgba(83, 210, 178, 0)",
      "rgba(56, 157, 215, 0)",
      "rgba(209, 69, 123, 0)",
      "rgba(244, 203, 79, 0)",
      "rgba(34, 197, 94, 0)",
      "rgba(83, 210, 178, 0)",
    ]
  )

  // =========================================================================
  // DECAIMIENTO FOTOMÉTRICO CONTINUO PARA LUZ SECUNDARIA (ACENTO CROMÁTICO)
  // =========================================================================
  const orb2Stop0 = useTransform(
    smoothProgress,
    [0, 0.16, 0.33, 0.52, 0.72, 0.88, 1],
    [
      "rgba(209, 69, 123, 0.18)", // Hero: Rosa
      "rgba(56, 157, 215, 0.18)", // About: Azul
      "rgba(83, 210, 178, 0.18)", // Experience: Mint
      "rgba(168, 87, 224, 0.20)", // Projects: Violeta
      "rgba(235, 134, 81, 0.20)", // Certificates: Naranja
      "rgba(83, 210, 178, 0.18)", // Spotify: Mint
      "rgba(56, 157, 215, 0.18)", // Contact: Azul
    ]
  )
  const orb2Stop1 = useTransform(
    smoothProgress,
    [0, 0.16, 0.33, 0.52, 0.72, 0.88, 1],
    [
      "rgba(209, 69, 123, 0.11)",
      "rgba(56, 157, 215, 0.11)",
      "rgba(83, 210, 178, 0.11)",
      "rgba(168, 87, 224, 0.12)",
      "rgba(235, 134, 81, 0.12)",
      "rgba(83, 210, 178, 0.11)",
      "rgba(56, 157, 215, 0.11)",
    ]
  )
  const orb2Stop2 = useTransform(
    smoothProgress,
    [0, 0.16, 0.33, 0.52, 0.72, 0.88, 1],
    [
      "rgba(209, 69, 123, 0.05)",
      "rgba(56, 157, 215, 0.05)",
      "rgba(83, 210, 178, 0.05)",
      "rgba(168, 87, 224, 0.06)",
      "rgba(235, 134, 81, 0.06)",
      "rgba(83, 210, 178, 0.05)",
      "rgba(56, 157, 215, 0.05)",
    ]
  )
  const orb2Stop3 = useTransform(
    smoothProgress,
    [0, 0.16, 0.33, 0.52, 0.72, 0.88, 1],
    [
      "rgba(209, 69, 123, 0.015)",
      "rgba(56, 157, 215, 0.015)",
      "rgba(83, 210, 178, 0.015)",
      "rgba(168, 87, 224, 0.018)",
      "rgba(235, 134, 81, 0.018)",
      "rgba(83, 210, 178, 0.015)",
      "rgba(56, 157, 215, 0.015)",
    ]
  )
  const orb2StopEnd = useTransform(
    smoothProgress,
    [0, 0.16, 0.33, 0.52, 0.72, 0.88, 1],
    [
      "rgba(209, 69, 123, 0)",
      "rgba(56, 157, 215, 0)",
      "rgba(83, 210, 178, 0)",
      "rgba(168, 87, 224, 0)",
      "rgba(235, 134, 81, 0)",
      "rgba(83, 210, 178, 0)",
      "rgba(56, 157, 215, 0)",
    ]
  )

  // Gradientes elípticos con decaimiento natural imperceptible
  const seamlessGradient1 = useTransform(
    [orb1Stop0, orb1Stop1, orb1Stop2, orb1Stop3, orb1Stop4, orb1StopEnd],
    ([s0, s1, s2, s3, s4, sEnd]) =>
      `radial-gradient(ellipse 75% 65% at 50% 50%, ${s0} 0%, ${s1} 26%, ${s2} 50%, ${s3} 72%, ${s4} 88%, ${sEnd} 100%)`
  )

  const seamlessGradient2 = useTransform(
    [orb2Stop0, orb2Stop1, orb2Stop2, orb2Stop3, orb2StopEnd],
    ([s0, s1, s2, s3, sEnd]) =>
      `radial-gradient(ellipse 70% 60% at 50% 50%, ${s0} 0%, ${s1} 30%, ${s2} 58%, ${s3} 82%, ${sEnd} 100%)`
  )

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 pointer-events-none overflow-hidden z-0 select-none transition-opacity duration-1000 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* 1. Malla Cyber-Grid milimétrica suave sin cortes ni máscaras duras */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(83, 210, 178, 0.6) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* 2. Capa Secundaria (Acento Cromático con difusión expansiva): 
             Centrado perfecto sin desplazamientos indeseados */}
      <motion.div
        style={{
          top: orb2Y,
          left: "50%",
          x: "-50%",
          y: "0%",
          scale: dynamicScale,
          opacity: dynamicOpacity,
        }}
        className="absolute w-[650px] h-[550px] sm:w-[880px] sm:h-[750px] pointer-events-none will-change-transform"
      >
        <motion.div
          style={{
            background: seamlessGradient2,
          }}
          animate={{
            scale: [1, 1.05, 0.98, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="w-full h-full rounded-full blur-[140px] sm:blur-[200px]"
        />
      </motion.div>

      {/* 3. Capa Principal (Aura Central de Lectura):
             Perfectamente centrada en el eje del contenido */}
      <motion.div
        style={{
          top: orb1Y,
          left: "50%",
          x: "-50%",
          y: "-50%",
          scale: dynamicScale,
          opacity: dynamicOpacity,
        }}
        className="absolute w-[720px] h-[620px] sm:w-[980px] sm:h-[840px] pointer-events-none will-change-transform"
      >
        <motion.div
          style={{
            background: seamlessGradient1,
          }}
          animate={{
            scale: [1, 1.04, 0.98, 1],
          }}
          transition={{
            duration: 16,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="w-full h-full rounded-full blur-[160px] sm:blur-[220px]"
        />
      </motion.div>
    </div>
  )
}
