import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { Reveal, EASE_OUT } from "./motion/Reveal";
import SectionHeader from "./SectionHeader";

interface Experience {
  title: string;
  role: string;
  period: string;
  description: string;
  logo?: string;
}

const experiences: Experience[] = [
  {
    title: "Microsoft",
    logo: "/logos/microsoft.png",
    role: "Software QA Intern",
    period: "Feb - May 2025",
    description: "Worked on testing and debugging code to ensure functionality, performance, and reliability across multiple projects. Collaborated with developers to identify issues, revise code, and improve overall software quality. Gained hands-on experience with version control, test automation, and agile development practices.",
  },
  {
    title: "Cafe Brazil, LLC",
    logo: "/logos/cafe-brazil.png",
    role: "Cafe Server",
    period: "May - June 2025",
    description: "Delivered exceptional customer service in a fast-paced, high-volume restaurant environment. Took and processed orders efficiently, collaborated with kitchen staff to enhance dining experience.",
  },
  {
    title: "East Texas A&M University",
    logo: "/logos/etamu.png",
    role: "Lion Ambassador",
    period: "Aug 2024 - May 2025",
    description: "Served as a student leader representing the university at various events. Provided campus tours, engaged with prospective students, and promoted the university's values and mission.",
  },
  {
    title: "Proyecto Inmigrante",
    logo: "/logos/proyecto-inmigrante.png",
    role: "Assistant Consultant",
    period: "Feb 2021 - Apr 2023",
    description: "Provided legal assistance to clients seeking U.S. citizenship, specializing in N-600 applications and immigration documentation. Managed 10-20 client cases daily, trained and mentored individuals on the citizenship application process.",
  },
  {
    title: "Project Transformation",
    logo: "/logos/project-transformation.png",
    role: "Teacher (Lite)",
    period: "Jun 2020 - Aug 2023",
    description: "Designed and implemented customized lesson plans for students aged 5-12, focusing on literacy, leadership, and personal development. Provided mentorship and academic support to high school freshmen.",
  },
  {
    title: "Raising Cane's Chicken Fingers",
    logo: "/logos/raising-canes.png",
    role: "Cashier / Customer Service",
    period: "May - Aug 2024",
    description: "Delivered exceptional customer service in a high-volume, fast-paced environment. Managed cash handling and order fulfillment while maintaining efficiency and accuracy.",
  },
  {
    title: "Levines Dept Store",
    logo: "/logos/levines.png",
    role: "Cashier",
    period: "Jun - Aug 2024",
    description: "Managed high-volume transactions while delivering outstanding customer service. Handled large crowds and seasonal rushes, demonstrating adaptability under pressure.",
  },
];

const TimelineSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 65%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="experience" className="py-14 md:py-20 relative bg-muted/40">
      <div className="container px-6">
        <SectionHeader
          number="02"
          eyebrow="Career Journey"
          title="Professional Experience"
          accentWord="Experience"
          description="A timeline of growth, learning, and impactful contributions."
        />

        <div ref={timelineRef} className="relative max-w-4xl">
          {/* Spine, drawn in on scroll */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
          <motion.div
            style={reduceMotion ? undefined : { scaleY: lineScale }}
            className="absolute left-0 top-0 bottom-0 w-px origin-top bg-cobalt"
          />

          {experiences.map((exp, index) => (
            <motion.article
              key={index}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: EASE_OUT }}
              className="relative pl-10 md:pl-16 pb-14 last:pb-0 group"
            >
              {/* Node */}
              <motion.span
                initial={reduceMotion ? undefined : { scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: 0.15, type: "spring", stiffness: 300, damping: 18 }}
                className="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-cobalt border-2 border-background"
              />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-2">
                <div className="md:col-span-3 flex md:flex-col items-center md:items-start gap-4 md:gap-3">
                  <span className="eyebrow text-cobalt">{exp.period}</span>
                  {exp.logo && (
                    <img
                      src={exp.logo}
                      alt={`${exp.title} logo`}
                      loading="lazy"
                      className="h-12 w-12 object-contain flex-shrink-0"
                    />
                  )}
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-display font-light text-3xl md:text-4xl text-ink tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    {exp.title}
                  </h3>
                  <p className="font-display-italic text-lg text-muted-foreground mt-1 mb-3">
                    {exp.role}
                  </p>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <Reveal className="rule mt-16" delay={0.1}>
          <span className="sr-only">End of timeline</span>
        </Reveal>
      </div>
    </section>
  );
};

export default TimelineSection;
