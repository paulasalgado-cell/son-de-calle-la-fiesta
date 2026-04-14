import { motion } from "framer-motion";
import { UtensilsCrossed, Store, Droplets, Music } from "lucide-react";

const experiences = [
  {
    icon: UtensilsCrossed,
    title: "Zona Gastronómica",
    desc: "Food trucks con variedad de comida local e internacional. Desde empanadas hasta tacos, para todos los gustos.",
  },
  {
    icon: Store,
    title: "Zona de Emprendimiento",
    desc: "Mercado artesanal y de discos de vinilo. Llévate un pedazo de la cultura salsera a casa.",
  },
  {
    icon: Droplets,
    title: "Barras de Hidratación",
    desc: "Puntos de venta de bebidas y zonas de descanso con sombra para recargar energías.",
  },
  {
    icon: Music,
    title: "Pista de Baile",
    desc: "Área central frente a la tarima principal. El corazón del festival donde la salsa cobra vida.",
  },
];

export default function ExperienciasSection() {
  return (
    <section id="experiencias" className="py-20 md:py-28 bg-salsa-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="font-heading text-4xl md:text-6xl text-center text-gradient-salsa mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experiencias
        </motion.h2>
        <motion.p
          className="text-center text-muted-foreground mb-14 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Más que un concierto, una fiesta completa
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((e, i) => (
            <motion.div
              key={e.title}
              className="bg-card border border-border rounded-2xl p-6 hover:border-salsa-yellow/40 transition-colors group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="w-14 h-14 rounded-xl bg-salsa-red/20 flex items-center justify-center mb-4 group-hover:bg-salsa-red/40 transition-colors">
                <e.icon className="text-salsa-yellow" size={28} />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">{e.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
