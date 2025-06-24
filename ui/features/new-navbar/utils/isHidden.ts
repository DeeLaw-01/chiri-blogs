import { HiddenPagesRegex } from '../data/hidden-pages'

export default function isHidden(path: string, isMobile: boolean) {
  if (!isMobile) return false
  return HiddenPagesRegex.some((regex) => regex.test(path))
}
