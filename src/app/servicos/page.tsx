import Link from "next/link";

const servicos = [
  {
    nome: "DNA Hasi",
    frase: "Ainda não sei quem minha marca é.",
    cor: "#f76307",
    href: "/servicos/dna-hasi",
    descricao: "Ponto de partida da esteira Hasi. Construímos a base de identidade da sua marca.",
    span: false,
  },
  {
    nome: "Arquitetura Narrativa",
    frase: "Sei quem sou, mas não sei comunicar.",
    cor: "#8c52ff",
    href: "/servicos/arquitetura-narrativa",
    descricao: "Mentoria em grupo para estruturar sua narrativa e comunicar com clareza.",
    span: false,
  },
  {
    nome: "Mapa Tático",
    frase: "Sei comunicar, mas não tenho estratégia.",
    cor: "#0cc0df",
    href: "/servicos/mapa-tatico",
    descricao: "Planejamento individual e recorrente para dar direção estratégica ao seu conteúdo.",
    span: false,
  },
  {
    nome: "Content Lab",
    frase: "Tenho estratégia, mas não tenho tempo.",
    cor: "#f76307",
    href: "/servicos/content-lab",
    descricao: "Produção de conteúdo sob medida para sua marca. Você estrategiza, a gente executa.",
    span: false,
  },
  {
    nome: "Gestão de Marca",
    frase: "Tenho tudo isso, mas preciso crescer.",
    cor: "#8c52ff",
    href: "/servicos/gestao-de-marca",
    descricao: "Gestão estratégica completa da sua presença digital. Parceria total de marca.",
    span: true,
  },
];

export default function ServicosHub() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
        <h1 className="font-caveat font-bold text-5xl md:text-6xl text-creme leading-tight mb-4">
          onde está sua <span className="text-roxo">marca</span> agora
          <span className="text-laranja">?</span>
        </h1>
        <p className="font-nunito text-creme/65 text-base max-w-2xl mx-auto leading-relaxed">
          Cada frente da Hasi foi criada para um momento específico. Encontre a
          sua — e descubra o que vem depois.
        </p>
      </section>

      <div className="divider" />

      {/* ── GRID DE SERVIÇOS ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {servicos.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className={`bg-card rounded-card p-8 flex flex-col gap-5 group transition-all duration-200 hover:-translate-y-0.5 ${
                s.span ? "sm:col-span-2 md:col-span-1" : ""
              }`}
              style={{ border: `0.5px solid ${s.cor}33` }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${s.cor}20` }}
              >
                <span
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: s.cor }}
                />
              </div>

              <div className="flex-1">
                <p
                  className="font-nunito font-bold text-base mb-2"
                  style={{ color: s.cor }}
                >
                  {s.nome}
                </p>
                <p className="font-nunito text-creme/55 text-sm italic mb-3">
                  &ldquo;{s.frase}&rdquo;
                </p>
                <p className="font-nunito text-creme/60 text-sm leading-relaxed">
                  {s.descricao}
                </p>
              </div>

              <span
                className="font-nunito text-sm font-semibold"
                style={{ color: s.cor }}
              >
                conhecer →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-6xl mx-auto px-6 pb-24 text-center">
        <p className="font-nunito text-creme/55 text-sm mb-5">
          não sabe por onde começar?
        </p>
        <Link href="/contato" className="btn-secondary text-base px-8 py-3.5">
          fazer diagnóstico gratuito →
        </Link>
      </section>
    </main>
  );
}
