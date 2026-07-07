import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * Custom cursor: a small dot that trails the pointer and swells over
 * interactive elements. mix-blend-difference keeps it visible on paper
 * and ink alike. Renders nothing on touch devices or reduced motion.
 */
const Cursor = () => {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.6 });

  useEffect(() => {
    if (reduceMotion) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [role=button], input, textarea, label"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [reduceMotion, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="fixed top-0 left-0 z-[150] pointer-events-none mix-blend-difference"
      aria-hidden="true"
    >
      <motion.div
        animate={{ scale: hovering ? 3.2 : 1 }}
        transition={{ duration: 0.25 }}
        className="w-3 h-3 -ml-1.5 -mt-1.5 rounded-full bg-white"
      />
    </motion.div>
  );
};

export default Cursor;
