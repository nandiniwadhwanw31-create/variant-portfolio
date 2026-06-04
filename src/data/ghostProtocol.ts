export interface GhostTerminalBlock {
  id: string
  metaLeft: string
  metaRight: string
  streamTitle: string
  showProgress?: boolean
  progressPercent?: number
}

export const ghostTerminalBlocks: GhostTerminalBlock[] = [
  {
    id: '01',
    metaLeft: 'MEM_DUMP_001.LOG',
    metaRight: 'CRITICAL',
    streamTitle: 'STORY BEHIND WEBSITE',
  },
  {
    id: '02',
    metaLeft: 'ANALYTIC_ENGINE',
    metaRight: 'CORRELATION_LIVE',
    streamTitle: 'THE CORRELATION MATRIX',
  },
  {
    id: '03',
    metaLeft: 'INTAKE_VECTOR',
    metaRight: 'GATEWAY_OPEN',
    streamTitle: 'INITIALIZE SYSTEM MERGE',
    showProgress: true,
    progressPercent: 77,
  },
]
