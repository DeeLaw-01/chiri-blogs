import { calc } from '@chakra-ui/react'
import formatHours from 'src/utils/getFormattedHours'
import Alert from 'ui/primitives/Alert'
import Text from 'ui/primitives/Text'

type LayoverAlertProps = {
  layover: {
    duration: number
    destination: string
  }
}

export default function LayoverAlert({ layover }: LayoverAlertProps) {
  return (
    <Alert
      info
      fontSize="xs"
      width={calc('100%').subtract('55px').toString()}
      ml={'55px'}
      p="1"
      px="2"
      mt="2"
    >
      <Text
        st="flight-info:layover.in"
        sd={{
          time: formatHours(layover.duration),
          destination: layover.destination,
        }}
      />
    </Alert>
  )
}
