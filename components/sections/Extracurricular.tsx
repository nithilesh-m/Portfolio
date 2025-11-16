'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Music, TrendingUp } from 'lucide-react'

const activities = [
  {
    icon: Users,
    title: 'NSS PR Intern',
    organization: 'National Service Scheme',
    achievements: [
      'Made significant contribution leading to 10% increase in views on digital pages',
      'Produced over 10 posters for various events',
      'Got Promoted to Volunteer In-charge, leading teams and coordinating events',
    ],
    gradient: 'from-neon-blue to-cyan-500',
  },
  {
    icon: Music,
    title: 'Video Editor & Vocalist',
    organization: 'Music Club Aalap',
    achievements: [
      'Contributed to event videos and live performances',
      'Active member of the music club',
    ],
    gradient: 'from-neon-purple to-pink-500',
  },
]

export default function Extracurricular() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="extracurricular" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4">
            <span className="gradient-text">Extracurricular Activities</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon
            return (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${activity.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${activity.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2 text-white group-hover:text-neon-blue transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-neon-purple font-semibold mb-4">{activity.organization}</p>
                  <ul className="space-y-2">
                    {activity.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300">
                        <span className="text-neon-blue mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

