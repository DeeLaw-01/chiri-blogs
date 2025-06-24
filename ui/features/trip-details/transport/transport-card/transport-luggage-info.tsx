import { HStack, Icon, StackProps } from '@chakra-ui/react'
import getLuggage from 'ui/features/manage-booking-new/utils/getLuggage'
import Text from 'ui/primitives/Text'
import { LuggageItemType } from 'ui/features/manage-booking-new/types/luggage.type'
import { Transport } from 'src/shared-types/transport.type'
import Tooltip from 'ui/primitives/Tooltip'

type TransportLuggageInfoProps = {
  transport: Transport
} & StackProps

export default function LuggageInfo({
  transport,
  ...rest
}: TransportLuggageInfoProps) {
  const luggageDetails = transport.luggage ?? {
    personal_item: transport.passengers.total_passengers,
  }

  return (
    <HStack {...rest}>
      {Object.values(LuggageItemType).map((key: LuggageItemType) => {
        const [icon, label] = getLuggage(key)
        return (
          <HStack
            key={key}
            spacing="1"
            alignItems="center"
            color={rest.color ?? '_black'}
            w="fit-content"
          >
            <Tooltip label={<Text st={label} />}>
              <HStack display="inline-block">
                <Icon
                  as={icon}
                  width="0.7rem"
                  height="0.7rem"
                  fill={rest.color ?? '_black'}
                  display="inline-block"
                />
                <Text as="span" fontSize="0.7rem" mx="3px">
                  {luggageDetails[key] || 0}
                </Text>
              </HStack>
            </Tooltip>
          </HStack>
        )
      })}
    </HStack>
  )
}
