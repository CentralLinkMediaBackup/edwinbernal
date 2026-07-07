import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Magnetic from "./motion/Magnetic";

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
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="container px-6">
          <div className={`glass-card px-6 py-3 flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "shadow-lg" : ""
          }`}>
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-3 font-display text-xl font-bold"
            >
              <img
                src="/eb-logo-full.svg"
                alt="Edwin Bernal logo"
                className="h-9 w-9 rounded-lg"
              />
              <span className="hidden sm:inline">
                <span className="text-gradient-gold">Edwin</span>{" "}
                <span className="text-foreground">Bernal</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  data-active={activeSection === item.href}
                  className={`link-underline px-4 py-2 text-sm transition-colors rounded-lg hover:bg-muted/50 ${
                    activeSection === item.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <Magnetic className="hidden md:block" strength={0.25}>
              <Button
                size="sm"
                className="bg-gradient-to-r from-primary to-electric-glow text-primary-foreground hover:opacity-90"
                onClick={() => handleNavClick("#contact")}
              >
                Get in Touch
              </Button>
            </Magnetic>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="absolute top-24 left-6 right-6 glass-card p-6">
              <motion.div
                className="flex flex-col gap-2"
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
              >
                {navItems.map((item) => (
                  <motion.button
                    key={item.label}
                    variants={{
                      hidden: { opacity: 0, x: -12 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    onClick={() => handleNavClick(item.href)}
                    className="px-4 py-3 text-left text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <Button
                  className="mt-4 bg-gradient-to-r from-primary to-electric-glow text-primary-foreground"
                  onClick={() => handleNavClick("#contact")}
                >
                  Get in Touch
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
