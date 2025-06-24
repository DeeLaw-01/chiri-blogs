import { Box, HStack } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import { useCheckoutAtoms } from '../../useCheckoutAtoms'
import TickIcon from '@/icons/new/alert/check.svg'

type SectionButtonProps = {
  title: string
  step: number
}

export default function SectionButton({ title, step }: SectionButtonProps) {
  const { step: currentStep, setStep } = useCheckoutAtoms()

  const isCompleted = currentStep > step
  const isActive = currentStep === step

  const handleClick = () => {
    if (currentStep <= step) return
    else setStep(step)
  }

  return (
    <HStack
      w="full"
      onClick={handleClick}
      _hover={{ cursor: isCompleted || isActive ? 'pointer' : 'not-allowed' }}
      id={`section-${step}`}
    >
      <Box
        bg={isCompleted ? '_green' : isActive ? 'primary' : '_lightgray'}
        minW={10}
        minH={10}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        borderRadius={'100%'}
        mr={{ base: 2, md: 0 }}
        color="_white"
        p={3}
        aspectRatio={1 / 1}
      >
        {isCompleted && <TickIcon height="16" width="16" />}
        {!isCompleted && step + 1}
      </Box>
      <Heading as="h2" color={isCompleted || isActive ? '_black' : '_gray'}>
        {title}
      </Heading>
    </HStack>
  )
}
