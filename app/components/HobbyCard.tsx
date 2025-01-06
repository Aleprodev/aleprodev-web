import { Camera, Plane, Book, Utensils } from 'lucide-react'

interface HobbyCardProps {
  title: string
  icon: 'camera' | 'plane' | 'book' | 'utensils'
}

const iconComponents = {
  camera: Camera,
  plane: Plane,
  book: Book,
  utensils: Utensils,
}

export function HobbyCard({ title, icon }: HobbyCardProps) {
  const IconComponent = iconComponents[icon]

  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <IconComponent className="w-12 h-12 mx-auto mb-4 text-blue-500" />
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
  )
}

