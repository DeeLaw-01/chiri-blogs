import { Text, TextProps } from '@chakra-ui/react'

type StarsProps = {
  amount: number
} & TextProps

export default function Stars({ amount, size = '2xl', ...rest }: StarsProps) {
  return (
    <Text fontSize={size} color="#FFC82B" {...rest}>
      {'★'.repeat(amount)}
    </Text>
  )
}
