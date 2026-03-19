import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import heroImage from "@/assets/hindeya.jpg";

const Hero = () => {
  return (
    <section className="relative hero-gradient min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-primary-foreground/10 blur-3xl" />
      </div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Humanitarian & Development Leader
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Dr. Hindeya Teame Woldu
            </h1>
            <p className="text-primary-foreground/75 text-lg md:text-xl max-w-xl mb-8 font-body leading-relaxed">
              15+ years driving large-scale humanitarian programs across food security, disaster risk management, and resilience-building — reaching <span className="text-gold font-semibold">800,000+ beneficiaries</span> in complex crisis settings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-gold text-accent-foreground px-8 py-3.5 rounded-lg font-semibold text-sm transition-all hover:brightness-110 hover:shadow-lg"
              >
                <Mail size={18} /> Get In Touch
              </a>
              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-sm transition-all hover:bg-primary-foreground/10"
              >
                View My Work <ArrowDown size={18} />
              </a>
            </div>
          </motion.div>
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-gold/30 blur-xl" />
              <img
                src={heroImage}
                alt="Dr. Hindeya Teame Woldu"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-gold/50 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
