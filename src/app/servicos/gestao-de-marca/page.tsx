import ServicePage from "@/components/ServicePage";

export default function GestaoPage() {
  return (
    <ServicePage
      badge="GESTÃO ESTRATÉGICA COMPLETA"
      nome="Gestão de Marca"
      cor="#8c52ff"
      descricao="Você tem DNA, narrativa, estratégia e produção. Agora quer crescer de verdade — com consistência, escalabilidade e uma parceira estratégica ao seu lado em cada decisão."
      citacao="Crescer sem gestão é arriscado. Crescer com gestão estratégica é inevitável."
      paraQuem={[
        "Minha marca está funcionando bem, mas quero ir para o próximo nível.",
        "Preciso de uma parceira estratégica, não apenas de uma prestadora de serviços.",
        "Quero consistência total na comunicação sem precisar pensar em cada detalhe.",
        "Tenho objetivos ambiciosos de crescimento e preciso de suporte para chegar lá.",
        "Minha marca precisa de olhar 360° — estratégia, produção e gestão integrados.",
        "Quero focar 100% no meu negócio enquanto a Hasi cuida da minha marca.",
      ]}
      comoFunciona={[
        {
          num: "01",
          titulo: "Imersão total",
          desc: "Análise completa da marca: posicionamento, comunicação, performance e oportunidades.",
        },
        {
          num: "02",
          titulo: "Plano estratégico 90 dias",
          desc: "Mapa de crescimento com metas, ações e KPIs claros para os próximos três meses.",
        },
        {
          num: "03",
          titulo: "Gestão da comunicação",
          desc: "Produção, publicação e gestão completa dos canais de comunicação da sua marca.",
        },
        {
          num: "04",
          titulo: "Reuniões estratégicas",
          desc: "Encontros regulares para alinhar visão, revisar resultados e ajustar o rumo.",
        },
        {
          num: "05",
          titulo: "Relatórios de crescimento",
          desc: "Dashboards e análises de performance para você acompanhar cada resultado.",
        },
        {
          num: "06",
          titulo: "Evolução contínua",
          desc: "Revisão e otimização constante da estratégia conforme a marca cresce.",
        },
      ]}
      entregaveis={[
        "Gestão estratégica completa",
        "Produção de conteúdo",
        "Planejamento 90 dias",
        "Reuniões semanais",
        "Relatórios de performance",
        "Gestão de crises",
        "Estratégia de crescimento",
        "Suporte prioritário",
        "Análise de concorrência",
      ]}
      objecoes={[
        {
          pensamento: "Perco autonomia sobre minha marca.",
          resposta:
            "Você define a visão, a gente executa. Todas as decisões estratégicas passam por você — ampliamos sua capacidade, não substituímos sua direção.",
        },
        {
          pensamento: "É um investimento muito alto.",
          resposta:
            "Gestão de marca é o serviço de maior retorno que existe. Uma marca bem gerida cresce mais rápido e com mais solidez.",
        },
        {
          pensamento: "Minha marca ainda não é grande o suficiente.",
          resposta:
            "Não esperamos a marca crescer para começar a gerenciá-la bem. Gestão estratégica é o que faz a marca crescer.",
        },
        {
          pensamento: "Como sei que vou ter resultados?",
          resposta:
            "Trabalhamos com metas claras e reportamos cada resultado. Você acompanha tudo em tempo real.",
        },
      ]}
      proximosServicos={[]}
      ctaTexto="quero conversar sobre gestão de marca →"
      ctaFrase="pronta para uma parceria estratégica completa?"
    />
  );
}
