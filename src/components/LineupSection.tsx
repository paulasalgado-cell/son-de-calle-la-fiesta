import { motion } from "framer-motion";
import grupoNiche from "@/assets/grupo-niche.jpg";
import guayacan from "@/assets/guayacan-orquesta.jpg";
import la33 from "@/assets/la-33.jpg";
import willie from "@/assets/willie-gonzalez.jpg";
import ruben from "@/assets/ruben-blades.jpg";
import gilberto from "@/assets/gilberto-santa-rosa.jpg";
import marc from "@/assets/marc-anthony.jpg";
import eddy from "@/assets/eddy-santiago.jpg";
import maelo from "@/assets/maelo-ruiz.jpg";
import fruko from "@/assets/fruko-y-sus-tesos.jpg";

const artists = [
  { name: "Grupo Niche", img: grupoNiche },
  { name: "Guayacán Orquesta", img: guayacan },
  { name: "La-33", img: la33 },
  { name: "Willie González", img: willie },
  { name: "Rubén Blades", img: ruben },
  { name: "Gilberto Santa Rosa", img: gilberto },
  { name: "Marc Anthony", img: marc },
  { name: "Eddy Santiago", img: eddy },
  { name: "Maelo Ruiz", img: maelo },
  { name: "Fruko y sus Tesos", img: fruko },
];

export default function LineupSection() {
  return (
    <section id="lineup" className="py-20 md:py-28 bg-salsa-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="font-heading text-4xl md:text-6xl text-center text-gradient-salsa mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Line-Up
        </motion.h2>
        <motion.p
          className="text-center text-muted-foreground mb-14 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          10 artistas, una sola tarima, pura salsa
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {artists.map((a, i) => (
            <motion.div
              key={a.name}
              className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={a.img}
                alt={a.name}
                loading="lazy"
                width={400}
                height={533}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-salsa-black via-salsa-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <h3 className="font-heading text-sm md:text-lg text-foreground leading-tight">
                  {a.name}
                </h3>
              </div>
              {/* Hover border */}
              <div className="absolute inset-0 border-2 border-salsa-yellow/0 group-hover:border-salsa-yellow/60 rounded-xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
