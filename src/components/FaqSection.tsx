import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Cuál es la edad mínima para ingresar?",
    a: "La edad mínima de ingreso es de 18 años. Se solicitará documento de identidad en la entrada.",
  },
  {
    q: "¿Hay parqueadero disponible?",
    a: "Sí, hay parqueaderos en zonas aledañas al parque, pero el cupo es limitado. Se recomienda usar transporte público (Transmilenio, Estación Calle 127).",
  },
  {
    q: "¿Se puede ingresar comida o bebidas?",
    a: "No se permite el ingreso de alimentos ni bebidas. El festival cuenta con una amplia zona gastronómica con food trucks y barras de hidratación.",
  },
  {
    q: "¿Qué pasa si llueve?",
    a: "El evento se realiza bajo cualquier condición climática. Se recomienda llevar impermeable (no se permiten paraguas por seguridad).",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-salsa-black">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2
          className="font-heading text-4xl md:text-6xl text-center text-gradient-salsa mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Preguntas Frecuentes
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-xl px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-body font-semibold text-foreground hover:text-salsa-yellow transition-colors">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
