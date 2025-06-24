import { VStack } from '@chakra-ui/react'
import { useState } from 'react'
import TransportSelectCard from '../transport-card/transport-select-card'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import { useChangeTransportationEffects } from '../hooks/useChangeTransportationEffects'
import NoResults from './no-results'
import Loading from './loading'
import { useChangeTransportationAtoms } from '../hooks/useChangeTransportationAtoms'
import { ChangeTransportationSortType } from './sort/sort-options'
import { ChangeTransport } from 'src/shared-types/change-transport.type'
import getSortedOptions from '../utils/getSortedOptions'
import { TransportTagType } from '../transport-card/transport-tags'

const THRESHOLD = 10
const LOAD_MORE_COUNT = 10

export default function ChangeTransportationOptions({ transport }) {
  useChangeTransportationEffects(transport)
  const { sortType, data } = useChangeTransportationAtoms()
  const [count, setCount] = useState<number>(THRESHOLD)

  if (data?.isLoading || !data?.transports) return <Loading />
  if (data.transports.recommended_flights?.length === 0) return <NoResults />
  const { transports } = data

  const handleShowMore = () => {
    setCount((prev) => prev + LOAD_MORE_COUNT)
  }

  const getTransports = (): ChangeTransport[] => {
    switch (sortType.type) {
      case ChangeTransportationSortType.FASTEST:
        return getSortedOptions(transports.fast_flights, sortType)
      case ChangeTransportationSortType.CHEAPEST:
        return getSortedOptions(transports.cheap_flights, sortType)
      default:
        return getSortedOptions(transports.recommended_flights, sortType)
    }
  }

  const getTags = (key: string, price: number, duration: number) => {
    let tags: TransportTagType[] = []
    if (key === transports.recommended_flights?.[0].flights_key)
      tags.push('recommended')
    if (price === transports.cheap_flights?.[0].price) tags.push('cheapest')
    if (duration === transports.fast_flights?.[0].transportation.duration)
      tags.push('fastest')

    return tags
  }

  const elements = getTransports()
  return (
    <VStack w="full" mb={{ base: 10, md: 'initial' }} maxW="60rem">
      {elements?.map((tran, idx) => {
        if (idx > count) return
        return (
          <TransportSelectCard
            key={tran.flights_key}
            transport={tran}
            totalNumberPeople={transports.passengers.total}
            tags={getTags(
              tran.flights_key,
              tran.price,
              tran.transportation.content.duration
            )}
          />
        )
      })}
      {count < elements?.length && (
        <Button
          secondary
          id="show-more-change-transport"
          w="full"
          onClick={handleShowMore}
        >
          <Text st="common.load.more" />
        </Button>
      )}
      {count >= elements?.length && (
        <Text color="_gray">No more results available</Text>
      )}
    </VStack>
  )
}
