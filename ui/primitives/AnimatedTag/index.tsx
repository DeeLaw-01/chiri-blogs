import { MotionBox } from '../Motion'
import Tag from '../Tag'
import { CustomTagProps } from '../Tag/type'
import theme from 'src/styles/theme'

export default function AnimatedTag({ children, ...rest }: CustomTagProps) {
  return (
    <Tag position={'relative'} overflow={'hidden'} {...rest}>
      <MotionBox
        position={'absolute'}
        height="155px"
        width="20px"
        top="-50px"
        left="-75px"
        style={{
          background: `${theme.colors._white}`,
          opacity: 0.2,
          transform: 'rotate(35deg)',
          zIndex: 1,
        }}
        animate={{
          left: ['-75px', '120px', '120px'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />
      {children}
    </Tag>
  )
}
