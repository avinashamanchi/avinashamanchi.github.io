export const featuredProjects = [
  {
    id: 'wordless',
    eyebrow: '01 · accessibility / AI',
    title: 'Wordless',
    subtitle: 'A shorter path from fragmented words to the right support.',
    problem:
      'People with aphasia may know what they need but struggle to compose a complete support request.',
    built:
      'A context-aware flow that retrieves likely issues, explains the match, and lets a person confirm with one tap.',
    result: '3rd place · OpenAI × Start2 × Zendesk Hackathon',
    stack: ['AI retrieval', 'account context', 'one-tap confirmation'],
    links: { github: 'https://github.com/avinashamanchi' },
    visual: 'wordless',
  },
  {
    id: 'sepsis-vitals',
    eyebrow: '02 · research / clinical ML',
    title: 'Sepsis Vitals',
    subtitle: 'Testing how far vitals-only screening can go when labs are out of reach.',
    problem:
      'Low-resource hospitals need useful signals before laboratory results are available.',
    built:
      'A FHIR-ready pipeline for feature preparation, Sepsis-3 labeling, model scoring, and fairness monitoring.',
    result: '0.858 AUROC · vitals-only model',
    stack: ['Python', 'FastAPI', 'LightGBM', 'fairness audit'],
    note: 'Synthetic data only. Not validated for clinical care.',
    links: { github: 'https://github.com/avinashamanchi/sepsis-vitals' },
    image: '/sepsis.png',
    visual: 'sepsis',
  },
  {
    id: 'fieldcraft',
    eyebrow: '03 · product / operations',
    title: 'FieldCraft',
    subtitle: 'From a spoken job description to a finished invoice.',
    problem:
      'Tradespeople lose time turning completed work into paperwork after the job is already done.',
    built:
      'A voice-first job capture flow that turns the messy end of a day into a clean, client-ready invoice.',
    result: '8 min → 2 min · 6-week pilot',
    stack: ['voice capture', 'workflow design', 'invoicing'],
    links: {},
    visual: 'fieldcraft',
  },
]

export const otherProjects = [
  {
    id: 'sage-app',
    title: 'S.A.G.E.',
    description: 'Accessibility-first mobile support shaped through usability testing with older adults.',
    stack: 'Mobile · Accessibility · User research',
    image: '/sageimage.png',
    github: 'https://github.com/avinashamanchi/Act_sage',
  },
  {
    id: 'eaa-detailing',
    title: 'EAA Detailing',
    description: 'Digital infrastructure for an automotive detailing business serving 100+ clients across 4 cities.',
    stack: 'Product · SEO · Operations',
    image: '/eaadetailingimage.png',
    live: 'https://eaadetailingservices.com',
  },
  {
    id: 'convoautopsy',
    title: 'ConvoAutopsy',
    description: 'An AI-assisted reflection tool for noticing patterns in everyday conversations.',
    stack: 'JavaScript · NLP · Open source',
    image: '/convoautopsyimage.png',
    live: 'https://avinashamanchi.github.io/convoautopsy/',
    github: 'https://github.com/avinashamanchi/convoautopsy',
  },
  {
    id: 'resume-analyzer',
    title: 'AI Resume Analyzer',
    description: 'Resume parsing and ATS-style feedback that makes the next edit obvious.',
    stack: 'Python · APIs · Deployment',
    image: '/resumeaiimage.png',
    live: 'https://resume-analyzer-al3g.onrender.com/',
    github: 'https://github.com/avinashamanchi/resume-analyzer',
  },
]

export const impactItems = [
  { value: '3rd', label: 'OpenAI × Start2 × Zendesk hackathon' },
  { value: '100+', label: 'EAA customers across 4 cities' },
  { value: 'Lab', label: 'Lawrence Berkeley National Laboratory' },
  { value: '6', label: 'states reached through community programs' },
]
