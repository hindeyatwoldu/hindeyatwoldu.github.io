import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">Professional Profile</h2>
        <div className="w-16 h-1 bg-gold rounded mb-8" />
        <p className="text-foreground/80 text-lg leading-relaxed mb-6">
          Senior humanitarian and development leader with <span className="font-semibold text-foreground">15+ years of experience</span> driving large-scale programs in economic recovery, market systems development, disaster risk management, food security, and emergency response. Proven expertise in program coordination, gender equality, social and financial inclusion, and resilience-building in conflict-affected contexts.
        </p>
        <p className="text-foreground/80 text-lg leading-relaxed">
          Also, a veterinary professional and manager (DVM) with extensive experience in livestock recovery, animal health systems, and veterinary service delivery within development and emergency projects. Skilled in voucher-based animal health programs, vaccination campaigns, and value chain strengthening that enhance community resilience and food security.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { num: "15+", label: "Years Experience" },
            { num: "871K+", label: "Beneficiaries Reached" },
            { num: "$5.3M", label: "Annual Budget Managed" },
            { num: "163", label: "Staff Supervised" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-lg bg-secondary">
              <div className="font-display text-3xl font-bold text-gold">{stat.num}</div>
              <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
