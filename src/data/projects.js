export const featuredProjects = [
  {
    id: 'fieldcraft',
    eyebrow: '01 · product / software engineering',
    title: 'FieldCraft',
    subtitle: 'On-device speech, editable invoice drafts, and local-first saving.',
    contribution: 'Built the voice-to-invoice flow and local-first persistence for the Expo app.',
    problem:
      'Tradespeople lose time turning completed work into paperwork after the job is already done.',
    built:
      'A custom Swift Expo module uses AVAudioEngine and Apple Speech for on-device transcription. After consent, an authenticated Supabase function turns the transcript into a validated, editable invoice draft.',
    result: '~8 → ~2 min median invoice time',
    resultContext:
      'Six-week pilot: 12 businesses and 100+ jobs/invoices. Seven were still using FieldCraft as of September 2026. Timing was directional, with no formal protocol or paired-sample analysis.',
    constraints:
      'SFSpeechRecognizer requires on-device recognition; raw audio is not sent to an AI API. Invoice parsing only runs after user consent.',
    iteration:
      'Groq’s llama-3.3-70b-versatile returns structured invoice fields. Zod and InvoiceDraftSchema validate the draft, and every field stays editable. SQLite atomically saves the invoice, job, and client; an outbox syncs to Supabase/Postgres when online. Typed notes also have a deterministic local fallback.',
    limitation:
      'The 8-to-2-minute comparison is an observed pilot estimate, not a controlled productivity study. The pilot did not preserve a formal timing protocol or paired raw timestamp set.',
    stack: ['Expo', 'Swift · Apple Speech', 'AVAudioEngine', 'SQLite', 'Supabase', 'Groq · Llama 3.3', 'Zod'],
    links: {},
    visual: 'fieldcraft',
  },
  {
    id: 'wordless',
    eyebrow: '02 · accessibility / AI · hackathon',
    title: 'Wordless',
    subtitle: 'A shorter path from fragmented words to the right support.',
    contribution:
      'Team project; collaborated on integrating Codex, Composio, Octen, and Zendesk into an aphasia-focused support flow.',
    problem:
      'People with aphasia may know what they need but struggle to compose a complete support request.',
    built:
      'A context-aware flow that retrieves likely issues, explains the match, and lets a person confirm with one tap.',
    result: '3rd place · Hanwha AI Center',
    resultContext:
      'Built at the OpenAI × Start2 × Zendesk Hackathon. OpenAI provided $10,000 in API credits; the project was also recognized by Nick Lum, founder of BeeLine Reader.',
    note: 'Hackathon prototype; user testing with people who live with aphasia is the next step.',
    constraints: 'Four hours to build a working accessibility prototype without asking the user to compose a complete sentence.',
    iteration: 'The team moved from description-first support to evidence-first matching, then made the final action a tap-to-confirm card.',
    limitation: 'Wordless is a hackathon prototype; the next step is testing the interaction with people who live with aphasia.',
    stack: ['Codex', 'Composio', 'Octen', 'Zendesk'],
    links: { article: 'https://patch.com/california/dublin/dublin-students-build-ai-tool-designed-help-people-aphasia-nodx' },
    visual: 'wordless',
  },
  {
    id: 'sepsis-vitals',
    eyebrow: '03 · research / clinical ML',
    title: 'Sepsis Vitals',
    subtitle: 'A patient-level ML pipeline evaluated on synthetic time-series data.',
    problem:
      'Low-resource hospitals need useful signals before laboratory results are available.',
    built:
      'A FHIR-ready pipeline for feature preparation, Sepsis-3 labeling, model scoring, and fairness monitoring.',
    result: '0.9158 AUROC · full-feature model',
    resultContext:
      'Held-out patient-level test set from a 20,000-patient procedurally generated cohort with 15% target prevalence. Development data only; no clinical validation.',
    constraints:
      'A seed-42, 70/15/15 patient-level split keeps every time-series observation for one patient in the same set.',
    iteration:
      'Model selection, calibration, and threshold selection use the validation patients; the final evaluation report uses the held-out test patients.',
    limitation:
      'Synthetic development data cannot establish clinical performance. Retrospective evaluation on credentialed clinical data is the next step.',
    stack: ['Python', 'FastAPI', 'LightGBM', 'FHIR', 'Patient-level evaluation', 'Fairness monitoring'],
    links: { github: 'https://github.com/avinashamanchi/sepsis-vitals' },
    image: '/sepsis.webp',
    visual: 'sepsis',
  },
]

export const otherProjects = [
  {
    id: 'eaa-detailing',
    title: 'EAA Detailing',
    description: 'Co-founded the business and built its booking and digital acquisition systems; EAA served 100+ clients across 4 cities.',
    stack: 'Product · SEO · Operations',
    image: '/eaadetailingimage.webp',
    alt: 'EAA Detailing automotive services website home page',
    live: 'https://eaadetailingservices.com',
  },
  {
    id: 'sage-app',
    title: 'S.A.G.E.',
    description: 'Accessibility-first mobile support shaped through usability testing with older adults.',
    stack: 'Mobile · Accessibility · User research',
    image: '/sageimage.webp',
    alt: 'S.A.G.E. mobile support interface over a mountain landscape illustration',
    github: 'https://github.com/avinashamanchi/Act_sage',
  },
  {
    id: 'convoautopsy',
    title: 'ConvoAutopsy',
    description: 'An AI-assisted reflection tool for noticing patterns in everyday conversations.',
    stack: 'JavaScript · NLP · Open source',
    image: '/convoautopsyimage.jpg',
    alt: 'ConvoAutopsy conversation reflection interface',
    live: 'https://avinashamanchi.github.io/convoautopsy/',
    github: 'https://github.com/avinashamanchi/convoautopsy',
  },
  {
    id: 'resume-analyzer',
    title: 'AI Resume Analyzer',
    description: 'Resume parsing and ATS-style feedback that makes the next edit obvious.',
    stack: 'Python · APIs · Deployment',
    image: '/resumeaiimage.webp',
    alt: 'AI Resume Analyzer upload and feedback interface',
    live: 'https://resume-analyzer-al3g.onrender.com/',
    github: 'https://github.com/avinashamanchi/resume-analyzer',
  },
]

export const impactItems = [
  { value: '3rd', label: 'OpenAI × Start2 × Zendesk hackathon' },
  { value: '12', label: 'businesses in a six-week FieldCraft pilot' },
  { value: '500+', label: 'automated tests across Sepsis Vitals' },
  { value: '100+', label: 'EAA clients across 4 cities' },
]
