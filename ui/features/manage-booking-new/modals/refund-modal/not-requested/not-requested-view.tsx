import { Box } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import RefundConfirmation from './confirmation/confirmation-view'
import FillRefundDetails from './fill-details/fill-details-view'
import { useState } from 'react'

type RefundNotRequestedProps = {
  onClose: () => void
}

export default function RefundNotRequested({
  onClose,
}: RefundNotRequestedProps) {
  const [showDetails, setShowDetails] = useState<boolean>(false)

  return (
    <Box>
      <Heading as="h2" st="common.general.refund" py="2" />
      {!showDetails && (
        <RefundConfirmation onClose={onClose} setShowDetails={setShowDetails} />
      )}
      {showDetails && <FillRefundDetails />}
    </Box>
  )
}
