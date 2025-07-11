// src/components/Modal.jsx
import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Modal.module.css';

// Usaremos Framer Motion para una animación de entrada/salida suave
function Modal({ isOpen, onClose, children }) {
  // Bloquear el scroll del body cuando el modal esté abierto
  useEffect(() => {
    if (isOpen) {
      // Guardar la posición actual del scroll
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restaurar el scroll del body
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup al desmontar el componente
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Manejar el scroll dentro del modal
  const handleModalScroll = (e) => {
    e.stopPropagation();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.backdrop}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()} // Evita que el clic en el modal lo cierre
            onWheel={handleModalScroll} // Maneja el scroll dentro del modal
            initial={{ y: "-50vh", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            exit={{ y: "-50vh", opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <button className={styles.closeButton} onClick={onClose}>
              &times;
            </button>
            <div className={styles.modalBody}>
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;