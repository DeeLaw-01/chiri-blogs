import { Box, CloseButton, HStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Alert from 'ui/primitives/Alert'
import { CustomAlertProps } from 'ui/primitives/Alert'
import { useState } from 'react'

type MarketplaceAlertProps = {} & CustomAlertProps

export default function MarketplaceAlert({ ...rest }: MarketplaceAlertProps) {
  const [closed, setClosed] = useState<boolean>(false)

  if (closed) return <></>
  return (
    <Alert info icon mt="2" {...rest}>
      <CloseButton
        position="absolute"
        right="1"
        top="1"
        onClick={() => setClosed(true)}
      />
      <HStack alignItems={'flex-start'}>
        <Box>
          <Text
            fontWeight="medium"
            fontSize="sm"
            as={'span'}
            st="new-manage-booking-page.booking.overview.market.place.alert.heading"
          />
          {' 🌍'}
          <Text
            fontSize={{ base: 'xs', md: 'sm' }}
            mr="40px"
            st="new-manage-booking-page.booking.overview.market.place.alert.description"
          />
        </Box>
      </HStack>
    </Alert>
  )
}
