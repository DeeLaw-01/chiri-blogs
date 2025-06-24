import { forwardRef, Button as ChakraButton } from '@chakra-ui/react'
import { styles } from './styles'
import { CustomButtonProps } from './button.type'
import { TrackButtonClick } from 'src/tracking'

const Button = forwardRef<CustomButtonProps, 'button'>(
  ({ primary, secondary, asLink, arrow, children, onClick, ...rest }, ref) => {
    const trackClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (!onClick) return
      TrackButtonClick(rest.id)
      onClick(e)
    }

    return (
      <ChakraButton
        ref={ref}
        {...styles.default}
        {...(primary && styles.primary)}
        {...(secondary && styles.secondary)}
        {...(asLink && styles.asLink)}
        {...(arrow && styles.arrow)}
        {...rest}
        onClick={trackClick}
      >
        {children}
      </ChakraButton>
    )
  }
)

export default Button
