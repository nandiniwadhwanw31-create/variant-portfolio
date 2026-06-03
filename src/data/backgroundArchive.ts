export type BackgroundNoteVariant = 'light' | 'lilac' | 'spotlight' | 'constituent' | 'signal'

export interface BackgroundNote {
  id: string
  filename: string
  subtitle: string
  body: string
  signals: string
  variant: BackgroundNoteVariant
  position: string
  size: string
  rotation: string
  opacity: string
}

export const backgroundNotes: BackgroundNote[] = [
  {
    id: '01',
    filename: 'MEM_01.ORIGIN.LOG',
    subtitle: 'The First Classroom',
    body: 'At seven, I taught yoga to 100–150 children through an NGO, leading skill-building and women empowerment initiatives. We later presented at public showcases covered by national and government news channels.',
    signals: 'COMMUNITY IMPACT / EARLY LEADERSHIP / WOMEN EMPOWERMENT',
    variant: 'light',
    position: 'top-[100px] left-[60px]',
    size: 'w-72 h-56',
    rotation: 'rotate-[-2deg]',
    opacity: 'opacity-95',
  },
  {
    id: '02',
    filename: 'MEM_02.NAZAAKAT.SYS',
    subtitle: 'Designing Belonging',
    body: 'President of the fashion society at Lady Shri Ram College, one of India’s leading institutions. Built a more inclusive fashion space through partnerships, social media growth, and collaborations with homegrown and global brands.',
    signals: 'CREATIVE LEADERSHIP / BRAND PARTNERSHIPS / BODY INCLUSIVITY',
    variant: 'lilac',
    position: 'top-[220px] left-[420px]',
    size: 'w-80 h-60',
    rotation: 'rotate-[1deg]',
    opacity: 'opacity-100',
  },
  {
    id: '03',
    filename: 'MEM_03.SPOTLIGHT.LOG',
    subtitle: 'Learning to Lead a Room',
    body: 'Led the English debate and theatre society at one of India’s top schools while competing as a state-level debater. Built teams, led productions, and developed public speaking and leadership early.',
    signals: 'PUBLIC SPEAKING / TEAM LEADERSHIP / DEBATE',
    variant: 'spotlight',
    position: 'top-[340px] left-[820px]',
    size: 'w-64 h-64',
    rotation: 'rotate-[3deg]',
    opacity: 'opacity-90',
  },
  {
    id: '04',
    filename: 'MEM_04.CONSTITUENT.SYS',
    subtitle: 'Reading Democracy Through Data',
    body: 'An independent computational social science project analysing India’s Constituent Assembly debates and comparing them with present-day parliamentary discourse and media independence patterns.',
    signals: 'COMPUTATIONAL SOCIAL SCIENCE / POLICY / POLITICAL DATA',
    variant: 'constituent',
    position: 'top-[640px] left-[120px]',
    size: 'w-72 h-52',
    rotation: 'rotate-[-1deg]',
    opacity: 'opacity-92',
  },
  {
    id: '05',
    filename: 'MEM_05.SIGNAL.TXT',
    subtitle: 'The Common Thread',
    body: 'Across fashion, politics, and research, I’m interested in how data explains people — using analytical thinking to understand systems, behaviour, and decision-making.',
    signals: 'DATA × CREATIVITY × HUMAN SYSTEMS',
    variant: 'signal',
    position: 'top-[720px] left-[740px]',
    size: 'w-80 h-48',
    rotation: 'rotate-[1.5deg]',
    opacity: 'opacity-100',
  },
]
