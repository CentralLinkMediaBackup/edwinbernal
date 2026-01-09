import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Users, Coffee, ShoppingBag, Monitor } from "lucide-react";

const experiences = [
  {
    title: "Microsoft",
    role: "Operation Assistant Intern - Sales Closer",
    period: "Recent",
    description: "Listed as Sales Closer, contributing to operations and business development.",
    icon: Monitor,
    color: "primary" as const,
  },
  {
    title: "Proyecto Inmigrante",
    role: "Assistant Consultant",
    period: "2021 - 2023",
    description: "Assisted clients with obtaining citizenship and developed/filed N-600 applications. Trained individuals to fill out citizenship applications, handling 10-20 clients daily.",
    icon: Users,
    color: "secondary" as const,
  },
  {
    title: "Project Transformation",
    role: "Teacher / Mentor",
    period: "2020 - 2023",
    description: "Taught over 20 students aged 5-12, developed learning plans, and mentored high school freshmen.",
    icon: GraduationCap,
    color: "primary" as const,
  },
  {
    title: "Raising Cane's x Cowboys (Post Malone)",
    role: "Cashier / Customer Service",
    period: "2024",
    description: "Managed cashier responsibilities, customer greetings, and order delivery. Maintained cleanliness and supplies, ensuring exceptional service.",
    icon: Coffee,
    color: "secondary" as const,
  },
  {
    title: "Levines",
    role: "Cashier",
    period: "2024",
    description: "Handled cashier duties, greeted customers, and managed large crowds with professionalism.",
    icon: ShoppingBag,
    color: "primary" as const,
  },
];

const TimelineSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-blue mb-4 inline-block">Career Journey</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient-blue">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A timeline of growth, learning, and impactful contributions.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <div className="timeline-dot" />
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "md:pr-8" : "md:pl-8"
              }`}>
                <div className="glass-card-hover p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${
                      exp.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                    }`}>
                      <exp.icon className={`h-5 w-5 ${
                        exp.color === "primary" ? "text-primary" : "text-secondary"
                      }`} />
                    </div>
                    <span className={`text-xs font-medium ${
                      exp.color === "primary" ? "text-primary" : "text-secondary"
                    }`}>
                      {exp.period}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className={`text-sm font-medium mb-3 ${
                    exp.color === "primary" ? "text-primary" : "text-secondary"
                  }`}>
                    {exp.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
