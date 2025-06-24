import { StackProps, HStack } from '@chakra-ui/react'
import { CONFIG_SETTINGS } from 'src/config'
import ShieldIcon from '@/icons/manage-booking/shield.svg'
import Text from 'ui/primitives/Text'
import { InsuranceTypeStrings } from 'src/shared-types/insurance.type'

type ProtectionTagProps = {
  product: InsuranceTypeStrings
} & StackProps

export default function ProtectionTag({ ...rest }: ProtectionTagProps) {
  return (
    <HStack display="inline-flex" gap="0.1em" verticalAlign="middle" {...rest}>
      <Text as="span" color="_blue" display="inline-block">
        <ShieldIcon
          width="1em"
          height="1em"
          style={{ verticalAlign: 'middle' }}
        />
      </Text>
      <Text as="span" color="inherit" fontSize="inherit" verticalAlign="middle">
        {CONFIG_SETTINGS.INSURANCE_FLEX_NAME}
      </Text>
    </HStack>
  )
}
