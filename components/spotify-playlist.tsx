"use client"

import { motion } from "framer-motion"
import { FaSpotify, FaPlay } from "react-icons/fa"

interface SpotifyPlaylistProps {
  dict: any
}

export function SpotifyPlaylist({ dict }: SpotifyPlaylistProps) {
  const playlistId = "3E5xaqSBrzBi1KZj4FgbEt"

  const playlist = {
    name: "Coding Vibes",
    description: "Mi playlist favorita para programar",
    image: "/placeholder.svg?height=300&width=300",
    tracks: [
      { id: 1, name: "Bohemian Rhapsody", artist: "Queen", duration: "5:55" },
      { id: 2, name: "Stairway to Heaven", artist: "Led Zeppelin", duration: "8:02" },
      { id: 3, name: "Hotel California", artist: "Eagles", duration: "6:30" },
      { id: 4, name: "Sweet Child O' Mine", artist: "Guns N' Roses", duration: "5:03" },
    ],
  }

  return (
    <section
      id="music"
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
            <span className="bg-gradient-to-r from-mint to-blue bg-clip-text text-transparent">{dict.music.title}</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">{dict.music.subtitle}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-dark/80 to-dark/60 backdrop-blur-sm border border-mint/20 rounded-xl p-6 sm:p-8"
          >
            {/* Spotify Embed */}
            <div className="rounded-xl overflow-hidden mb-8">
              <iframe
                title="Spotify Embed: Playlist"
                src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
                width="100%"
                height="100%"
                style={{ minHeight: '360px' }}
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>

            {/* Play Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors duration-300"
                onClick={() => window.open(`https://open.spotify.com/playlist/${playlistId}`, '_blank')}
              >
                <FaSpotify className="w-5 h-5" />
                Escuchar en Spotify
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-green-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-tl from-mint/5 to-transparent rounded-full blur-3xl" />
    </section>
  )
}
