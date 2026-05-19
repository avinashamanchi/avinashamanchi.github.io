import { useState } from 'react'
import { mockAnalyzer } from '../utils/mockAnalyzer'
import { RENDER_URL, FETCH_TIMEOUT } from '../utils/constants'

export default function MicroDemo() {
  const [expanded, setExpanded] = useState(false)
  const [text, setText] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null)

  const showToast = (message) => {
    setToast(message)
    setTimeout(() => setToast(null), 4000)
  }

  const analyze = async () => {
    if (!text.trim() || loading) return
    setLoading(true)
    setResult(null)

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT)

    try {
      const res = await fetch(RENDER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
        signal: controller.signal,
      })
      clearTimeout(timeoutId)
      const data = await res.json()
      setResult(data)
    } catch {
      clearTimeout(timeoutId)
      const fallback = mockAnalyzer(text)
      setResult(fallback)
      showToast('Render backend warming up — running local analysis engine')
    } finally {
      setLoading(false)
    }
  }

  const scoreColor = (score) => {
    if (score >= 70) return 'text-green-600 dark:text-green-400'
    if (score >= 40) return 'text-yellow-600 dark:text-yellow-400'
    return 'text-red-500 dark:text-red-400'
  }

  const chipColor = (type) => {
    if (type === 'skill') return 'bg-electric-blue/10 text-electric-blue'
    if (type === 'action') return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
    return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
  }

  return (
    <div className="mt-6">
      <button
        onClick={() => setExpanded(!expanded)}
        className="inline-flex items-center gap-2 font-body text-[13px] text-electric-blue font-medium transition-colors duration-tesla hover:opacity-80"
      >
        <span>{expanded ? 'Hide' : 'Try it live'}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={`transition-transform duration-tesla ${expanded ? 'rotate-180' : ''}`}
        >
          <path d="M2 4l4 4 4-4" />
        </svg>
      </button>

      {expanded && (
        <div className="mt-4 p-5 rounded-[8px] bg-ash dark:bg-dark-surface border border-cloud dark:border-dark-border">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste your resume text here..."
            className="w-full h-32 p-3 rounded-tesla bg-white dark:bg-carbon border border-cloud dark:border-dark-border text-carbon dark:text-white font-body text-[14px] resize-none focus:outline-none focus:border-electric-blue transition-colors duration-tesla"
          />
          <div className="flex items-center gap-3 mt-3">
            <button
              onClick={analyze}
              disabled={loading || !text.trim()}
              className="bg-electric-blue text-white font-body text-[13px] font-medium px-5 h-[36px] rounded-tesla transition-all duration-tesla hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Analyzing...' : 'Analyze'}
            </button>
            {loading && (
              <div className="w-4 h-4 border-2 border-electric-blue border-t-transparent rounded-full animate-spin" />
            )}
          </div>

          {result && (
            <div className="mt-5 space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="font-body text-[13px] text-pewter dark:text-silver-fog font-medium uppercase tracking-[0.06em]">
                  ATS Score
                </span>
                <span className={`font-display text-[28px] font-medium ${scoreColor(result.score)}`}>
                  {result.score}
                </span>
                <span className="font-body text-[13px] text-silver-fog">/100</span>
              </div>

              {result.keywords && result.keywords.length > 0 && (
                <div>
                  <p className="font-body text-[13px] text-pewter dark:text-silver-fog font-medium uppercase tracking-[0.06em] mb-2">
                    Keywords Found
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {result.keywords.map((kw, i) => (
                      <span
                        key={i}
                        className={`font-body text-[12px] font-medium px-2 py-1 rounded-tesla ${chipColor(kw.type)}`}
                      >
                        {kw.value}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {result.suggestions && result.suggestions.length > 0 && (
                <div>
                  <p className="font-body text-[13px] text-pewter dark:text-silver-fog font-medium uppercase tracking-[0.06em] mb-2">
                    Suggestions
                  </p>
                  <ul className="space-y-1.5">
                    {result.suggestions.map((s, i) => (
                      <li
                        key={i}
                        className="font-body text-[14px] text-graphite dark:text-dark-text-secondary leading-[1.5] flex gap-2"
                      >
                        <span className="text-electric-blue mt-0.5 shrink-0">&rarr;</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Toast notification */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] toast-enter">
          <div className="bg-carbon dark:bg-white text-white dark:text-carbon font-body text-[13px] font-medium px-5 py-3 rounded-[8px] max-w-[400px] text-center">
            {toast}
          </div>
        </div>
      )}
    </div>
  )
}
