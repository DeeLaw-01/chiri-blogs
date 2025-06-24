export function isSameURL(target: URL, current: URL) {
  const cleanTarget =
    target.protocol + '//' + target.host + target.pathname + target.search
  const cleanCurrent =
    current.protocol + '//' + current.host + current.pathname + current.search

  return cleanTarget === cleanCurrent
}

export function sanitizeQueryParams(
  query: Record<string, any>
): Record<string, string> {
  return Object.fromEntries(
    Object.entries(query)
      .filter(([_, value]) => value != null && value !== '') // Remove null, undefined, and empty strings
      .map(([key, value]) => [key, String(value)]) // Convert values to strings
  )
}
