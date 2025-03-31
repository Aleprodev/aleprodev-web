'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useThemeMode } from './ThemeModeProvider'
import reactImg from '@/assets/images/React.png'
import { Typography } from '@mui/material'

const hobbies = [
  { id: 1, name: 'Photography', image: reactImg.src },
  { id: 2, name: 'Cooking', image: reactImg.src },
  { id: 3, name: 'Traveling', image: reactImg.src },
  { id: 4, name: 'Reading', image: reactImg.src },
  // Add more hobbies as needed
]

const Hobbies = () => {
  const { mode } = useThemeMode();
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="hobbies" className={`py-20 ${mode === 'light' ? 'bg-gray-100' : 'bg-gray-900'} transition-all`} ref={ref}>
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Typography variant='h2' className="font-bold mb-8 text-center">My Hobbies</Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby) => (
            <HobbyCard key={hobby.id} name={hobby.name} image={hobby.image} mode={mode} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

const HobbyCard = ({ name, image, mode }: { name: string; image: string, mode: string }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        initial={{ opacity: 1 }}
        style={{ backgroundImage: `url(${image})` }}
      />
      <motion.div
        className={`absolute inset-0 flex items-center justify-center ${mode === 'light' ? 'bg-black bg-opacity-70' : 'bg-white bg-opacity-30'} `}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      >
        <h3 className={`${mode === 'light' ? 'text-white' : 'text-black'} text-2xl font-semibold`}>{name}</h3>
      </motion.div>
    </motion.div>
  )
}

export default Hobbies

