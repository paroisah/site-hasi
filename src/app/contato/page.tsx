import Link from "next/link";

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

export default function Contato() {
  return (
    <main>
        {/* ── HERO ── */}
        <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
          <h1 className="font-caveat font-bold text-5xl md:text-6xl text-creme leading-tight">
            sua marca tem um próximo passo
            <span className="text-laranja">.</span>
          </h1>
          <p className="font-nunito text-creme/60 text-base mt-4 max-w-xl leading-relaxed">
            Escolha por onde quer começar — ou deixa a gente te ajudar a descobrir.
          </p>
        </section>

        <div className="divider" />

        {/* ── DUAS PORTAS ── */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-5">
            {/* Porta 1: Diagnóstico */}
            <div
              className="rounded-2xl p-8 flex flex-col gap-5"
              style={{
                backgroundColor: "rgba(140,82,255,0.08)",
                border: "0.5px solid rgba(140,82,255,0.2)",
              }}
            >
              <span
                className="badge self-start"
                style={{
                  color: "#8c52ff",
                  backgroundColor: "rgba(140,82,255,0.12)",
                  borderColor: "rgba(140,82,255,0.3)",
                }}
              >
                gratuito
              </span>
              <div>
                <h2 className="font-caveat font-bold text-2xl md:text-3xl text-creme mb-2">
                  Diagnóstico Gratuito
                </h2>
                <p className="font-nunito text-creme/60 text-sm leading-relaxed">
                  Não sabe por onde começar? Responda algumas perguntas e a gente
                  te indica a frente ideal para o momento da sua marca.
                </p>
              </div>
              <a
                href="https://tally.so/r/OD0Kek"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary self-start"
              >
                fazer diagnóstico gratuito →
              </a>
            </div>

            {/* Porta 2: WhatsApp */}
            <div
              className="rounded-2xl p-8 flex flex-col gap-5"
              style={{
                backgroundColor: "rgba(247,99,7,0.08)",
                border: "0.5px solid rgba(247,99,7,0.2)",
              }}
            >
              <span
                className="badge self-start"
                style={{
                  color: "#f76307",
                  backgroundColor: "rgba(247,99,7,0.12)",
                  borderColor: "rgba(247,99,7,0.3)",
                }}
              >
                direto ao ponto
              </span>
              <div>
                <h2 className="font-caveat font-bold text-2xl md:text-3xl text-creme mb-2">
                  WhatsApp
                </h2>
                <p className="font-nunito text-creme/60 text-sm leading-relaxed">
                  Já sabe o que quer? Fala direto comigo pelo WhatsApp — vamos
                  conversar sobre o que faz sentido para a sua marca agora.
                </p>
              </div>
              <a
                href="https://wa.me/5511937064657"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary self-start"
              >
                falar pelo WhatsApp →
              </a>
            </div>

            {/* Porta 3: Instagram */}
            <div
              className="rounded-2xl p-8 flex flex-col gap-5"
              style={{
                backgroundColor: "rgba(12,192,223,0.08)",
                border: "0.5px solid rgba(12,192,223,0.2)",
              }}
            >
              <span
                className="badge self-start"
                style={{
                  color: "#0cc0df",
                  backgroundColor: "rgba(12,192,223,0.12)",
                  borderColor: "rgba(12,192,223,0.3)",
                }}
              >
                nos acompanhe
              </span>
              <div>
                <h2 className="font-caveat font-bold text-2xl md:text-3xl text-creme mb-2">
                  Instagram
                </h2>
                <p className="font-nunito text-creme/60 text-sm leading-relaxed">
                  Conteúdo sobre marca, narrativa e estratégia todo dia. Vem me
                  acompanhar no Instagram e fazer parte dessa conversa.
                </p>
              </div>
              <a
                href="https://instagram.com/hasi.mkt"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost self-start"
                style={{ color: "#0cc0df", borderColor: "rgba(12,192,223,0.4)" }}
              >
                seguir @hasi.mkt →
              </a>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ── OU ESCOLHA DIRETO ── */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <p className="font-nunito text-[11px] uppercase tracking-[2px] text-creme/45 mb-8">
            ou escolha direto a sua frente
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicos.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-card rounded-card p-6 flex flex-col gap-3 group transition-all duration-200 hover:-translate-y-0.5"
                style={{ border: `0.5px solid ${s.cor}33` }}
              >
                <p
                  className="font-nunito font-bold text-sm"
                  style={{ color: s.cor }}
                >
                  {s.nome}
                </p>
                <p className="font-nunito text-creme/55 text-sm italic flex-1">
                  &ldquo;{s.frase}&rdquo;
                </p>
                <span
                  className="font-nunito text-xs font-semibold"
                  style={{ color: s.cor }}
                >
                  começar →
                </span>
              </Link>
            ))}
          </div>
        </section>
    </main>
  );
}
