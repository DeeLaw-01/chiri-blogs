import { Box } from '@chakra-ui/react'
import { Transport } from 'src/shared-types/transport.type'
import { useResponsiveSizes } from 'src/contexts/responsive'
import ChangeTransportationHeaderMobile from './change-transportation-header-mobile'
import ChangeTransportationHeaderDesktop from './change-transportation-header-desktop'

type ChangeTransportationHeaderProps = {
  transport: Transport
  onClose: () => void
}

export default function ChangeTransportationHeader({
  transport,
  onClose,
}: ChangeTransportationHeaderProps) {
  const { isMobile } = useResponsiveSizes()
  return (
    <Box w="full" maxW="60rem">
      {isMobile && (
        <ChangeTransportationHeaderMobile
          transport={transport}
          onClose={onClose}
        />
      )}
      {!isMobile && <ChangeTransportationHeaderDesktop transport={transport} />}
    </Box>
  )
}
