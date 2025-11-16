'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'C', 'Java', 'C++'],
    color: 'from-neon-blue to-cyan-500',
  },
  {
    title: 'Web Technologies',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Express.js', 'Flask'],
    color: 'from-neon-purple to-pink-500',
  },
  {
    title: 'AI & ML',
    skills: ['Machine Learning', 'Deep Learning', 'CNN', 'RNN', 'Transformers', 'GenAI'],
    color: 'from-cyan-500 to-neon-purple',
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Tools',
    skills: ['VSCode', 'Git', 'GitHub'],
    color: 'from-blue-500 to-cyan-500',
  },
]

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4">
            <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 group"
            >
              <h3 className="text-xl font-display font-bold mb-4 text-white group-hover:text-neon-blue transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} text-white text-sm font-medium shadow-lg`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 glass rounded-2xl p-8"
        >
          <h3 className="text-2xl font-display font-bold mb-6 text-center gradient-text">
            Problem Solving & Soft Skills
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <h4 className="text-neon-blue font-semibold mb-2">Technical</h4>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Data Structures and Algorithms</li>
                <li>• Object-Oriented Programming</li>
                <li>• System Design</li>
              </ul>
            </div>
            <div>
              <h4 className="text-neon-purple font-semibold mb-2">Soft Skills</h4>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Communication & Presentation</li>
                <li>• Group Discussions & Leadership</li>
                <li>• Decision Making & Active Listening</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

