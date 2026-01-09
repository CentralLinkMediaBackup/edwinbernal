import { motion } from "framer-motion";
import { GraduationCap, Award, Languages, BookOpen, Scale } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-blue mb-4 inline-block">Academic Journey</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="text-gradient-blue">Certifications</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* University */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card-hover p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 glow-blue">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  East Texas A&M University
                </h3>
                <p className="text-primary text-sm">2024 - Present</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <BookOpen className="h-5 w-5 text-secondary mt-0.5" />
                <div>
                  <p className="text-foreground font-medium">Major</p>
                  <p className="text-muted-foreground text-sm">Finance (Sales) & Political Science</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Scale className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-foreground font-medium">Minor</p>
                  <p className="text-muted-foreground text-sm">Legal Studies & Elementary Education</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* High School */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card-hover p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-secondary/10 glow-gold">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Judge Barefoot Sanders Law Magnet
                </h3>
                <p className="text-secondary text-sm">Dallas, TX • 2021 - 2024</p>
              </div>
            </div>
            
            <div className="glass-card p-4">
              <div className="flex items-center gap-3">
                <div className="text-3xl font-bold text-gradient-gold">#85</div>
                <div>
                  <p className="text-foreground font-medium">Nationwide Ranking</p>
                  <p className="text-muted-foreground text-sm">Selective Law Magnet Program</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card-hover p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                Certifications
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <span className="badge-blue">Food Handling</span>
              <span className="badge-gold">Business Management</span>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card-hover p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-secondary/10">
                <Languages className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                Languages
              </h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-foreground font-medium">English</span>
                  <span className="text-secondary text-sm">Native</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-primary to-secondary rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-foreground font-medium">Spanish</span>
                  <span className="text-secondary text-sm">Native</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-primary to-secondary rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-foreground font-medium">French</span>
                  <span className="text-primary text-sm">Beginner</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-1/4 bg-gradient-to-r from-primary to-electric-glow rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
