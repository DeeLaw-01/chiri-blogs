import { Box, HStack, StackProps, VStack } from '@chakra-ui/react'
import { parseISO, isBefore, isAfter } from 'date-fns'
import { useChangeTransportationEffects } from '../hooks/useChangeTransportationEffects'
import { useChangeTransportationAtoms } from '../hooks/useChangeTransportationAtoms'
import { Transport } from 'src/shared-types/transport.type'
import DateItem from './change-transportation-dates/date-item'
import SelectedDateItem from './change-transportation-dates/selected-date-item'
import ChangeTransportationLoading from './change-transportation-dates/loading-date-item'
import { useEffect, useRef, useState } from 'react'
import LeftArrowIcon from '@/icons/shared/left-icon.svg'

export type DateItemType = {
  date: string
  increase?: boolean
  price_dif?: number
}

type ChangeTransportationDatesProps = {
  transport: Transport
} & StackProps

const CARD_WIDTH = 100
const THRESHOLD = 20

export default function ChangeTransportationDates({
  transport,
  ...rest
}: ChangeTransportationDatesProps) {
  const { filters, setFilters, availableDates, setAvailableDates } =
    useChangeTransportationAtoms()
  const { datesLoading } = useChangeTransportationEffects(transport)
  const ref = useRef<HTMLDivElement | null>(null)
  const selectedRef = useRef<HTMLDivElement | null>(null)
  const [scrollW, setScrollW] = useState<number>(0)

  useEffect(() => {
    // Scroll to center on initialize
    if (!availableDates || !ref?.current || !selectedRef?.current) return
    const container = ref.current
    const selected = selectedRef.current

    const containerWidth = container.offsetWidth
    const selectedLeft = selected.offsetLeft
    const selectedWidth = selected.offsetWidth

    const scrollTo = selectedLeft - containerWidth / 2 + selectedWidth / 2

    container?.scrollTo({ left: scrollTo, behavior: 'smooth' })
  }, [availableDates])

  if (datesLoading && !availableDates && filters.date)
    return <ChangeTransportationLoading selected={filters.date} />

  const datesBeforeSelected = () => {
    if (!filters.date) return
    const current = parseISO(filters.date)

    return availableDates?.filter((d) => isBefore(parseISO(d.date), current))
  }

  const datesAfterSelected = () => {
    if (!filters.date) return
    const current = parseISO(filters.date)
    return availableDates?.filter((d) => isAfter(parseISO(d.date), current))
  }

  const scroll = (scrollOffset: number) => {
    const newScrollW = ref.current.scrollLeft + scrollOffset
    ref.current.scrollLeft = newScrollW
  }

  const handleSelectDate = (date: DateItemType) => {
    const dateExists = availableDates?.some(
      (item) => item.date === filters.date
    )
    if (!dateExists) {
      setAvailableDates((prev) => {
        const newDates = [
          ...(prev ?? []),
          { date: filters.date ?? '', price_dif: 0 },
        ]
        // Sort the dates to maintain order
        return newDates.sort(
          (a, b) => parseISO(a.date).getTime() - parseISO(b.date).getTime()
        )
      })
    }

    setFilters((prev) => ({ ...prev, date: date.date }))
  }

  return (
    <Box
      pos={'relative'}
      zIndex="0"
      mb="4"
      maxW={{ base: '90%', md: '50%' }}
      {...rest}
    >
      <VStack
        position="absolute"
        left={-6}
        h="full"
        justifyContent={'center'}
        onClick={() => scroll(-CARD_WIDTH)}
        display={scrollW - THRESHOLD > 0 ? 'flex' : 'none'}
      >
        <Box
          _hover={{
            opacity: 1,
            transform: 'scale(1.1)',
          }}
          opacity={0.7}
          cursor={'pointer'}
        >
          <LeftArrowIcon width="18" height="18" stroke="white" />
        </Box>
      </VStack>
      <VStack
        position="absolute"
        right={-6}
        h="full"
        justifyContent={'center'}
        transform="rotate(180deg)"
        onClick={() => scroll(CARD_WIDTH)}
        display={
          scrollW + ref.current?.clientWidth + THRESHOLD >=
          ref.current?.scrollWidth
            ? 'none'
            : 'flex'
        }
      >
        <Box
          _hover={{
            opacity: 1,
            transform: 'scale(1.1)',
          }}
          opacity={0.7}
          cursor={'pointer'}
        >
          <LeftArrowIcon width="18" height="18" stroke="white" />
        </Box>
      </VStack>
      <HStack
        ref={ref}
        pos={'relative'}
        scrollBehavior={'smooth'}
        position="relative"
        overflowX={{ base: 'scroll', md: 'hidden' }}
        scrollSnapType={'x mandatory'}
        pr="50px"
        alignContent="center"
        overflowY="hidden"
        p="1"
        onScroll={() => {
          setScrollW(ref.current?.scrollLeft)
        }}
      >
        {datesBeforeSelected()?.map((date) => {
          return (
            <DateItem
              key={date.date}
              date={date}
              isLoading={datesLoading}
              onClick={() => handleSelectDate(date)}
            />
          )
        })}
        <Box ref={selectedRef}>
          <SelectedDateItem date={filters.date} />
        </Box>
        {datesAfterSelected()?.map((date) => {
          return (
            <DateItem
              key={date.date}
              date={date}
              isLoading={datesLoading}
              onClick={() => handleSelectDate(date)}
            />
          )
        })}
      </HStack>
    </Box>
  )
}
