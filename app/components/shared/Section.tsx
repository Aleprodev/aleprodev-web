import { Box, BoxProps } from "@mui/material";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionGradientProps extends BoxProps {
  children: ReactNode;
  gradient: "light" | "dark";
  type: 0 | 1 | 2;
  id: string;
}

const gradients = [
  {
    // Opción 0: Comienza en blanco y luego pasa a púrpura claro notorio
    light: "linear-gradient(to bottom, #ffffff 0%, #ffffff 40%, #e9d5ff 100%)",
    dark:  "linear-gradient(to bottom, #2a0b73 0%, #2a0b73 40%, #051b3b 100%)",
  },
  {
    // Opción 1: Comienza en púrpura y se mantiene hasta el 70%, luego blanco
    light: "linear-gradient(to bottom, #e9d5ff 0%, #e9d5ff 70%, #ffffff 100%)",
    dark:  "linear-gradient(to bottom, #051b3b 0%, #051b3b 70%, #2a0b73 100%)",
  },
  {
    // Opción 2: Comienza en blanco, se mantiene y termina en púrpura
    light: "linear-gradient(to bottom, #ffffff 0%, #ffffff 70%, #e9d5ff 100%)",
    dark:  "linear-gradient(to bottom, #2a0b73 0%, #2a0b73 70%, #051b3b 100%)",
  },
];


const Section = ({
  children,
  gradient = "light",
  type,
  id,
  ...props
}: SectionGradientProps) => {
  const bg = gradients[type][gradient];

  return (
    <Box
      component="section"
      id={id}
      className="min-h-screen flex items-center justify-center transition-all"
      sx={{
        backgroundImage: bg,
        py: 10,
      }}
      {...props}
    >
      <motion.div
        className="container mx-auto px-4"
        // Estado inicial: opaco 0, desplazado hacia abajo y ligeramente escalado.
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        // Cuando entra en vista, se anima a opacidad 1, posición original y escala 1.
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        // Configuramos el viewport para que la animación se active cuando el 30% del elemento sea visible y solo una vez.
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </Box>
  );
};

export default Section;
