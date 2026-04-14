import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-salsa-black border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4 text-center">
        <img src={logo} alt="Son de Calle" className="h-10 invert opacity-60" />
        <p className="text-sm text-muted-foreground">
          Sábado, 21 de noviembre de 2026 · Parque el Country, Bogotá
        </p>
        <p className="text-xs text-muted-foreground/60">
          © 2026 Son de Calle. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
