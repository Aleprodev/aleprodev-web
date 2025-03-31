'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import { Box, Button, Typography } from '@mui/material'
import { useThemeMode } from '../ThemeModeProvider'

const Header = () => {
  const [mounted, setMounted] = useState(false)
  const { toggleTheme, mode } = useThemeMode();

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <motion.header
      className='fixed top-0 left-0 right-0 z-50'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <Box
        className="backdrop-blur-md shadow-md"
        sx={(theme) => ({
          backgroundColor: theme.palette.mode === "dark" ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.4)",
      })}>
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link href={"#hero"}>
              <Typography variant='body2'>
                Aleprodev
              </Typography>
            </Link>
          </motion.div>
          <ul className="flex items-center space-x-4">
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#hobbies">Hobbies</NavItem>
            <NavItem href="#contact">Contact</NavItem>
            <li>
              <Box
                onClick={toggleTheme}
                className="p-2 ml-4 rounded-full transition-colors cursor-pointer"
                sx={(theme) => ({
                  "&:hover": {
                    backgroundColor: theme.palette.mode === "light" ? "#e5e7eb" : "#374151",
                  },
                })}
              >
                {mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </Box>
            </li>
          </ul>
        </nav>
      </Box>
    </motion.header>
  )
}

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link
      href={href}
    >
      <Typography variant='body2' className='hover:text-blue-400 transition-colors'>
        {children}
      </Typography>
    </Link>
  </li>
)

export default Header

