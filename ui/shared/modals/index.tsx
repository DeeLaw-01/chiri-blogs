import dynamic from 'next/dynamic'

import { useGlobalAtoms } from 'src/hooks/useGlobalAtoms'
import { AuthModalProps } from './auth-modal'

const DynamicAuthModal = dynamic<AuthModalProps>(() => import('./auth-modal'))

export default function GlobalModals() {
  const { showAuth, setShowAuth } = useGlobalAtoms()

  return (
    <>{showAuth && <DynamicAuthModal onClose={() => setShowAuth(false)} />}</>
  )
}
