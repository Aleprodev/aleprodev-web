'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const hobbies = [
  { id: 1, name: 'Photography', image: '/placeholder.svg' },
  { id: 2, name: 'Cooking', image: '/placeholder.svg' },
  { id: 3, name: 'Traveling', image: '/placeholder.svg' },
  { id: 4, name: 'Reading', image: '/placeholder.svg' },
  // Add more hobbies as needed
]

const Hobbies = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="hobbies" className="py-20 bg-gray-100 dark:bg-gray-900" ref={ref}>
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">My Hobbies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby) => (
            <HobbyCard key={hobby.id} name={hobby.name} image={hobby.image} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

const HobbyCard = ({ name, image }: { name: string; image: string }) => {
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
        animate={{ opacity: isHovered ? 0.3 : 1 }}
        style={{ backgroundImage: `url(${image})` }}
      />
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      >
        <h3 className="text-white text-2xl font-semibold">{name}</h3>
      </motion.div>
    </motion.div>
  )
}

export default Hobbies

