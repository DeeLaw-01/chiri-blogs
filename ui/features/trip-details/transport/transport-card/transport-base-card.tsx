import { Box, VStack, Stack, BoxProps } from '@chakra-ui/react'

import { Transport } from 'src/shared-types/transport.type'
import Card from 'ui/primitives/Card'
import { useMediaQuery } from '@chakra-ui/react'
import TransportInfoFull from './transport-info-full'

type TransportBaseCardProps = {
  transport: Transport
  animate?: boolean
  children?: React.ReactNode
  showDetails?: ({ transport }: { transport: Transport }) => void
} & BoxProps

export default function TransportBaseCard({
  transport,
  animate = false,
  children,
  showDetails,
  ...rest
}: TransportBaseCardProps) {
  const [minBreakCard] = useMediaQuery('(min-width: 30em)')

  return (
    <Card
      className="transport-card"
      w="full"
      boxShadow="none"
      _hover={{
        cursor: 'pointer',
        filter: 'drop-shadow(0px 1px 9px rgba(0, 0, 0, 0.18))',
      }}
      background={
        !minBreakCard
          ? 'radial-gradient(10px at left 70%, #0000 100%, #fff) left, radial-gradient(10px at right 70%, #0000 100%, #fff) right'
          : 'radial-gradient(10px at 70% top, #0000 100%, #fff) top, radial-gradient(10px at 70% bottom, #0000 100%, #fff) bottom'
      }
      backgroundSize={!minBreakCard ? '51% 100%' : '100% 51%'}
      backgroundRepeat="no-repeat"
      bg="_white"
      filter="drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.18))"
      mb={8}
      py={minBreakCard ? '10px' : 'initial'}
      px={!minBreakCard ? '10px' : 'initial'}
      position={'relative'}
      {...rest}
    >
      <Stack
        direction={['column', 'row']}
        display="flex"
        alignItems={'stretch'}
        filter="drop-shadow(0) !important" // Safari applies filter-drop-shadow on all children instead, so we need this workaround
        bg="white"
        borderRadius="lg"
      >
        <Box
          w="full"
          onClick={() => showDetails && showDetails({ transport: transport })}
        >
          <TransportInfoFull transport={transport} animate={animate} />
        </Box>
        {children && (
          <VStack
            minW="30%"
            maxW={minBreakCard ? '30%' : '100%'}
            justifyContent={'space-around'}
            px={0}
          >
            <Stack
              direction={['row', 'column']}
              w="full"
              h="100%"
              borderLeft={!minBreakCard ? 'none' : '1px dotted lightgray'}
              justifyContent="space-between"
              px={!minBreakCard ? 0 : 4}
              py="4"
            >
              {children}
            </Stack>
          </VStack>
        )}
      </Stack>
      {!minBreakCard && children && (
        <Box
          position="absolute"
          top="70%"
          borderTop={'1px dotted lightgray'}
          right={'10px'}
          left={'10px'}
        />
      )}
    </Card>
  )
}
