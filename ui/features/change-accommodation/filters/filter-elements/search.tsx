import { useChangeAccommodationAtoms } from '../../useChangeAccommodationAtoms'
import { useEffect, useRef, useState } from 'react'
import {
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Spinner,
} from '@chakra-ui/react'
import PillSearchIcon from '@/icons/new-homepage/pill-search.svg'
import theme from 'src/styles/theme'
import useTranslation from 'src/hooks/useTranslation'
import { useDebounce } from 'src/hooks/useDebounce'

export default function SearchFilter() {
  const ref = useRef<HTMLInputElement>(null)
  const [value, setValue] = useDebounce<string>('')
  const { filters, setFilters } = useChangeAccommodationAtoms()
  const [loading, setLoading] = useState<boolean>(false)
  const { t } = useTranslation()

  useEffect(() => {
    setFilters((prev) => ({ ...prev, search: value }))
    setLoading(false)
  }, [value])

  // Necessary to manually reset the search
  useEffect(() => {
    if (filters.search === '') {
      setValue('')
      if (ref?.current) ref.current.value = ''
    }
  }, [filters.search])

  return (
    <InputGroup>
      <InputLeftElement>
        <PillSearchIcon
          width="14px"
          height="14px"
          stroke={theme.colors._gray}
        />
      </InputLeftElement>
      <Input
        ref={ref}
        w="full"
        fontSize="sm"
        placeholder={t('hotel-info.hotel.modal.search.placeholder')}
        bg="_white"
        onChange={(e) => {
          setLoading(true)
          setValue(e.target.value)
        }}
      />
      {loading && (
        <InputRightElement>
          <Spinner size="sm" color="_lightgray" />
        </InputRightElement>
      )}
    </InputGroup>
  )
}
