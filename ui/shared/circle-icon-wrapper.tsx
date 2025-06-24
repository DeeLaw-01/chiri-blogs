import { Center, CenterProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

type CircleIconWrapperType = {
  children: ReactNode
  color?: string
} & CenterProps

const CircleIconWrapper = ({
  color = '_lightgray',
  children,
  ...rest
}: CircleIconWrapperType): JSX.Element => {
  return (
    <Center
      border={'1px solid'}
      borderColor={color}
      p={2}
      borderRadius={'full'}
      _hover={{ cursor: 'pointer', bg: '_lightestgray' }}
      {...rest}
    >
      {children}
    </Center>
  )
}

export default CircleIconWrapper
