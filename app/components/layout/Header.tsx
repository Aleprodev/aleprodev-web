'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

const Header = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-70 backdrop-blur-md shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Your Name
        </motion.div>
        <ul className="flex space-x-4">
          <NavItem href="#projects">Projects</NavItem>
          <NavItem href="#hobbies">Hobbies</NavItem>
          <NavItem href="#contact">Contact</NavItem>
          <li>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a
      href={href}
      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    >
      {children}
    </a>
  </li>
)

export default Header

