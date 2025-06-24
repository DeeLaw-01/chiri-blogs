import { Box, forwardRef } from '@chakra-ui/react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { styles } from './styles'
import { CustomPhoneInputProps } from './phone-input.type'
import { useSelectedLocation } from 'src/contexts/location'
import useTranslation from 'src/hooks/useTranslation'

const CustomPhoneInput = forwardRef<CustomPhoneInputProps, 'div'>(
  ({ value, style, ...rest }, ref) => {
    const { t } = useTranslation()
    const [selectedCity] = useSelectedLocation()

    return (
      <Box
        ref={ref}
        sx={{
          ...styles(style).default,
        }}
      >
        <PhoneInput
          inputProps={{
            id: 'custom-phone-input',
            name: 'phone',
            autoComplete: 'tel',
          }}
          countryCodeEditable={false}
          autocompleteSearch={false}
          placeholder="eg. 1234567811"
          enableSearch
          disableSearchIcon
          searchPlaceholder={t('common.general.search')}
          searchNotFound={t('common.general.none')}
          {...(value
            ? { value }
            : {
                country:
                  selectedCity?.locode?.substring(0, 2).toLowerCase() ?? 'us',
              })}
          {...rest}
        />
      </Box>
    )
  }
)

export default CustomPhoneInput
