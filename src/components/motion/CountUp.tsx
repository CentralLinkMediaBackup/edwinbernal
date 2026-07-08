import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * Counts from 0 to `value` when scrolled into view.
 * Renders `prefix`/`suffix` around the number, e.g. <CountUp value={53} suffix="K+" />.
 */
const CountUp = ({
  value,
  prefix = "",
  suffix = "",
  className,
  duration = 1.6,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      if (ref.current) ref.current.textContent = `${prefix}${value.toLocaleString()}${suffix}`;
      return;
    }
    motionValue.set(value);
  }, [inView, value, prefix, suffix, reduceMotion, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(latest).toLocaleString()}${suffix}`;
      }
    });
    return unsubscribe;
  }, [spring, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
};

export default CountUp;
