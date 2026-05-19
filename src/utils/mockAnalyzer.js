import { ATS_HARD_SKILLS, ATS_ACTION_VERBS, METRICS_PATTERN } from './constants'

export function mockAnalyzer(text) {
  const lower = text.toLowerCase()

  const foundSkills = ATS_HARD_SKILLS.filter((skill) => lower.includes(skill))
  const foundVerbs = ATS_ACTION_VERBS.filter((verb) => lower.includes(verb))
  const foundMetrics = [...new Set((text.match(METRICS_PATTERN) || []).map(m => m.trim()))]

  const keywords = [
    ...foundSkills.map((s) => ({ type: 'skill', value: s })),
    ...foundVerbs.map((v) => ({ type: 'action', value: v })),
    ...foundMetrics.slice(0, 5).map((m) => ({ type: 'metric', value: m })),
  ]

  // Score: 40% skills diversity, 30% action verbs, 20% metrics, 10% length
  const skillScore = Math.min(foundSkills.length / 8, 1) * 40
  const verbScore = Math.min(foundVerbs.length / 5, 1) * 30
  const metricScore = Math.min(foundMetrics.length / 3, 1) * 20
  const lengthScore = Math.min(text.length / 1500, 1) * 10
  const score = Math.round(skillScore + verbScore + metricScore + lengthScore)

  const suggestions = []
  if (foundSkills.length < 5) {
    suggestions.push('Add more technical skills — ATS systems scan for specific technologies.')
  }
  if (foundVerbs.length < 3) {
    suggestions.push('Use stronger action verbs like "deployed", "architected", or "optimized".')
  }
  if (foundMetrics.length < 2) {
    suggestions.push('Quantify your impact — include numbers, percentages, and measurable outcomes.')
  }
  if (text.length < 500) {
    suggestions.push('Your resume seems short. Expand on project details and responsibilities.')
  }
  if (suggestions.length === 0) {
    suggestions.push('Strong resume! Consider tailoring keywords to specific job descriptions.')
  }

  return { keywords, score, suggestions }
}
