import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  robots: {
    index: false,
  },
}

export default function CatchAllPage() {
  notFound()
}
