import { HStack, StackProps } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import theme from 'src/styles/theme'

function UrgencySticker({
  icon,
  discountPercentage,
  ...props
}: StackProps & { icon: JSX.Element; discountPercentage: number }) {
  return (
    <HStack
      position={'absolute'}
      top={3}
      left={3}
      background={`linear-gradient(156.35deg,${theme.colors._red} 1.24%, ${theme.colors._orange} 101.04%)`}
      py={1.5}
      px={2}
      borderRadius={'full'}
      color={'_white'}
      fontSize="xs"
      {...props}
    >
      {icon}
      <Text
        fontWeight="medium"
        st="new-hotel-page.discount.percentage"
        sd={{ discount: discountPercentage }}
      />
    </HStack>
  )
}

export default UrgencySticker
