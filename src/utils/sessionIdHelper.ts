export function getSessionId() {
  let sessionId = sessionStorage.getItem('session_id')
  if (sessionId === null) sessionId = ''

  return sessionId
}

export function setSessionId(sessionId) {
  sessionStorage.setItem('session_id', sessionId)
}

export function deleteSessionId() {
  sessionStorage.removeItem('session_id')
}
