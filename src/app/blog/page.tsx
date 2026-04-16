"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { posts, corCategoria, nomeCategoria } from "@/lib/posts";

const categorias = [
  { id: "todos", label: "todos" },
  { id: "empreendedorismo", label: "empreendedorismo feminino" },
  { id: "instagram", label: "instagram e redes sociais" },
  { id: "marketing", label: "marketing em alta" },
];

export default function Blog() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos");

  const postsFiltrados =
    categoriaAtiva === "todos"
      ? posts
      : posts.filter((p) => p.categoria === categoriaAtiva);

  const postDestaque = postsFiltrados.find((p) => p.destaque) || postsFiltrados[0];
  const postsGrid = postsFiltrados.filter((p) => p.slug !== postDestaque?.slug);

  return (
    <main>
      {/* ── HERO ── */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <Image
          src="/logo_blog.png"
          alt="Marca, Querida!"
          width={340}
          height={180}
          className="w-64 md:w-80 h-auto"
        />
        <p className="font-nunito text-creme/50 text-sm mt-4">
          o blog da Hasi sobre marca, conteúdo e estratégia para o universo feminino.
        </p>
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
                    ? { backgroundColor: `${cor}20`, borderColor: `${cor}60`, color: cor }
                    : { backgroundColor: "transparent", borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,251,240,0.45)" }
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
            style={{ backgroundColor: "#2a2b2e", border: "0.5px solid rgba(255,255,255,0.07)" }}
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
                <span className="font-nunito text-creme/40 text-xs">{postDestaque.data}</span>
                <span className="font-nunito text-creme/40 text-xs">{postDestaque.leitura}</span>
                <Link
                  href={`/blog/${postDestaque.slug}`}
                  className="font-nunito text-sm font-semibold text-ciano hover:opacity-80 transition-opacity"
                >
                  ler →
                </Link>
              </div>
            </div>

            <div
              className="rounded-xl aspect-[4/3] flex items-center justify-center overflow-hidden"
              style={{ backgroundColor: `${corCategoria[postDestaque.categoria]}15`, border: `1px solid ${corCategoria[postDestaque.categoria]}30` }}
            >
              <Image
                src="/logo_blog.png"
                alt="Marca, Querida!"
                width={260}
                height={140}
                className="w-48 md:w-64 h-auto"
              />
            </div>
          </div>
        </section>
      )}

      {/* ── GRID DE POSTS ── */}
      {postsGrid.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {postsGrid.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-card rounded-card overflow-hidden flex flex-col group hover:-translate-y-0.5 transition-all duration-200"
                style={{ border: "0.5px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="aspect-[16/9] flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: `${corCategoria[post.categoria]}15`, borderBottom: `1px solid ${corCategoria[post.categoria]}30` }}
                >
                  <Image
                    src="/logo_blog.png"
                    alt="Marca, Querida!"
                    width={180}
                    height={96}
                    className="w-32 h-auto"
                  />
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
                    <span className="font-nunito text-creme/35 text-xs">{post.leitura}</span>
                    <span className="font-nunito text-xs font-semibold text-ciano group-hover:opacity-80 transition-opacity">
                      ler →
                    </span>
                  </div>
                </div>
              </Link>
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
        <p className="font-nunito text-laranja text-xs mt-2">{erro}</p>
      )}
    </form>
  );
}
