'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ProjectCard } from './shared/ProjectCard'
import { Typography } from '@mui/material'
import CustomTypography from './UI/CustomTypography'

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
        <CustomTypography variant='h2' styles={{ marginBottom: "1rem", textAlign: "center" }}>My Projects</CustomTypography>
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
              <ProjectCard title={project.title} description={project.description} imageUrl={project.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  )
}

export default Projects

