import Text from 'ui/primitives/Text'
import { SelectItemOption } from './select-item'
import { Staylength } from 'ui/features/new-home/search/hooks/useSearchAtoms/types/trip.types'

export const getData = (stayLength: Staylength | undefined, t: Function) => {
  const isCustom = typeof stayLength === 'number'

  const getCustomLabel = () => {
    if (!isCustom) return <Text st="home-page.dates.duration.custom" />
    return <Text st="common.general.days" sd={{ count: stayLength }} />
  }

  return [
    { label: <Text st="home-page.dates.duration.any" /> },
    {
      label: `- ${t('common.general.days', { count: 7 })}`,
      value: 'less_week',
    },
    {
      label: `+ ${t('common.general.days', { count: 7 })}`,
      value: 'more_week',
    },
    { label: getCustomLabel(), value: 1 },
  ] as SelectItemOption[]
}
