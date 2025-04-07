'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useThemeMode } from './ThemeModeProvider'
import reactImg from '@/assets/images/React.png'
import { Typography } from '@mui/material'
import Section from './shared/Section'

const hobbies = [
  { id: 1, name: 'Photography', image: reactImg.src },
  { id: 2, name: 'Cooking', image: reactImg.src },
  { id: 3, name: 'Traveling', image: reactImg.src },
  { id: 4, name: 'Reading', image: reactImg.src },
  // Add more hobbies as needed
]

const Hobbies = () => {
  const { mode } = useThemeMode();

  return (
      <Section gradient={mode} type={2} id="hobbies">
          <Typography variant='h2' className="font-bold mb-8 text-center">My Hobbies</Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {hobbies.map((hobby) => (
              <HobbyCard key={hobby.id} name={hobby.name} image={hobby.image} mode={mode} />
            ))}
          </div>
      </Section>
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

