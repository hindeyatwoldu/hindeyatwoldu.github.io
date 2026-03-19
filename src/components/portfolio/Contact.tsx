import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, GraduationCap } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-20 hero-gradient">
    <div className="container mx-auto px-4">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-2">Get In Touch</h2>
        <div className="w-16 h-1 bg-gold rounded mx-auto mb-8" />
        <p className="text-primary-foreground/70 text-lg mb-10">
          Open to consulting, advisory, and leadership opportunities in humanitarian and development sectors.
        </p>
        <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
          <a
            href="mailto:hindeyateame@gmail.com"
            className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-5 text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
          >
            <Mail className="text-gold" size={22} />
            <div className="text-left">
              <div className="text-xs text-primary-foreground/60">Email</div>
              <div className="text-sm font-medium">hindeyateame@gmail.com</div>
            </div>
          </a>
          <a
            href="tel:+251914198040"
            className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-5 text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
          >
            <Phone className="text-gold" size={22} />
            <div className="text-left">
              <div className="text-xs text-primary-foreground/60">Phone</div>
              <div className="text-sm font-medium">+251 914 198 040</div>
            </div>
          </a>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.linkedin.com/in/dr-hindeya-teame-9b2a5a375"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gold text-accent-foreground px-8 py-3.5 rounded-lg font-semibold text-sm transition-all hover:brightness-110"
          >
            <Linkedin size={18} /> Connect on LinkedIn
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-primary-foreground/50 text-sm">
            <div className="flex items-center gap-2">
              <GraduationCap size={16} />
              MBA, Lead Star University · DVM, Mekelle University
            </div>
          </div>
          <p className="text-primary-foreground/30 text-xs mt-6">
            © {new Date().getFullYear()} Dr. Hindeya Teame Woldu. All rights reserved.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Contact;
