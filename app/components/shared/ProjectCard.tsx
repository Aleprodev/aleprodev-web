import Image from 'next/image'
import CustomTypography from '../UI/CustomTypography'
import { Typography } from '@mui/material'

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
}

export function ProjectCard({ title, description, imageUrl }: ProjectCardProps) {
  return (
    <div className="bg-white shadow-md hover:scale-105 transition-all">
      <Image src={imageUrl} alt={title} width={300} height={200} className="w-full h-48 object-cover" />
      <div className="p-4">
        <CustomTypography variant='body2' color='#000' styles={{ marginBottom: "0.5rem", fontWeight: "bold" }}>{title}</CustomTypography>
        <CustomTypography variant='body1' color='#4b5563'>{description}</CustomTypography>
      </div>
    </div>
  )
}

