import { Box, BoxProps } from '@chakra-ui/react'
import Tooltip from 'ui/primitives/Tooltip'
import InfoIcon from '@/icons/manage-booking/info-icon.svg'
import { AllTranslationKeys } from 'src/shared-types/all-translations-keys'
import theme from 'src/styles/theme'
import Text from 'ui/primitives/Text'

type InfoTooltipProps = {
  label: AllTranslationKeys
  sd?: object
} & BoxProps

export default function InfoTooltip({ label, sd, ...rest }: InfoTooltipProps) {
  return (
    <Tooltip renderOnMobile label={<Text st={label} sd={sd} />}>
      <Box color="_white" {...rest}>
        <InfoIcon
          width="100%"
          height="100%"
          fill={theme.colors._darkgray}
          strokeWidth="2"
        />
      </Box>
    </Tooltip>
  )
}
