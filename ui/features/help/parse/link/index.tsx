import { ReactNode } from 'react'
import Link from 'ui/primitives/Link'

type HelpLinkProps = {
  attribs: { [name: string]: string }
  children: ReactNode
}

export default function HelpLink({ attribs, children }: HelpLinkProps) {
  return (
    <Link color="primary" href={attribs.href}>
      {children}
    </Link>
  )
}
