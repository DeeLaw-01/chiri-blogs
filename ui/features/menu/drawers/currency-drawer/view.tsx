import { Box, Center, Spinner } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import { Currency } from 'src/shared-types/currency'
import SelectItem from './select-item'
import getCurrenciesQuery from 'src/api/queries/get/currenciesQuery'
import { useFetchInfinite } from 'src/api/useFetchInfinite'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { useSelectedCurrency } from 'src/contexts/currency'

type CurrencyViewProps = {
  onClose: () => void
}

export default function CurrencyView({ onClose }: CurrencyViewProps) {
  const { selectedCurrency, setSelectedCurrency } = useSelectedCurrency()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: false, amount: 'some' })
  const [currencies, setCurrencies] = useState<Currency[]>()
  const [hasMore, setHasMore] = useState<boolean>(true)

  const { data, isLoading, size, setSize, isValidating } =
    useFetchInfinite<any>(
      (idx: number) => (hasMore ? getCurrenciesQuery(idx, 20) : null),
      { revalidateFirstPage: false }
    )

  useEffect(() => {
    if (data) {
      setHasMore(data[0].has_more)
      setCurrencies(data.flatMap((item) => item.currencies))
    }
  }, [data])

  useEffect(() => {
    if (inView && !isLoading && size > 0) {
      setSize((prev: number) => prev + 1)
    }
  }, [inView])

  const handleChange = (currency: Currency) => {
    setSelectedCurrency(currency)
    onClose()
  }

  return (
    <Box>
      <Heading as="h1" st="common.navbar.menu.item.currency" />
      <Box mt="2" mb={12}>
        {currencies?.map((currency: Currency) => (
          <SelectItem
            key={currency.code}
            item={currency}
            isSelected={currency.code === selectedCurrency?.code}
            onClick={() => handleChange(currency)}
          />
        ))}
        <Box ref={ref} h="1px" />
        {(isLoading || isValidating) && (
          <Center mt={4}>
            <Spinner color="_gray" />
          </Center>
        )}
      </Box>
    </Box>
  )
}
