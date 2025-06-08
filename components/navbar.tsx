"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { HiMenu, HiX } from "react-icons/hi"
import { FaGlobe } from "react-icons/fa"

interface NavbarProps {
  language: string
  dict: any
}

export function Navbar({ language, dict }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showLangMenu, setShowLangMenu] = useState(false)

  const navItems = [
    { key: "about", href: `/${language}#about` },
    { key: "projects", href: `/${language}#projects` },
    { key: "certificates", href: `/${language}#certificates` },
    { key: "contact", href: `/${language}#contact` },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark/20 backdrop-blur-lg border-b border-mint/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-shrink-0">
            <Link href={`/${language}`} className="flex items-center">
              <Image
                src="/Logo.png"
                alt="Carlos Peralta Logo"
                width={100}
                height={100}
                className="w-15 h-15 sm:w-20 sm:h-20"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link
                  href={item.href}
                  className="text-white hover:text-mint transition-colors duration-300 font-medium text-sm lg:text-base relative group"
                >
                  {dict.nav[item.key]}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mint transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}

            {/* Language Selector */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center space-x-1 text-white hover:text-mint transition-colors duration-300 p-2 rounded-lg hover:bg-mint/10"
              >
                <FaGlobe className="w-4 h-4" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </motion.button>

              <AnimatePresence>
                {showLangMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-20 bg-dark/90 backdrop-blur-md border border-mint/20 rounded-lg shadow-xl"
                  >
                    <Link
                      href="/es"
                      className="block px-3 py-2 text-sm text-white hover:text-mint hover:bg-mint/10 rounded-t-lg transition-colors"
                      onClick={() => setShowLangMenu(false)}
                    >
                      ES
                    </Link>
                    <Link
                      href="/en"
                      className="block px-3 py-2 text-sm text-white hover:text-mint hover:bg-mint/10 rounded-b-lg transition-colors"
                      onClick={() => setShowLangMenu(false)}
                    >
                      EN
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-mint transition-colors duration-300 p-2"
            >
              {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-mint/20 bg-dark/90 backdrop-blur-md"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-white hover:text-mint hover:bg-mint/10 rounded-md transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {dict.nav[item.key]}
                    </Link>
                  </motion.div>
                ))}
                <div className="flex space-x-2 px-3 py-2 border-t border-mint/20 mt-2">
                  <Link
                    href="/es"
                    className="text-sm text-white hover:text-mint transition-colors px-2 py-1 rounded"
                    onClick={() => setIsOpen(false)}
                  >
                    ES
                  </Link>
                  <span className="text-white">|</span>
                  <Link
                    href="/en"
                    className="text-sm text-white hover:text-mint transition-colors px-2 py-1 rounded"
                    onClick={() => setIsOpen(false)}
                  >
                    EN
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
