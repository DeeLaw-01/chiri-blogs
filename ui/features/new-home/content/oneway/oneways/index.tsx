import { GridItem } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import TransportHomeCard from '../TransportHomeCard'
import { useOnewayAtoms } from '../useOnewayAtoms'
import useOnewaySorting from '../useOnewaySorting'
import { OnewayResponseType } from 'src/api/queries/ws/onewayWs/oneway.type'

export const THRESHOLD = 5
const LOAD_MORE_COUNT = 10

export default function Oneways() {
  const { oneway, setOneway, onewayLoading, searchType } = useOnewayAtoms()
  const { onewayFilters } = useSearchAtoms()
  const [count, setCount] = useState<number>(THRESHOLD)

  const handleShowMore = () => {
    setCount((prev) => prev + LOAD_MORE_COUNT)
  }

  const { sort } = useOnewaySorting(oneway, setOneway)

  useEffect(() => {
    if (onewayFilters.sortType) sort(onewayFilters.sortType)
  }, [onewayFilters.sortType, oneway?.length])

  // Reset count on new search
  useEffect(() => {
    if (oneway.length === 0) setCount(THRESHOLD)
  }, [oneway])

  if (searchType !== OnewayResponseType.ONEWAY) return <></>

  return (
    <>
      {oneway?.map((tran, idx) => {
        if (idx > count) return
        return (
          <GridItem gridColumn={'1 / -1'} key={idx}>
            <TransportHomeCard transport={tran} />
          </GridItem>
        )
      })}

      {count < oneway?.length && (
        <GridItem gridColumn={'1 / -1'}>
          <Button
            secondary
            id="show-more-change-transport"
            w="full"
            onClick={handleShowMore}
          >
            <Text st="common.load.more" />
          </Button>
        </GridItem>
      )}
    </>
  )
}
