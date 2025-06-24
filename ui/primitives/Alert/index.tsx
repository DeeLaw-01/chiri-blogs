import { Alert as ChakraAlert, forwardRef, Icon } from '@chakra-ui/react'
import SuccessIcon from '@/icons/shared/tick-circle.svg'
import InfoIcon from '@/icons/manage-booking/info-icon.svg'
import ErrorIcon from '@/icons/shared/cross-circle.svg'
import WarningIcon from '@/icons/shared/warning-icon.svg'
import { styles } from './styles'
import { CustomAlertProps } from './type'

const Alert = forwardRef<CustomAlertProps, 'span'>(
  ({ warning, error, success, info, icon, children, ...rest }, ref) => {
    const getAlertIcon = () => {
      if (success) return SuccessIcon
      else if (warning) return WarningIcon
      else if (error) return ErrorIcon
      else return InfoIcon
    }

    return (
      <ChakraAlert
        {...styles.default}
        {...(warning && styles.warning)}
        {...(error && styles.error)}
        {...(success && styles.success)}
        {...(info && styles.info)}
        {...rest}
      >
        {icon && (
          <Icon
            as={getAlertIcon()}
            strokeWidth="1.35"
            stroke="currentColor"
            width="7"
            height="7"
            mr={3}
          />
        )}
        {children}
      </ChakraAlert>
    )
  }
)

export default Alert
