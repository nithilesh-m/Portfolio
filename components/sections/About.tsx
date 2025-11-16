'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Code, Rocket } from 'lucide-react'

const stats = [
  { icon: Brain, label: 'AI/ML and Full-Stack Expertise', value: '3+ Years' },
  { icon: Code, label: 'Projects Built', value: '10+' },
  { icon: Rocket, label: 'Hackathons', value: '5+' },
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-display font-bold mb-4 text-neon-blue">
              Who I Am
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm a passionate <span className="text-neon-purple font-semibold">B.Tech CSE student</span> at Keshav Memorial Institute of Technology, 
              maintaining a strong <span className="text-neon-blue font-semibold">8.25 CGPA</span> in my second year. 
              My journey in AI and Machine Learning has been driven by a desire to solve real-world problems 
              through intelligent automation.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              I specialize in <span className="text-neon-purple font-semibold">GenAI, Deep Learning, and Full-Stack Development</span>, 
              building systems that automate workflows, reduce costs, and accelerate research. 
              My work spans from custom GenAI models for drug discovery to multimodal AI systems for fraud detection.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-neon-blue font-semibold">Mission:</span> I build AI systems that automate workflows, 
              reduce costs, and accelerate research.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="glass rounded-xl p-6 flex items-center gap-4 hover:bg-white/5 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Education Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 grid sm:grid-cols-3 gap-6"
        >
          <div className="glass rounded-xl p-6 text-center">
            <p className="text-3xl font-bold gradient-text mb-2">8.25</p>
            <p className="text-gray-400 text-sm">Current CGPA</p>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <p className="text-3xl font-bold gradient-text mb-2">960/1000</p>
            <p className="text-gray-400 text-sm">Intermediate Score</p>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <p className="text-3xl font-bold gradient-text mb-2">10 GPA</p>
            <p className="text-gray-400 text-sm">SSC Score</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

