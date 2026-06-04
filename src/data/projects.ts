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
    title: 'Fashion Brand Trend Analysis',
    description:
      'Built a consumer analytics pipeline combining trend forecasting, NLP sentiment analysis, and behavioural signals to optimise fashion product decisions and inventory strategy.',
    stack: 'PYTHON / NLP / TABLEAU / GOOGLE TRENDS / CONSUMER ANALYTICS',
    stackColor: 'text-pink-400',
    image: '/images/project-01.png',
    reportUrl: '/reports/qvey-analytics-case-study.pdf',
    reportLabel: 'Open Analytics Case Study',
    previewClass:
      'absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-900/30 to-transparent',
  },
  {
    id: '02',
    filename: 'RESEARCH_02.ZENMA_GTM',
    sector: 'PRODUCT_GTM',
    source: 'ZENMA_BEVERAGE',
    title: 'Head Product Development & Social Media Campaign for Shark Tank Appeared Beverage Brand',
    description:
      'Led product development and social media campaign strategy for Zenma — a Shark Tank India–featured beverage brand — spanning GTM positioning, content systems, and growth-focused consumer engagement.',
    stack: 'PRODUCT DEVELOPMENT / SOCIAL MEDIA / GTM / BRAND CAMPAIGN',
    stackColor: 'text-lime-400',
    image: '/images/project-04.png',
    reportUrl: '/reports/zenma-portfolio-nandini-wadhwa.docx',
    reportLabel: 'Open Zenma Portfolio',
    previewClass:
      'absolute inset-0 bg-[linear-gradient(180deg,rgba(163,230,53,0.12)_0%,transparent_40%)]',
  },
  {
    id: '03',
    filename: 'RESEARCH_03.CREATIVE_SOC',
    sector: 'CREATIVE_LEADERSHIP',
    source: 'NAZAAKAT_SPOTLIGHT',
    title: 'President Position at Two Creative Societies with Over 200 Members',
    description:
      'President of Nazzakat Fashion Society (LSR) and Spotlight Debate & Theatre (Sanskriti School) — building inclusive creative communities, brand partnerships, and high-visibility campus programming across fashion and performance.',
    stack: 'CREATIVE LEADERSHIP / FASHION / DEBATE & THEATRE / COMMUNITY BUILDING',
    stackColor: 'text-fuchsia-400',
    image: '/images/project-05.jpg',
    reportUrl: '/reports/nazaakat-spotlight-leadership-portfolio.docx',
    reportLabel: 'Open Leadership Portfolio',
    previewClass:
      'absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(232,121,249,0.18)_0%,transparent_50%)]',
  },
]
