'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Clock, Trophy, Users } from 'lucide-react'

const hackathons = [
  {
    name: 'BITS Pilani',
    duration: '24 hours',
    description: 'Built innovative solution under extreme time constraints',
    icon: Trophy,
  },
  {
    name: 'IIIT Hyderabad',
    duration: 'National Level',
    description: 'Delivered high-impact digital solution',
    icon: Users,
  },
  {
    name: 'SNIST',
    duration: '12 hours',
    description: 'Rapid prototyping and deployment',
    icon: Clock,
  },
  {
    name: 'Adobe',
    duration: 'Corporate',
    description: 'Enterprise-grade solution development',
    icon: Trophy,
  },
  {
    name: 'L&T',
    duration: 'Corporate',
    description: 'Industry-focused innovation',
    icon: Users,
  },
]

export default function Hackathons() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="hackathons" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4">
            <span className="gradient-text">Hackathons</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Consistently built high-impact solutions under extreme time constraints
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathons.map((hackathon, index) => {
            const Icon = hackathon.icon
            return (
              <motion.div
                key={hackathon.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                      {hackathon.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2 text-white group-hover:text-neon-blue transition-colors">
                    {hackathon.name}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {hackathon.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 glass rounded-2xl p-8 text-center"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            Participated in multiple national-level hackathons where I consistently delivered 
            <span className="text-neon-blue font-semibold"> innovative, high-impact digital solutions </span>
            under extreme time constraints, showcasing my ability to rapidly prototype, 
            develop, and deploy production-ready applications.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

