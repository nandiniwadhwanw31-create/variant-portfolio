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
    body: `Ages 1–13: Yoga teacher via Dr. Archika Foundation (Govt-registered NGO). National TV coverage; audience with President Pranab Mukherjee at Rashtrapati Bhavan.`,
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
    body: `Hindustani Classical at Gandharva Mahavidyalaya — **Prarambhik, Praveshika Pratham & Purna** (3 years). Volunteers with *Golden Shine NGO* teaching visually impaired students. Researching ICM as a multi-dimensional mathematical system.`,
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
    body: `President, Spotlight Debate & Theatre — Sanskriti School (4-stage selection, <5% acceptance). Incoming President, Nazzakat Fashion Society @ LSR. Debate + fashion = platforms for control, attention, and community.`,
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
    body: `Refused Science/Humanities/Commerce lock-in. Engineered a hybrid: Math, CS, Economics, Business, PolSci, English. School capitulated — sample size of one. No pre-built track? I write the override.`,
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
    body: `Yoga at seven → sentiment analysis on 1940s parliamentary debates. Looks chaotic; isn't. Same obsession everywhere: break boring rules, find intersections, prove analytics and aesthetics are one coin.`,
    signals: 'DATA × REBELLION × HUMAN SYSTEMS',
    variant: 'signal',
    position: 'top-[680px] left-[680px]',
    rotate: '1.5deg',
    opacity: 'opacity-100',
  },
]
