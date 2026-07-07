import type Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/** Scroll to an element/selector, via Lenis when active so smooth scrolling stays in sync. */
export const scrollToTarget = (target: string | HTMLElement | number) => {
  const lenis = window.__lenis;
  if (lenis) {
    lenis.scrollTo(target, { offset: 0 });
    return;
  }
  if (typeof target === "number") {
    window.scrollTo({ top: target, behavior: "smooth" });
    return;
  }
  const el = typeof target === "string" ? document.querySelector(target) : target;
  el?.scrollIntoView({ behavior: "smooth" });
};
