import ServicePage from "@/components/ServicePage";

export default function ContentLabPage() {
  return (
    <ServicePage
      badge="PRODUÇÃO SOB MEDIDA"
      nome="Content Lab"
      cor="#f76307"
      descricao="Você tem a estratégia. Você tem a marca. O que falta é tempo — e mãos para executar. O Content Lab é a sua equipe de produção de conteúdo estratégico, trabalhando para você."
      citacao="Conteúdo bom não acontece por acaso. É processo, é método, é execução consistente."
      paraQuem={[
        "Tenho estratégia definida, mas não consigo executar sozinha.",
        "Passo horas criando conteúdo e ainda assim não consigo ser consistente.",
        "Quero conteúdo de qualidade sem abrir mão do meu tempo.",
        "Preciso de uma equipe que entenda minha marca e produza por mim.",
        "Meu negócio cresceu e minha produção de conteúdo não acompanhou.",
        "Quero focar no que faço de melhor e delegar a produção de conteúdo.",
      ]}
      comoFunciona={[
        {
          num: "01",
          titulo: "Briefing estratégico",
          desc: "Mergulhamos na sua marca para entender DNA, tom de voz e objetivos de cada projeto.",
        },
        {
          num: "02",
          titulo: "Proposta sob medida",
          desc: "Cada projeto é customizado. Sem pacotes engessados — criamos o que faz sentido para você.",
        },
        {
          num: "03",
          titulo: "Produção com estratégia",
          desc: "Nossa equipe produz com olhar estratégico — não apenas 'fazemos conteúdo', construímos narrativa.",
        },
        {
          num: "04",
          titulo: "Revisão e aprovação",
          desc: "Você revisa tudo antes de publicar. Alinhamento total com a sua visão.",
        },
        {
          num: "05",
          titulo: "Entrega e acompanhamento",
          desc: "Entregas pontuais e suporte para ajustes. Sua marca sempre atualizada.",
        },
      ]}
      entregaveis={[
        "Roteiros e legendas",
        "Calendário editorial",
        "Carrosséis e posts",
        "Stories estratégicos",
        "Reels com roteiro",
        "Newsletter",
        "Textos para blog",
        "Relatório mensal",
      ]}
      objecoes={[
        {
          pensamento: "Ninguém vai escrever com a minha voz.",
          resposta:
            "É exatamente para isso que fazemos o briefing profundo. Estudamos sua linguagem até conseguir replicar com fidelidade.",
        },
        {
          pensamento: "Vou perder o controle da minha comunicação.",
          resposta:
            "Você aprova tudo antes de publicar. O controle é sempre seu — só o esforço de produção é nosso.",
        },
        {
          pensamento: "É um serviço muito caro para meu momento.",
          resposta:
            "O Content Lab tem soluções para diferentes momentos. Vamos conversar e encontrar o que faz sentido para você agora.",
        },
      ]}
      proximosServicos={[
        { nome: "Mapa Tático", href: "/servicos/mapa-tatico", cor: "#0cc0df" },
        { nome: "Gestão de Marca", href: "/servicos/gestao-de-marca", cor: "#8c52ff" },
      ]}
      ctaTexto="quero conversar sobre meu projeto →"
      ctaFrase="pronta para ter conteúdo estratégico sem sacrificar seu tempo?"
    />
  );
}
