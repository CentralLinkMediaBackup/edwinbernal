import { motion } from "framer-motion";
import { Building2, Users, FileCheck, Briefcase, DollarSign, Shield, Instagram, Globe, TrendingUp } from "lucide-react";

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Central Link Media - Large Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card-hover p-8 lg:col-span-2"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 rounded-xl bg-secondary/10 glow-gold">
                <Building2 className="h-8 w-8 text-secondary" />
              </div>
              <span className="badge-gold text-xs">Nov 2025 - Present</span>
            </div>
            
            <h3 className="font-display text-2xl font-bold mb-2 text-foreground">
              Central Link Media, LLC
            </h3>
            <p className="text-primary font-medium mb-4">Founder & CEO</p>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              As the Founder & CEO of CentralLink Media, I provide executive leadership and strategic direction 
              for a digital marketing agency focused on delivering high-quality, results-driven solutions for 
              small and mid-sized businesses. Services include web design, brand development, social media 
              management, SEO, and digital analytics.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                  <span className="text-3xl font-bold text-gradient-gold">16+</span>
                </div>
                <p className="text-sm text-muted-foreground">Secured Contracts</p>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Globe className="h-5 w-5 text-primary mr-2" />
                  <span className="text-3xl font-bold text-gradient-blue">3</span>
                </div>
                <p className="text-sm text-muted-foreground">Day Delivery</p>
              </div>
            </div>
          </motion.div>

          {/* Instagram Influencer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-card-hover p-8"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                <Instagram className="h-8 w-8 text-pink-400" />
              </div>
              <span className="badge-blue text-xs">Oct 2025 - Present</span>
            </div>
            
            <h3 className="font-display text-xl font-bold mb-2 text-foreground">
              @edwinbernal.tx
            </h3>
            <p className="text-pink-400 font-medium mb-4">Business Influencer</p>
            
            <div className="space-y-4">
              <div className="glass-card p-3 text-center">
                <span className="text-2xl font-bold text-gradient-gold">53K+</span>
                <p className="text-xs text-muted-foreground">Followers</p>
              </div>
              <div className="glass-card p-3 text-center">
                <span className="text-2xl font-bold text-gradient-blue">1M+</span>
                <p className="text-xs text-muted-foreground">Monthly Impressions</p>
              </div>
            </div>
          </motion.div>

          {/* Prosperity Fire Protection */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card-hover p-8 lg:col-span-2"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 rounded-xl bg-primary/10 glow-blue">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <span className="badge-blue text-xs">July 2025 - Present</span>
            </div>
            
            <h3 className="font-display text-2xl font-bold mb-2 text-foreground">
              Prosperity Fire Protection
            </h3>
            <p className="text-secondary font-medium mb-4">Project Manager</p>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Leading fire protection projects from inception to completion, coordinating with clients, 
              contractors, and teams to ensure timely delivery. Managing project schedules, budgets, 
              and resources while ensuring compliance with safety regulations and quality standards.
            </p>

            {/* Key Duties */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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

          {/* Sterling Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="glass-card-hover p-8"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 rounded-xl bg-secondary/10">
                <TrendingUp className="h-8 w-8 text-secondary" />
              </div>
              <span className="badge-gold text-xs">Jan - Nov 2025</span>
            </div>
            
            <h3 className="font-display text-xl font-bold mb-2 text-foreground">
              Sterling Social Web Services
            </h3>
            <p className="text-primary font-medium mb-4">Founder</p>
            
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Dallas-based digital solutions company helping small businesses grow their online 
              presence with affordable, high-quality website design and digital branding services.
            </p>
            
            <div className="glass-card p-3 text-center">
              <span className="text-xl font-bold text-gradient-gold">$100K</span>
              <p className="text-xs text-muted-foreground">Revenue in 8 Months</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VenturesSection;
