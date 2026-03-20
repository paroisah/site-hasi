import Link from "next/link";
import Image from "next/image";

const proposito = [
  {
    titulo: "conteúdo",
    subtitulo: "em posicionamento",
    cor: "#f76307",
    texto:
      "Transformamos o que você comunica em autoridade real. Cada palavra posiciona a sua marca.",
  },
  {
    titulo: "ideias",
    subtitulo: "em direção",
    cor: "#8c52ff",
    texto:
      "Estratégia não é engessamento — é clareza. Damos direção às suas ideias para que elas virem resultado.",
  },
  {
    titulo: "presença",
    subtitulo: "em marca",
    cor: "#0cc0df",
    texto:
      "Existir nas redes não é o suficiente. Construímos presença que vira marca, e marca que vira legado.",
  },
];

export default function Sobre() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="inline-flex items-center gap-2 mb-6">
          <span
            className="badge"
            style={{
              color: "#f76307",
              backgroundColor: "rgba(247,99,7,0.1)",
              borderColor: "rgba(247,99,7,0.25)",
            }}
          >
            Sobre a Hasi
          </span>
        </div>

        <h1 className="font-caveat font-bold text-5xl md:text-6xl text-creme leading-tight max-w-4xl">
          Nasceu da junção entre estratégia,{" "}
          <span className="text-roxo">sensibilidade</span> e visão de marca.
        </h1>
      </section>

      <div className="divider" />

      {/* ── INTRO + FOTO ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-start">
        <Image
          src="/foto_isa.png"
          alt="Isa — fundadora da Hasi"
          width={600}
          height={800}
          className="w-full object-cover object-top"
          style={{ borderRadius: "12px", maxHeight: "500px" }}
        />

        <div className="flex flex-col gap-6 pt-4">
          <p className="font-nunito text-creme/75 text-base leading-relaxed">
            A <strong className="text-creme">Hasi</strong> é uma consultoria
            estratégica de conteúdo e marca voltada exclusivamente para o
            universo feminino — estética, moda e beleza.
          </p>
          <p className="font-nunito text-creme/75 text-base leading-relaxed">
            Fundada por <strong className="text-creme">Isa</strong>, nasce da
            crença de que marcas fortes não são apenas vistas — elas são
            lembradas, defendidas e desejadas.
          </p>
          <p className="font-nunito text-creme/75 text-base leading-relaxed">
            Com mais de 6 anos de experiência, a Hasi une sensibilidade
            criativa, visão estratégica e profundo entendimento do consumidor
            feminino para transformar negócios em marcas com alma.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ── A HISTÓRIA ── */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="font-nunito text-[11px] uppercase tracking-[2px] text-creme/45 mb-6">
          a história
        </p>
        <div className="space-y-5 font-nunito text-creme/75 text-base leading-relaxed">
          <p>
            Tudo começou com uma percepção simples e poderosa: o mercado
            feminino de estética, moda e beleza estava cheio de marcas incríveis
            que não sabiam contar suas próprias histórias.
          </p>
          <p>
            Empreendedoras talentosas, produtos transformadores, serviços de
            excelência — mas comunicação genérica, sem identidade, sem
            estratégia. Presença sem marca.
          </p>
          <p>
            A Hasi nasceu para mudar isso. Para ser a ponte entre o que essas
            marcas são e o que elas precisam comunicar para crescer de verdade.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ── A TESE ── */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="font-nunito text-[11px] uppercase tracking-[2px] text-creme/45 mb-6">
          a tese
        </p>
        <div
          className="rounded-2xl p-8"
          style={{
            backgroundColor: "rgba(140,82,255,0.08)",
            border: "0.5px solid rgba(140,82,255,0.2)",
            borderLeft: "3px solid #8c52ff",
          }}
        >
          <p className="font-caveat font-bold text-2xl md:text-3xl text-creme leading-relaxed mb-4">
            &ldquo;Conteúdo não deve existir só para gerar movimento, mas para
            construir significado.&rdquo;
          </p>
          <p className="font-nunito text-creme/50 text-sm">— Isa, fundadora da Hasi</p>
        </div>

        <div className="mt-8 space-y-4 font-nunito text-creme/75 text-base leading-relaxed">
          <p>
            A Hasi não acredita em conteúdo por obrigação. Não acredita em
            postar por postar, em seguir tendências sem alma, em crescer sem
            direção.
          </p>
          <p>
            Acredita em marcas que têm algo real a dizer — e no poder de
            comunicar isso com estratégia, consistência e intenção. Marcas que
            não são apenas vistas, mas lembradas,{" "}
            <span className="text-laranja font-semibold">defendidas</span> e
            desejadas.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ── O PROPÓSITO ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="font-nunito text-[11px] uppercase tracking-[2px] text-creme/45 mb-4">
          o propósito
        </p>
        <h2 className="font-caveat font-bold text-3xl md:text-4xl text-creme mb-10">
          transformar
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {proposito.map((p) => (
            <div
              key={p.titulo}
              className="bg-card rounded-card p-6"
              style={{ border: `0.5px solid ${p.cor}33` }}
            >
              <p className="font-caveat font-bold text-2xl mb-0.5" style={{ color: p.cor }}>
                {p.titulo}
              </p>
              <p className="font-nunito text-creme/50 text-xs uppercase tracking-widest mb-4">
                {p.subtitulo}
              </p>
              <p className="font-nunito text-creme/65 text-sm leading-relaxed">
                {p.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-6xl mx-auto px-6 pb-24 text-center">
        <p className="font-nunito text-creme/60 text-base mb-6">
          pronta pra construir sua marca com intenção e direção?
        </p>
        <a href="https://tally.so/r/OD0Kek" target="_blank" rel="noopener noreferrer" className="btn-secondary text-base px-8 py-3.5">
          fazer diagnóstico gratuito →
        </a>
      </section>
    </main>
  );
}
