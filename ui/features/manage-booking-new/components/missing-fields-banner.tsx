import { Box, Stack } from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import Alert from 'ui/primitives/Alert'
import { useManageBookingAtoms } from '../hooks/useManageBookingAtoms'
import { useResponsiveSizes } from 'src/contexts/responsive'

export default function MissingFieldsBanner() {
  const { booking, setShowMissingFields } = useManageBookingAtoms()
  const { isMobile } = useResponsiveSizes()

  let needInfo = booking?.passengers.filter((p) => p.missing_fields?.length > 0)
  if (needInfo?.length === 0) return <></>

  return (
    <>
      <Alert
        error
        mt="2"
        zIndex="1152"
        icon={isMobile ? false : true}
        fontSize={{ base: 'sm', md: 'md' }}
      >
        <Stack
          direction={['column', 'row']}
          justify={{ base: 'flex-start', md: 'space-between' }}
          w="full"
        >
          <Box>
            <Text
              fontWeight={'medium'}
              st={'manage-booking-page.passenger.banner.heading'}
            />
            <Text
              fontSize={{ base: 'xs', md: 'sm' }}
              st={'manage-booking-page.passenger.banner.sub.heading'}
            />
          </Box>
          <Box alignSelf={{ base: 'left', md: 'center' }}>
            <Button
              id="fill-missing-fields"
              primary
              onClick={() => setShowMissingFields(true)}
              fontSize={{ base: 'sm', md: 'md' }}
            >
              <Text notag st={'manage-booking-page.passenger.banner.button'} />
            </Button>
          </Box>
        </Stack>
      </Alert>

      {/* Darken and blur background */}
      <Box
        inset={0}
        zIndex="1151"
        position="absolute"
        pointerEvents="none"
        bg="rgba(0, 0, 0, 0.6)"
        backdropFilter="blur(2px)"
      />
    </>
  )
}
