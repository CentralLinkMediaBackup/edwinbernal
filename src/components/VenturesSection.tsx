import { motion } from "framer-motion";
import { Building2, Users, FileCheck, Briefcase, DollarSign, Shield } from "lucide-react";

const VenturesSection = () => {
  return (
    <section id="ventures" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-gold mb-4 inline-block">Current Leadership</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient-gold">Ventures</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Leading organizations and building businesses that create real impact.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Central Link Media - Large Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card-hover p-8 lg:row-span-1"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 rounded-xl bg-secondary/10 glow-gold">
                <Building2 className="h-8 w-8 text-secondary" />
              </div>
              <span className="badge-gold text-xs">2025 - Present</span>
            </div>
            
            <h3 className="font-display text-2xl font-bold mb-2 text-foreground">
              Central Link Media, LLC
            </h3>
            <p className="text-primary font-medium mb-4">President / Co-Founder</p>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              My business founded to aid small companies in obtaining affordable websites 
              and social media presence. Empowering businesses with digital solutions.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  <span className="text-3xl font-bold text-gradient-blue">11</span>
                </div>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <FileCheck className="h-5 w-5 text-secondary mr-2" />
                  <span className="text-3xl font-bold text-gradient-gold">16</span>
                </div>
                <p className="text-sm text-muted-foreground">Secured Contracts</p>
              </div>
            </div>
          </motion.div>

          {/* Prosperity Fire Protection */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card-hover p-8"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 rounded-xl bg-primary/10 glow-blue">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <span className="badge-blue text-xs">2025 - Present</span>
            </div>
            
            <h3 className="font-display text-2xl font-bold mb-2 text-foreground">
              Prosperity Fire Protection
            </h3>
            <p className="text-secondary font-medium mb-4">Executive Project Manager</p>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Oversee and coordinate executive operations, ensuring seamless communication 
              between leadership, clients, and project teams.
            </p>

            {/* Key Duties */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Briefcase className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Manage high-priority schedules, contracts, and compliance documentation
                </p>
              </div>
              <div className="flex items-start gap-3">
                <DollarSign className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Support financial planning, budget oversight, invoicing, and expense tracking
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VenturesSection;
