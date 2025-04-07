'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ProjectCard } from './shared/ProjectCard'
import { Typography } from '@mui/material'
import { useThemeMode } from './ThemeModeProvider'
import Section from './shared/Section'
import reactImg from '@/assets/images/React.png'

const projects = [
  { id: 1, title: 'Project 1', description: 'Description of Project 1', image: reactImg.src },
  { id: 2, title: 'Project 2', description: 'Description of Project 2', image: reactImg.src },
  { id: 3, title: 'Project 3', description: 'Description of Project 3', image: reactImg.src },
  // Add more projects as needed
]

const Projects = () => {
  const { mode } = useThemeMode();

  return (
      <Section gradient={mode} type={1} id="projects">
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
      </Section>
  )
}

export default Projects

