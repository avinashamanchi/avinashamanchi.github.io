import { useState, useEffect } from 'react'
import { GITHUB_API } from '../utils/constants'

export function useGitHubRepo(owner, repo) {
  const [data, setData] = useState({ stars: null, lastPush: null, language: null, loading: true, error: false })

  useEffect(() => {
    if (!owner || !repo) {
      setData({ stars: null, lastPush: null, language: null, loading: false, error: false })
      return
    }

    const cacheKey = `gh-${owner}-${repo}`
    const cached = sessionStorage.getItem(cacheKey)

    if (cached) {
      setData({ ...JSON.parse(cached), loading: false, error: false })
      return
    }

    let cancelled = false

    fetch(`${GITHUB_API}/${owner}/${repo}`)
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API error')
        return res.json()
      })
      .then((json) => {
        if (cancelled) return
        const result = {
          stars: json.stargazers_count,
          lastPush: json.pushed_at,
          language: json.language,
        }
        sessionStorage.setItem(cacheKey, JSON.stringify(result))
        setData({ ...result, loading: false, error: false })
      })
      .catch(() => {
        if (cancelled) return
        setData({ stars: null, lastPush: null, language: null, loading: false, error: true })
      })

    return () => { cancelled = true }
  }, [owner, repo])

  return data
}

export function formatRelativeDate(isoString) {
  if (!isoString) return ''
  const diff = Date.now() - new Date(isoString).getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  if (days === 0) return 'today'
  if (days === 1) return 'yesterday'
  if (days < 30) return `${days}d ago`
  if (days < 365) return `${Math.floor(days / 30)}mo ago`
  return `${Math.floor(days / 365)}y ago`
}
