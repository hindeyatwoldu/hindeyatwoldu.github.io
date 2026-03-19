import { motion } from "framer-motion";
import { FileText, BookOpen, ClipboardList, Radio, FlaskConical, Users } from "lucide-react";

const publications = [
  { icon: FileText, text: "Produced quarterly, semi-annual, and annual reports for USAID, EU, WFP, and NGO-funded programs" },
  { icon: ClipboardList, text: "Led baseline and endline surveys for food security and livelihoods programs using Kobo and ODK" },
  { icon: BookOpen, text: "Contributed to policy briefs on livestock recovery, market systems development, and DRR" },
  { icon: Radio, text: "Authored technical updates and situation reports for 20 woredas" },
  { icon: FlaskConical, text: "Research: \"Skin Diseases and Their Effect on Hide Downgrading in Sheba Tannery\" — Mekelle University, 2010" },
  { icon: Users, text: "Provided technical inputs to Food Security Cluster and JEOP consortium reports" },
];

const Publications = () => (
  <section id="publications" className="py-20 section-alt">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2 text-center">Publications & Reports</h2>
        <div className="w-16 h-1 bg-gold rounded mx-auto mb-12" />
      </motion.div>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {publications.map((p, i) => (
          <motion.div
            key={i}
            className="flex gap-4 bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <p.icon className="text-gold flex-shrink-0 mt-1" size={22} />
            <p className="text-foreground/80 text-sm leading-relaxed">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Publications;
