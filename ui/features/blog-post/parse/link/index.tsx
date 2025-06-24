import { ReactNode } from 'react'
import Link from 'ui/primitives/Link'

type BlogImageProps = {
  attribs: { [name: string]: string }
  children: ReactNode
}

export default function BlogLink({ attribs, children }: BlogImageProps) {
  return (
    <Link isExternal color="primary" href={attribs.href}>
      {children}
    </Link>
  )
}
