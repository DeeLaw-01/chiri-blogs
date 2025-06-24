import Text from 'ui/primitives/Text'

export const data = [
  {
    value: '',
    label: <Text fontSize="sm" st={'common.general.any'} />,
  },
  {
    value: '0',
    label: <Text st="flight-info.card.tag.direct" />,
  },
  {
    value: '1',
    label: <Text st="flight-info.card.tag.layover.stop" sd={{ count: 1 }} />,
  },
  {
    value: '2',
    label: <Text st="flight-info.card.tag.layover.stop" sd={{ count: 2 }} />,
  },
]
