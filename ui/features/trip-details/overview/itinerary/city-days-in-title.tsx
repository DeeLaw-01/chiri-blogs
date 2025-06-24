import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import { useTripDetailsAtoms } from '../../useTripDetailsAtoms'
import useTranslation from 'src/hooks/useTranslation'
import { constructCityViewObject } from '../helpers'

type CityDaysInTitleProps = {
  length: number
  dest: string
  isLast: boolean
  locode: string
}

export default function CityDaysInTitle({
  length,
  dest,
  isLast,
  locode,
}: CityDaysInTitleProps) {
  const { t } = useTranslation()
  const { cityInfo, setShowCityView } = useTripDetailsAtoms()

  const findCityInfo = (locode: string) =>
    cityInfo.filter((info) => info.locode === locode)

  const openCityView = () => {
    const cityViewObject = constructCityViewObject(
      dest,
      t('common.day.in', {
        count: length,
        destination: dest,
      }),
      findCityInfo(locode)[0]
    )

    setShowCityView(cityViewObject)
  }

  return (
    <>
      <Text
        st={isLast ? 'common:return.to' : 'common:day.in'}
        sd={{ count: length ? length : 1, destination: isLast ? dest : '' }}
        as={'span'}
      />
      {!isLast && (
        <Button
          asLink
          id="city-name-button"
          onClick={openCityView}
          color="_gray"
          fontSize="inherit"
          minW="fit-content"
        >
          <Text>{dest}</Text>
        </Button>
      )}
    </>
  )
}
