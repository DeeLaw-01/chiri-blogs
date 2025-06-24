import { As, Box, BoxProps, HStack, Icon, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'

type BaseInputBoxProps = {
  icon: As
  label: string
} & BoxProps

export default function BaseInputBox({
  icon,
  label,
  children,
  ...rest
}: BaseInputBoxProps) {
  return (
    <Box
      w="full"
      bg="_lightestgray"
      border="1px solid"
      borderColor="_lightgray"
      borderRadius={'lg'}
      px={4}
      py={2}
      {...rest}
    >
      <HStack alignItems="flex-start">
        <Box>
          <Icon
            as={icon}
            width="16px"
            height="16px"
            stroke="primary"
            color="primary"
          />
        </Box>
        <VStack gap="0" alignItems="flex-start">
          <Text color="_gray" fontSize="xs" st={label} />
          <Box minH="1lh">{children}</Box>
        </VStack>
      </HStack>
    </Box>
  )
}
