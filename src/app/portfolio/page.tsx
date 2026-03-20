import Link from "next/link";

const metricas = [
  { valor: "817k", label: "visualizações no YouTube", cor: "#f76307" },
  { valor: "80,8k", label: "seguidores no Instagram", cor: "#8c52ff" },
  { valor: "12,9k", label: "contas alcançadas", cor: "#0cc0df" },
  { valor: "+2,3k", label: "conexões no LinkedIn em 3 meses", cor: "#f76307" },
];

const casesServico = [
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
    nome: "Gestão de Marca",
    frase: "Tenho tudo isso, mas preciso crescer.",
    cor: "#8c52ff",
    href: "/servicos/gestao-de-marca",
  },
];

export default function Portfolio() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <h1 className="font-caveat font-bold text-5xl md:text-6xl text-creme leading-tight">
          resultados que <span className="text-laranja">falam</span> por si.
        </h1>
        <p className="font-nunito text-creme/60 text-base mt-4 max-w-xl leading-relaxed">
          Marcas que se transformaram com estratégia, consistência e conteúdo com propósito.
        </p>
      </section>

      <div className="divider" />

      {/* ── RESULTADOS EM NÚMEROS ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="font-nunito text-[11px] uppercase tracking-[2px] text-creme/45 mb-8">
          resultados em números
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metricas.map((m, i) => (
            <div
              key={i}
              className="bg-card rounded-card p-6 text-center"
              style={{ border: `0.5px solid ${m.cor}30` }}
            >
              <p
                className="font-caveat font-bold text-4xl mb-1"
                style={{ color: m.cor }}
              >
                {m.valor}
              </p>
              <p className="font-nunito text-creme/55 text-xs leading-snug">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ── CASE DESTAQUE ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="font-nunito text-[11px] uppercase tracking-[2px] text-creme/45 mb-8">
          case em destaque
        </p>

        <div
          className="rounded-2xl p-8 md:p-10"
          style={{
            backgroundColor: "#2a2b2e",
            border: "0.5px solid rgba(255,255,255,0.07)",
          }}
        >
          <div className="flex flex-wrap gap-2 mb-4">
            <span
              className="badge"
              style={{
                color: "#f76307",
                backgroundColor: "rgba(247,99,7,0.12)",
                borderColor: "rgba(247,99,7,0.3)",
              }}
            >
              Employer Branding
            </span>
            <span
              className="badge"
              style={{
                color: "#8c52ff",
                backgroundColor: "rgba(140,82,255,0.12)",
                borderColor: "rgba(140,82,255,0.3)",
              }}
            >
              Produção de Conteúdo
            </span>
          </div>

          <h2 className="font-caveat font-bold text-3xl md:text-4xl text-creme mb-6">
            Projeto Orgulho de Ser{" "}
            <span className="text-laranja">#bepi</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="font-nunito text-[11px] uppercase tracking-[2px] text-creme/45 mb-3">
                desafio
              </p>
              <p className="font-nunito text-creme/70 text-sm leading-relaxed">
                Marca com grande presença offline mas comunicação digital fragmented, sem identidade clara e sem estratégia de employer branding.
              </p>
            </div>
            <div>
              <p className="font-nunito text-[11px] uppercase tracking-[2px] text-creme/45 mb-3">
                solução
              </p>
              <p className="font-nunito text-creme/70 text-sm leading-relaxed">
                Construção de narrativa de marca empregadora, campanha de orgulho interno e estratégia de conteúdo que humanizou a comunicação da empresa.
              </p>
            </div>
            <div>
              <p className="font-nunito text-[11px] uppercase tracking-[2px] text-creme/45 mb-3">
                resultado
              </p>
              <p className="font-nunito text-creme/70 text-sm leading-relaxed">
                Aumento expressivo no engajamento interno, crescimento orgânico nas redes e fortalecimento da percepção de marca como empregadora de referência.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── SEJA UM CASE ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="font-nunito text-[11px] uppercase tracking-[2px] text-creme/45 mb-4">
          seja um case da hasi
        </p>
        <h2 className="font-caveat font-bold text-3xl md:text-4xl text-creme mb-8">
          qual é o seu próximo{" "}
          <span className="text-roxo">passo</span>?
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {casesServico.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="bg-card rounded-card p-6 flex flex-col gap-4 group transition-all duration-200 hover:-translate-y-0.5"
              style={{ border: `0.5px solid ${s.cor}33` }}
            >
              <div>
                <p
                  className="font-nunito font-bold text-sm mb-2"
                  style={{ color: s.cor }}
                >
                  {s.nome}
                </p>
                <p className="font-nunito text-creme/55 text-sm italic">
                  &ldquo;{s.frase}&rdquo;
                </p>
              </div>
              <span
                className="font-nunito text-xs font-semibold mt-auto"
                style={{ color: s.cor }}
              >
                conhecer →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="max-w-6xl mx-auto px-6 pb-24 text-center">
        <p className="font-nunito text-creme/60 text-base mb-6">
          quer que sua marca seja o próximo case?
        </p>
        <Link href="/contato" className="btn-secondary text-base px-8 py-3.5">
          fazer diagnóstico gratuito →
        </Link>
      </section>
    </main>
  );
}
