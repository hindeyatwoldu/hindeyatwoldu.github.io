import { motion } from "framer-motion";
import { Mail, Phone, User } from "lucide-react";

const references = [
  {
    name: "Temesgen Adnew",
    title: "Relief & Humanitarian Program Director",
    org: "Food for the Hungry Ethiopia",
    email: "tadnew@fh.org",
    phone: "+251-911-860-535",
  },
  {
    name: "Daniel Tilahun",
    title: "Senior JEOP Program Manager",
    org: "Food for the Hungry Ethiopia",
    email: "dtilahun@fh.org",
    phone: "+251-911-388-791",
  },
  {
    name: "Yikunoamlak Teklebirhan",
    title: "Senior Humanitarian Response Manager",
    org: "CARE Ethiopia",
    email: "yikunotekle21@gmail.com",
    phone: "+251-914-732-083",
  },
];

const References = () => (
  <section id="references" className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2 text-center">
          Professional References
        </h2>
        <div className="w-16 h-1 bg-gold rounded mx-auto mb-12" />
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {references.map((ref, i) => (
          <motion.div
            key={i}
            className="bg-secondary rounded-xl p-6 border border-border hover:shadow-md transition-shadow text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
              <User className="text-gold" size={28} />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-1">{ref.name}</h3>
            <p className="text-gold text-sm font-semibold mb-1">{ref.title}</p>
            <p className="text-muted-foreground text-sm mb-4">{ref.org}</p>
            <div className="space-y-2 text-sm">
              <a
                href={`mailto:${ref.email}`}
                className="flex items-center justify-center gap-2 text-foreground/70 hover:text-primary transition-colors"
              >
                <Mail size={14} /> {ref.email}
              </a>
              <a
                href={`tel:${ref.phone}`}
                className="flex items-center justify-center gap-2 text-foreground/70 hover:text-primary transition-colors"
              >
                <Phone size={14} /> {ref.phone}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default References;
