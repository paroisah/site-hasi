"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "home" },
  { href: "/sobre", label: "sobre" },
  { href: "/servicos", label: "serviços" },
  { href: "/portfolio", label: "portfólio" },
  { href: "/blog", label: "blog" },
  { href: "/contato", label: "contato" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-preto border-b border-white/[0.07]">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setMenuAberto(false)}>
          <Image
            src="/logo_hasi.png"
            alt="Hasi"
            width={110}
            height={44}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-nunito text-[12px] transition-opacity duration-150 ${
                    isActive
                      ? "text-creme border-b border-roxo pb-0.5"
                      : "text-creme/45 hover:text-creme/70"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA desktop */}
        <Link
          href="/diagnostico"
          className="hidden md:inline-flex font-nunito text-[12px] font-semibold text-white bg-laranja rounded-pill px-4 py-2 transition-opacity duration-150 hover:opacity-85"
        >
          diagnóstico
        </Link>

        {/* Botão hamburguer mobile */}
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          aria-label="Abrir menu"
        >
          <span
            className={`block w-6 h-0.5 bg-creme transition-all duration-300 ${
              menuAberto ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-creme transition-all duration-300 ${
              menuAberto ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-creme transition-all duration-300 ${
              menuAberto ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Menu mobile */}
      {menuAberto && (
        <div className="md:hidden bg-preto border-t border-white/[0.07] px-6 py-6 flex flex-col gap-1">
          {links.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuAberto(false)}
                className={`font-nunito text-base py-3 border-b border-white/[0.05] transition-colors ${
                  isActive ? "text-creme" : "text-creme/50 hover:text-creme/80"
                }`}
              >
                {isActive && <span className="text-roxo mr-2">·</span>}
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/diagnostico"
            onClick={() => setMenuAberto(false)}
            className="btn-primary justify-center mt-4"
          >
            quero meu diagnóstico →
          </Link>
        </div>
      )}
    </header>
  );
}
