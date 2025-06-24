import { HStack, VStack } from '@chakra-ui/react'
import CityCircleIcon from '../city-view/city-circle-icon'
import { Transport } from 'src/shared-types/transport.type'
import { useTripDetailsAtoms } from '../useTripDetailsAtoms'
import Text from 'ui/primitives/Text'
import useTranslation from 'src/hooks/useTranslation'
import { useEffect, useRef, useState } from 'react'
import { City } from 'src/api/queries/get/cityQuery/city.type'
import getCityQuery from 'src/api/queries/get/cityQuery/getCityQuery'
import { constructCityViewObject } from './helpers'
import useMutation from 'src/api/useMutation'

type CityOverviewProps = {
  tripId: string
}

export default function CityOverview({ tripId }: CityOverviewProps) {
  const { t } = useTranslation()
  const { transportations } = useTripDetailsAtoms()
  const { setShowCityView, cityInfo, setCityInfo } = useTripDetailsAtoms()
  const [lastClicked, setLastClicked] = useState(-1)
  const lastClickedRef = useRef<number>(-1)
  lastClickedRef.current = lastClicked
  const { trigger } = useMutation((d) => getCityQuery(d.locode, d.tripId))

  useEffect(() => {
    if (cityInfo?.length === 0) fetchData()
  }, [])

  const fetchData = async () => {
    const allCities = transportations
      .slice(0, -1)
      .map((transport) => transport.destination_locode)

    try {
      const allCitiesData = await Promise.all(
        allCities.map(async (locode) => {
          const data = await trigger({ locode, tripId })
          return data
        })
      )

      const updatedCityData = allCitiesData.map((item: any) => ({
        ...item,
        visited: false,
      }))

      setLastClicked(-1)

      if (lastClickedRef.current !== -1) {
        handleClick(
          transportations[lastClickedRef.current],
          lastClickedRef.current,
          updatedCityData[lastClickedRef.current]
        )
      }

      setCityInfo(updatedCityData)
    } catch (error) {
      return
    }
  }

  const handleClick = (
    transport: Transport,
    idx: number,
    city: City & { visited: boolean }
  ) => {
    setCityInfo((prevCityInfo) => {
      const updatedCityInfo = prevCityInfo.map((city, index) => {
        if (index === idx) return { ...city, visited: true }
        return city
      })
      return updatedCityInfo
    })
    const cityViewObject = constructCityViewObject(
      transport.destination,
      t('common.day.in', {
        count: transport.stay_length,
        destination: transport.destination,
      }),
      city
    )
    setShowCityView(cityViewObject)
  }

  return (
    <HStack alignItems={'flex-start'} mb={8}>
      {transportations.map((transport, idx: number) => {
        if (idx === transportations.length - 1) return // Avoid departure
        else
          return (
            <VStack
              key={idx}
              alignItems="center"
              w={{ base: '55px', md: '75px' }}
            >
              <CityCircleIcon
                onClick={() => {
                  if (cityInfo && cityInfo[idx]?.attractions.length === 0)
                    return
                  if (cityInfo.length === 0) {
                    setLastClicked(idx)
                  } else {
                    handleClick(transport, idx, cityInfo[idx])
                  }
                }}
                visited={
                  (cityInfo && cityInfo[idx] && cityInfo[idx].visited) ||
                  (cityInfo && cityInfo[idx]?.attractions?.length === 0)
                }
                name={transport.destination}
                photo={`${transport.photo}375160.png`}
                w={'full'}
                h={{ base: '55px', md: '75px' }}
                _hover={{
                  cursor:
                    cityInfo && cityInfo[idx]?.attractions?.length === 0
                      ? 'initial'
                      : 'pointer',
                }}
                animate={idx === lastClicked}
              />
              <Text
                fontSize={{ base: '2xs', md: 'xs' }}
                textAlign="center"
                maxW="100%"
                noOfLines={1}
              >
                {transport.destination}
              </Text>
            </VStack>
          )
      })}
    </HStack>
  )
}
