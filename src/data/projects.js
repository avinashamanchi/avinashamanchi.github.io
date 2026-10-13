export const featuredProjects = [
  {
    id: 'fieldcraft',
    eyebrow: '01 · mobile product / field operations',
    title: 'FieldCraft',
    subtitle: 'On-device speech and local-first invoice capture for tradespeople.',
    contribution: 'Built the voice-to-invoice flow and local-first persistence for the Expo app.',
    problem:
      'Tradespeople lose time turning completed work into paperwork after the job is already done.',
    built:
      'An Expo app transcribes speech on-device, then—after consent—sends the transcript to an authenticated Supabase Edge Function for structured invoice extraction. The validated draft stays editable; the invoice, job, and client save to SQLite and queue for Supabase sync when online.',
    result: '~8 → ~2 min median invoice time',
    resultContext:
      'Six-week pilot across 12 businesses and 100+ jobs/invoices. The roughly 8-to-2-minute comparison was directional, without a formal timing protocol or paired sample. Seven participating businesses were still using FieldCraft as of September 2026.',
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
    id: 'sepsis-vitals',
    eyebrow: '02 · research / synthetic clinical ML',
    title: 'Sepsis Vitals',
    subtitle: 'Explored a sepsis early-warning workflow using synthetic patient timelines; the model has not been clinically validated.',
    contribution: 'Solo project; built the full synthetic-data, patient-level modeling, FHIR, API, evaluation, and test pipeline.',
    problem:
      'This project explores a patient-timeline workflow with procedural development data, not clinical records.',
    built:
      'A Python pipeline generates synthetic patient timelines, creates patient-level train/validation/test splits, prepares features, applies Sepsis-3 labels, scores models, and reports fairness metrics.',
    result: '0.9158 AUROC · held-out synthetic test set',
    resultContext:
      'Evaluation report generated June 20, 2026, on held-out synthetic patients from a procedurally generated 20,000-patient cohort. Development result only; no clinical validation.',
    constraints:
      'A seed-42, 70/15/15 patient-level split keeps every time-series observation for one patient in the same set.',
    iteration:
      'Model selection, calibration, and threshold selection use the validation patients; the final evaluation report uses the held-out test patients.',
    limitation:
      'Synthetic development data cannot establish clinical performance. Retrospective evaluation on credentialed clinical data is the next step.',
    stack: ['Python', 'FastAPI', 'LightGBM', 'FHIR', 'Patient-level evaluation', 'Fairness monitoring'],
    links: {
      github: 'https://github.com/avinashamanchi/sepsis-vitals',
      evaluationReport: 'https://github.com/avinashamanchi/sepsis-vitals/blob/main/models/evaluation_report.json',
    },
    image: '/sepsis.webp',
    visual: 'sepsis',
  },
  {
    id: 'wordless',
    eyebrow: '03 · accessibility / AI · hackathon',
    title: 'Wordless',
    subtitle: 'A support flow that turns fragmented words into a likely issue and a one-tap confirmation.',
    contribution: 'Team-level collaboration integrating Codex, Composio, Octen, and Zendesk into the aphasia-focused support flow.',
    problem:
      'People with aphasia may know what they need but struggle to compose a complete support request.',
    built:
      'A context-aware flow matches a fragmented description to a likely support issue and lets the person confirm it with one tap.',
    result: 'Third place · OpenAI × Start2 × Zendesk Hackathon',
    resultContext: 'Hosted at Hanwha AI Center. Reported by Dublin, CA Patch.',
    note: 'Hackathon prototype; user testing with people who live with aphasia is the next step.',
    constraints: 'Four hours to build a working accessibility prototype without asking the user to compose a complete sentence.',
    iteration: 'The team moved from description-first support to evidence-first matching, then made the final action a tap-to-confirm card.',
    limitation: 'Wordless is a hackathon prototype; the next step is testing the interaction with people who live with aphasia.',
    stack: ['Codex', 'Composio', 'Octen', 'Zendesk'],
    links: { article: 'https://patch.com/california/dublin/dublin-students-build-ai-tool-designed-help-people-aphasia-nodx' },
    visual: 'wordless',
  },
]

export const otherProjects = [
  {
    id: 'eaa-detailing',
    title: 'EAA Detailing',
    description: 'Co-founded a student-run detailing business and built its booking website; also handled scheduling, supplies, and customer communication.',
    stack: 'Product · Website · Operations',
    image: '/eaadetailingimage.webp',
    alt: 'EAA Detailing automotive services website home page',
    screenshot: '/eaadetailingimage.webp',
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
    description: 'Resume parsing and ATS-style feedback. The screenshot is above; the hosted demo may take about 15 seconds to wake.',
    stack: 'Python · APIs · Deployment',
    image: '/resumeaiimage.webp',
    alt: 'AI Resume Analyzer upload and feedback interface',
    live: 'https://resume-analyzer-al3g.onrender.com/',
    github: 'https://github.com/avinashamanchi/resume-analyzer',
  },
]

export const impactItems = [
  { value: '3rd', label: 'OpenAI × Start2 × Zendesk Hackathon · Patch' },
  { value: '12', label: 'businesses in a six-week FieldCraft pilot' },
  { value: '~8 → ~2 min', label: 'directional invoice-time pilot comparison' },
  { value: '540', label: 'Sepsis Vitals tests passed · 18 skipped' },
]
