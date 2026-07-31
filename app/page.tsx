"use client";

import { useMemo, useState } from "react";

const stories = [
  { title:"Empresariado brasileiro conhece oportunidades de investimento com foco no Mercosul", summary:"Autoridades paraguaias apresentaram ao setor privado brasileiro projetos de integração produtiva, indústria e geração de empregos.", source:"La Nación", domain:"lanacion.com.py", date:"22 jul 2026", isoDate:"2026-07-22", topic:"Economia", relevance:96, reason:"Brasil é o público central e há impacto bilateral direto em investimento e emprego.", url:"https://www.lanacion.com.py/negocios/2026/07/22/presentan-al-empresariado-brasileno-oportunidades-de-inversion-con-enfoque-en-el-mercosur/" },
  { title:"Ponte Bioceânica concretiza união física entre Paraguai e Brasil pelo Chaco", summary:"A conclusão da ligação estrutural entre Carmelo Peralta e Puerto Murtinho marca uma nova etapa do Corredor Bioceânico.", source:"ABC Color", domain:"abc.com.py", date:"16 jul 2026", isoDate:"2026-07-16", topic:"Infraestrutura", relevance:94, reason:"Obra binacional com efeito logístico e econômico direto para os dois países.", url:"https://www.abc.com.py/nacionales/chaco/2026/07/16/puente-de-la-bioceanica-se-concreto-anoche-la-union-de-paraguay-y-brasil-por-territorio-chaqueno/" },
  { title:"Brasileiros se solidarizam com paraguaios após grave acidente em Santa Catarina", summary:"Moradores, empresas e voluntários de Maravilha mobilizaram doações e acolhimento para vítimas e familiares paraguaios.", source:"La Nación", domain:"lanacion.com.py", date:"16 jul 2026", isoDate:"2026-07-16", topic:"Fronteira", relevance:92, reason:"Envolve cidadãos paraguaios no Brasil e assistência direta da comunidade local.", url:"https://www.lanacion.com.py/pais/2026/07/16/brasilenos-se-solidarizan-con-paraguayos-afectados-por-grave-accidente/" },
  { title:"Cooperação contra o crime organizado entra na agenda entre Paraguai e Brasil", summary:"Os governos discutiram coordenação bilateral para enfrentar crime transnacional e terrorismo.", source:"ABC Color", domain:"abc.com.py", date:"15 jul 2026", isoDate:"2026-07-15", topic:"Segurança", relevance:89, reason:"Decisão governamental bilateral com impacto relevante para a faixa de fronteira.", url:"https://www.abc.com.py/politica/2026/07/15/lula-envia-a-su-ministro-para-fortalecer-cooperacion-contra-el-crimen-organizado/" },
  { title:"Brasil mantém posição de maior comprador das exportações paraguaias", summary:"Dados da Ventanilla Única de Exportaciones colocam o mercado brasileiro à frente de Argentina e Chile em junho.", source:"La Nación", domain:"lanacion.com.py", date:"14 jul 2026", isoDate:"2026-07-14", topic:"Economia", relevance:86, reason:"Traz indicador econômico comparável sobre a dependência comercial com o Brasil.", url:"https://www.lanacion.com.py/negocios/2026/07/14/america-se-consolida-como-el-motor-indiscutible-de-las-exportaciones-paraguayas/" },
  { title:"Interesse do Brasil em acordo com a China repercute na relação do Paraguai com Taiwan", summary:"O debate comercial no Mercosul voltou a colocar em pauta a posição diplomática paraguaia diante de Pequim.", source:"ABC Color", domain:"abc.com.py", date:"5 jul 2026", isoDate:"2026-07-05", topic:"Relações exteriores", relevance:82, reason:"Movimento brasileiro pode alterar o contexto comercial e diplomático do Paraguai.", url:"https://www.abc.com.py/politica/2026/07/05/taiwan-interes-del-brasil-de-un-acuerdo-con-china-reavivo-cruce-con-paraguay/" },
];
const topics = ["Todos", ...Array.from(new Set(stories.map((story) => story.topic)))];

