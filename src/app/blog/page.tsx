"use client";

import { useState } from "react";
import Link from "next/link";

const categorias = [
  { id: "todos", label: "todos" },
  { id: "empreendedorismo", label: "empreendedorismo feminino" },
  { id: "instagram", label: "instagram e redes sociais" },
  { id: "marketing", label: "marketing em alta" },
];

const posts = [
  {
    id: 1,
    categoria: "empreendedorismo",
    titulo: "Como construir uma marca que as pessoas defendem — e não apenas seguem",
    previa:
      "Existe uma diferença enorme entre ter seguidores e ter uma comunidade. Uma marca defendida é uma marca com alma.",
    leitura: "6 min de leitura",
    destaque: true,
  },
  {
    id: 2,
    categoria: "instagram",
    titulo: "Por que sua taxa de engajamento caiu — e o que fazer agora",
    previa:
      "Antes de culpar o algoritmo, veja o que realmente está acontecendo com o seu conteúdo.",
    leitura: "4 min de leitura",
    destaque: false,
  },
  {
    id: 3,
    categoria: "marketing",
    titulo: "Tendências de conteúdo que vão dominar o mercado feminino em 2025",
    previa:
      "O comportamento do consumidor feminino está mudando. Veja como se posicionar à frente.",
    leitura: "5 min de leitura",
    destaque: false,
  },
  {
    id: 4,
    categoria: "empreendedorismo",
    titulo: "Posicionamento de marca: o erro que a maioria das empreendedoras comete",
    previa:
      "Posicionamento não é nicho. Entenda a diferença e como isso impacta diretamente suas vendas.",
    leitura: "7 min de leitura",
    destaque: false,
  },
  {
    id: 5,
    categoria: "instagram",
    titulo: "Conteúdo para Instagram: como criar menos e aparecer mais",
    previa:
      "Consistência não é sobre quantidade — é sobre estratégia. Aprenda a fazer mais com menos.",
    leitura: "5 min de leitura",
    destaque: false,
  },
  {
    id: 6,
    categoria: "marketing",
    titulo: "Storytelling para marcas: o guia definitivo para o universo feminino",
    previa:
      "Marcas que contam histórias vendem mais, fidelizam mais e são mais lembradas. Aprenda como.",
    leitura: "8 min de leitura",
    destaque: false,
  },
];

const corCategoria: Record<string, string> = {
  empreendedorismo: "#f76307",
  instagram: "#8c52ff",
  marketing: "#0cc0df",
};

const nomeCategoria: Record<string, string> = {
  empreendedorismo: "empreendedorismo feminino",
  instagram: "instagram e redes sociais",
  marketing: "marketing em alta",
};

