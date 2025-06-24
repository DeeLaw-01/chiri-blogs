import { forwardRef } from '@chakra-ui/react'
import { useMotionTemplate, useMotionValue } from 'framer-motion'
import { MouseEvent } from 'react'
import { MotionBox } from '../Motion'
import { AnimatedButtonProps } from './animatedbutton.type'
import Button from '../Button'
import { styles } from './styles'

const AnimatedButton = forwardRef<AnimatedButtonProps, 'button'>(
  ({ children, ...rest }, ref) => {
    let mouseX = useMotionValue(0)
    let mouseY = useMotionValue(0)

    const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
      const { left, top } = e.currentTarget.getBoundingClientRect()
      mouseX.set(e.clientX - left)
      mouseY.set(e.clientY - top)
    }

    return (
      <Button
        ref={ref}
        onMouseMove={handleMouseMove}
        {...styles.default}
        {...rest}
      >
        <MotionBox
          style={{
            // @ts-ignore
            background: useMotionTemplate`radial-gradient(75px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.15), transparent 50%)`,
          }}
          {...styles.motion}
        />
        {children}
      </Button>
    )
  }
)

export { AnimatedButton }
