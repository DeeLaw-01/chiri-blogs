import { Select as ReactSelect, Props } from 'chakra-react-select'
import useTranslation from 'src/hooks/useTranslation'
import { forwardRef, Spinner } from '@chakra-ui/react'
import { styles } from './styles'

export type SelectProps = Props

const Select = forwardRef<SelectProps, 'div'>(({ ...rest }, ref) => {
  const { t } = useTranslation()

  return (
    <ReactSelect
      ref={ref}
      placeholder={t('common.general.select')}
      loadingMessage={() => <Spinner />}
      noOptionsMessage={() => t('common.no.results')}
      menuPortalTarget={document.body}
      {...styles}
      {...rest}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
        LoadingIndicator: () => null,
        ...rest.components,
      }}
    />
  )
})

export default Select
