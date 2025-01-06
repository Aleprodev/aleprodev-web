'use client'

import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl md:text-2xl mb-8">I'm a passionate developer creating amazing web experiences</p>
        <motion.a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero

