export interface Project {
  id: string
  filename: string
  sector: string
  source: string
  title: string
  description: string
  stack: string
  stackColor: string
  image: string
  reportUrl?: string
  reportLabel?: string
  previewClass?: string
}

export const projects: Project[] = [
  {
    id: '01',
    filename: 'RESEARCH_01.FASHION_INTEL',
    sector: 'CONSUMER_DATA_INTEL',
    source: 'QVEY_LABS',
    title: 'Data-Driven Fashion Intelligence',
    description:
      'Built a consumer analytics pipeline combining trend forecasting, NLP sentiment analysis, and behavioural signals to optimise fashion product decisions and inventory strategy.',
    stack: 'PYTHON / NLP / TABLEAU / GOOGLE TRENDS / CONSUMER ANALYTICS',
    stackColor: 'text-pink-400',
    image: '/images/project-01.png',
    reportUrl: '/reports/qvey-sentiment-analysis-report.pdf',
    reportLabel: 'Open Combined Report',
    previewClass:
      'absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-900/30 to-transparent',
  },
  {
    id: '02',
    filename: 'RESEARCH_02.VENTURE_LAB',
    sector: 'MARKET_INTELLIGENCE',
    source: 'GRADCAPITAL_NODE',
    title: 'Venture & Market Intelligence Lab',
    description:
      'Analysed early-stage startups through market sizing, investment memos, and competitive intelligence while leveraging AI tools for research automation and ecosystem analysis.',
    stack: 'MARKET RESEARCH / AI AUTOMATION / DEEPTECH / STARTUP ANALYSIS',
    stackColor: 'text-cyan-400',
    image: '/images/project-02.png',
    previewClass:
      'absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.15)_0%,transparent_50%)]',
  },
  {
    id: '03',
    filename: 'RESEARCH_03.MATH_AI',
    sector: 'MATHEMATICAL_ML',
    source: 'CHEENTA_RESEARCH',
    title: 'Mathematical AI Research',
    description:
      'Worked on machine learning applications for mathematical structures and educational datasets, collaborating with researchers from elite mathematical institutes.',
    stack: 'ML / MATLAB / LLMs / GEOMETRIC THEORY / DATA MODELLING',
    stackColor: 'text-purple-400',
    image: '/images/project-03.png',
    previewClass:
      'absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.2)_0%,transparent_55%)]',
  },
  {
    id: '04',
    filename: 'RESEARCH_04.BEHAVIOUR',
    sector: 'BEHAVIOURAL_RESEARCH',
    source: 'ZENMA_FIELD_STUDY',
    title: 'Behavioural Consumer Insights',
    description:
      'Conducted structured interviews and market analytics to influence product iteration, customer retention, and growth strategy for a consumer startup.',
    stack: 'QUALITATIVE RESEARCH / GTM / GROWTH ANALYTICS / CONSUMER PSYCHOLOGY',
    stackColor: 'text-lime-400',
    image: '/images/project-04.png',
    previewClass:
      'absolute inset-0 bg-[linear-gradient(180deg,rgba(163,230,53,0.12)_0%,transparent_40%)]',
  },
  {
    id: '05',
    filename: 'RESEARCH_05.FASHION_SYS',
    sector: 'CREATIVE_SYSTEMS',
    source: 'NAZAAKAT_LSR',
    title: 'Fashion Systems & Culture',
    description:
      'Founded and led LSR’s fashion society, blending creative direction, sponsorship strategy, and community building into a scalable campus initiative.',
    stack: 'CREATIVE LEADERSHIP / BRAND PARTNERSHIPS / EVENT DESIGN',
    stackColor: 'text-fuchsia-400',
    image: '/images/project-05.jpg',
    previewClass:
      'absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(232,121,249,0.18)_0%,transparent_50%)]',
  },
  {
    id: '06',
    filename: 'RESEARCH_06.QUANT',
    sector: 'QUANT_MODELS',
    source: 'ACTUARIAL_CORE',
    title: 'Quantitative Decision Making',
    description:
      'Applied probability, Bayesian reasoning, and statistical thinking through actuarial coursework and mathematical problem-solving.',
    stack: 'R / BAYESIAN STATISTICS / MATHEMATICAL MODELLING',
    stackColor: 'text-yellow-400',
    image: '/images/project-06.jpg',
    previewClass:
      'absolute inset-0 bg-[linear-gradient(90deg,rgba(250,204,21,0.1)_0%,transparent_60%)]',
  },
  {
    id: '07',
    filename: 'RESEARCH_07.NARRATIVE',
    sector: 'COMMUNICATION_LAB',
    source: 'IFSA_MARKETING_NODE',
    title: 'Data Storytelling & Communication',
    description:
      'Translated technical and financial concepts into accessible formats through casebooks, presentations, and visual communication.',
    stack: 'DATA VISUALISATION / RESEARCH WRITING / STRATEGIC COMMUNICATION',
    stackColor: 'text-teal-400',
    image: '/images/project-07.jpg',
    previewClass:
      'absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.15)_0%,transparent_55%)]',
  },
]
