import ServicePage from "@/components/ServicePage";

export default function ArquiteturaPage() {
  return (
    <ServicePage
      badge="MENTORIA EM GRUPO · TURMAS EXCLUSIVAS"
      nome="Arquitetura Narrativa"
      cor="#8c52ff"
      descricao="Você já sabe quem é. Agora precisa aprender a comunicar isso com clareza, consistência e estratégia. A Arquitetura Narrativa é uma mentoria em grupo para marcas que querem dominar a arte de contar suas histórias."
      citacao="A história certa, contada do jeito certo, para a pessoa certa — isso é Arquitetura Narrativa."
      paraQuem={[
        "Sei o que faço, mas não consigo explicar de forma que gere desejo.",
        "Minha comunicação está boa, mas não está convertendo.",
        "Quero aprender a estruturar meus conteúdos com estratégia narrativa.",
        "Tenho dificuldade em criar consistência no meu posicionamento.",
        "Quero aprender com outras empreendedoras no mesmo momento.",
        "Preciso de método para comunicar minha marca com confiança.",
      ]}
      comoFunciona={[
        {
          num: "01",
          titulo: "Turma exclusiva",
          desc: "Grupos pequenos e selecionados para garantir atenção e troca de qualidade.",
        },
        {
          num: "02",
          titulo: "Módulos de narrativa",
          desc: "Conteúdo estruturado em módulos progressivos de storytelling estratégico para marcas.",
        },
        {
          num: "03",
          titulo: "Aplicação prática",
          desc: "Exercícios aplicados à sua marca real — você sai de cada sessão com algo concreto.",
        },
        {
          num: "04",
          titulo: "Mentoria ao vivo",
          desc: "Sessões ao vivo com feedback direto da Isa sobre sua comunicação e narrativa.",
        },
        {
          num: "05",
          titulo: "Comunidade",
          desc: "Acesso ao grupo exclusivo da turma para trocas, dúvidas e networking.",
        },
      ]}
      entregaveis={[
        "Acesso completo aos módulos",
        "Sessões ao vivo com a Isa",
        "Feedback personalizado",
        "Comunidade da turma",
        "Materiais de apoio",
        "Gravações das sessões",
        "Certificado de conclusão",
      ]}
      objecoes={[
        {
          pensamento: "Mentoria em grupo não vai atender minha necessidade específica.",
          resposta:
            "As sessões ao vivo têm espaço dedicado para cada participante. E a diversidade de casos enriquece o aprendizado de todos.",
        },
        {
          pensamento: "Não tenho tempo para acompanhar uma mentoria em grupo.",
          resposta:
            "As sessões são gravadas. Você pode assistir no seu ritmo e aplicar no seu tempo.",
        },
        {
          pensamento: "Minha marca é muito específica para um conteúdo geral.",
          resposta:
            "O método é universal, mas a aplicação é individual. Você aplica tudo à realidade da sua marca.",
        },
      ]}
      proximosServicos={[
        { nome: "Mapa Tático", href: "/servicos/mapa-tatico", cor: "#0cc0df" },
        { nome: "Content Lab", href: "/servicos/content-lab", cor: "#f76307" },
      ]}
      ctaTexto="quero entrar na próxima turma →"
      ctaFrase="pronta para aprender a contar a história da sua marca?"
    />
  );
}
