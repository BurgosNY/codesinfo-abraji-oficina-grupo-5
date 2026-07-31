const stories = [
  {
    priority: "Alta",
    source: "Fonte .py aprovada",
    time: "Hoje, 09:40",
    tag: "Fronteira",
    title: "Monitoramento inicial identifica pauta transfronteiriça com impacto no Brasil",
    summary:
      "Exemplo de card editorial: o painel reúne título, resumo, data e link da matéria original para acelerar a triagem da redação.",
  },
  {
    priority: "Média",
    source: "Fonte .py aprovada",
    time: "Hoje, 08:15",
    tag: "Economia",
    title: "Notícia paraguaia menciona circulação e comércio em cidades de fronteira",
    summary:
      "A relevância é uma ajuda de leitura, não uma decisão editorial automática. A equipe confere sempre a fonte antes de publicar.",
  },
  {
    priority: "Média",
    source: "Fonte .py aprovada",
    time: "Ontem, 18:20",
    tag: "Sociedade",
    title: "Tema local ganha interesse para brasileiros que vivem ou circulam na região",
    summary:
      "Os resultados exibem apenas informações públicas e apontam para o conteúdo original, sem reproduzir matérias integralmente.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Monitor Py Brasil">
          <span className="brand-mark" aria-hidden="true">M</span>
          <span>Monitor <b>PY</b> Brasil</span>
        </a>
        <span className="status"><i /> Painel demonstrativo</span>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">MONITORAMENTO EDITORIAL · PARAGUAI → BRASIL</p>
        <h1>O que merece atenção<br />na fronteira, agora.</h1>
        <p className="lede">
          Um ponto de partida claro para acompanhar notícias de fontes paraguaias com relação identificável com o Brasil e brasileiros.
        </p>
        <div className="hero-meta">
          <span><strong>24</strong> itens encontrados</span>
          <span><strong>6</strong> fontes aprovadas</span>
          <span>Atualizado em <strong>31 jul · 10:20</strong></span>
        </div>
      </section>

      <section className="workspace" aria-label="Resultados monitorados">
        <aside className="filters">
          <div>
            <p className="section-label">FILTROS</p>
            <button className="filter active">Todos os resultados <span>24</span></button>
            <button className="filter">Mais recentes <span>12</span></button>
            <button className="filter">Maior relevância <span>8</span></button>
          </div>
          <div className="filter-group">
            <p className="section-label">TEMAS</p>
            <button className="tag-filter">Fronteira</button>
            <button className="tag-filter">Política</button>
            <button className="tag-filter">Economia</button>
            <button className="tag-filter">Sociedade</button>
          </div>
          <p className="notice">A classificação é automática e transparente. A decisão editorial é sempre humana.</p>
        </aside>

        <div className="feed">
          <div className="feed-heading">
            <div>
              <p className="section-label">TRIAGEM DE HOJE</p>
              <h2>Resultados para revisão</h2>
            </div>
            <button className="sort">Ordenar: relevância <span>↓</span></button>
          </div>

          <div className="source-note">
            <span className="dot" /> Dados de demonstração para validar o fluxo. A primeira versão conectará a lista de veículos .py definida pela equipe.
          </div>

          <div className="stories">
            {stories.map((story) => (
              <article className="story" key={story.title}>
                <div className={`priority ${story.priority.toLowerCase()}`}>{story.priority}</div>
                <div className="story-body">
                  <div className="story-meta"><span>{story.source}</span><span>{story.time}</span><span>{story.tag}</span></div>
                  <h3>{story.title}</h3>
                  <p>{story.summary}</p>
                  <a href="#fonte" className="source-link">Abrir fonte original <span aria-hidden="true">↗</span></a>
                </div>
              </article>
            ))}
          </div>

          <section className="empty" id="fonte">
            <div className="empty-icon" aria-hidden="true">⌁</div>
            <div>
              <h3>Quando não houver resultados, isso também aparece.</h3>
              <p>O painel informa a última coleta e deixa claro quando nenhuma publicação da lista aprovada corresponde aos critérios.</p>
            </div>
          </section>
        </div>
      </section>

      <footer>
        <p>Monitor PY Brasil · protótipo da oficina Codesinfo</p>
        <p>Somente fontes públicas · sem coleta de dados pessoais</p>
      </footer>
    </main>
  );
}
