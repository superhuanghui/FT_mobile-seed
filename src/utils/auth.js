import Cookies from 'js-cookie'

const SessionIdKey = 'MDGJ-SessionId'

export function getSessionId() {
  return Cookies.get(SessionIdKey)
}

export function setSessionId(sessionId) {
  return Cookies.set(SessionIdKey, sessionId)
}

export function removeSessionId() {
  return Cookies.remove(SessionIdKey)
}
