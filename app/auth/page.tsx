import Auth from './auth-page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Authenticating...',
  },
  description: '',
  robots: {
    index: false,
  },
}

export default function AuthPage() {
  return <Auth />
}
