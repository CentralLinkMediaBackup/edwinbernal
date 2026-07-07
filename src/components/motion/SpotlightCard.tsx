import { useRef, type ReactNode, type MouseEvent } from "react";

/**
 * Glass card with a cursor-following radial glow. Falls back to the plain
 * glass hover style on touch devices (the glow simply never moves).
 */
const SpotlightCard = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    ref.current!.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    ref.current!.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`glass-card-hover spotlight-card ${className}`}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
