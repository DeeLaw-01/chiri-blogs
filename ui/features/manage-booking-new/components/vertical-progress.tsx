import { Box, VStack, Text, Flex, StackProps } from '@chakra-ui/react'
import SmallCheckIcon from '@/icons/shared/tick-icon.svg'

type VerticalProgressProps = {
  steps: any[]
  currentStep: number
} & StackProps

export default function VerticalProgress({
  steps,
  currentStep,
  ...rest
}: VerticalProgressProps) {
  const lineHeight = (currentStep - 1) * 2.5

  return (
    <VStack align="start" spacing={4} position="relative" {...rest}>
      <Box
        position="absolute"
        left="0.75rem"
        top="4"
        bottom="4"
        w="2px"
        bg="_lightgray"
      >
        <Box
          position="absolute"
          height={`${lineHeight}rem`}
          w="2px"
          bg="primary"
        />
      </Box>

      {steps.map((step, idx) => (
        <Flex key={idx} alignItems="center" w="full">
          <VStack
            width="1.5rem"
            height="1.5rem"
            borderRadius="50%"
            bg={idx < currentStep ? 'primary' : '_lightgray'}
            mr={{ base: 2, md: 4 }}
            position="relative"
            color="_white"
            justify="space-around"
          >
            {idx < currentStep ? (
              <SmallCheckIcon width="10px" />
            ) : (
              <Text fontSize="sm">{currentStep}</Text>
            )}
          </VStack>
          <Text
            fontSize={{ base: 'sm', md: 'md' }}
            opacity={idx < currentStep ? '1' : '0.5'}
          >
            {step}
          </Text>
        </Flex>
      ))}
    </VStack>
  )
}
