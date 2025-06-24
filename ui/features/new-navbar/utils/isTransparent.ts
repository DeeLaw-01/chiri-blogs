import { TransparentPagesRegex } from '../data/transparent-pages'

export default function isTransparent(path: string) {
  if (path === '/') return true
  return TransparentPagesRegex.some((regex) => regex.test(path))
}
