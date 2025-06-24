import { Flex } from '@chakra-ui/react'
import deleteProfile from 'src/api/queries/delete/profile/deleteProfileQuery'
import useSignedMutation from 'src/api/useSignedMutation'
import useAuth from 'src/hooks/useAuth'
import { useRouter } from 'src/i18n/router'
import Button from 'ui/primitives/Button'
import Heading from 'ui/primitives/Heading'
import Modal from 'ui/primitives/Modal'
import Text from 'ui/primitives/Text'

export type DeleteProfileModalProps = {
  isOpen: boolean
  onClose: () => void
}
export default function DeleteProfileModal({
  isOpen,
  onClose,
}: DeleteProfileModalProps) {
  const router = useRouter()
  const { trigger, isMutating } = useSignedMutation(deleteProfile())
  const { signOut } = useAuth()

  const handleDeleteProfile = () => {
    trigger(null, {
      onSuccess: async () => {
        await signOut()
        router.push('/')
      },
    })
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: 'md', md: '2xl' }}
      title={
        <Heading as="h3" st="profile-page.settings.delete.profile.heading" />
      }
    >
      <Text mb={4} st="profile-page.settings.delete.profile.description" />

      <Flex justify="flex-end" gap={2} my={2}>
        <Button id="close-profile-delete-button" primary onClick={onClose}>
          <Text notag st="common.general.cancel" />
        </Button>
        <Button
          id="confirm-delete-button"
          secondary
          onClick={handleDeleteProfile}
          isLoading={isMutating}
        >
          <Text notag st="profile-page.settings.delete.profile.heading" />
        </Button>
      </Flex>
    </Modal>
  )
}
