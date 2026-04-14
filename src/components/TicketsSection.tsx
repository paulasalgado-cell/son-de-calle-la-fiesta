import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "General",
    features: [
      "Acceso a todas las zonas de experiencias",
      "Zona de comidas y food trucks",
      "Baños disponibles en el recinto",
      "Pista de baile central",
    ],
    featured: false,
  },
  {
    name: "VIP",
    features: [
      "Acceso preferencial frente a la tarima",
      "Barras exclusivas de bebidas",
      "Baños premium privados",
      "Zona de descanso privada con sombra",
      "Acceso a todas las zonas generales",
    ],
    featured: true,
  },
];

export default function TicketsSection() {
  return (
    <section id="entradas" className="relative py-20 md:py-28 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <motion.h2
          className="font-heading text-4xl md:text-6xl text-center text-gradient-salsa mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Entradas
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              className={`rounded-2xl p-8 border ${
                t.featured
                  ? "border-salsa-yellow bg-salsa-crimson/20 border-glow-red"
                  : "border-border bg-card"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              {t.featured && (
                <span className="inline-block bg-gradient-gold text-salsa-black text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  Recomendado
                </span>
              )}
              <h3 className="font-heading text-3xl text-foreground mb-6">{t.name}</h3>
              <ul className="space-y-3 mb-8">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-salsa-yellow shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://www.tuboleta.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 rounded-full font-semibold uppercase tracking-wider text-sm transition-transform hover:scale-105 ${
                  t.featured
                    ? "bg-gradient-gold text-salsa-black"
                    : "bg-gradient-salsa text-primary-foreground"
                }`}
              >
                Comprar {t.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
