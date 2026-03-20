import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    org: "Food for the Hungry Ethiopia",
    role: "Area Program Manager",
    years: "2023 – Present",
    highlights: [
      "Directed cash transfer programming exceeding 250 million Birr targeting vulnerable households",
      "Led multi-sectoral food security and resilience programs in collaboration with government and partners",
      "Introduced digital tools (GIS, Smartsheet, Odoo) to improve program monitoring and accountability",
      "Supervised multidisciplinary teams and ensured gender-sensitive programming",
      "Reached over 871,053 shareholders in Adet woreda",
      "Supervised 163 staff with $5.3M annual budget",
    ],
  },
  {
    org: "CARE Ethiopia",
    role: "Emergency Livelihoods & Livestock/Crop Team Leader",
    years: "2021 – 2023",
    highlights: [
      "Led livelihood recovery interventions in conflict-affected areas, supporting over 120,000 households with emergency food security and resilience measures",
      "Implemented voucher-based livestock health systems, enabling 45,000 farmers and pastoralists to access veterinary services",
      "Strengthened market systems and resilience programming, improving income for 30,000 smallholder farmers through value chain development",
      "9,521 households supported and their livestock restored",
    ],
  },
  {
    org: "CARE Ethiopia",
    role: "Zonal Early Warning Coordinator",
    years: "March – November 2023",
    highlights: [
      "Coordinated early warning systems across 20 woredas, enabling timely alerts reaching over 1.2 million people",
      "Strengthened community-based monitoring and reporting systems, resulting in 40% increase in accuracy and speed of data collection",
      "Facilitated coordination between local and national actors, ensuring rapid mobilization of assistance to 250,000 households",
      "Enabled early response actions that prevented widespread food insecurity escalation and reduced displacement risk",
    ],
  },
  {
    org: "Relief Society of Tigray (REST)",
    role: "Livelihoods & Food Security Coordinator",
    years: "2018 – 2021",
    highlights: [
      "Managed multi-million-birr cash transfers and food distribution (USAID, EU, GAC funded)",
      "Led livestock and crop recovery initiatives under EU humanitarian support",
      "Coordinated multi-sectoral refugee self-reliance interventions with UN agencies",
      "Implemented livestock, aquaculture, and value chain development programs",
      "Delivered evidence-based reports aligned with USAID and EU donor standards",
    ],
  },
  {
    org: "Government of Ethiopia",
    role: "Agriculture & Rural Development Office Head",
    years: "2014 – 2018",
    highlights: [
      "Directed woreda-level agricultural and food security programs",
      "Led integrated rural development planning and implementation",
    ],
  },
  {
    org: "Government of Ethiopia",
    role: "Coordinator, Livestock & Fisheries Development",
    years: "2010 – 2014",
    highlights: [
      "Led livestock health programs, vaccination campaigns, and fisheries development initiatives",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2 text-center">Professional Experience</h2>
        <div className="w-16 h-1 bg-gold rounded mx-auto mb-12" />
      </motion.div>
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border" />
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="relative pl-12 md:pl-20 pb-12 last:pb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full bg-gold border-4 border-card shadow" />
            <div className="bg-secondary rounded-xl p-6 md:p-8 border border-border hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-gold font-semibold flex items-center gap-2">
                    <Briefcase size={16} /> {exp.org}
                  </p>
                </div>
                <span className="text-muted-foreground text-sm font-medium mt-1 md:mt-0 bg-muted px-3 py-1 rounded-full w-fit">
                  {exp.years}
                </span>
              </div>
              <ul className="space-y-2 mt-4">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="text-foreground/75 text-sm flex gap-2">
                    <span className="text-gold mt-1.5 flex-shrink-0">●</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
