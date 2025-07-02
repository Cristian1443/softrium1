// src/components/Modal.jsx
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Modal.module.css';

// Usaremos Framer Motion para una animación de entrada/salida suave
function Modal({ isOpen, onClose, children }) {
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
            initial={{ y: "-50vh", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            exit={{ y: "-50vh", opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <button className={styles.closeButton} onClick={onClose}>
              &times;
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;