import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import mascotWave from 'figma:asset/2f7119d4264719c8469dedaf506e913cc3affe24.png';

export function CursorMascot() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef<number>();

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      rafRef.current = undefined;
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleMouseMove, handleMouseLeave]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      animate={{
        x: mousePosition.x - 30,
        y: mousePosition.y - 40,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        mass: 0.5,
      }}
      style={{
        left: 0,
        top: 0,
      }}
    >
      <motion.img
        src={mascotWave}
        alt="Mascot"
        className="w-16 h-16 drop-shadow-lg"
        animate={{
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
