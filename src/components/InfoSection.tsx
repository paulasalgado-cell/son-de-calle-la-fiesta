import { motion } from "framer-motion";
import { Clock, MapPin, Bus, Car } from "lucide-react";

export default function InfoSection() {
  return (
    <section id="info" className="py-20 md:py-28 bg-gradient-to-b from-salsa-black to-salsa-crimson/20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="font-heading text-4xl md:text-6xl text-center text-gradient-salsa mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Información Práctica
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Details */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-4">
              <Clock className="text-salsa-yellow shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-heading text-xl text-foreground">Horario</h3>
                <p className="text-muted-foreground">12:00 PM — 10:00 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-salsa-yellow shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-heading text-xl text-foreground">Ubicación</h3>
                <p className="text-muted-foreground">
                  Parque el Country<br />
                  Ac 127 #11d-90, Bogotá
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Bus className="text-salsa-yellow shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-heading text-xl text-foreground">Transporte Público</h3>
                <p className="text-muted-foreground">
                  Transmilenio — Estación Calle 127. Desde allí, 5 minutos caminando.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Car className="text-salsa-yellow shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-heading text-xl text-foreground">Parqueaderos</h3>
                <p className="text-muted-foreground">
                  Parqueaderos disponibles en zonas aledañas al parque. Cupo limitado, se recomienda transporte público.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="rounded-xl overflow-hidden border border-border h-80 md:h-full min-h-[320px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              title="Parque el Country"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.525!2d-74.0527!3d4.7064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f854e5d06af09%3A0x9b3e13e60ad1aee3!2sParque%20El%20Country!5e0!3m2!1ses!2sco!4v1!5m2!1ses!2sco"
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
