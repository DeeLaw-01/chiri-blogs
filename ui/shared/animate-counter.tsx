'use client'

import {
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useEffect, useRef } from 'react'
import { MotionText } from 'ui/primitives/Motion'
import Text from 'ui/primitives/Text'

type AnimateCountProps = {
  /** The number to animate to. */
  to: number
  /** The prefix to show before the number. */
  prefix?: string
  /** The suffix to show after the number. */
  suffix?: string
  /** The number of decimal places to round to. */
  roundBy?: number
} & React.ComponentProps<typeof MotionText>

export default function AnimateCounter({
  to,
  prefix = '',
  suffix = '',
  roundBy = 1,
  ...rest
}: AnimateCountProps) {
  const ref = useRef(null)
  const inView = useInView(ref)

  const count = useMotionValue(0)
  const springValue = useSpring(count, {
    damping: 100,
    stiffness: 100,
  })
  const rounded = useTransform(springValue, (latest) =>
    to === latest ? to : Math.round(latest * roundBy) / roundBy
  )

  useEffect(() => {
    if (inView) {
      count.set(to)
    }
  }, [count, inView])

  return (
    <Text ref={ref} {...rest}>
      {prefix}
      <MotionText as="span">{rounded}</MotionText>
      {suffix}
    </Text>
  )
}
