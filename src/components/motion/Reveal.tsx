import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE_OUT } },
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
}

/** Reveal-on-scroll wrapper. Collapses to a plain fade when reduced motion is preferred. */
export const Reveal = ({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 28,
  once = true,
}: RevealProps) => {
  const reduceMotion = useReducedMotion();

  const offset =
    direction === "up" ? { y: distance }
    : direction === "down" ? { y: -distance }
    : direction === "left" ? { x: distance }
    : direction === "right" ? { x: -distance }
    : {};

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
};

/** Staggered children container — pair with <RevealItem> children. */
export const RevealGroup = ({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: stagger, delayChildren: 0.1 } },
    }}
  >
    {children}
  </motion.div>
);

export const RevealItem = ({
  children,
  className,
  variants = fadeUp,
}: {
  children: ReactNode;
  className?: string;
  variants?: Variants;
}) => (
  <motion.div className={className} variants={variants}>
    {children}
  </motion.div>
);

/** Animates a heading in word-by-word for cinematic section titles. */
export const SplitWords = ({
  text,
  className,
  wordClassName,
}: {
  text: string;
  className?: string;
  wordClassName?: (word: string, index: number) => string | undefined;
}) => {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (reduceMotion) {
    return (
      <span className={className}>
        {words.map((word, i) => (
          <span key={i} className={wordClassName?.(word, i)}>
            {word}{i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </span>
    );
  }

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom" aria-hidden="true">
          <motion.span
            className={`inline-block ${wordClassName?.(word, i) ?? ""}`}
            variants={{
              hidden: { y: "100%", opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: EASE_OUT } },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? <span>&nbsp;</span> : null}
        </span>
      ))}
    </motion.span>
  );
};
