export type BackgroundNoteVariant = 'light' | 'lilac' | 'spotlight' | 'constituent' | 'signal'

export interface BackgroundNote {
  id: string
  filename: string
  status: string
  title: string
  body: string
  signals: string
  variant: BackgroundNoteVariant
  position: string
  rotate: string
  opacity: string
  showProgress?: boolean
  progressPercent?: number
}

export const backgroundNotes: BackgroundNote[] = [
  {
    id: '01',
    filename: 'MEM_01.ORIGIN.LOG',
    status: 'INITIALIZED',
    title: 'The First Classroom',
    body: `Ages 1–13: Taught yoga to children across suburbs via Dr. Archika Foundation (Govt-registered NGO). The initiative gained national traction, leading to coverage on national TV news channels and a formal audience with the President of India, Pranab Mukherjee, at Rashtrapati Bhavan.`,
    signals: 'EARLY LEADERSHIP / SOCIAL TRANSFORMATION / NATIONAL RECOGNITION',
    variant: 'light',
    position: 'top-[88px] left-[48px]',
    rotate: '-2deg',
    opacity: 'opacity-95',
  },
  {
    id: '02',
    filename: 'MEM_02.SONIC_LOGIC.SYS',
    status: '77% PARSED',
    title: 'Acoustic Mathematics',
    body: `Trained in Hindustani Classical Music at Gandharva Mahavidyalaya under legendary Pandits, completing the **Prarambhik, Praveshika Pratham, and Praveshika Purna** levels over 3 intensive years of public performance.

Currently volunteering with *Golden Shine NGO*, teaching classical music to visually impaired students. Concurrently authoring a research paper treating Indian Classical Music (ICM) as a multi-dimensional mathematical system.`,
    signals: 'HINDUSTANI CLASSICAL / DATA ANALYSIS / ACCESSIBLE EDUCATION',
    variant: 'lilac',
    position: 'top-[200px] left-[400px]',
    rotate: '1deg',
    opacity: 'opacity-100',
    showProgress: true,
    progressPercent: 77,
  },
  {
    id: '03',
    filename: 'MEM_03.SPOTLIGHT.LOG',
    status: 'HIGH RISK',
    title: 'Commanding the Room',
    body: `Driven by the thrill of high-stakes environments, I consistently pursue unconventional leadership vectors. Selected as President of the Spotlight Debate & Theatre Club at Sanskriti School in 11th grade—an anomaly given a ruthless, 4-stage selection process (application, interview, voting, and GD) with a student council acceptance rate under 5%.

Carrying this momentum forward to Lady Shri Ram College (LSR) as the incoming President of the Nazzakat Fashion Society for the upcoming tenure. Debate and fashion are where I feel most alive; they are platforms to orchestrate control, command attention, and build space for community expression.`,
    signals: 'COMPETITIVE DEBATE / HIGH-STAKES LEADERSHIP / SYSTEM DESIGN',
    variant: 'spotlight',
    position: 'top-[300px] left-[760px]',
    rotate: '3deg',
    opacity: 'opacity-90',
  },
  {
    id: '04',
    filename: 'MEM_04.HYBRID_STREAM.SYS',
    status: 'UNCONFORMED',
    title: 'Breaking the Stream',
    body: `The Indian education policy demands a rigid choice: Science, Humanities, or Commerce. I refused to conform. Wanting a hybrid vector containing pieces of all three, I engineered my own curriculum: Mathematics, Computer Science, Economics, Business Studies, Political Science, and English.

After a relentless push, my school capitulated, making me a sample size of one. I don't look for pre-built tracks—if the stream I need doesn't exist, I write the override code to build it myself.`,
    signals: 'HYBRID THINKING / INSTITUTIONAL OVERRIDE / PARALLEL LOGIC',
    variant: 'constituent',
    position: 'top-[600px] left-[80px]',
    rotate: '-1deg',
    opacity: 'opacity-92',
  },
  {
    id: '05',
    filename: 'MEM_05.SIGNAL.TXT',
    status: 'CORE_CONVERGENCE',
    title: 'The Common Thread',
    body: `From teaching yoga at age seven to running sentiment analysis on 1940s parliamentary debates, my trajectory looks chaotic from the outside. It isn't.

Every node—whether it is parsing the geometry of a musical string, commanding a debate floor, or structuring a hybrid curriculum—is driven by the exact same obsession: breaking boring rules, finding hidden intersections, and proving that analytics and aesthetics are just two sides of the same coin. Both this system and the host remain an evolving work in progress.`,
    signals: 'DATA × REBELLION × HUMAN SYSTEMS',
    variant: 'signal',
    position: 'top-[680px] left-[680px]',
    rotate: '1.5deg',
    opacity: 'opacity-100',
  },
]
