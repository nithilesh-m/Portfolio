'use client'

import { Github, Linkedin, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/nithilesh-m/' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/nithileshm/' },
  { name: 'LeetCode', icon: ExternalLink, href: 'https://leetcode.com/u/nithileshm/' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-display font-bold gradient-text mb-2">
              Nithilesh Muchakurthi
            </h3>
            <p className="text-gray-400 text-sm">
              Building intelligent systems that save time & cost
            </p>
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-lg glass hover:bg-white/10 transition-colors"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5 text-gray-300 hover:text-neon-blue transition-colors" />
                </motion.a>
              )
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Nithilesh Muchakurthi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
