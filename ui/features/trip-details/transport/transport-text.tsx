import useTranslation from 'src/hooks/useTranslation'
import { Mode } from 'src/shared-types/transport.type'
import { capitalizeFirstLetter } from 'src/utils/stringUtils'
import Text from 'ui/primitives/Text'

type TransportTextProps = {
  modes: Mode[]
}

export default function TransportText({
  modes,
}: TransportTextProps): JSX.Element {
  const { t } = useTranslation()

  const getTransportText = (): string => {
    const strArr = []
    modes.map((item: string, idx: number) => {
      idx !== 0 && strArr.push(t('common:transportation.mode.and'))
      strArr.push(
        t(`common.transport.${item}`, { count: 1 }).toLocaleLowerCase()
      )
    })
    return strArr.join(' ')
  }

  return <Text as="span">{capitalizeFirstLetter(getTransportText())}</Text>
}
