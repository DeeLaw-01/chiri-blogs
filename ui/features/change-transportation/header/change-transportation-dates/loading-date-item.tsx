import { Box, HStack, Spinner, StackProps } from '@chakra-ui/react'
import SelectedDateItem from './selected-date-item'

type ChangeTransportationLoadingProps = {
  selected: string
} & StackProps

export default function ChangeTransportationLoading({
  selected,
  ...rest
}: ChangeTransportationLoadingProps) {
  return (
    <HStack mb="4" h="4.5rem" {...rest}>
      <LoadingItem />
      <LoadingItem />
      <SelectedDateItem date={selected} />
      <LoadingItem />
      <LoadingItem />
    </HStack>
  )
}

const LoadingItem = () => (
  <Box
    borderRadius="md"
    zIndex="2"
    bg={'rgba(0,0,0, 0.2)'}
    w="3rem"
    h="4rem"
    textAlign="center"
    py="5"
  >
    <Spinner size="sm" color="_lightgray" opacity="0.5" />
  </Box>
)
