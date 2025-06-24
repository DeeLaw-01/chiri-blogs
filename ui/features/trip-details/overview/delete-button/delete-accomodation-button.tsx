import { Box, HStack, useDisclosure, Spinner } from '@chakra-ui/react'
import { useResponsiveSizes } from 'src/contexts/responsive'

import theme from 'src/styles/theme'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import Modal from 'ui/primitives/Modal'
import Button from 'ui/primitives/Button'
import DeleteIcon from '@/icons/profile/delete-icon.svg'
import { useEffect } from 'react'

export default function DeleteAccomodationButton({
  handleDelete,
  isLoading,
}: {
  isLoading: boolean
  handleDelete: (e: any) => Promise<void>
}) {
  const { isMobile } = useResponsiveSizes()
  const { isOpen, onClose, onOpen } = useDisclosure()

  useEffect(() => {
    if (isLoading) {
      onClose()
    }
  }, [isLoading])

  return (
    <>
      <Box
        p="3px"
        bg="_white"
        h="fit-content"
        onClick={onOpen}
        cursor="pointer"
        borderRadius="full"
        transition="all .3s"
        _hover={{ transform: 'scale(1.1)' }}
        border={{ base: !isLoading ? '1px solid' : 'none', md: 'none' }}
        borderColor="_lightgray"
      >
        {isLoading ? (
          <Spinner size="sm" pr="2" />
        ) : (
          <DeleteIcon
            stroke={theme.colors._gray}
            width={isMobile ? '14px' : '17px'}
            height={isMobile ? '14px' : '17px'}
          />
        )}
      </Box>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title={
          <Heading as="h2" st="new-trip-page:accommodation.button.remove" />
        }
      >
        <Text st="new-trip-page.accommodation.remove.description" />

        <HStack w="full" justify={'flex-end'} mt="5" mb="2">
          <Button id="remove-accommodation-modal" isLoading={isLoading} primary>
            <Text
              st="common.general.continue"
              onClick={(e) => {
                handleDelete(e)
              }}
            />
          </Button>
        </HStack>
      </Modal>
    </>
  )
}
