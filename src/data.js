/* All portfolio content — lifted from the production codebase. */
window.PORTFOLIO = {
  brand: { initials: "LF", name: "Luiz Fernando", kicker: "PORTFOLIO · BUILDER" },

  nav: [
    { label: "Cases", href: "#cases" },
    { label: "Entregas", href: "#entregas" },
    { label: "Skills", href: "#skills" },
    { label: "Processo", href: "#processo" },
    { label: "Sobre", href: "#sobre" },
  ],

  hero: {
    eyebrow: "Dev em formação · builder técnico",
    name: "Luiz Fernando",
    lead: "Produtos web, IA local e interfaces visuais virando protótipos funcionais.",
    summary:
      "Desenvolvedor em formação com foco em projetos demonstráveis: sistemas internos, automações, computer vision e experiências 3D publicáveis.",
    chips: ["produto web", "IA local", "computer vision", "3D / WebGL"],
    metrics: [
      { v: "6", l: "cases em destaque" },
      { v: "4", l: "frentes técnicas" },
      { v: "7", l: "melhorias aplicadas" },
    ],
  },

  contact: {
    eyebrow: "Contato",
    title: "Quer trocar ideia ou construir algo?",
    text: "Me chama por email com objetivo, prazo, referência e contexto. Para avaliação rápida, use GitHub, LinkedIn ou CV. Resposta em ~24h.",
    email: "luizfernandogugui03@gmail.com",
    phone: "(55) 9 9674-7221",
    phoneHref: "tel:+5599674721",
    links: [
      { label: "Enviar email", href: "mailto:luizfernandogugui03@gmail.com", style: "primary", ext: false },
      { label: "GitHub", href: "https://github.com/LGugui", style: "secondary", ext: true },
      { label: "LinkedIn", href: "https://linkedin.com/in/luizfernandogugui", style: "secondary", ext: true },
      { label: "Baixar CV", href: "#", style: "ghost", ext: false },
    ],
  },

  featured: {
    name: "Big Bang",
    category: "Experiência 3D + visão",
    icon: "3D", motif: "tracking",
    glyph: "orbit",
    description:
      "Laboratório visual com câmera, rastreamento de mãos e rosto, Three.js e TensorFlow para explorar controle espacial em tempo real.",
    problem: "Transformar gestos e rosto em interface navegável.",
    result: "Protótipo demonstrável de interação visual com WebGL e câmera.",
    tags: ["Three.js", "MediaPipe", "TensorFlow", "WebGL", "AR"],
    href: "https://github.com/LGugui/big-bang",
    status: "ativo",
    access: "publico",
    linkLabel: "Abrir repositório",
  },

  projects: [
    {
      name: "Sensor de Gestos", category: "Computer Vision", icon: "CV", motif: "hand", glyph: "vision",
      description: "Mouse e teclado por webcam com gestos para clique, scroll, precisão e desenho.",
      problem: "Controlar a interface sem hardware extra.",
      result: "Pipeline útil de câmera → landmarks → ação.",
      tags: ["Python", "MediaPipe", "OpenCV", "pynput"],
      href: "https://github.com/LGugui/sensor-de-gestos",
      status: "concluido", access: "publico", linkLabel: "Abrir repositório",
      cats: ["CV"],
    },
    {
      name: "Cerebro Template", category: "PKM + agentes", icon: "PKM", motif: "graph", glyph: "network",
      description: "Segundo cérebro em Obsidian com agentes, skills, hooks e estrutura operacional.",
      problem: "Notas soltas não viram sistema de execução.",
      result: "Vault organizado para agentes trabalharem com contexto.",
      tags: ["Claude Code", "Obsidian", "Agents", "PKM"],
      href: "https://github.com/LGugui/cerebro-template",
      status: "concluido", access: "publico", linkLabel: "Abrir repositório",
      cats: ["IA"],
    },
    {
      name: "The World", category: "OSINT 3D", icon: "OS", motif: "globe", glyph: "globe",
      description: "Globo 3D com camadas de eventos, notícias e sinais públicos para leitura espacial.",
      problem: "Informação global fica dispersa e difícil de comparar.",
      result: "Mapa visual explorável para eventos e contexto.",
      tags: ["Three.js", "React", "TypeScript", "OSINT"],
      href: "#contato",
      status: "ativo", access: "interno", linkLabel: "Solicitar demo",
      cats: ["3D", "Web"],
    },
    {
      name: "CRM Comercial", category: "Produto B2B", icon: "CRM", motif: "pipeline", glyph: "funnel",
      description: "CRM de leads, funil e prospecção para rotina comercial com dados acionáveis.",
      problem: "Pipeline comercial manual perde contexto.",
      result: "Fluxo B2B mais claro para organizar leads e ações.",
      tags: ["Next.js", "Supabase", "TypeScript", "Pipeline"],
      href: "#contato",
      status: "concluido", access: "privado", linkLabel: "Ver case privado",
      cats: ["Web"],
    },
    {
      name: "Aprimorador", category: "IA local", icon: "AI", motif: "spark", glyph: "core",
      description: "Agente local que lê, organiza e melhora notas de um vault com Ollama e heurísticas.",
      problem: "Manter conhecimento atualizado consome energia.",
      result: "Automação local para manutenção e recuperação de contexto.",
      tags: ["Python", "Ollama", "LLM", "Automation"],
      href: "#contato",
      status: "ativo", access: "interno", linkLabel: "Pedir contexto",
      cats: ["IA"],
    },
  ],

  filters: ["Todos", "Web", "IA", "3D", "CV"],

  delivery: [
    { title: "Landing pages e portfólios", text: "Páginas publicáveis com narrativa clara, SEO e responsividade.", tags: ["Next.js", "SEO", "UI responsiva"] },
    { title: "Dashboards e sistemas internos", text: "Interfaces para organizar pipeline, status, rotinas e dados operacionais.", tags: ["React", "Supabase", "TypeScript"] },
    { title: "Automação com IA local", text: "Agentes, scripts e fluxos locais para transformar rotina repetitiva em sistema.", tags: ["Python", "Ollama", "Agents"] },
    { title: "Protótipos 3D e visão", text: "Experimentos visuais com câmera, tracking, WebGL e interação por gestos.", tags: ["Three.js", "MediaPipe", "OpenCV"] },
  ],

  skills: [
    { title: "Produto web", text: "Interfaces publicáveis com narrativa, SEO e responsividade.", tags: ["Next.js", "React", "TypeScript", "Tailwind", "UX"] },
    { title: "Interação avançada", text: "Experimentos com câmera, tracking, WebGL e gestos.", tags: ["Three.js", "MediaPipe", "OpenCV", "TensorFlow", "WebGL"] },
    { title: "IA e automação", text: "Agentes locais, vaults, scripts e fluxos de trabalho.", tags: ["Python", "Ollama", "Agents", "Obsidian", "Automation"] },
  ],

  // Competências & habilidades (do CV) — exibidas inline abaixo das skills.
  competencias: [
    { group: "Jurídico", items: ["Gestão processual e prazos", "Petições, contratos e pareceres", "Pesquisa jurisprudencial", "Análise de legislação", "Legal One / Kermartin"] },
    { group: "Tecnologia & automação", items: ["Python", "C# / Unity", "HTML / CSS", "Automação n8n / low-code", "IA aplicada", "Ciência de dados"] },
    { group: "Produtividade", items: ["Excel / Word avançado", "Canva avançado", "Photoshop", "Premiere"] },
    { group: "Comportamental", items: ["Comunicação", "Trabalho em equipe", "Organização", "Gestão de tempo", "Adaptabilidade", "Aprendizado contínuo", "Copywriting", "Marketing digital"] },
  ],

  // Informações complementares (do CV) — inline.
  complementares: [
    "Pesquisa em tecnologia aplicada ao Direito",
    "Noções de investimentos e mercado financeiro",
    "Social media",
    "Praticante de basquete",
    "Inglês — intermediário",
    "Espanhol — intermediário",
  ],

  process: [
    { step: "01", title: "Entendo o sistema", text: "Começo pelo objetivo, usuário, regras, dados e restrições reais." },
    { step: "02", title: "Construo prova", text: "Crio uma versão pequena, testável e publicável antes de polir demais." },
    { step: "03", title: "Refino com critério", text: "Melhoro visual, UX, performance e manutenção com base no uso." },
  ],

  about: {
    fullName: "Luiz Fernando Galvão dos Santos Filho",
    role: "Builder técnico",
    loc: "Recanto Maestro/RS · pt-BR / EN",
    stats: [
      { v: "1", l: "ano construindo" },
      { v: "6", l: "projetos" },
      { v: "4", l: "frentes" },
    ],
    paragraphs: [
      "Acadêmico de Direito e pós-graduando em Ciência de Dados e Inteligência Artificial. Essa combinação me ajuda a enxergar regra, cliente, processo e produto no mesmo mapa.",
      "Hoje foco em automações com IA, interfaces 3D, produtos internos e ferramentas locais que economizam tempo e viram prova real de conhecimento — integrando sistemas de gestão e IA ao conhecimento jurídico.",
    ],
    education: [
      { course: "Pós-graduação em Ciência de Dados e IA", org: "Antonio Meneghetti Faculdade", note: "em andamento · 2028" },
      { course: "Graduação em Direito", org: "Antonio Meneghetti Faculdade", note: "conclusão prevista 2027" },
      { course: "Ensino Médio", org: "E.E.E.M. Osvaldo Cruz", note: "concluído em 2021" },
    ],
  },

  loading: {
    label: "Carregando portfólio",
    title: "Preparando interface",
    description: "Organizando projetos, skills e pontos de contato.",
  },
};
