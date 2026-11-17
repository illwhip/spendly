"use client"

export default function ErrorPage({ retry }) {
  return (
    <main>
      <h1>Something went horribly wrong</h1>
      <p className="muted">We could not load your expenses. Check data/expenses.json for a typo</p>
      <button className="button" onClick={() => retry()}>Try Again</button>
    </main>
  )
}