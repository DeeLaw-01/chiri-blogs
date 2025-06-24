import { API_PERFORMANCE } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'

const baseUrl = API_PERFORMANCE

export default function getPerformanceQuery(start: number, service: string) {
  // b64 encode service name, to avoid downstream issues with special characters
  const now = Date.now() // Timestamping immediately, to not have the latency of the b64 encoding
  const b64Service = Buffer.from(service).toString('base64')
  const body = {
    service: b64Service,
    latency_ms: now - start,
  }

  const url = baseUrl

  return {
    url,
    body: body,
    method: Method.POST,
  }
}