export default function Home() {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("Todos");
  const [source, setSource] = useState("Todas");
  const [sort, setSort] = useState("relevance");
  const visibleStories = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("pt-BR");
    return stories.filter((story) => topic === "Todos" || story.topic === topic)
      .filter((story) => source === "Todas" || story.source === source)
      .filter((story) => !normalized || `${story.title} ${story.summary} ${story.topic}`.toLocaleLowerCase("pt-BR").includes(normalized))
      .sort((a,b) => sort === "date" ? b.isoDate.localeCompare(a.isoDate) : b.relevance-a.relevance);
  }, [query, sort, source, topic]);

  return <main>
    <header className="topbar"><a className="brand" href="#inicio"><span className="brandMark">FF</span><span>Fronteira em Foco</span></a><div className="live"><span/> Monitor ativo</div></header>
    <section className="hero" id="inicio"><div className="eyebrow">RADAR PARAGUAI → BRASIL</div><h1>O que atravessa<br/>a fronteira hoje?</h1><p className="dek">Uma leitura rápida de veículos paraguaios sobre fatos que envolvem o Brasil e brasileiros — com fonte, contexto e prioridade editorial visíveis.</p><div className="snapshot"><div><strong>6</strong><span>notícias selecionadas</span></div><div><strong>2</strong><span>fontes .py monitoradas</span></div><div><strong>31 jul</strong><span>última coleta · 11:55 BRT</span></div></div></section>
    <section className="workspace" aria-labelledby="results-title">
      <aside className="filters" aria-label="Filtros do monitor"><label className="searchLabel" htmlFor="search">Buscar no radar</label><div className="searchBox"><span>⌕</span><input id="search" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Tema, lugar ou palavra-chave"/></div>
        <fieldset><legend>Tema</legend><div className="filterList">{topics.map((item)=><button key={item} className={topic===item?"active":""} onClick={()=>setTopic(item)}><span>{item}</span><small>{item==="Todos"?stories.length:stories.filter((story)=>story.topic===item).length}</small></button>)}</div></fieldset>
        <fieldset><legend>Fonte</legend><select value={source} onChange={(e)=>setSource(e.target.value)}><option>Todas</option><option>ABC Color</option><option>La Nación</option></select></fieldset>
        <div className="method"><span>Como priorizamos</span><p>Atualidade, presença explícita de Brasil ou brasileiros e impacto bilateral. A pontuação orienta a leitura — não substitui decisão editorial.</p></div>
      </aside>
      <div className="results"><div className="resultsHead"><div><p className="kicker">SELEÇÃO EDITORIAL AUTOMATIZADA</p><h2 id="results-title">{visibleStories.length} {visibleStories.length===1?"resultado":"resultados"}</h2></div><label>Ordenar<select value={sort} onChange={(e)=>setSort(e.target.value)}><option value="relevance">Mais relevantes</option><option value="date">Mais recentes</option></select></label></div>
        {visibleStories.length?<div className="storyList">{visibleStories.map((story,index)=><article className="story" key={story.url}><div className="rank"><span>{String(index+1).padStart(2,"0")}</span><div className="score"><i style={{height:`${story.relevance}%`}}/></div><small>{story.relevance}</small></div><div className="storyBody"><div className="meta"><span className="topic">{story.topic}</span><span>{story.source}</span><span>{story.date}</span></div><h3><a href={story.url} target="_blank" rel="noreferrer">{story.title}</a></h3><p>{story.summary}</p><details><summary>Por que entrou no radar</summary><p>{story.reason}</p></details><div className="sourceLine"><span>{story.domain}</span><a href={story.url} target="_blank" rel="noreferrer">Abrir matéria original ↗</a></div></div></article>)}</div>:<div className="empty"><strong>Nenhum resultado</strong><p>Tente retirar um filtro ou buscar outro termo.</p><button onClick={()=>{setQuery("");setTopic("Todos");setSource("Todas");}}>Limpar filtros</button></div>}
      </div>
    </section>
    <footer><div><strong>Fronteira em Foco</strong><span>Protótipo do Grupo 5 · Oficina Codesinfo</span></div><p>Fontes públicas e links para os veículos originais. Resumos editoriais; não reproduzimos conteúdo integral.</p></footer>
  </main>;
}
