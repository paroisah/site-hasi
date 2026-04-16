import { posts } from "@/lib/posts";

export async function GET() {
  const siteUrl = "https://site-hasi.vercel.app";

  const itens = posts
    .slice()
    .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime())
    .map((post) => {
      const primeiroParagrafo = post.conteudo.find((b) => b.tipo === "paragrafo");
      const descricao = primeiroParagrafo && "texto" in primeiroParagrafo
        ? primeiroParagrafo.texto
        : post.previa;

      return `
    <item>
      <title><![CDATA[${post.titulo}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${descricao}]]></description>
      <pubDate>${new Date(post.data).toUTCString()}</pubDate>
    </item>`;
    })
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Marca, Querida! — newsletter da Hasi</title>
    <link>${siteUrl}/blog</link>
    <description>uma newsletter sobre marcas, conteúdo, narrativa, estética e cultura pop para quem quer construir presença com mais repertório e menos repetição.</description>
    <language>pt-BR</language>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${itens}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
