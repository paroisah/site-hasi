import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { posts, corCategoria, nomeCategoria } from "@/lib/posts";
import PostInteracoes from "@/components/PostInteracoes";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: `${post.titulo} — Blog Hasi`, description: post.previa };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const cor = corCategoria[post.categoria];

  return (
    <main className="max-w-3xl mx-auto px-6 pt-16 pb-24">
      {/* Voltar */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 font-nunito text-xs text-creme/40 hover:text-creme/70 transition-colors mb-10"
      >
        ← voltar para o blog
      </Link>

      {/* Header */}
      <div className="mb-10">
        <span
          className="badge mb-4 inline-block"
          style={{
            color: cor,
            backgroundColor: `${cor}15`,
            borderColor: `${cor}35`,
          }}
        >
          {nomeCategoria[post.categoria]}
        </span>

        <h1 className="font-caveat font-bold text-4xl md:text-5xl text-creme leading-tight mb-4">
          {post.titulo}
        </h1>

        <div className="flex items-center gap-4">
          <span className="font-nunito text-creme/40 text-xs">{post.data}</span>
          <span className="text-creme/20">·</span>
          <span className="font-nunito text-creme/40 text-xs">{post.leitura}</span>
        </div>
      </div>

      {/* Capa */}
      <div
        className="rounded-2xl aspect-[2/1] flex items-center justify-center mb-10 overflow-hidden"
        style={{ backgroundColor: `${cor}12`, border: `1px solid ${cor}25` }}
      >
        <Image
          src="/logo_blog.png"
          alt="Marca, Querida!"
          width={320}
          height={170}
          className="w-56 md:w-72 h-auto"
        />
      </div>

      <div className="divider mb-10" />

      {/* Conteúdo */}
      <article className="flex flex-col gap-6">
        {post.conteudo.map((bloco, i) => {
          if (bloco.tipo === "paragrafo") {
            return (
              <p key={i} className="font-nunito text-creme/75 text-base leading-relaxed">
                {bloco.texto}
              </p>
            );
          }

          if (bloco.tipo === "subtitulo") {
            return (
              <h2 key={i} className="font-caveat font-bold text-2xl md:text-3xl text-creme mt-4">
                {bloco.texto}
              </h2>
            );
          }

          if (bloco.tipo === "citacao") {
            return (
              <blockquote
                key={i}
                className="rounded-xl p-6 my-2"
                style={{
                  backgroundColor: `${cor}08`,
                  borderLeft: `3px solid ${cor}`,
                }}
              >
                <p className="font-caveat font-bold text-xl md:text-2xl text-creme leading-relaxed">
                  &ldquo;{bloco.texto}&rdquo;
                </p>
              </blockquote>
            );
          }

          if (bloco.tipo === "lista") {
            return (
              <ul key={i} className="flex flex-col gap-4 pl-1">
                {bloco.itens.map((item, j) => {
                  const [titulo, ...resto] = item.split(":");
                  const temTitulo = resto.length > 0;
                  return (
                    <li key={j} className="flex gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: cor }} />
                      <span className="font-nunito text-creme/75 text-base leading-relaxed">
                        {temTitulo ? (
                          <>
                            <strong className="text-creme">{titulo}:</strong>
                            {resto.join(":")}
                          </>
                        ) : (
                          item
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            );
          }

          return null;
        })}
      </article>

      <div className="divider mt-12 mb-10" />

      {/* Curtir / Salvar / Compartilhar + Comentários */}
      <PostInteracoes
        slug={post.slug}
        curtidas_inicial={post.curtidas_inicial}
        compartilhamentos_inicial={post.compartilhamentos_inicial}
      />

      <div className="divider my-10" />

      {/* CTA */}
      <div
        className="rounded-2xl p-8 text-center"
        style={{
          backgroundColor: "rgba(140,82,255,0.08)",
          border: "0.5px solid rgba(140,82,255,0.15)",
        }}
      >
        <p className="font-caveat font-bold text-2xl text-creme mb-2">
          sua marca merece uma estratégia de verdade.
        </p>
        <p className="font-nunito text-creme/55 text-sm mb-6">
          Faça o diagnóstico gratuito e descubra por onde começar.
        </p>
        <Link href="/diagnostico" className="btn-secondary">
          quero meu diagnóstico →
        </Link>
      </div>
    </main>
  );
}
