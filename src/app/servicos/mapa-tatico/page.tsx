import ServicePage from "@/components/ServicePage";

export default function MapaTaticoPage() {
  return (
    <ServicePage
      badge="INDIVIDUAL · RECORRENTE · ESTRATÉGICO"
      nome="Mapa Tático"
      cor="#0cc0df"
      descricao="Você sabe comunicar, mas falta uma estratégia que guie cada ação. O Mapa Tático é uma consultoria individual e recorrente para transformar sua comunicação em um sistema estratégico de crescimento."
      citacao="Estratégia não é um documento — é uma bússola. O Mapa Tático é a sua."
      paraQuem={[
        "Crio conteúdo, mas sem um plano claro de onde quero chegar.",
        "Fico perdida sobre o que postar, quando e por quê.",
        "Quero um olhar externo e estratégico sobre minha comunicação.",
        "Tenho objetivos de crescimento mas não sei como estruturar o caminho.",
        "Preciso de alguém para me ajudar a pensar estrategicamente todo mês.",
        "Quero parar de reagir e começar a planejar com antecedência.",
      ]}
      comoFunciona={[
        {
          num: "01",
          titulo: "Diagnóstico inicial",
          desc: "Análise completa da sua presença atual — o que está funcionando, o que não está e por quê.",
        },
        {
          num: "02",
          titulo: "Definição de objetivos",
          desc: "Alinhamos metas claras e mensuráveis para guiar toda a estratégia.",
        },
        {
          num: "03",
          titulo: "Criação do mapa",
          desc: "Desenvolvemos seu plano estratégico: temas, formatos, frequência e distribuição.",
        },
        {
          num: "04",
          titulo: "Sessões mensais",
          desc: "Encontros regulares para revisar resultados, ajustar a estratégia e planejar o próximo ciclo.",
        },
        {
          num: "05",
          titulo: "Suporte contínuo",
          desc: "Canal direto de comunicação para dúvidas e alinhamentos entre as sessões.",
        },
      ]}
      entregaveis={[
        "Diagnóstico de marca",
        "Planejamento estratégico mensal",
        "Calendário de conteúdo",
        "Sessões de consultoria ao vivo",
        "Relatório de performance",
        "Suporte via mensagens",
        "Ajustes estratégicos contínuos",
      ]}
      objecoes={[
        {
          pensamento: "Posso fazer meu próprio planejamento.",
          resposta:
            "Pode. Mas um olhar externo especializado identifica pontos cegos que você não consegue ver sozinha — e faz toda a diferença nos resultados.",
        },
        {
          pensamento: "Um plano mensal é muito engessado para minha rotina.",
          resposta:
            "O mapa é flexível por natureza. Ele te dá direção sem tirar sua liberdade criativa.",
        },
        {
          pensamento: "Vou esperar ter mais seguidores para investir em estratégia.",
          resposta:
            "Estratégia é o que leva você a ter mais seguidores. Esperar só atrasa o crescimento.",
        },
      ]}
      proximosServicos={[
        { nome: "Content Lab", href: "/servicos/content-lab", cor: "#f76307" },
        { nome: "Gestão de Marca", href: "/servicos/gestao-de-marca", cor: "#8c52ff" },
      ]}
      ctaTexto="quero meu mapa tático →"
      ctaFrase="pronta para ter uma estratégia que guia cada passo da sua marca?"
    />
  );
}
