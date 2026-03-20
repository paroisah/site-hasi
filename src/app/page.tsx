import Link from "next/link";
import Image from "next/image";

const servicos = [
  {
    nome: "DNA Hasi",
    frase: "Ainda não sei quem minha marca é.",
    cor: "#f76307",
    href: "/servicos/dna-hasi",
  },
  {
    nome: "Arquitetura Narrativa",
    frase: "Sei quem sou, mas não sei comunicar.",
    cor: "#8c52ff",
    href: "/servicos/arquitetura-narrativa",
  },
  {
    nome: "Mapa Tático",
    frase: "Sei comunicar, mas não tenho estratégia.",
    cor: "#0cc0df",
    href: "/servicos/mapa-tatico",
  },
  {
    nome: "Content Lab",
    frase: "Tenho estratégia, mas não tenho tempo.",
    cor: "#f76307",
    href: "/servicos/content-lab",
  },
  {
    nome: "Gestão de Marca",
    frase: "Tenho tudo isso, mas preciso crescer.",
    cor: "#8c52ff",
    href: "/servicos/gestao-de-marca",
  },
];

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/icone_hasi.png"
            alt="Ícone Hasi"
            width={100}
            height={100}
            style={{ width: "100px", height: "auto" }}
          />
        </div>
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="text-laranja text-sm">•</span>
          <span className="font-nunito text-[11px] uppercase tracking-[2px] text-creme/60">
            Consultoria Estratégica de Conteúdo
          </span>
          <span className="text-ciano text-sm">•</span>
        </div>

        <h1 className="font-caveat font-bold text-5xl md:text-7xl text-creme leading-tight mb-6">
          Conteúdo que transforma{" "}
          <span className="text-laranja">percepção</span> em valor
          <span className="text-roxo">.</span>
        </h1>

        <p className="font-nunito text-creme/70 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Para marcas do universo feminino que querem ser vistas, lembradas e
          escolhidas — sem perder a essência.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link href="/contato" className="btn-primary text-base px-8 py-3.5">
            quero meu diagnóstico →
          </Link>
          <Link href="/portfolio" className="btn-ghost text-base px-8 py-3.5">
            ver portfólio
          </Link>
        </div>
      </section>

      {/* ── MÉTRICAS ── */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-3 divide-x divide-white/[0.06]">
          <div className="text-center px-6">
            <p className="font-caveat font-bold text-4xl md:text-5xl text-laranja">
              +6 anos
            </p>
            <p className="font-nunito text-[11px] uppercase tracking-[2px] text-creme/45 mt-1">
              de experiência
            </p>
          </div>
          <div className="text-center px-6">
            <p className="font-caveat font-bold text-4xl md:text-5xl text-roxo">
              5 frentes
            </p>
            <p className="font-nunito text-[11px] uppercase tracking-[2px] text-creme/45 mt-1">
              infinitas possibilidades
            </p>
          </div>
          <div className="text-center px-6">
            <p className="font-caveat font-bold text-4xl md:text-5xl text-ciano">
              100%
            </p>
            <p className="font-nunito text-[11px] uppercase tracking-[2px] text-creme/45 mt-1">
              universo feminino
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── AS 5 FRENTES ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="font-nunito text-[11px] uppercase tracking-[2px] text-creme/45 mb-3">
            as 5 frentes
          </p>
          <h2 className="font-caveat font-bold text-4xl md:text-5xl text-creme">
            onde está sua marca{" "}
            <span className="text-laranja">agora</span>
            <span className="text-roxo">?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicos.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="bg-card rounded-card p-6 flex flex-col gap-4 group transition-all duration-200 hover:-translate-y-0.5"
              style={{ border: `0.5px solid ${s.cor}33` }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${s.cor}20` }}
              >
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: s.cor }}
                />
              </div>
              <div>
                <p
                  className="font-nunito font-semibold text-sm mb-1"
                  style={{ color: s.cor }}
                >
                  {s.nome}
                </p>
                <p className="font-nunito text-creme/60 text-sm italic leading-snug">
                  &ldquo;{s.frase}&rdquo;
                </p>
              </div>
              <span
                className="font-nunito text-xs mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ color: s.cor }}
              >
                conhecer →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div
          className="rounded-2xl p-12 text-center"
          style={{
            backgroundColor: "rgba(140,82,255,0.08)",
            border: "0.5px solid rgba(140,82,255,0.15)",
          }}
        >
          <h2 className="font-caveat font-bold text-3xl md:text-4xl text-creme mb-6">
            sua marca pronta pra ser percebida{" "}
            <span className="text-roxo">diferente</span>.
          </h2>
          <Link href="/contato" className="btn-secondary text-base px-8 py-3.5">
            fazer diagnóstico gratuito →
          </Link>
        </div>
      </section>
    </main>
  );
}
