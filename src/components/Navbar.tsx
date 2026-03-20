"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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

  return (
    <header className="sticky top-0 z-50 bg-preto border-b border-white/[0.07]">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo_hasi.png"
            alt="Hasi"
            width={110}
            height={44}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
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

        {/* CTA */}
        <a
          href="https://tally.so/r/OD0Kek"
          target="_blank"
          rel="noopener noreferrer"
          className="font-nunito text-[12px] font-semibold text-white bg-laranja rounded-pill px-4 py-2 transition-opacity duration-150 hover:opacity-85"
        >
          diagnóstico
        </a>
      </nav>
    </header>
  );
}
