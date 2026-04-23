import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { label: "Inicio", href: "#hero" },
  { label: "Line-Up", href: "#lineup" },
  { label: "Info", href: "#info" },
  { label: "Experiencias", href: "#experiencias" },
  { label: "Entradas", href: "#entradas" },
  { label: "FAQ", href: "#faq" },
  { label: "Merch", href: "#merch" },
  { label: "Redes", href: "#redes" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-salsa-black/90 backdrop-blur-md border-b border-salsa-red/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#hero">
          <img src={logo} alt="Son de Calle" className="h-10 invert" />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-body uppercase tracking-wider text-foreground/80 hover:text-salsa-yellow transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://www.tuboleta.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-salsa text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform inline-block"
            >
              Comprar Entradas
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-salsa-black/95 overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-4 py-6">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-lg uppercase tracking-wider text-foreground/80 hover:text-salsa-yellow transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://www.tuboleta.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-salsa text-primary-foreground px-6 py-3 rounded-full font-semibold"
                >
                  Comprar Entradas
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
