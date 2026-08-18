# Fronteira em Foco

Protótipo do Grupo 5 da oficina de construção com IA do Hackaton Codesinfo, realizado no 21º Congresso da Abraji.

O projeto é um radar editorial de notícias publicadas por veículos paraguaios que mencionam o Brasil, brasileiros ou temas de impacto bilateral. A interface prioriza fonte, contexto e motivo da relevância para acelerar a triagem jornalística.

## O que o protótipo faz

- apresenta uma seleção de notícias paraguaias relacionadas ao Brasil;
- permite busca por palavras no título, resumo e categoria;
- filtra resultados por tema e veículo;
- ordena as matérias por relevância ou data;
- explica por que cada item entrou no radar;
- preserva o link para a publicação original;
- comunica que a pontuação apoia, mas não substitui, a decisão editorial.

## Estado atual

A versão publicada contém seis notícias previamente selecionadas de dois veículos, ABC Color e La Nación. A coleta não é automática, a lista não se atualiza em tempo real e os resumos editoriais estão incorporados ao código do protótipo.

- [Abrir a demonstração](https://codesinfo-abraji-oficina-grupo-5.burgos.chatgpt.site)
- [Ler o registro das interações no Slack](public/historico-interacoes.html)

## Como rodar localmente

### Pré-requisitos

- Node.js 22.13 ou mais recente;
- npm.

### Instalação e desenvolvimento

```bash
npm ci
npm run dev
```

Abra no navegador o endereço informado pelo terminal.

### Validação e execução de produção

```bash
npm test
npm run build
npm run start
```

As notícias demonstrativas e a interface estão em `app/page.tsx`; os estilos ficam em `app/globals.css`.

## Roadmap possível

- [ ] Automatizar a coleta nos dez veículos paraguaios definidos pelo grupo.
- [ ] Respeitar robots.txt, termos de uso, limites de acesso e políticas de cada fonte.
- [ ] Detectar menções ao Brasil e a brasileiros em espanhol, guarani e português.
- [ ] Deduplicar matérias republicadas e agrupar diferentes coberturas do mesmo fato.
- [ ] Gerar resumos em português com link, data, categoria e trecho de origem rastreáveis.
- [ ] Criar uma fila de curadoria humana antes de publicar ou alertar a redação.
- [ ] Tornar a pontuação de relevância explicável e ajustável por critérios editoriais.
- [ ] Programar coletas e alertas por tema, fronteira, veículo ou aumento de cobertura.
- [ ] Manter arquivo pesquisável e monitorar links quebrados e atraso de atualização.

## Fontes previstas

O escopo registrado pelo grupo inclui `abc.com.py`, `ultimahora.com`, `lanacion.com.py`, `hoy.com.py`, `paraguay.com`, `npy.com.py`, `unicanal.com.py`, `popular.com.py`, `cronica.com.py` e `5dias.com.py`.

## Princípios editoriais

- Toda notícia deve preservar veículo, data e link original.
- Resumos automatizados precisam ser revisáveis e corrigíveis.
- Relevância não equivale a veracidade nem qualidade editorial do veículo.
- A decisão de publicar, alertar ou pautar continua humana.
