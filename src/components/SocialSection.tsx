import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube } from "lucide-react";

// TikTok icon (lucide doesn't have it)
const TikTokIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1Z" />
  </svg>
);

const socials = [
  {
    name: "Instagram",
    handle: "@sondecallefest",
    href: "https://www.instagram.com/sondecallefest?igsh=eGdncnA5Z242ZzJo",
    Icon: Instagram,
  },
  {
    name: "TikTok",
    handle: "@sondecallefest",
    href: "https://www.tiktok.com/@sondecallefest",
    Icon: TikTokIcon,
  },
  {
    name: "Facebook",
    handle: "Son de Calle Fest",
    href: "https://www.facebook.com/share/17Q2PxN9Af/?mibextid=wwXIfr",
    Icon: Facebook,
  },
  {
    name: "YouTube",
    handle: "@sondecallefest",
    href: "https://www.youtube.com/@sondecallefest?si=3qeaA_AiY0ERHe0E",
    Icon: Youtube,
  },
];

export default function SocialSection() {
  return (
    <section id="redes" className="relative py-20 md:py-28 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <motion.h2
          className="font-heading text-4xl md:text-6xl text-center text-gradient-salsa mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Síguenos
        </motion.h2>
        <p className="text-center text-muted-foreground mb-14 text-sm md:text-base uppercase tracking-wider">
          La rumba también vive en redes
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {socials.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 hover:border-salsa-yellow hover:bg-salsa-crimson/10 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-salsa flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
                <s.Icon size={28} />
              </div>
              <span className="font-heading text-xl text-foreground">{s.name}</span>
              <span className="text-xs text-muted-foreground">{s.handle}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
