import Link from "next/link";

interface Etapa {
  num: string;
  titulo: string;
  desc: string;
}

interface Objecao {
  pensamento: string;
  resposta: string;
}

interface ProximoServico {
  nome: string;
  href: string;
  cor: string;
}

interface ServicePageProps {
  badge: string;
  nome: string;
  cor: string;
  descricao: string;
  citacao: string;
  paraQuem: string[];
  comoFunciona: Etapa[];
  entregaveis: string[];
  objecoes: Objecao[];
  proximosServicos: ProximoServico[];
  ctaTexto: string;
  ctaFrase: string;
}

export default function ServicePage({
  badge,
  nome,
  cor,
  descricao,
  citacao,
  paraQuem,
  comoFunciona,
  entregaveis,
  objecoes,
  proximosServicos,
  ctaTexto,
  ctaFrase,
}: ServicePageProps) {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <span
          className="badge mb-6 inline-block"
          style={{
            color: cor,
            backgroundColor: `${cor}18`,
            borderColor: `${cor}40`,
          }}
        >
          {badge}
        </span>

        <h1
          className="font-caveat font-bold text-5xl md:text-6xl leading-tight mb-6"
          style={{ color: cor }}
        >
          {nome}
        </h1>

        <p className="font-nunito text-creme/70 text-base max-w-2xl leading-relaxed mb-8">
          {descricao}
        </p>

        {/* Citação de impacto */}
        <div
          className="rounded-xl p-6 max-w-2xl"
          style={{
            backgroundColor: `${cor}0d`,
            borderLeft: `3px solid ${cor}`,
            border: `0.5px solid ${cor}33`,
            borderLeftWidth: "3px",
          }}
        >
          <p className="font-caveat font-bold text-xl text-creme leading-relaxed">
            &ldquo;{citacao}&rdquo;
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ── PARA QUEM É ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p
          className="font-nunito text-[11px] uppercase tracking-[2px] mb-6"
          style={{ color: cor }}
        >
          para quem é
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {paraQuem.map((item, i) => (
            <div
              key={i}
              className="bg-card rounded-card p-5"
              style={{ border: `0.5px solid ${cor}25` }}
            >
              <p className="font-nunito text-creme/70 text-sm italic leading-relaxed">
                &ldquo;{item}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ── COMO FUNCIONA ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p
          className="font-nunito text-[11px] uppercase tracking-[2px] mb-8"
          style={{ color: cor }}
        >
          como funciona
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {comoFunciona.map((etapa) => (
            <div
              key={etapa.num}
              className="bg-card rounded-card p-6"
              style={{ border: `0.5px solid ${cor}25` }}
            >
              <p
                className="font-caveat font-bold text-3xl mb-3"
                style={{ color: cor }}
              >
                {etapa.num}
              </p>
              <p className="font-nunito font-semibold text-creme text-sm mb-2">
                {etapa.titulo}
              </p>
              <p className="font-nunito text-creme/60 text-sm leading-relaxed">
                {etapa.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ── O QUE VOCÊ RECEBE ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p
          className="font-nunito text-[11px] uppercase tracking-[2px] mb-6"
          style={{ color: cor }}
        >
          o que você recebe
        </p>
        <div className="flex flex-wrap gap-2">
          {entregaveis.map((e, i) => (
            <span
              key={i}
              className="badge"
              style={{
                color: cor,
                backgroundColor: `${cor}15`,
                borderColor: `${cor}35`,
              }}
            >
              {e}
            </span>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ── OBJEÇÕES ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p
          className="font-nunito text-[11px] uppercase tracking-[2px] mb-8"
          style={{ color: cor }}
        >
          você pode estar pensando
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {objecoes.map((o, i) => (
            <div
              key={i}
              className="bg-card rounded-card p-6"
              style={{ border: `0.5px solid ${cor}25` }}
            >
              <p className="font-nunito text-creme/55 text-sm italic mb-3">
                &ldquo;{o.pensamento}&rdquo;
              </p>
              <p className="font-nunito text-creme/80 text-sm leading-relaxed">
                {o.resposta}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ── PRÓXIMOS SERVIÇOS ── */}
      {proximosServicos.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-16">
          <p
            className="font-nunito text-[11px] uppercase tracking-[2px] mb-6"
            style={{ color: cor }}
          >
            depois do {nome.toLowerCase()}, o próximo passo pode ser
          </p>
          <div className="flex flex-wrap gap-3">
            {proximosServicos.map((ps) => (
              <Link
                key={ps.href}
                href={ps.href}
                className="rounded-pill px-6 py-2.5 font-nunito text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  color: ps.cor,
                  backgroundColor: `${ps.cor}18`,
                  border: `0.5px solid ${ps.cor}40`,
                }}
              >
                {ps.nome} →
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── CTA FINAL ── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div
          className="rounded-2xl p-12 text-center"
          style={{
            backgroundColor: `${cor}0d`,
            border: `0.5px solid ${cor}25`,
          }}
        >
          <p className="font-nunito text-creme/65 text-base mb-6">{ctaFrase}</p>
          <a
            href="https://tally.so/r/OD0Kek"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-pill px-8 py-3.5 font-nunito font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 inline-flex items-center gap-1"
            style={{ backgroundColor: cor }}
          >
            {ctaTexto}
          </a>
        </div>
      </section>
    </main>
  );
}
