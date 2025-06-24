import { HTMLMotionProps } from 'framer-motion'
import { CustomButtonProps } from '../Button/button.type'
import { BoxProps } from '@chakra-ui/react'

export type AnimatedButtonProps = Omit<CustomButtonProps, 'asLink'>

export type StyleType = {
  default: Omit<CustomButtonProps, 'id'>
  motion: BoxProps & HTMLMotionProps<'div'>
}
