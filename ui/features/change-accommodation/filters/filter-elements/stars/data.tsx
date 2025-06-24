import { FilterValue } from 'ui/features/change-transportation/filters/filters-view'
import Text from 'ui/primitives/Text'
import Stars from 'ui/shared/stars'

export const data = [
  {
    value: '1',
    label: (
      <Text as="span">
        <Stars amount={1} size="sm" display="inline-block" />
      </Text>
    ),
  },
  {
    value: '2',
    label: (
      <Text as="span">
        <Stars amount={2} size="sm" display="inline-block" />
      </Text>
    ),
  },
  {
    value: '3',
    label: (
      <Text as="span">
        <Stars amount={3} size="sm" display="inline-block" />
      </Text>
    ),
  },
  {
    value: '4',
    label: (
      <Text as="span">
        <Stars amount={4} size="sm" display="inline-block" />
      </Text>
    ),
  },
  {
    value: '5',
    label: (
      <Text as="span">
        <Stars amount={5} size="sm" display="inline-block" />
      </Text>
    ),
  },
] as FilterValue[]
