import { HStack, VStack } from '@chakra-ui/react'
import FlightIcon from '@/icons/transport/flight-icon.svg'
import TrainIcon from '@/icons/transport/train-icon.svg'
import FerryIcon from '@/icons/transport/ferry-icon.svg'
import BusIcon from '@/icons/transport/bus-icon.svg'
import CircleIconWrapper from 'ui/shared/circle-icon-wrapper'
import generateUUID from './generateUUID'

const getMultipleTransportIcon = (mode, circle, color) => {
  const icons = []

  const IconContainer = ({ children }) => {
    return <HStack>{children}</HStack>
  }

  if (mode.includes('aircraft')) {
    icons.push(
      <FlightIcon
        width="20"
        height="20"
        stroke={color ?? 'primary'}
        key={generateUUID()}
      />
    )
  }

  if (mode.includes('train')) {
    icons.push(
      <TrainIcon
        width="22"
        height="22"
        stroke={color ?? 'primary'}
        key={generateUUID()}
      />
    )
  }

  if (mode.includes('ferry')) {
    icons.push(
      <FerryIcon
        width="22"
        height="22"
        stroke={color ?? 'primary'}
        key={generateUUID()}
      />
    )
  }

  if (mode.includes('bus')) {
    icons.push(
      <BusIcon
        width="20"
        height="20"
        stroke={color ?? 'primary'}
        key={generateUUID()}
      />
    )
  }

  return (
    <VStack spacing="2">
      {circle ? (
        <CircleIconWrapper p={1} _hover={{}}>
          {icons}
        </CircleIconWrapper>
      ) : (
        <IconContainer>{icons}</IconContainer>
      )}
    </VStack>
  )
}

export default getMultipleTransportIcon
