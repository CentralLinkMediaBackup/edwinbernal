import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  gold: boolean;
}

/**
 * Lightweight canvas node-network background — a nod to "Central Link".
 * Nodes drift slowly and link up when close; links near the cursor glow brighter.
 * Renders a static frame under prefers-reduced-motion and pauses when offscreen.
 */
const ParticleNetwork = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let rafId = 0;
    let running = true;
    const mouse = { x: -9999, y: -9999 };
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const isMobile = window.innerWidth < 768;
    const LINK_DIST = isMobile ? 110 : 150;
    const MOUSE_DIST = 200;

    const build = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      width = rect?.width ?? window.innerWidth;
      height = rect?.height ?? window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(Math.floor((width * height) / (isMobile ? 22000 : 16000)), 90);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.6 + 0.8,
        gold: Math.random() < 0.16,
      }));
    };

    const drawFrame = (animate: boolean) => {
      ctx.clearRect(0, 0, width, height);

      for (const node of nodes) {
        if (animate) {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist > LINK_DIST) continue;

          const midX = (a.x + b.x) / 2;
          const midY = (a.y + b.y) / 2;
          const mouseDist = Math.hypot(midX - mouse.x, midY - mouse.y);
          const nearMouse = Math.max(0, 1 - mouseDist / MOUSE_DIST);

          const alpha = (1 - dist / LINK_DIST) * (0.14 + nearMouse * 0.4);
          ctx.strokeStyle = `hsla(211, 100%, ${55 + nearMouse * 15}%, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (const node of nodes) {
        ctx.fillStyle = node.gold
          ? "hsla(51, 100%, 55%, 0.75)"
          : "hsla(211, 100%, 60%, 0.65)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      if (!running) return;
      drawFrame(true);
      rafId = requestAnimationFrame(loop);
    };

    build();
    if (reduceMotion) {
      drawFrame(false);
    } else {
      loop();
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onResize = () => {
      build();
      if (reduceMotion) drawFrame(false);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (reduceMotion) return;
      if (entry.isIntersecting && !running) {
        running = true;
        loop();
      } else if (!entry.isIntersecting && running) {
        running = false;
        cancelAnimationFrame(rafId);
      }
    });
    observer.observe(canvas);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);
    canvas.addEventListener("mouseleave", onMouseLeave);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [reduceMotion]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
};

export default ParticleNetwork;
