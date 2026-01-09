import { motion } from "framer-motion";
import { Heart, Clock, Users, Gift } from "lucide-react";

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[150px]" />
      
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-gold mb-4 inline-block">Giving Back</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Community <span className="text-gradient-gold">Impact</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Service to others has always been at the heart of my journey.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Light Program */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card-hover p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-[60px]" />
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-secondary/10">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Light Program
                </h3>
              </div>
              
              <div className="glass-card p-4 mb-6">
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <span className="text-4xl font-bold text-gradient-gold">960</span>
                    <span className="text-muted-foreground ml-2">hours</span>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Cared for toddlers in a church setting, providing a safe and nurturing 
                environment for young children while supporting families in the community.
              </p>
            </div>
          </motion.div>

          {/* Proyecto Inmigrante Volunteer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card-hover p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px]" />
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Proyecto Inmigrante
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm">
                    Assisted with informational drives on Sundays, helping community 
                    members access vital resources
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Gift className="h-5 w-5 text-secondary flex-shrink-0" />
                  <p className="text-muted-foreground text-sm">
                    Volunteered during Christmas and Thanksgiving, helping feed 
                    homeless and low-income families
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
