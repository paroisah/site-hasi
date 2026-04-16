export type Post = {
  slug: string;
  titulo: string;
  categoria: "empreendedorismo" | "instagram" | "marketing";
  previa: string;
  leitura: string;
  data: string;
  destaque: boolean;
  curtidas_inicial: number;
  compartilhamentos_inicial: number;
  capa?: string;
  conteudo: Bloco[];
};

export type Bloco =
  | { tipo: "paragrafo"; texto: string }
  | { tipo: "subtitulo"; texto: string }
  | { tipo: "citacao"; texto: string }
  | { tipo: "lista"; itens: string[] };

export const posts: Post[] = [
  {
    slug: "como-construir-uma-marca-que-as-pessoas-defendem",
    titulo: "Como construir uma marca que as pessoas defendem — e não apenas seguem",
    categoria: "empreendedorismo",
    previa: "Existe uma diferença enorme entre ter seguidores e ter uma comunidade. Uma marca defendida é uma marca com alma.",
    leitura: "6 min de leitura",
    data: "10 dez 2025",
    destaque: true,
    curtidas_inicial: 67,
    compartilhamentos_inicial: 41,
    capa: "/capa-como-construir-uma-marca-que-as-pessoas-defendem.png",
    conteudo: [
      {
        tipo: "paragrafo",
        texto: "Toda empreendedora quer crescer no digital. Mais seguidores, mais alcance, mais visibilidade. Mas existe uma pergunta que poucas fazem antes de traçar qualquer estratégia: as pessoas que me seguem me defenderiam se alguém me atacasse?"
      },
      {
        tipo: "paragrafo",
        texto: "Essa pergunta parece simples, mas ela revela tudo sobre a profundidade da relação que sua marca constrói com o público. Seguidores são passivos. Defensores são ativos. E a diferença entre os dois não está no número de posts, na frequência de publicação ou no orçamento de anúncios — está na identidade."
      },
      {
        tipo: "subtitulo",
        texto: "O problema do crescimento vazio"
      },
      {
        tipo: "paragrafo",
        texto: "Muitas marcas crescem. Chegam a 10 mil, 50 mil, 100 mil seguidores. E mesmo assim continuam dependendo de promoções para vender, de trends para ter alcance, de hacks para existir. Esse é o crescimento vazio: número sem substância, presença sem marca."
      },
      {
        tipo: "paragrafo",
        texto: "O crescimento vazio acontece quando a marca não tem um ponto de vista claro. Quando publica para agradar ao algoritmo, não para se comunicar com pessoas. Quando o conteúdo é sobre o produto, não sobre o que o produto representa na vida de quem compra."
      },
      {
        tipo: "citacao",
        texto: "Uma marca com alma não precisa pedir para ser defendida. As pessoas fazem isso espontaneamente — porque se identificam, porque confiam, porque sentem que aquela marca as representa."
      },
      {
        tipo: "subtitulo",
        texto: "O que cria uma comunidade de verdade"
      },
      {
        tipo: "paragrafo",
        texto: "Comunidades reais não são construídas com estratégias de engajamento. São construídas com consistência de posicionamento. Isso significa que sua marca precisa saber — e dizer claramente — o que defende, o que recusa, o que acredita e para quem existe."
      },
      {
        tipo: "lista",
        itens: [
          "Tenha um ponto de vista: marcas que não têm opinião são esquecidas. As que têm são lembradas — e às vezes polarizam, e tudo bem.",
          "Fale para alguém específico: quanto mais você tenta falar para todo mundo, menos você ressoa com alguém. Defina com quem você quer se conectar de verdade.",
          "Seja consistente no que você é: o tom de voz, os valores, a estética — tudo precisa dizer a mesma coisa. Inconsistência gera desconfiança.",
          "Mostre o que acontece nos bastidores: transparência cria proximidade. Pessoas defendem o que conhecem de verdade."
        ]
      },
      {
        tipo: "subtitulo",
        texto: "A marca que não precisa de validação externa"
      },
      {
        tipo: "paragrafo",
        texto: "Existe um estágio de maturidade de marca que poucas chegam: quando você para de seguir tendências para existir, e começa a criar tendências porque existe. Esse estágio não é sorte. É o resultado de anos de posicionamento consistente, de comunicação com intenção, de construção de significado — não apenas de conteúdo."
      },
      {
        tipo: "paragrafo",
        texto: "Sua marca pode chegar lá. Mas o caminho começa antes de qualquer post, qualquer campanha, qualquer estratégia. Começa com a pergunta: o que eu quero que as pessoas sintam quando pensam em mim?"
      },
      {
        tipo: "paragrafo",
        texto: "A resposta para essa pergunta é a fundação de tudo. É o que separa uma marca que as pessoas seguem de uma marca que as pessoas defendem."
      }
    ]
  },
  {
    slug: "por-que-sua-taxa-de-engajamento-caiu",
    titulo: "Por que sua taxa de engajamento caiu — e o que fazer agora",
    categoria: "instagram",
    previa: "Antes de culpar o algoritmo, veja o que realmente está acontecendo com o seu conteúdo.",
    leitura: "4 min de leitura",
    data: "15 out 2025",
    destaque: false,
    curtidas_inicial: 48,
    compartilhamentos_inicial: 29,
    conteudo: [
      {
        tipo: "paragrafo",
        texto: "O engajamento caiu. Os stories estão com menos visualizações. Os reels não estão alcançando quem deviam. E a primeira conclusão que quase todo mundo chega é: o algoritmo mudou."
      },
      {
        tipo: "paragrafo",
        texto: "Talvez. Mas o algoritmo muda o tempo todo — e mesmo assim existem perfis que crescem consistentemente, independente de qualquer atualização. O que eles sabem que você ainda não aplicou?"
      },
      {
        tipo: "subtitulo",
        texto: "O algoritmo não é seu inimigo — ele é um espelho"
      },
      {
        tipo: "paragrafo",
        texto: "O Instagram distribui conteúdo com base no comportamento do usuário. Se as pessoas que te seguem não estão interagindo com o que você publica, o algoritmo interpreta isso como um sinal: esse conteúdo não é relevante para esse público. E distribui menos."
      },
      {
        tipo: "paragrafo",
        texto: "O problema, na maioria dos casos, não é técnico. É de relevância. O conteúdo que você está criando não está gerando o comportamento que o algoritmo quer ver — e isso acontece por três razões principais."
      },
      {
        tipo: "lista",
        itens: [
          "Você cresceu, mas seu conteúdo não acompanhou: o público que você conquistou no início pode não ser o mesmo que você quer hoje. E o conteúdo que trouxe esses seguidores pode não ser o que vai reter quem você quer atrair agora.",
          "Consistência virou rotina — e rotina virou invisibilidade: postar com frequência é bom. Mas postar a mesma coisa de formas diferentes, sem evolução, faz com que o público deixe de prestar atenção.",
          "Você está criando para agradar, não para conectar: conteúdo que tenta ser tudo para todos não é nada para ninguém."
        ]
      },
      {
        tipo: "subtitulo",
        texto: "O que fazer agora"
      },
      {
        tipo: "paragrafo",
        texto: "Antes de mudar o que você posta, entenda quem ainda está te ouvindo. Olhe para os insights: quem são as pessoas que mais interagem? Elas são o público que você quer? Se sim, aprofunde o conteúdo para elas. Se não, você tem um problema de atração — e a solução não é postar mais, é postar diferente."
      },
      {
        tipo: "citacao",
        texto: "Engajamento não é uma métrica de vaidade. É um indicador de relevância. E relevância se constrói — não se compra, não se hackeia."
      },
      {
        tipo: "paragrafo",
        texto: "Revise seus últimos 30 posts. Quais tiveram mais engajamento? O que eles têm em comum? Formato, tema, tom, horário? Esses padrões são a sua bússola. O algoritmo não é seu inimigo — ele está te dizendo o que funciona. A questão é se você está ouvindo."
      }
    ]
  },
  {
    slug: "tendencias-de-conteudo-2025-mercado-feminino",
    titulo: "Tendências de conteúdo que vão dominar o mercado feminino em 2025",
    categoria: "marketing",
    previa: "O comportamento do consumidor feminino está mudando. Veja como se posicionar à frente.",
    leitura: "5 min de leitura",
    data: "14 fev 2025",
    destaque: false,
    curtidas_inicial: 53,
    compartilhamentos_inicial: 34,
    conteudo: [
      {
        tipo: "paragrafo",
        texto: "O mercado feminino de estética, moda e beleza passou por uma transformação profunda nos últimos anos. A consumidora mudou. Ela está mais exigente, mais informada e, principalmente, mais cansada de conteúdo que só quer vender sem entregar valor real."
      },
      {
        tipo: "paragrafo",
        texto: "2025 não é o ano de apostar em mais volume. É o ano de apostar em mais profundidade. As marcas que vão se destacar são as que entenderem o que a consumidora feminina realmente quer — não apenas o que ela compra."
      },
      {
        tipo: "subtitulo",
        texto: "1. A era da autenticidade radical"
      },
      {
        tipo: "paragrafo",
        texto: "A estética polida, o feed perfeito e os vídeos com edição pesada estão perdendo espaço para algo que parece simples mas é profundamente estratégico: a realidade. Não a realidade editada, mas a realidade pensada. A consumidora quer ver o processo, a dúvida, a decisão, o erro. Quer sentir que a pessoa por trás da marca é real."
      },
      {
        tipo: "subtitulo",
        texto: "2. Conteúdo de formação, não apenas de informação"
      },
      {
        tipo: "paragrafo",
        texto: "Existe uma diferença fundamental entre informar e formar. Informar é compartilhar um dado. Formar é ajudar alguém a mudar de perspectiva. As marcas que estão crescendo no mercado feminino em 2025 são as que ensinam — de verdade. Que tratam a consumidora como inteligente, não como passiva."
      },
      {
        tipo: "citacao",
        texto: "A consumidora feminina não quer ser convencida. Ela quer ser respeitada. E respeito, no conteúdo, se traduz em profundidade, honestidade e consistência."
      },
      {
        tipo: "subtitulo",
        texto: "3. Comunidade antes de audiência"
      },
      {
        tipo: "paragrafo",
        texto: "O foco em seguidores está cedendo lugar ao foco em comunidade. Grupos menores, mais engajados, mais alinhados com os valores da marca. Isso significa menos esforço em crescimento de número e mais esforço em aprofundamento de relação."
      },
      {
        tipo: "subtitulo",
        texto: "4. Posicionamento como filtro"
      },
      {
        tipo: "paragrafo",
        texto: "Marcas sem ponto de vista claro estão ficando invisíveis. Em 2025, posicionamento não é opcional — é o filtro que separa quem cresce de quem estagnou. A consumidora feminina está escolhendo as marcas que representam algo além do produto. E descartando as que não têm nada a dizer."
      },
      {
        tipo: "paragrafo",
        texto: "A pergunta que sua marca precisa responder não é 'como me destacar?'. É 'por que eu mereço atenção?'. A resposta para essa pergunta é a estratégia de conteúdo mais poderosa que existe."
      }
    ]
  },
  {
    slug: "posicionamento-de-marca-o-erro-que-a-maioria-comete",
    titulo: "Posicionamento de marca: o erro que a maioria das empreendedoras comete",
    categoria: "empreendedorismo",
    previa: "Posicionamento não é nicho. Entenda a diferença e como isso impacta diretamente suas vendas.",
    leitura: "7 min de leitura",
    data: "12 ago 2025",
    destaque: false,
    curtidas_inicial: 61,
    compartilhamentos_inicial: 37,
    conteudo: [
      {
        tipo: "paragrafo",
        texto: "Quando alguém fala em posicionamento de marca, a resposta mais comum é: 'já tenho meu nicho definido'. E aí está o erro. Nicho e posicionamento são conceitos completamente diferentes — e confundir os dois é um dos motivos pelos quais tantas marcas existem mas não são lembradas."
      },
      {
        tipo: "subtitulo",
        texto: "Nicho é onde você atua. Posicionamento é como você é percebida."
      },
      {
        tipo: "paragrafo",
        texto: "Ter um nicho significa que você decidiu atuar em um segmento específico do mercado. Estética, moda plus size, skincare natural. Isso é importante, mas é apenas o primeiro passo. Dentro de qualquer nicho, existem dezenas — às vezes centenas — de marcas atuando. O que vai fazer a consumidora escolher você?"
      },
      {
        tipo: "paragrafo",
        texto: "É aí que entra o posicionamento. Posicionamento não é o que você faz — é o que você representa. É a percepção que as pessoas têm da sua marca mesmo quando você não está falando com elas. É o espaço que você ocupa na mente e no coração do seu público."
      },
      {
        tipo: "citacao",
        texto: "Nicho é categoria. Posicionamento é identidade. E identidade não se cria com um bom feed — se constrói com consistência, clareza e coragem de ter um ponto de vista."
      },
      {
        tipo: "subtitulo",
        texto: "Os três erros mais comuns de posicionamento"
      },
      {
        tipo: "lista",
        itens: [
          "Tentar agradar a todos: quando a marca não tem um ponto de vista claro, ela cria conteúdo genérico. Conteúdo genérico não cria conexão. Sem conexão, não há fidelidade.",
          "Posicionamento baseado no produto, não nos valores: 'somos a melhor clínica de estética da cidade' não é posicionamento. É promessa de produto. Posicionamento é 'somos a marca que acredita que beleza começa de dentro'. Completamente diferente.",
          "Mudar de posicionamento toda vez que o mercado muda: consistência é o ingrediente mais subestimado do branding. Marcas que mudam de identidade com frequência confundem o público — e perdem a confiança que levou tempo para construir."
        ]
      },
      {
        tipo: "subtitulo",
        texto: "Como construir um posicionamento sólido"
      },
      {
        tipo: "paragrafo",
        texto: "O posicionamento começa com três perguntas: Para quem eu existo? O que eu defendo? O que me torna insubstituível? As respostas para essas perguntas precisam ser claras, específicas e corajosas. Marcas que têm medo de se posicionar com clareza têm medo de perder parte do mercado — mas ao tentar não perder ninguém, acabam não retendo ninguém."
      },
      {
        tipo: "paragrafo",
        texto: "Posicionamento de marca não é um exercício de marketing. É um exercício de identidade. E como toda construção de identidade, exige tempo, consistência e a disposição de dizer 'não' para o que não representa quem você é."
      }
    ]
  },
  {
    slug: "conteudo-para-instagram-criar-menos-aparecer-mais",
    titulo: "Conteúdo para Instagram: como criar menos e aparecer mais",
    categoria: "instagram",
    previa: "Consistência não é sobre quantidade — é sobre estratégia. Aprenda a fazer mais com menos.",
    leitura: "5 min de leitura",
    data: "8 jun 2025",
    destaque: false,
    curtidas_inicial: 44,
    compartilhamentos_inicial: 26,
    conteudo: [
      {
        tipo: "paragrafo",
        texto: "A cultura do 'poste todos os dias' criou uma geração de empreendedoras exaustas que produzem muito e crescem pouco. O volume de conteúdo nunca foi garantia de resultado — e o mercado está finalmente aceitando isso."
      },
      {
        tipo: "paragrafo",
        texto: "A questão não é quantas vezes por semana você aparece. É o que acontece quando você aparece. Um post por semana com profundidade, clareza e intenção vale mais — em engajamento, em autoridade, em conversão — do que sete posts genéricos que poderiam ter sido feitos por qualquer outra marca."
      },
      {
        tipo: "subtitulo",
        texto: "O mito da frequência"
      },
      {
        tipo: "paragrafo",
        texto: "O algoritmo favorece consistência — mas consistência não é o mesmo que volume. O Instagram distribui conteúdo para quem engaja com quem publica. Se você posta todo dia mas o público não interage, você está treinando o algoritmo a te ignorar. Se você posta três vezes por semana e as três geram conversa, salvamentos e compartilhamentos, você está treinando o algoritmo a te amplificar."
      },
      {
        tipo: "citacao",
        texto: "A pergunta certa não é 'quantas vezes devo postar?'. É 'o que acontece quando eu posto?'. Se a resposta for 'nada de especial', o problema não é frequência — é relevância."
      },
      {
        tipo: "subtitulo",
        texto: "A estratégia do conteúdo multiplicado"
      },
      {
        tipo: "paragrafo",
        texto: "Uma das formas mais inteligentes de criar menos e aparecer mais é o conceito de conteúdo-âncora: uma ideia central que se desdobra em múltiplos formatos. Um artigo de blog vira um carrossel, que vira três stories, que vira uma frase para o feed, que vira uma pauta de reels. Você criou uma vez e apareceu seis."
      },
      {
        tipo: "lista",
        itens: [
          "Defina 3 a 5 pilares de conteúdo: temas recorrentes que representam os valores e a expertise da sua marca. Todo post deve se encaixar em um deles.",
          "Crie conteúdo-âncora uma vez por semana: algo mais longo, mais profundo. Depois transforme em outros formatos.",
          "Reaproveite com inteligência: um post que performou bem pode ser repostado com um ângulo diferente três meses depois.",
          "Meça o que importa: saves e compartilhamentos indicam valor. Comentários indicam conexão. Foque nesses — não no alcance."
        ]
      },
      {
        tipo: "paragrafo",
        texto: "Aparecer menos mas com mais impacto não é preguiça — é estratégia. É o que permite que você crie com qualidade, mantenha a consistência no longo prazo e, principalmente, preserve a energia para fazer o que realmente importa: construir uma marca com substância."
      }
    ]
  },
  {
    slug: "storytelling-para-marcas-guia-universo-feminino",
    titulo: "Storytelling para marcas: o guia definitivo para o universo feminino",
    categoria: "marketing",
    previa: "Marcas que contam histórias vendem mais, fidelizam mais e são mais lembradas. Aprenda como.",
    leitura: "8 min de leitura",
    data: "20 abr 2025",
    destaque: false,
    curtidas_inicial: 58,
    compartilhamentos_inicial: 33,
    conteudo: [
      {
        tipo: "paragrafo",
        texto: "Storytelling é uma das palavras mais usadas — e mais mal compreendidas — no marketing digital. Para muitos, significa contar a história de como a marca nasceu em um post de Instagram. Para a Hasi, significa algo muito mais estratégico e muito mais poderoso do que isso."
      },
      {
        tipo: "paragrafo",
        texto: "Storytelling de marca não é sobre o passado. É sobre o presente e o futuro. É sobre criar uma narrativa que conecta o que você é com o que o seu público aspira ser. É sobre fazer com que a consumidora se veja na sua história — e queira fazer parte dela."
      },
      {
        tipo: "subtitulo",
        texto: "Por que o storytelling funciona especialmente bem com o público feminino"
      },
      {
        tipo: "paragrafo",
        texto: "A consumidora feminina toma decisões de compra de forma profundamente emocional — e isso não é uma crítica, é uma realidade que o neuromarketing já comprovou exaustivamente. Isso significa que ela não compra apenas o produto. Ela compra a história por trás do produto, os valores que a marca representa, a identidade que ela projeta ao escolher aquela marca."
      },
      {
        tipo: "paragrafo",
        texto: "Marcas que entendem isso não vendem produtos — vendem pertencimento. E pertencimento é o ativo mais valioso que uma marca pode construir."
      },
      {
        tipo: "citacao",
        texto: "A consumidora feminina não quer ser o público da sua história. Ela quer ser a protagonista. O papel da marca é ser o guia — o elemento que ajuda ela a chegar onde quer chegar."
      },
      {
        tipo: "subtitulo",
        texto: "Os elementos de um storytelling de marca eficaz"
      },
      {
        tipo: "lista",
        itens: [
          "Protagonista: sua cliente, não você. A marca é o guia — a pessoa que habilita a transformação, não quem a vive.",
          "Conflito: qual é o problema real que sua cliente enfrenta? Não o problema superficial, mas o problema emocional por trás dele. 'Não sei o que postar' é superficial. 'Tenho medo de não ser suficientemente boa para ser vista' é real.",
          "Transformação: o que muda na vida da sua cliente depois que ela encontra a sua marca? Essa transformação precisa ser específica, crível e aspiracional.",
          "Valores compartilhados: sua narrativa precisa refletir o que você e sua cliente acreditam. Quando os valores se alinham, a conexão é instantânea."
        ]
      },
      {
        tipo: "subtitulo",
        texto: "Storytelling na prática"
      },
      {
        tipo: "paragrafo",
        texto: "Contar histórias não significa escrever textos longos. Significa que cada ponto de contato da sua marca — o post, o story, a embalagem, o atendimento, o e-mail — precisa ser coerente com a narrativa maior que você está construindo. É a soma de todas essas partes que cria uma marca memorável."
      },
      {
        tipo: "paragrafo",
        texto: "Comece respondendo: qual é a história que minha marca está contando agora? Não a que você quer contar — a que realmente está sendo contada, com base no que você publica, no que você diz e no que você não diz. Essa análise honesta é o primeiro passo para construir um storytelling que realmente vende."
      }
    ]
  }
];

export const corCategoria: Record<string, string> = {
  empreendedorismo: "#f76307",
  instagram: "#8c52ff",
  marketing: "#0cc0df",
};

export const nomeCategoria: Record<string, string> = {
  empreendedorismo: "empreendedorismo feminino",
  instagram: "instagram e redes sociais",
  marketing: "marketing em alta",
};
