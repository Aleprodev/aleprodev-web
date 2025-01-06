'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const projects = [
  { id: 1, title: 'Project 1', description: 'Description of Project 1', image: '/placeholder.svg' },
  { id: 2, title: 'Project 2', description: 'Description of Project 2', image: '/placeholder.svg' },
  { id: 3, title: 'Project 3', description: 'Description of Project 3', image: '/placeholder.svg' },
  // Add more projects as needed
]

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <motion.div
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  )
}

export default Projects

