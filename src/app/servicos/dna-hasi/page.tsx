import ServicePage from "@/components/ServicePage";

export default function DNAHasi() {
  return (
    <ServicePage
      badge="PORTA DE ENTRADA DA ESTEIRA HASI"
      nome="DNA Hasi"
      cor="#f76307"
      descricao="O ponto de partida para tudo. O DNA Hasi é o processo de imersão profunda na sua marca — quem você é, o que você defende, para quem você fala e como você quer ser lembrada."
      citacao="Antes de comunicar, você precisa saber o que dizer. O DNA Hasi cria essa base."
      paraQuem={[
        "Estou começando minha marca do zero e não sei por onde começar.",
        "Tenho um negócio funcionando, mas sinto que não tenho identidade.",
        "Minha comunicação está inconsistente e não representa quem eu sou.",
        "Quero parar de copiar referências e ter uma marca com DNA próprio.",
        "Já tentei criar conteúdo, mas nunca sinto que 'encaixa'.",
        "Preciso de clareza antes de investir em qualquer outra estratégia.",
      ]}
      comoFunciona={[
        {
          num: "01",
          titulo: "Imersão de marca",
          desc: "Questionário aprofundado e sessão de escuta ativa para entender sua história, valores e visão.",
        },
        {
          num: "02",
          titulo: "Construção do DNA",
          desc: "Desenvolvemos sua essência: propósito, posicionamento, personalidade e tom de voz únicos.",
        },
        {
          num: "03",
          titulo: "Entrega do documento",
          desc: "Você recebe um documento completo com tudo estruturado — seu mapa de identidade de marca.",
        },
        {
          num: "04",
          titulo: "Sessão de apresentação",
          desc: "Apresentamos o DNA completo, tiramos dúvidas e alinhamos os próximos passos.",
        },
      ]}
      entregaveis={[
        "Documento de DNA de Marca",
        "Posicionamento estratégico",
        "Tom de voz e linguagem",
        "Público-alvo definido",
        "Proposta de valor",
        "Pilares de conteúdo",
        "Sessão de apresentação ao vivo",
      ]}
      objecoes={[
        {
          pensamento: "Já sei quem minha marca é, não preciso disso.",
          resposta:
            "Saber intuitivamente é diferente de ter isso documentado e estruturado. O DNA transforma sensação em estratégia.",
        },
        {
          pensamento: "É caro investir nisso antes de ter resultado.",
          resposta:
            "É mais caro criar conteúdo sem direção por meses e não ter resultado nenhum. O DNA é o investimento que antecede tudo.",
        },
        {
          pensamento: "Tenho pouco tempo para dedicar a isso agora.",
          resposta:
            "O processo foi desenhado para ser eficiente. A maior parte do trabalho é nossa — você precisa de poucas horas de participação.",
        },
        {
          pensamento: "Vou esperar minha marca crescer mais para fazer isso.",
          resposta:
            "Marcas que crescem sem base de identidade crescem frágeis. Quanto antes você tiver seu DNA, mais sólido será o crescimento.",
        },
      ]}
      proximosServicos={[
        { nome: "Arquitetura Narrativa", href: "/servicos/arquitetura-narrativa", cor: "#8c52ff" },
        { nome: "Mapa Tático", href: "/servicos/mapa-tatico", cor: "#0cc0df" },
      ]}
      ctaTexto="quero meu DNA hasi →"
      ctaFrase="pronta para construir a base da sua marca com intenção?"
    />
  );
}
