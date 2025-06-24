import { Select as ChakraSelect, forwardRef } from '@chakra-ui/react'
import { CustomSelectProps } from './select.type'
import { styles } from './styles'
import useTranslation from 'src/hooks/useTranslation'

const Select = forwardRef<CustomSelectProps, 'select'>(
  ({ children, ...rest }, ref) => {
    const { t } = useTranslation()
    return (
      <ChakraSelect
        placeholder={t('common.general.select')}
        ref={ref}
        {...styles.default}
        {...rest}
      >
        {children}
      </ChakraSelect>
    )
  }
)

export default Select
