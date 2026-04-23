import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const TinyMovingDot = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Get inner bounds for the dot to safely navigate
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: Math.max(window.innerHeight, 800) // Ensure enough vertical space
      });
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (windowSize.width === 0) return null;

  // Generate random movement keyframes for a wandering dot
  const generateWander = () => {
    const xPoints = [];
    const yPoints = [];
    for (let i = 0; i < 10; i++) {
        xPoints.push(Math.random() * windowSize.width);
        yPoints.push(Math.random() * windowSize.height);
    }
    // Return to start for seamless loop
    xPoints.push(xPoints[0]);
    yPoints.push(yPoints[0]);
    
    return { x: xPoints, y: yPoints };
  };

  const path = generateWander();

  return (
    <motion.div
      className="absolute top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)] z-[1]"
      animate={{
        x: path.x,
        y: path.y,
        opacity: [0.2, 0.8, 1, 0.8, 0.2, 0.5, 0.2, 0.8, 1, 0.5, 0.2], // subtle flicker
      }}
      transition={{
        duration: 80, // Very slow, ambient movement
        ease: "linear",
        repeat: Infinity,
      }}
    />
  );
};

export default TinyMovingDot;
