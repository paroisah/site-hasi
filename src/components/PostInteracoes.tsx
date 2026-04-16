"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

interface Props {
  slug: string;
  curtidas_inicial: number;
  compartilhamentos_inicial: number;
}

export default function PostInteracoes({ slug, curtidas_inicial, compartilhamentos_inicial }: Props) {
  const [curtiu, setCurtiu] = useState(false);
  const [salvou, setSalvou] = useState(false);
  const [compartilhou, setCompartilhou] = useState(false);

  useEffect(() => {
    setCurtiu(localStorage.getItem(`curtiu_${slug}`) === "true");
    setSalvou(localStorage.getItem(`salvou_${slug}`) === "true");
    setCompartilhou(localStorage.getItem(`compartilhou_${slug}`) === "true");
  }, [slug]);

  const totalCurtidas = curtidas_inicial + (curtiu ? 1 : 0);
  const totalCompartilhamentos = compartilhamentos_inicial + (compartilhou ? 1 : 0);

  function toggleCurtir() {
    const novo = !curtiu;
    setCurtiu(novo);
    localStorage.setItem(`curtiu_${slug}`, String(novo));
  }

  function toggleSalvar() {
    const novo = !salvou;
    setSalvou(novo);
    localStorage.setItem(`salvou_${slug}`, String(novo));
  }

  function compartilhar() {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: document.title, url });
    } else {
      navigator.clipboard.writeText(url);
    }
    if (!compartilhou) {
      setCompartilhou(true);
      localStorage.setItem(`compartilhou_${slug}`, "true");
    }
  }

  return (
    <div className="flex flex-col gap-10">
      {/* ── Ações ── */}
      <div className="flex items-center gap-6">
        {/* Curtir */}
        <button
          onClick={toggleCurtir}
          className="flex items-center gap-2 group transition-all duration-150"
        >
          <span
            className={`text-2xl transition-transform duration-150 ${curtiu ? "scale-110" : "group-hover:scale-110"}`}
          >
            {curtiu ? "💜" : "🤍"}
          </span>
          <span
            className={`font-nunito text-sm font-semibold transition-colors ${
              curtiu ? "text-roxo" : "text-creme/40 group-hover:text-creme/70"
            }`}
          >
            {totalCurtidas}
          </span>
        </button>

        {/* Salvar */}
        <button
          onClick={toggleSalvar}
          className="flex items-center gap-2 group transition-all duration-150"
          title={salvou ? "Salvo!" : "Salvar artigo"}
        >
          <span className={`text-2xl transition-transform duration-150 ${salvou ? "scale-110" : "group-hover:scale-110"}`}>
            {salvou ? "🔖" : "📄"}
          </span>
          <span
            className={`font-nunito text-sm font-semibold transition-colors ${
              salvou ? "text-ciano" : "text-creme/40 group-hover:text-creme/70"
            }`}
          >
            {salvou ? "salvo" : "salvar"}
          </span>
        </button>

        {/* Compartilhar */}
        <button
          onClick={compartilhar}
          className="flex items-center gap-2 group transition-all duration-150"
        >
          <span className={`text-2xl transition-transform duration-150 ${compartilhou ? "scale-110" : "group-hover:scale-110"}`}>
            {compartilhou ? "✅" : "🔗"}
          </span>
          <span
            className={`font-nunito text-sm font-semibold transition-colors ${
              compartilhou ? "text-laranja" : "text-creme/40 group-hover:text-creme/70"
            }`}
          >
            {totalCompartilhamentos}
          </span>
        </button>
      </div>

      {/* ── Comentários Giscus ── */}
      <div>
        <p className="font-nunito text-[11px] uppercase tracking-[2px] text-creme/40 mb-6">
          comentários
        </p>
        <div className="giscus" />
        <Script
          src="https://giscus.app/client.js"
          data-repo="paroisah/site-hasi"
          data-repo-id="R_kgDORryMIQ"
          data-category="Announcements"
          data-category-id="DIC_kwDORryMIc4C7Acu"
          data-mapping="pathname"
          data-strict="0"
          data-reactions-enabled="1"
          data-emit-metadata="0"
          data-input-position="bottom"
          data-theme="dark"
          data-lang="pt"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </div>
    </div>
  );
}
