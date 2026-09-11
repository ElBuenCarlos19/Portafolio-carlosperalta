"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Verificar si ya se mostró en esta sesión de navegación
    const hasLoaded = sessionStorage.getItem("carlos_portfolio_visited")
    if (hasLoaded) {
      setIsLoading(false)
      return
    }

    const timer = setTimeout(() => {
      setIsLoading(false)
      sessionStorage.setItem("carlos_portfolio_visited", "true")
    }, 1800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-dark"
        >
          <div className="text-center px-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="mb-6 flex justify-center"
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28">
                <Image
                  src="/Logo.png"
                  alt="Carlos Peralta Logo"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_0_25px_rgba(83,210,178,0.4)]"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wider">
                Carlos Peralta
              </h2>
              <div className="flex justify-center">
                <div className="flex space-x-2">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.2,
                      }}
                      className="w-2.5 h-2.5 rounded-full bg-mint"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
