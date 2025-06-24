import { useChangeAccommodationAtoms } from '../../useChangeAccommodationAtoms'
import Text from 'ui/primitives/Text'
import { FormControl, HStack, Switch } from '@chakra-ui/react'
import { FilterValue } from '../filters-view'
import { CONFIG_COMPANY } from 'src/config'

export const data = [
  {
    value: 'Best Deals',
    label: (
      <Text
        st="hotel-info.change.hotel.option.deals"
        sd={{ company_name: CONFIG_COMPANY.COMPANY_NAME }}
      />
    ),
  },
] as FilterValue[]

export default function DealsFilter({ available }) {
  const { filters, setFilters } = useChangeAccommodationAtoms()

  const handleChange = (e) => {
    const val = e.target.checked ? 'true' : ''
    setFilters((prev) => ({ ...prev, best_deals: val }))
  }

  return (
    <HStack fontSize="xs" w="full" justify="space-between">
      {data.map((value, index) => (
        <FormControl display="flex" alignItems="center" key={index}>
          <Switch
            onChange={(e) => handleChange(e)}
            isChecked={filters.best_deals !== ''}
          />
          <Text fontSize="sm" ml="2" display={'inline-flex'}>
            ⚡️ {value.label}
          </Text>
        </FormControl>
      ))}
    </HStack>
  )
}
