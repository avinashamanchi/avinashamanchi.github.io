import { useGitHubRepo, formatRelativeDate } from '../hooks/useGitHubRepo'

export default function GitHubMetrics({ owner, repo }) {
  const { stars, lastPush, language, loading, error } = useGitHubRepo(owner, repo)

  if (loading || error || stars === null) return null

  return (
    <div className="mt-4 font-body text-[12px] text-silver-fog dark:text-silver-fog flex items-center gap-2 flex-wrap">
      {stars !== null && <span>&#9733; {stars}</span>}
      {lastPush && (
        <>
          <span>&middot;</span>
          <span>Updated {formatRelativeDate(lastPush)}</span>
        </>
      )}
      {language && (
        <>
          <span>&middot;</span>
          <span>{language}</span>
        </>
      )}
    </div>
  )
}
