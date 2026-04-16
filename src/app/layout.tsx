import type { Metadata } from "next";
import { Caveat, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "700"],
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hasi — Consultoria Estratégica de Conteúdo",
  description:
    "Conteúdo que transforma percepção em valor. Para marcas do universo feminino que querem ser vistas, lembradas e escolhidas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5MFZH0HM64"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5MFZH0HM64');
        `}} />
      </head>
      <body className={`${caveat.variable} ${nunito.variable} antialiased`}>
        <Navbar />
        {children}

        {/* ── RODAPÉ GLOBAL ── */}
        <footer
          className="border-t mt-8"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <div className="flex items-center gap-0.5 mb-2">
                  <span className="text-roxo text-lg leading-none">•</span>
                  <span className="font-caveat font-bold text-2xl text-creme leading-none">
                    hasi
                  </span>
                  <span className="text-ciano text-lg leading-none">•</span>
                </div>
                <p className="font-nunito text-creme/35 text-xs uppercase tracking-widest">
                  consultoria estratégica de conteúdo
                </p>
              </div>
              <nav className="flex flex-wrap gap-5">
                {([
                  { href: "/sobre", label: "sobre" },
                  { href: "/servicos", label: "serviços" },
                  { href: "/portfolio", label: "portfólio" },
                  { href: "/blog", label: "blog" },
                  { href: "https://instagram.com/hasi.mkt", label: "instagram" },
                ] as { href: string; label: string }[]).map((link) =>
                  link.href.startsWith("http") ? (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-nunito text-xs text-creme/40 hover:text-creme/70 transition-opacity duration-150 uppercase tracking-wider"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="font-nunito text-xs text-creme/40 hover:text-creme/70 transition-opacity duration-150 uppercase tracking-wider"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </nav>
            </div>
            <div className="divider mt-8 mb-6 mx-0" />
            <p className="font-nunito text-creme/25 text-xs text-center">
              © 2025 Hasi. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
