import React, { useEffect, useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { motion } from "framer-motion";
import animation from "@/assets/lottie/email-success.json";

export default function EmailUsSuccess() {
  const animationRef = useRef<LottieRefCurrentProps | null>(null);
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-full h-full">
      {isComplete && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="mb-4 text-gray-600 text-3xl font-bold text-center">
            Tu mensaje ha sido enviado con éxito. En breve recibirás un correo
            de confirmación en tu bandeja de entrada.
          </h2>
          <p className="text-gray-600 text-xl text-center">
            Nuestro equipo revisará tu consulta y se pondrá en contacto contigo
            a la brevedad. ¡Estamos ansiosos por ayudarte!
          </p>
        </motion.div>
      )}
      <motion.div
        className="mt-4"
        initial={{ y: 0 }} // Estado inicial sin movimiento
        animate={isComplete ? { scale: [1, 1.2, 0] } : {}} // Crece y luego desaparece
        transition={isComplete ? { duration: 1.2, ease: "easeInOut" } : {}}
      >
        <Lottie
          lottieRef={animationRef}
          animationData={animation}
          style={{ width: 300, margin: "auto" }}
          loop={false}
          onComplete={() => setIsComplete(true)} // Detecta cuando termina
        />
      </motion.div>
    </div>
  );
}
