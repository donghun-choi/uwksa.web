import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useVelocity } from 'motion/react';

import st1 from '../assets/animation/st_1.png';
import st2 from '../assets/animation/st_2.png';
import j1 from '../assets/animation/j_1.png';
import j2 from '../assets/animation/j_2.png';

const VELOCITY_THRESHOLD = 50; // px/s
const idleFrames = [st1, st2];
const movingFrames = [j1, j2];

export function CursorMascot() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);
  const [facingLeft, setFacingLeft] = useState(false);

  const rafRef = useRef<number>();
  const prevXRef = useRef(0);
  const facingLeftRef = useRef(false);
  const isMovingRef = useRef(false);
  const speedRef = useRef(0);

  // Spring-based position tracking
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 50, mass: 1.5 };
  const springX = useSpring(targetX, springConfig);
  const springY = useSpring(targetY, springConfig);
  const velocityX = useVelocity(springX);
  const velocityY = useVelocity(springY);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      const dx = e.clientX - prevXRef.current;

      if (Math.abs(dx) > 2) {
        facingLeftRef.current = dx < 0;
        setFacingLeft(dx < 0);
      }

      prevXRef.current = e.clientX;

      targetX.set(e.clientX - 112);
      targetY.set(e.clientY - 112);

      setIsVisible(true);
      rafRef.current = undefined;
    });
  }, [targetX, targetY]);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  // Mouse event listeners
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove, handleMouseLeave]);

  // Track mascot's own velocity to determine isMoving
  useEffect(() => {
    let animId: number;
    const check = () => {
      const vx = velocityX.get();
      const vy = velocityY.get();
      const speed = Math.sqrt(vx * vx + vy * vy);
      speedRef.current = speed;
      const moving = speed > VELOCITY_THRESHOLD;
      if (moving !== isMovingRef.current) {
        isMovingRef.current = moving;
        setIsMoving(moving);
      }
      animId = requestAnimationFrame(check);
    };
    animId = requestAnimationFrame(check);
    return () => cancelAnimationFrame(animId);
  }, [velocityX, velocityY]);

  // Frame animation
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      setFrameIndex(prev => (prev === 0 ? 1 : 0));

      if (isMoving) {
        const speed = speedRef.current;
        const clampedSpeed = Math.min(Math.max(speed, 100), 2000);
        const t = (clampedSpeed - 100) / (2000 - 100);
        const interval = 250 - t * (250 - 80);
        timeoutId = setTimeout(tick, interval);
      } else {
        timeoutId = setTimeout(tick, 1000);
      }
    };

    timeoutId = setTimeout(tick, isMoving ? 150 : 1000);

    return () => clearTimeout(timeoutId);
  }, [isMoving]);

  // Preload images
  useEffect(() => {
    [st1, st2, j1, j2].forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const currentImage = isMoving
    ? movingFrames[frameIndex]
    : idleFrames[frameIndex];

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{ left: 0, top: 0 }}
    >
      <motion.img
        src={currentImage}
        alt="UWKSA Mascot"
        className="drop-shadow-lg"
        style={{
          x: springX,
          y: springY,
          width: '14rem',
          height: '14rem',
          scaleX: facingLeft ? 1 : -1,
        }}
      />
    </div>
  );
}
