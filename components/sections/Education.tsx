'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

const education = [
  {
    icon: GraduationCap,
    degree: 'B.Tech (CSE)',
    institution: 'Keshav Memorial Institute of Technology',
    location: 'Hyderabad, India',
    period: 'Aug 2023 - June 2027',
    details: 'Maintaining a decent 8.25 CGPA in the second year of my academic journey',
    gradient: 'from-neon-blue to-cyan-500',
  },
  {
    icon: BookOpen,
    degree: 'JNTUH DILT Program',
    institution: 'Data Science with Python Programming',
    location: 'Hyderabad, India',
    period: 'Dec 2023 - July 2024',
    details: 'Secured an impressive A grade and acquired 15 credit points',
    gradient: 'from-neon-purple to-pink-500',
    link: 'https://www.linkedin.com/in/nithileshm/details/education/1732217741624/single-media-viewer/?profileId=ACoAAEr4EhgBLnOd4vYaHD-xbeIk5SMFkIEsIQI',
  },
  {
    icon: Award,
    degree: 'Intermediate (MPC)',
    institution: 'Sri Chaitanya Junior College',
    location: 'Hyderabad, India',
    period: 'Jun 2021 - May 2023',
    details: 'Achieved an outstanding 960 marks out of 1000',
    gradient: 'from-cyan-500 to-neon-purple',
  },
  {
    icon: Award,
    degree: 'SSC (10th)',
    institution: 'Sri Chaitanya High School',
    location: 'Hyderabad, India',
    period: 'March 2021',
    details: 'Scored a massive 10 GPA',
    gradient: 'from-purple-500 to-pink-500',
  },
]

export default function Education() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto" />
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => {
            const Icon = edu.icon
            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <h3 className="text-2xl font-display font-bold text-white group-hover:text-neon-blue transition-colors">
                          {edu.degree}
                        </h3>
                        <span className="text-sm text-gray-400 bg-white/5 px-4 py-1 rounded-full inline-block w-fit">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-lg text-neon-purple font-semibold mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-gray-400 text-sm mb-3">
                        {edu.location}
                      </p>
                      <p className="text-gray-300">
                        {edu.details}
                      </p>
                      {edu.link && (
                        <motion.a
                          href={edu.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className="mt-3 inline-block text-neon-blue hover:text-neon-purple transition-colors text-sm font-semibold"
                        >
                          View Certificate →
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

