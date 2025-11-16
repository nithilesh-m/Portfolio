'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Trophy, Code, Award, Target } from 'lucide-react'

const achievements = [
  {
    icon: Code,
    title: '200+ LeetCode Problems',
    description: 'Leveraged problem solving skills by tackling 200+ problems solved on LeetCode',
    color: 'from-neon-blue to-cyan-500',
  },
  {
    icon: Trophy,
    title: 'TCS CodeVita Season 12',
    description: 'Qualified round 1 of TCS CodeVita season 12, a 6-hour competitive coding exam and secured 98.2% percentile',
    color: 'from-neon-purple to-pink-500',
    link: 'https://drive.google.com/file/d/18EIaHR2oUmQz4miTR_36ZMAjQWHJ7a9L/view',
  },
  {
    icon: Award,
    title: 'National Hackathons',
    description: 'Participated in multiple national-level hackathons conducted by BITS Pilani, IIIT Hyderabad, SNIST, Adobe, L&T',
    color: 'from-cyan-500 to-neon-purple',
    link: 'https://drive.google.com/drive/folders/1bumOgsgJ-ZKibQZuxutqZTqjwsah7-LZ',
  },
  {
    icon: Target,
    title: 'Certifications',
    description: 'Infosys Springboard - Learning Python, TCS iON Career Edge - Young Professional',
    color: 'from-purple-500 to-pink-500',
    links: ['#', '#'],
  },
]

export default function Achievements() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="achievements" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4">
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2 text-white group-hover:text-neon-blue transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>
                  {achievement.link && (
                    <motion.a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="mt-4 inline-block text-neon-blue hover:text-neon-purple transition-colors text-sm font-semibold"
                    >
                      View Certificate →
                    </motion.a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* LeetCode Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 glass rounded-2xl p-8 text-center"
        >
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">200+</p>
              <p className="text-gray-400">Problems Solved</p>
            </div>
            <div className="w-px h-16 bg-white/10" />
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">98.2%</p>
              <p className="text-gray-400">CodeVita Percentile</p>
            </div>
            <div className="w-px h-16 bg-white/10" />
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">5+</p>
              <p className="text-gray-400">Hackathons</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

