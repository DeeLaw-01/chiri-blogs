import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Chiri.pk | Customer Service Challenge',
  },
  description: '',
  robots: {
    index: false,
  },
}

export default function CustomerServiceChallengePage({
  params,
  searchParams,
}: {
  params: Record<string, string>
  searchParams: Record<string, string>
}) {
  const url = new URL('https://roaring-stroopwafel-7f5cb3.netlify.app/')
  Object.keys(searchParams).forEach((key) => {
    url.searchParams.append(key, searchParams[key])
  })

  return (
    <iframe
      src={url.toString()}
      style={{ width: '100%', height: '100vh', border: 'none' }}
    />
  )
}
