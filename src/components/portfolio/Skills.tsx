import { motion } from "framer-motion";

const categories = [
  {
    title: "Program Management",
    skills: ["Humanitarian Program Design", "Cash & Voucher Assistance", "Food Security Programming", "Emergency Response Coordination", "Donor Compliance (USAID, WFP, EU)", "Budget Management ($5M+)", "Multi-Sectoral Coordination"],
  },
  {
    title: "Digital Tools",
    skills: ["GIS Mapping", "Smartsheet", "Odoo ERP", "Mobile Data Collection (Kobo, ODK)", "World-Link 3", "MIS Platforms", "ComCare"],
  },
  {
    title: "Data & Systems",
    skills: ["MEAL Frameworks", "Results-Based Management", "Baseline/Endline Surveys", "Early Warning Systems", "Log Frames & SMART Indicators", "Evidence-Based Reporting"],
  },
];

const Skills = () => (
  <section id="skills" className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2 text-center">Skills & Tools</h2>
        <div className="w-16 h-1 bg-gold rounded mx-auto mb-12" />
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            className="bg-secondary rounded-xl p-6 border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <h3 className="font-display text-lg font-bold text-foreground mb-4 pb-3 border-b border-gold/30">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span key={s} className="text-xs font-medium px-3 py-1.5 rounded-full bg-card text-foreground/80 border border-border">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
