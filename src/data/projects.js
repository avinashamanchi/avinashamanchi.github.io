export const projects = [
  {
    id: 'resume-analyzer',
    category: 'ai \u00b7 automation',
    title: 'AI Resume Analyzer',
    context:
      'Job seekers spend hours tailoring resumes without knowing how Applicant Tracking Systems actually parse their documents. I built a web application that automates resume analysis, extracting keywords and simulating ATS scoring to give candidates actionable, data\u2011driven feedback before they apply.',
    stack: 'Python, HTML/CSS, API Integrations, Render (Cloud Deployment)',
    outcome:
      'Deployed publicly on Render, the analyzer parses uploaded resumes, extracts critical keywords, and generates an ATS compatibility score with specific improvement recommendations\u2014eliminating the guesswork from resume optimization.',
    links: {
      live: 'https://resume-analyzer-al3g.onrender.com/',
      github: 'https://github.com/avinashamanchi/resume-analyzer',
    },
    repo: { owner: 'avinashamanchi', name: 'resume-analyzer' },
    hasMicroDemo: true,
  },
  {
    id: 'convoautopsy',
    category: 'ai \u00b7 nlp \u00b7 web',
    title: 'ConvoAutopsy',
    context:
      'Understanding communication dynamics requires structured analysis that most people never perform. I built an AI\u2011powered platform that dissects conversations to surface patterns, behavioral trends, and actionable insights for self\u2011improvement and interpersonal awareness.',
    stack: 'JavaScript, HTML/CSS, AI/NLP Integration, GitHub Pages',
    outcome:
      'Deployed as a cross\u2011platform web and iOS application with open\u2011source code. The tool generates structured, actionable feedback from raw conversation data, enabling users to identify communication blind spots and improve dialogue patterns in real time.',
    links: {
      live: 'https://avinashamanchi.github.io/convoautopsy/',
      github: 'https://github.com/avinashamanchi/convoautopsy',
    },
    repo: { owner: 'avinashamanchi', name: 'convoautopsy' },
    hasMicroDemo: false,
  },
  {
    id: 'sage-app',
    category: 'accessibility \u00b7 mobile',
    title: 'S.A.G.E App',
    context:
      'Seniors face significant daily challenges with technology, from complex interfaces to inaccessible design patterns. I developed a mobile\u2011first application focused on accessibility and daily support, collaborating on feature design that directly addresses age\u2011related usability barriers.',
    stack: 'Python, Java, MIT App Inventor, GitHub Pages',
    outcome:
      'Reached 50+ early users in pilot testing. Improved user task completion by 35% and reduced onboarding time by 40% for new users. Achieved 90% positive feedback from senior testers, validating the accessibility\u2011first design approach.',
    links: {
      live: 'https://avinashamanchi.github.io/Act_sage/',
      github: 'https://github.com/avinashamanchi/Act_sage',
    },
    repo: { owner: 'avinashamanchi', name: 'Act_sage' },
    hasMicroDemo: false,
  },
  {
    id: 'eaa-detailing',
    category: 'entrepreneurship \u00b7 web',
    title: 'EAA Detailing',
    context:
      'Co-founded an automotive detailing business that needed a professional online presence and streamlined booking system to scale operations across multiple cities.',
    stack: 'Web Development, Social Media Marketing, Business Operations',
    outcome:
      'Scaled to 100+ clients across 4 cities, built website handling 20+ monthly bookings, increased client acquisition by 30% through digital marketing and SEO optimization.',
    links: {
      live: 'https://eaadetailingservices.com',
    },
    repo: null,
    hasMicroDemo: false,
  },
]

export const inDevelopment = [
  {
    id: 'finance-tracker',
    title: 'Personal Finance Tracker',
    description: 'AI-powered expense categorization and budgeting with visual analytics.',
    stack: ['Python', 'React', 'Data Visualization'],
    status: 'In Development',
  },
]
