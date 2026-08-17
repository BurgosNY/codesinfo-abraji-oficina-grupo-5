window.HISTORY = {
  group: 5,
  dateLabel: "31 de julho de 2026",
  collectedLabel: "17 de agosto de 2026",
  phases: {
    abertura: "Definição inicial",
    brief: "Consolidação do produto",
    entrega: "Primeira publicação",
    revisao: "Correção de escopo",
  },
  decisions: [
    "Ferramenta voltada a jornalistas que acompanham notícias paraguaias relacionadas ao Brasil e a brasileiros.",
    "Monitoramento de dez veículos públicos com domínio paraguaio definidos pelo grupo.",
    "Cada resultado deve trazer título, veículo, data, categoria, resumo e link para a notícia original.",
    "Resultados organizados por atualidade e relevância, com filtros editoriais de data e categoria.",
    "A classificação automática serve apenas como apoio e não pode inventar fatos ou links.",
    "A primeira página publicada usa cartões de demonstração e não representa ainda o produto final.",
    "A revisão pede notícias reais dos sites indicados e continua pendente de implementação.",
  ],
  status: {
    title: "DEMONSTRAÇÃO PUBLICADA — REVISÃO NECESSÁRIA",
    text: "A versão ba6d6cd5 foi publicada, mas a correção posterior registrou que os cartões são demonstrativos. A próxima versão precisa exibir notícias reais dos veículos paraguaios indicados.",
  },
  messages: [
    {
      phase: "abertura", kind: "projeto", role: "pessoa", author: "nataliasilvamp", time: "11:34:49", datetime: "2026-07-31T11:34:49-03:00",
      body: "@Oficina Codex quero criar um app",
      url: "https://codesinfo-abraji.slack.com/archives/C0BM0JS9G8N/p1785508489825109",
    },
    {
      phase: "abertura", kind: "projeto", role: "app", author: "Oficina Codex", time: "11:34:56", datetime: "2026-07-31T11:34:56-03:00", edited: true,
      body: "Vamos fechar um MVP pequeno antes de construir. Qual problema o app resolve, quem vai usá-lo, qual é a ação principal, que informação entra e qual resultado precisa sair? Com essas respostas, organizo o BRIEF.md.",
      url: "https://codesinfo-abraji.slack.com/archives/C0BM0JS9G8N/p1785508496658209",
    },
    {
      phase: "brief", kind: "projeto", role: "pessoa", author: "nataliasilvamp", time: "11:41:36", datetime: "2026-07-31T11:41:36-03:00",
      body: "@Oficina Codex queremos uma ferramenta para jornalistas que monitore notícias de sites com domínio .py, do Paraguai, que mencionem o Brasil ou brasileiros.",
      url: "https://codesinfo-abraji.slack.com/archives/C0BM0JS9G8N/p1785508896118759",
    },
    {
      phase: "brief", kind: "status", role: "app", author: "Oficina Codex", time: "11:42:34", datetime: "2026-07-31T11:42:34-03:00", edited: true,
      body: "Brief consolidado como BRIEF_READY: um site responsivo para jornalistas acompanharem notícias paraguaias sobre o Brasil ou brasileiros, com resultados relevantes e recentes. A construção aguardava a aprovação do facilitador.",
      url: "https://codesinfo-abraji.slack.com/archives/C0BM0JS9G8N/p1785508954279779",
    },
    {
      phase: "brief", kind: "conversa", role: "pessoa", author: "nataliasilvamp", time: "11:45:59", datetime: "2026-07-31T11:45:59-03:00",
      body: "@Oficina Codex pode criar a primeira versão do site",
      url: "https://codesinfo-abraji.slack.com/archives/C0BM0JS9G8N/p1785509159349289",
    },
    {
      phase: "brief", kind: "status", role: "app", author: "Oficina Codex", time: "11:46:11", datetime: "2026-07-31T11:46:11-03:00",
      body: "O brief está pronto, mas a construção continua desativada até a aprovação do facilitador.",
      url: "https://codesinfo-abraji.slack.com/archives/C0BM0JS9G8N/p1785509171319239",
    },
    {
      phase: "entrega", kind: "status", role: "sistema", author: "Sistema da oficina", time: "11:48:27", datetime: "2026-07-31T11:48:27-03:00",
      body: "O facilitador aprovou o brief ba6d6cd5. A primeira versão entrou em construção.",
      url: "https://codesinfo-abraji.slack.com/archives/C0BM0JS9G8N/p1785509307504779",
    },
    {
      phase: "entrega", kind: "status", role: "app", author: "Oficina Codex", time: "11:56:21", datetime: "2026-07-31T11:56:21-03:00",
      body: `SITE PUBLICADO — https://codesinfo-abraji-oficina-grupo-5.burgos.chatgpt.site

Esta é a versão ba6d6cd5. Enviem as revisões neste canal.

Monitor PY Brasil`,
      url: "https://codesinfo-abraji.slack.com/archives/C0BM0JS9G8N/p1785509781093949",
    },
    {
      phase: "revisao", kind: "status", role: "app", author: "Oficina Codex", time: "12:02:46", datetime: "2026-07-31T12:02:46-03:00",
      body: `CORREÇÃO DE ESCOPO — a versão atual usa cartões de demonstração. O produto pedido precisa mostrar notícias reais e públicas de sites paraguaios, com título, veículo, data, resumo e link original, organizadas por atualidade e relevância.

A classificação automática deve servir apenas como apoio editorial e não pode inventar informações. Por isso, a página atual deve ser tratada como demonstração visual, não como versão final.`,
      url: "https://codesinfo-abraji.slack.com/archives/C0BM0JS9G8N/p1785510166239849",
    },
    {
      phase: "revisao", kind: "projeto", role: "pessoa", author: "nataliasilvamp", time: "12:06:30", datetime: "2026-07-31T12:06:30-03:00",
      body: `Os sites são:
• abc.com.py
• ultimahora.com
• lanacion.com.py
• hoy.com.py
• paraguay.com
• npy.com.py
• unicanal.com.py
• popular.com.py
• cronica.com.py
• 5dias.com.py`,
      url: "https://codesinfo-abraji.slack.com/archives/C0BM0JS9G8N/p1785510390632159",
    },
    {
      phase: "revisao", kind: "projeto", role: "pessoa", author: "nataliasilvamp", time: "12:10:05", datetime: "2026-07-31T12:10:05-03:00", edited: true,
      body: "@Oficina Codex ajuste o site para extrair, dos veículos listados, notícias que mencionem Brasil ou brasileiros. Em cada resultado, indique também a data e a categoria da notícia.",
      url: "https://codesinfo-abraji.slack.com/archives/C0BM0JS9G8N/p1785510605180829",
    },
  ],
};
