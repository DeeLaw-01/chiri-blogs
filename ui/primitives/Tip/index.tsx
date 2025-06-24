import {
  forwardRef,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react'
import { styles } from './styles'
import { CustomTipProps } from './types'

const Tip = forwardRef<CustomTipProps, 'span'>(
  (
    { content, placement, purple, yellow, green, blue, red, children, ...rest },
    ref
  ) => {
    return (
      <Popover
        ref={ref}
        isOpen={true}
        placement={placement ?? 'top'}
        modifiers={[
          { name: 'flip', enabled: false },
          { name: 'preventOverflow', enabled: false },
        ]}
      >
        <PopoverTrigger>{children}</PopoverTrigger>
        {/* @ts-ignore */}
        <PopoverContent
          {...(purple && styles.purple)}
          {...(blue && styles.blue)}
          {...(green && styles.green)}
          {...(yellow && styles.yellow)}
          {...(red && styles.red)}
          w="fit-content"
          boxShadow="unset"
          {...rest}
        >
          <PopoverArrow
            {...styles.default}
            {...(purple && styles.purple)}
            {...(blue && styles.blue)}
            {...(green && styles.green)}
            {...(yellow && styles.yellow)}
            {...(red && styles.red)}
            border="unset"
            borderRadius="unset"
          />
          <PopoverBody p="0.5">{content}</PopoverBody>
        </PopoverContent>
      </Popover>
    )
  }
)

export default Tip
