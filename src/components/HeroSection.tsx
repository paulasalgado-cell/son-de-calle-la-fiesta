import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import pattern from "@/assets/pattern-salsa.jpg";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Pattern background */}
      <div className="absolute inset-0">
        <img
          src={pattern}
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-salsa-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <motion.img
          src={logo}
          alt="Son de Calle"
          className="mx-auto h-28 md:h-44 invert mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        <motion.p
          className="font-body text-salsa-yellow text-base md:text-lg italic mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Aquí no se camina... Aquí se baila.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 text-foreground/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <span className="flex items-center gap-2 text-sm md:text-base">
            <CalendarDays size={18} className="text-salsa-yellow" />
            Sábado, 21 de noviembre de 2026
          </span>
          <span className="hidden sm:inline text-salsa-red">•</span>
          <span className="flex items-center gap-2 text-sm md:text-base">
            <MapPin size={18} className="text-salsa-yellow" />
            Parque el Country, Bogotá
          </span>
        </motion.div>

        <motion.a
          href="https://www.tuboleta.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-salsa text-primary-foreground px-10 py-4 rounded-full text-lg font-bold uppercase tracking-wider hover:scale-105 transition-transform border-glow-red"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Comprar Entradas
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-salsa-yellow rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
