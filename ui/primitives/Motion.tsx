import { m, Transition } from 'framer-motion'

import {
  Box,
  Center,
  Flex,
  Grid,
  HStack,
  SimpleGrid,
  Stack,
  VStack,
  Wrap,
} from '@chakra-ui/react'
import type {
  BoxProps,
  FlexProps,
  StackProps,
  WrapProps,
  CenterProps,
  GridProps,
  SimpleGridProps,
} from '@chakra-ui/react'
import Text from './Text'
import Heading from './Heading'
import { CustomButtonProps } from './Button/button.type'
import Button from './Button'
import { CustomTextProps } from './Text/text.type'
import { CustomHeadingProps } from './Heading/heading.type'

const MotionBox = m<BoxProps & Transition>(Box)

const MotionFlex = m<FlexProps>(Flex)
const MotionStack = m<StackProps>(Stack)
const MotionHStack = m<StackProps>(HStack)
const MotionVStack = m<StackProps>(VStack)

const MotionCenter = m<CenterProps>(Center)
const MotionWrap = m<WrapProps>(Wrap)

const MotionGrid = m<GridProps>(Grid)
const MotionSimpleGrid = m<SimpleGridProps>(SimpleGrid)
const MotionText = m<CustomTextProps>(Text)
const MotionHeading = m<CustomHeadingProps>(Heading)

const MotionButton = m<CustomButtonProps>(Button)

export {
  MotionBox,
  MotionStack,
  MotionHStack,
  MotionVStack,
  MotionCenter,
  MotionWrap,
  MotionFlex,
  MotionGrid,
  MotionSimpleGrid,
  MotionText,
  MotionHeading,
  MotionButton,
}
