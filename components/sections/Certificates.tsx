'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { X, ExternalLink } from 'lucide-react'

const certificates = [
  {
    title: 'JNTUH DILT - Data Science with Python',
    issuer: 'JNTUH',
    date: 'July 2024',
    grade: 'A Grade',
    credits: '15 Credit Points',
    description: 'Comprehensive program covering data science fundamentals and Python programming',
    link: 'https://www.linkedin.com/in/nithileshm/details/education/1732217741624/single-media-viewer/?profileId=ACoAAEr4EhgBLnOd4vYaHD-xbeIk5SMFkIEsIQI',
  },
  {
    title: 'Infosys Springboard - Learning Python',
    issuer: 'Infosys',
    date: '2024',
    description: 'Python programming fundamentals and best practices',
    link: 'https://www.linkedin.com/in/nithileshm/overlay/1716499519755/single-media-viewer/?profileId=ACoAAEr4EhgBLnOd4vYaHD-xbeIk5SMFkIEsIQI',
  },
  {
    title: 'TCS iON Career Edge - Young Professional',
    issuer: 'TCS',
    date: '2024',
    description: 'Soft skills development and professional growth',
    link: 'https://www.linkedin.com/in/nithileshm/overlay/1711264364410/single-media-viewer/?profileId=ACoAAEr4EhgBLnOd4vYaHD-xbeIk5SMFkIEsIQI',
  },
]

export default function Certificates() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [selectedCert, setSelectedCert] = useState<number | null>(null)

  return (
    <section id="certificates" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4">
            <span className="gradient-text">Certificates</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedCert(index)}
              className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2 text-white group-hover:text-neon-blue transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                <p className="text-gray-500 text-xs">{cert.date}</p>
                {cert.grade && (
                  <div className="mt-3 flex gap-2">
                    <span className="text-xs bg-neon-blue/20 text-neon-blue px-2 py-1 rounded">
                      {cert.grade}
                    </span>
                    {cert.credits && (
                      <span className="text-xs bg-neon-purple/20 text-neon-purple px-2 py-1 rounded">
                        {cert.credits}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCert !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-strong rounded-2xl p-8 max-w-2xl w-full relative"
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg glass hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="mb-6">
                  <h3 className="text-3xl font-display font-bold mb-2 gradient-text">
                    {certificates[selectedCert].title}
                  </h3>
                  <p className="text-gray-400">{certificates[selectedCert].issuer}</p>
                  <p className="text-gray-500 text-sm mt-1">{certificates[selectedCert].date}</p>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {certificates[selectedCert].description}
                </p>
                {certificates[selectedCert].grade && (
                  <div className="flex gap-2 mb-6">
                    <span className="px-4 py-2 rounded-lg bg-neon-blue/20 text-neon-blue">
                      {certificates[selectedCert].grade}
                    </span>
                    {certificates[selectedCert].credits && (
                      <span className="px-4 py-2 rounded-lg bg-neon-purple/20 text-neon-purple">
                        {certificates[selectedCert].credits}
                      </span>
                    )}
                  </div>
                )}
                <motion.a
                  href={certificates[selectedCert].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold"
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

