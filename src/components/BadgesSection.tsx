import { motion } from "framer-motion";
import { Award, Users, Scale, Globe, Mic, Building, Star, GraduationCap, TrendingUp, Crown, Heart, BookOpen } from "lucide-react";

const badges = [
  { title: "Mock Trial President", subtitle: "ETAMU", icon: Scale },
  { title: "Model UN President", subtitle: "Leadership", icon: Globe },
  { title: "Debate Team President", subtitle: "ETAMU", icon: Mic },
  { title: "Moot Court President", subtitle: "ETAMU", icon: Scale },
  { title: "College of Business Senator", subtitle: "Student Government", icon: Building },
  { title: "Pi Sigma Alpha Honor Society", subtitle: "Member & Leader", icon: Award },
  { title: "Sigma Chi Fraternity", subtitle: "ΣΧ Brother", icon: Users },
  { title: "ETAMU Lion Ambassador", subtitle: "Campus Representative", icon: Crown },
  { title: "Future Leaders of America", subtitle: "Member", icon: Star },
  { title: "Project Transformation", subtitle: "Best Lite (3x Winner)", icon: Heart },
];

const honorsAwards = [
  { title: "Best Lite Award", subtitle: "3 Consecutive Years" },
  { title: "Congressional Recognition", subtitle: "Presented by Judge Carl Ginsberg" },
  { title: "ESUME Entrepreneur Scholarship", subtitle: "Scholarship Recipient" },
];

const BadgesSection = () => {
  return (
    <section id="leadership" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-gold mb-4 inline-block">Recognition</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Leadership & <span className="text-gradient-gold">Extracurriculars</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Positions of leadership and organizations that have shaped my journey.
          </p>
        </motion.div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card-hover p-4 text-center group cursor-default"
            >
              <div className="relative mx-auto w-14 h-14 mb-3">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl rotate-6 group-hover:rotate-12 transition-transform" />
                <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                  <badge.icon className="h-7 w-7 text-secondary group-hover:text-primary transition-colors" />
                </div>
              </div>
              <h3 className="font-display text-sm font-bold text-foreground mb-1 leading-tight">
                {badge.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {badge.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Honors & Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h3 className="text-center font-display text-2xl font-bold mb-8">
            Honors & <span className="text-gradient-blue">Awards</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {honorsAwards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <Award className="h-8 w-8 text-secondary mx-auto mb-3" />
                <h4 className="font-display font-bold text-foreground mb-1">{award.title}</h4>
                <p className="text-sm text-muted-foreground">{award.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Publication */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="glass-card-hover p-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="badge-blue">Publication</span>
            </div>
            <p className="text-foreground font-medium italic">
              "Poison or Cure? Comparison Among Students and its effect on Mental Health"
            </p>
          </div>
        </motion.div>

        {/* Marquee Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 overflow-hidden"
        >
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            
            <div className="flex ticker-scroll">
              {[...badges, ...badges].map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 mx-2 glass-card whitespace-nowrap flex-shrink-0"
                >
                  <badge.icon className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span className="text-sm text-foreground font-medium">{badge.title}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BadgesSection;
