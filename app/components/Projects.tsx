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
import { useThemeMode } from './ThemeModeProvider'

const projects = [
  { id: 1, title: 'Project 1', description: 'Description of Project 1', image: '' },
  { id: 2, title: 'Project 2', description: 'Description of Project 2', image: '' },
  { id: 3, title: 'Project 3', description: 'Description of Project 3', image: '' },
  // Add more projects as needed
]

const Projects = () => {
  const { mode } = useThemeMode();
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="projects" className={`py-20 ${mode === 'light' ? 'bg-gray-50' : 'bg-gray-800'} transition-all`} ref={ref}>
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Typography variant='h2' className='text-center'>My Projects</Typography>
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
              <ProjectCard title={project.title} description={project.description} imageUrl={project.image} mode={mode} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  )
}

export default Projects

