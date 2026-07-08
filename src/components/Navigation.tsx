import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Magnetic from "./motion/Magnetic";
import { scrollToTarget } from "@/lib/scroll";

const navItems = [
  { label: "Ventures", href: "#ventures" },
  { label: "Experience", href: "#experience" },
  { label: "Leadership", href: "#leadership" },
  { label: "Education", href: "#education" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track which section is in view for the nav underline
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    scrollToTarget(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: reduceMotion ? 0 : 1.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-paper/90 backdrop-blur-md border-border py-3"
            : "bg-paper/90 backdrop-blur-md border-border py-4 md:bg-transparent md:border-transparent md:backdrop-blur-none md:py-5"
        }`}
      >
        <div className="container px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); scrollToTarget(0); }}
            className="flex items-center gap-3"
          >
            <img
              src="/eb-logo-full.svg"
              alt="Edwin Bernal logo"
              className="h-9 w-9 rounded-full border border-border"
            />
            <span className="font-display text-lg text-ink hidden sm:inline">
              Edwin <span className="font-display-italic text-cobalt">Bernal</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                data-active={activeSection === item.href}
                className={`link-slide text-sm transition-colors ${
                  activeSection === item.href
                    ? "text-ink"
                    : "text-muted-foreground hover:text-ink"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <Magnetic className="hidden md:block" strength={0.25}>
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-editorial-fill px-6 py-2.5 text-sm"
            >
              Get in Touch
            </button>
          </Magnetic>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-ink"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu — full ink takeover */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-4%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-4%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 md:hidden bg-ink text-paper flex flex-col justify-center px-8"
          >
            <motion.nav
              className="flex flex-col gap-2"
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
            >
              {navItems.map((item) => (
                <motion.button
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left py-2"
                >
                  <span className="font-display font-light text-4xl tracking-tight">{item.label}</span>
                </motion.button>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="mt-8"
              >
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="btn-editorial-paper px-8 py-4"
                >
                  Get in Touch
                </button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