export default function Blog() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos");

  const postsFiltrados =
    categoriaAtiva === "todos"
      ? posts
      : posts.filter((p) => p.categoria === categoriaAtiva);

  const postDestaque = postsFiltrados.find((p) => p.destaque) || postsFiltrados[0];
  const postsGrid = postsFiltrados.filter((p) => p.id !== postDestaque?.id);

  return (
    <main>
      {/* ── HERO ── */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <h1 className="font-caveat font-bold text-5xl md:text-6xl text-creme leading-tight">
          ideias que fazem sua marca{" "}
          <span className="text-roxo">crescer</span>.
        </h1>
      </section>

      <div className="divider" />

      {/* ── FILTROS ── */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-2">
          {categorias.map((c) => {
            const isAtiva = categoriaAtiva === c.id;
            const cor = c.id === "todos" ? "#fffbf0" : corCategoria[c.id];
            return (
              <button
                key={c.id}
                onClick={() => setCategoriaAtiva(c.id)}
                className="font-nunito text-xs uppercase tracking-widest rounded-pill px-4 py-2 transition-all duration-200 border"
                style={
                  isAtiva
                    ? {
                        backgroundColor: `${cor}20`,
                        borderColor: `${cor}60`,
                        color: cor,
                      }
                    : {
                        backgroundColor: "transparent",
                        borderColor: "rgba(255,255,255,0.12)",
                        color: "rgba(255,251,240,0.45)",
                      }
                }
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* ── POST DESTAQUE ── */}
      {postDestaque && (
        <section className="max-w-6xl mx-auto px-6 pb-10">
          <div
            className="rounded-2xl p-8 grid md:grid-cols-2 gap-8 items-center"
            style={{
              backgroundColor: "#2a2b2e",
              border: "0.5px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="flex flex-col gap-4">
              <span
                className="badge self-start"
                style={{
                  color: corCategoria[postDestaque.categoria],
                  backgroundColor: `${corCategoria[postDestaque.categoria]}15`,
                  borderColor: `${corCategoria[postDestaque.categoria]}35`,
                }}
              >
                {nomeCategoria[postDestaque.categoria]}
              </span>
              <h2 className="font-caveat font-bold text-2xl md:text-3xl text-creme leading-tight">
                {postDestaque.titulo}
              </h2>
              <p className="font-nunito text-creme/65 text-sm leading-relaxed">
                {postDestaque.previa}
              </p>
              <div className="flex items-center gap-4 mt-2">
                <span className="font-nunito text-creme/40 text-xs">
                  {postDestaque.leitura}
                </span>
                <Link
                  href="#"
                  className="font-nunito text-sm font-semibold text-ciano hover:opacity-80 transition-opacity"
                >
                  ler →
                </Link>
              </div>
            </div>

            {/* Placeholder imagem */}
            <div
              className="rounded-xl aspect-[4/3] flex items-center justify-center"
              style={{ backgroundColor: "#333537" }}
            >
              <p className="font-nunito text-creme/20 text-sm">imagem do artigo</p>
            </div>
          </div>
        </section>
      )}

      {/* ── GRID DE POSTS ── */}
      {postsGrid.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {postsGrid.map((post) => (
              <div
                key={post.id}
                className="bg-card rounded-card overflow-hidden flex flex-col"
                style={{ border: "0.5px solid rgba(255,255,255,0.06)" }}
              >
                {/* Placeholder imagem */}
                <div
                  className="aspect-[16/9] flex items-center justify-center"
                  style={{ backgroundColor: "#333537" }}
                >
                  <p className="font-nunito text-creme/20 text-xs">imagem</p>
                </div>

                <div className="p-5 flex flex-col gap-3 flex-1">
                  <span
                    className="badge self-start"
                    style={{
                      color: corCategoria[post.categoria],
                      backgroundColor: `${corCategoria[post.categoria]}15`,
                      borderColor: `${corCategoria[post.categoria]}35`,
                    }}
                  >
                    {nomeCategoria[post.categoria]}
                  </span>
                  <h3 className="font-caveat font-bold text-xl text-creme leading-snug">
                    {post.titulo}
                  </h3>
                  <p className="font-nunito text-creme/60 text-sm leading-relaxed flex-1">
                    {post.previa}
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-nunito text-creme/35 text-xs">
                      {post.leitura}
                    </span>
                    <Link
                      href="#"
                      className="font-nunito text-xs font-semibold text-ciano hover:opacity-80 transition-opacity"
                    >
                      ler →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="divider" />

      {/* ── NEWSLETTER ── */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="font-caveat font-bold text-3xl md:text-4xl text-creme mb-3">
          conteúdo estratégico direto no seu e-mail.
        </h2>
        <p className="font-nunito text-creme/55 text-sm mb-8">
          Sem spam. Só o que realmente importa para a sua marca.
        </p>
        <NewsletterForm />
      </section>
    </main>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErro("insira um e-mail válido.");
      return;
    }
    setErro("");
    setEnviado(true);
  }

  if (enviado) {
    return (
      <p className="font-nunito text-ciano text-sm">
        ótimo! te vejo na caixa de entrada. ✓
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="seu@email.com"
        className="flex-1 bg-card border border-white/10 rounded-pill px-5 py-3 font-nunito text-sm text-creme placeholder-creme/30 outline-none focus:border-ciano/40 transition-colors"
      />
      <button
        type="submit"
        className="font-nunito text-sm font-semibold text-preto rounded-pill px-6 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 whitespace-nowrap"
        style={{ backgroundColor: "#0cc0df" }}
      >
        quero receber →
      </button>
      {erro && (
        <p className="font-nunito text-laranja text-xs text-left absolute mt-14">
          {erro}
        </p>
      )}
    </form>
  );
}
