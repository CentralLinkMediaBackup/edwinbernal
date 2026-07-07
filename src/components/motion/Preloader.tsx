import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "./Reveal";

/**
 * Brief editorial loading curtain: name reveals, counter runs to 100,
 * then the whole panel slides up. Skipped entirely under reduced motion.
 */
const Preloader = () => {
  const reduceMotion = useReducedMotion();
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      setDone(true);
      return;
    }
    document.documentElement.style.overflow = "hidden";
    const start = performance.now();
    const DURATION = 1400;
    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / DURATION, 1);
      setCount(Math.round(progress * 100));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.style.overflow = "";
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (done) document.documentElement.style.overflow = "";
  }, [done]);

  if (reduceMotion) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: "-100%", transition: { duration: 0.8, ease: EASE_OUT } }}
          className="fixed inset-0 z-[200] bg-ink text-paper flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="text-center px-6">
            <div className="overflow-hidden mb-4">
              <motion.p
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.1 }}
                className="font-display text-4xl md:text-6xl tracking-tight"
              >
                Edwin <span className="font-display-italic text-cobalt-soft">Bernal</span>
              </motion.p>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="eyebrow text-paper/50"
            >
              Portfolio — {count}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
