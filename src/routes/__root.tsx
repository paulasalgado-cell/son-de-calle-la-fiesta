import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Son de Calle — Festival de Salsa · Bogotá 2026" },
      { name: "description", content: "El festival de salsa más grande de Bogotá. Grupo Niche, Rubén Blades, Marc Anthony y más. 21 de noviembre de 2026, Parque el Country." },
      { name: "author", content: "Son de Calle" },
      { property: "og:title", content: "Son de Calle — Festival de Salsa · Bogotá 2026" },
      { property: "og:description", content: "El festival de salsa más grande de Bogotá. Grupo Niche, Rubén Blades, Marc Anthony y más. 21 de noviembre de 2026, Parque el Country." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Son de Calle — Festival de Salsa · Bogotá 2026" },
      { name: "twitter:description", content: "El festival de salsa más grande de Bogotá. Grupo Niche, Rubén Blades, Marc Anthony y más. 21 de noviembre de 2026, Parque el Country." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a9540eb3-0812-4240-a5f0-bc3433a024a9/id-preview-f2b50aac--182a4cae-d2f8-4c80-a2f5-4f37d9fcfa93.lovable.app-1776928564599.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a9540eb3-0812-4240-a5f0-bc3433a024a9/id-preview-f2b50aac--182a4cae-d2f8-4c80-a2f5-4f37d9fcfa93.lovable.app-1776928564599.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Carena&family=Montserrat:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
