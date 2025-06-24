import Modal from 'ui/primitives/Modal'
import AuthView from 'ui/shared/authentication'

export type AuthModalProps = {
  onClose: () => void
}

export default function AuthModal({ onClose }: AuthModalProps) {
  return (
    <Modal isCentered isOpen={true} onClose={onClose}>
      <AuthView />
    </Modal>
  )
}
