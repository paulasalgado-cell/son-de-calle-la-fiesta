import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import panoleta from "@/assets/merch-panoleta.png";
import manillas from "@/assets/merch-manillas.png";
import camiseta from "@/assets/merch-camiseta.png";
import stickers from "@/assets/merch-stickers.png";

const items = [
  { name: "Pañoletas", price: 25000, img: panoleta },
  { name: "Manillas", price: 5000, img: manillas },
  { name: "Camisetas", price: 60000, img: camiseta },
  { name: "Stickers", price: 2000, img: stickers },
];

const formatPrice = (n: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(n);

export default function MerchSection() {
  return (
    <section id="merch" className="relative py-20 md:py-28 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.h2
          className="font-heading text-4xl md:text-6xl text-center text-gradient-salsa mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Merch
        </motion.h2>
        <p className="text-center text-muted-foreground mb-14 text-sm md:text-base uppercase tracking-wider">
          Llévate un pedacito del festival · precios por unidad
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-14">
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-4 md:p-6 flex flex-col items-center text-center hover:border-salsa-yellow/50 transition-colors"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="aspect-square w-full flex items-center justify-center mb-4">
                <img src={item.img} alt={item.name} className="max-h-full max-w-full object-contain drop-shadow-lg" />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-1">{item.name}</h3>
              <p className="text-salsa-yellow font-semibold text-lg">{formatPrice(item.price)}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="https://sondecallefest.myshopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-salsa text-primary-foreground px-8 py-4 rounded-full font-semibold uppercase tracking-wider text-sm hover:scale-105 transition-transform"
          >
            <ShoppingBag size={18} />
            Comprar Merch
          </a>
        </div>
      </div>
    </section>
  );
}
