'use client'

import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'

const Hero = () => {  
  return (
    <section id='hero'>
      <Box
        className="min-h-screen flex items-center justify-center"
        sx={(theme) => ({
          backgroundColor: theme.palette.mode === "light"
            ? theme.palette.background.paper
            : "#4c1d95",
        })}
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant='h1'>Welcome to My Portfolio</Typography>
          <Typography variant='body1' sx={{ marginBottom: "2rem"}}>I'm a passionate developer creating amazing web experiences</Typography>
          <motion.a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
        </motion.div>
      </Box>
    </section>
  )
}

export default Hero

