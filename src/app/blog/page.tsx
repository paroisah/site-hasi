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


  return (
    <main>
      {/* ── HERO ── */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          {/* Esquerda: logo + tagline */}
          <div className="flex-1">
            <Image
              src="/logo_blog.png"
              alt="Marca, Querida!"
              width={340}
              height={180}
              className="w-64 md:w-80 h-auto"
            />
            <p className="font-nunito text-creme/50 text-sm mt-4 max-w-sm">
              uma newsletter sobre marcas, conteúdo, narrativa, estética e cultura pop para quem quer construir presença com mais repertório e menos repetição.
            </p>
          </div>

          {/* Direita: formulário de inscrição */}
          <div
            className="flex-1 rounded-2xl p-6 md:p-8 flex flex-col gap-4"
            style={{ backgroundColor: "rgba(12,192,223,0.06)", border: "0.5px solid rgba(12,192,223,0.2)" }}
          >
            <div>
              <p className="font-nunito text-[11px] uppercase tracking-[2px] text-ciano/70 mb-1">newsletter</p>
              <h2 className="font-caveat font-bold text-2xl md:text-3xl text-creme leading-tight">
                receba cada edição direto no seu e-mail.
              </h2>
            </div>
            <p className="font-nunito text-creme/50 text-xs leading-relaxed">
              sem spam. só o que realmente importa para a sua marca.
            </p>
            <NewsletterForm />
          </div>
        </div>
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

      {/* ── GRID DE POSTS ── */}
      {postsFiltrados.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {postsFiltrados.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-card rounded-card overflow-hidden flex flex-col group hover:-translate-y-0.5 transition-all duration-200"
                style={{ border: "0.5px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="hidden md:flex aspect-[16/9] items-center justify-center overflow-hidden"
                  style={{ backgroundColor: `${corCategoria[post.categoria]}15`, borderBottom: `1px solid ${corCategoria[post.categoria]}30` }}
                >
                  {post.capa ? (
                    <Image
                      src={post.capa}
                      alt={post.titulo}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src="/logo_blog.png"
                      alt="Marca, Querida!"
                      width={180}
                      height={96}
                      className="w-32 h-auto"
                    />
                  )}
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

    </main>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [carregando, setCarregando] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErro("insira um e-mail válido.");
      return;
    }
    setErro("");
    setCarregando(true);

    const callbackName = `mc_cb_${Date.now()}`;
    const url = `https://app.us4.list-manage.com/subscribe/post-json?u=e1e272d94e11100af7ac4a277&id=0d97cc1159&EMAIL=${encodeURIComponent(email)}&b_e1e272d94e11100af7ac4a277_0d97cc1159=&c=${callbackName}`;

    (window as unknown as Record<string, unknown>)[callbackName] = (data: { result: string; msg: string }) => {
      delete (window as unknown as Record<string, unknown>)[callbackName];
      setCarregando(false);
      if (data.result === "success") {
        setEnviado(true);
      } else {
        const msg = data.msg?.toLowerCase() ?? "";
        if (msg.includes("already subscribed")) {
          setErro("esse e-mail já está inscrito.");
        } else {
          setErro("ops, algo deu errado. tente novamente.");
        }
      }
    };

    const script = document.createElement("script");
    script.src = url;
    script.onerror = () => {
      delete (window as unknown as Record<string, unknown>)[callbackName];
      setCarregando(false);
      setErro("erro de conexão. tente novamente.");
    };
    document.head.appendChild(script);
  }

  if (enviado) {
    return (
      <p className="font-nunito text-ciano text-sm font-semibold">
        ótimo! te vejo na caixa de entrada ✓
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          disabled={carregando}
          className="flex-1 bg-card border border-white/10 rounded-pill px-5 py-3 font-nunito text-sm text-creme placeholder-creme/30 outline-none focus:border-ciano/40 transition-colors disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={carregando}
          className="font-nunito text-sm font-semibold text-preto rounded-pill px-6 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 whitespace-nowrap disabled:opacity-60"
          style={{ backgroundColor: "#0cc0df" }}
        >
          {carregando ? "enviando..." : "quero receber →"}
        </button>
      </div>
      {erro && (
        <p className="font-nunito text-laranja text-xs">{erro}</p>
      )}
    </form>
  );
}
