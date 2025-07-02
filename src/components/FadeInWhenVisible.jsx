/* eslint-disable no-unused-vars */
// src/components/FadeInWhenVisible.jsx
import React from 'react';
import { motion } from 'framer-motion';
/* eslint-enable no-unused-vars */

// Este componente recibirá otros componentes como "hijos" (children)
function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      // 1. ESTADO INICIAL: El componente empieza invisible (opacity: 0) y 40px más abajo de su posición final (y: 40).
      initial={{ opacity: 0, y: 40 }}
      
      // 2. ESTADO DE ANIMACIÓN: Cuando el componente entra en la vista del usuario...
      whileInView={{ opacity: 1, y: 0 }} // ...se vuelve visible (opacity: 1) y sube a su posición original (y: 0).
      
      // 3. VISTA Y TRANSICIÓN:
      viewport={{ once: true, amount: 0.2 }} // La animación se dispara una sola vez (once: true) cuando el 20% del elemento es visible.
      transition={{ duration: 0.6, ease: 'easeOut' }} // La animación dura 0.6 segundos con una curva de desaceleración suave.
    >
      {children}
    </motion.div>
  );
}

export default FadeInWhenVisible;