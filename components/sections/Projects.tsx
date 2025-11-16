'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Sparkles } from 'lucide-react'

const projects = [
  {
    title: 'GenAI Insulin Drug Synthesis',
    description: 'Developed custom GenAI models from scratch each trained to loss < 0.3, enabling highly accurate mutation and drug prediction. Built a seamless end-to-end pipeline - mutation detection, insulin logs generation, drug SMILES generation, 3D folding structure analysis and docking which reduces early drug-discovery time from months to days and R&D cost by ~90%.',
    highlights: [
      'Custom GenAI models trained to loss < 0.3',
      'Reduced drug-discovery time from months to days',
      'R&D cost reduction by ~90%',
      'Binding scores: -5 to -7 kcal/mol',
    ],
    tech: ['Python', 'PyTorch', 'ProGen2', 'MolT5', 'RDKit', 'AlphaFold2', 'AutoDock Vina', 'Flask', 'React', 'MongoDB Atlas'],
    liveUrl: 'https://newpublic-seven.vercel.app/',
    githubUrl: '#',
    gradient: 'from-neon-blue to-cyan-500',
  },
  {
    title: 'AI-Powered Multimodal Claims & Fraud Assessment System',
    description: 'Built and deployed a multimodal AI automation system that detects damage, false claims, cutting manual verification time by 60%. Implemented damage classification, part detection, severity scoring, and cost estimation pipelines, reducing claim-processing cost by 40-50% for insurers like Chubb private limited.',
    highlights: [
      '60% reduction in manual verification time',
      '40-50% cost reduction for insurers',
      'Multimodal AI with OCR integration',
      'Grad-CAM explainability',
    ],
    tech: ['Python', 'TensorFlow', 'PyTorch', 'InceptionV3', 'MobileNetV2', 'BERT', 'OCR', 'Flask', 'React', 'MongoDB'],
    liveUrl: 'https://chubb-nu.vercel.app/',
    githubUrl: 'https://github.com/nithilesh-m/chubb',
    gradient: 'from-neon-purple to-pink-500',
  },
  {
    title: 'TabulaX - AI-Powered Tabular Data Transformer',
    description: 'Developed an LLM-based tool using Mistral-7B to automate column-wise transformations (e.g., formatting, math ops) on tabular data via zero-shot-prompting. Solves repetitive data processing tasks for non-tech users, reducing manual effort and time by over 60% in business workflows.',
    highlights: [
      'Mistral-7B transformer integration',
      'Zero-shot prompting for transformations',
      '60% reduction in manual workflow time',
      'User-friendly for non-tech users',
    ],
    tech: ['Python', 'Flask', 'ReactJS', 'Express.js', 'MongoDB', 'MySQL', 'Mistral-7B', 'Google Colab'],
    liveUrl: '#',
    githubUrl: 'https://github.com/nithilesh-m/Tabulax',
    gradient: 'from-cyan-500 to-neon-purple',
  },
  {
  title: 'ExpenseAI – AI-Powered Personal Expense Tracker',
  description:
    'Built an ultra-fast, AI-driven expense tracking app that converts natural language and voice inputs into structured financial data using Gemini Flash models. Designed for students, families, and small businesses to log daily expenses in seconds with a clean, minimal UI and automated categorization.',
  highlights: [
    'AI parsing using Gemini 2.5 Flash',
    'Voice-to-expense input using Web Speech API',
    'Ultra-fast single-input expense logging',
    'Auto-categorization of expenses via NLP',
    'Daily/weekly email summary automation',
    'Lightweight MERN stack architecture optimized for scale',
  ],
  tech: [
    'ReactJS',
    'Node.js',
    'Express.js',
    'MongoDB Atlas',
    'Gemini 2.5 Flash', 
    'JWT Auth',
    'Web Speech API',
    'Render',
    'Vercel'
  ],
  liveUrl: 'https://expense--ai.vercel.app',
  githubUrl: 'https://github.com/nithilesh-m/ExpenseAI',
  gradient: 'from-amber-400 to-rose-500',
}
]

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Building intelligent solutions that solve real-world problems
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass rounded-2xl p-8 md:p-10 hover:bg-white/5 transition-all duration-300 relative overflow-hidden">
                {/* Gradient Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Sparkles className="w-6 h-6 text-neon-blue" />
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-neon-blue mt-1">▹</span>
                        <span className="text-gray-300 text-sm">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full glass border border-white/10 text-xs text-gray-300 hover:border-neon-blue hover:text-neon-blue transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold flex items-center gap-2 shadow-lg shadow-neon-blue/50"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 rounded-lg glass border border-white/20 text-white font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Repo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

