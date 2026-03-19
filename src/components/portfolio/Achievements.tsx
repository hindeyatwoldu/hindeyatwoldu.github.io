import { motion } from "framer-motion";
import { TrendingUp, Award, ShieldCheck, Target } from "lucide-react";

const achievements = [
  {
    icon: TrendingUp,
    title: "Program Leadership & Donor Compliance",
    description: "Successfully managed multi-million-dollar food distribution, multipurpose cash transfer, and food security programs funded by USAID, EU, and WFP. Ensured full donor compliance and transparent reporting.",
  },
  {
    icon: ShieldCheck,
    title: "Emergency Response & Livelihoods Recovery",
    description: "Led livestock and livelihoods emergency interventions in conflict-affected Tigray, including voucher-based animal health service delivery, directly benefiting thousands of households.",
  },
  {
    icon: Target,
    title: "Early Warning & Disaster Preparedness",
    description: "Established and strengthened community-based early warning systems across Eastern Tigray, producing actionable reports that informed disaster risk mitigation strategies.",
  },
  {
    icon: Award,
    title: "Capacity Building & Institutional Strengthening",
    description: "Trained staff and local partners on RBM principles, safeguarding, and gender-sensitive monitoring, strengthening accountability mechanisms in conflict-affected contexts.",
  },
];

const Achievements = () => (
  <section id="achievements" className="py-20 section-alt">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2 text-center">Key Achievements</h2>
        <div className="w-16 h-1 bg-gold rounded mx-auto mb-12" />
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <a.icon className="text-gold mb-4" size={36} />
            <h3 className="font-display text-xl font-bold text-foreground mb-3">{a.title}</h3>
            <p className="text-foreground/70 leading-relaxed text-sm">{a.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
