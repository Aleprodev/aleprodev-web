import Image from "next/image";
import CustomTypography from "../UI/CustomTypography";
import { Typography } from "@mui/material";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  mode: string;
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  mode,
}: ProjectCardProps) {
  return (
    <div className="flex justify-center py-5">
      <div className="w-72 rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 bg-white shadow-lg">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="bg-white p-4">
          <Typography
            variant="body1"
            className={`text-sm`}
            sx={{ color: "#1f2937", fontWeight: 700 }}
          >
            {title}
          </Typography>
          <Typography variant="body2" className={`text-xs mt-2 text-gray-500`}>
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
}
