import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Users, Coffee, ShoppingBag, Monitor, UtensilsCrossed } from "lucide-react";

const experiences = [
  {
    title: "Microsoft",
    role: "Software QA Intern",
    period: "Feb - May 2025",
    description: "Worked on testing and debugging code to ensure functionality, performance, and reliability across multiple projects. Collaborated with developers to identify issues, revise code, and improve overall software quality. Gained hands-on experience with version control, test automation, and agile development practices.",
    icon: Monitor,
    color: "primary" as const,
  },
  {
    title: "Cafe Brazil, LLC",
    role: "Cafe Server",
    period: "May - June 2025",
    description: "Delivered exceptional customer service in a fast-paced, high-volume restaurant environment. Took and processed orders efficiently, collaborated with kitchen staff to enhance dining experience.",
    icon: UtensilsCrossed,
    color: "secondary" as const,
  },
  {
    title: "East Texas A&M University",
    role: "Lion Ambassador",
    period: "Aug 2024 - May 2025",
    description: "Served as a student leader representing the university at various events. Provided campus tours, engaged with prospective students, and promoted the university's values and mission.",
    icon: GraduationCap,
    color: "primary" as const,
  },
  {
    title: "Proyecto Inmigrante",
    role: "Assistant Consultant",
    period: "Feb 2021 - Apr 2023",
    description: "Provided legal assistance to clients seeking U.S. citizenship, specializing in N-600 applications and immigration documentation. Managed 10-20 client cases daily, trained and mentored individuals on the citizenship application process.",
    icon: Users,
    color: "secondary" as const,
  },
  {
    title: "Project Transformation",
    role: "Teacher (Lite)",
    period: "Jun 2020 - Aug 2023",
    description: "Designed and implemented customized lesson plans for students aged 5-12, focusing on literacy, leadership, and personal development. Provided mentorship and academic support to high school freshmen.",
    icon: GraduationCap,
    color: "primary" as const,
  },
  {
    title: "Raising Cane's Chicken Fingers",
    role: "Cashier / Customer Service",
    period: "May - Aug 2024",
    description: "Delivered exceptional customer service in a high-volume, fast-paced environment. Managed cash handling and order fulfillment while maintaining efficiency and accuracy.",
    icon: Coffee,
    color: "secondary" as const,
  },
  {
    title: "Levines Dept Store",
    role: "Cashier",
    period: "Jun - Aug 2024",
    description: "Managed high-volume transactions while delivering outstanding customer service. Handled large crowds and seasonal rushes, demonstrating adaptability under pressure.",
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
