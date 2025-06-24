import Text from 'ui/primitives/Text'

export const data = [
  {
    value: '',
    label: <Text fontSize="sm" st={'common.general.any'} />,
  },
  {
    value: 'aircraft',
    label: <Text st="common.transport.aircraft" sd={{ count: 1 }} />,
  },
  {
    value: 'bus',
    label: <Text st="common.transport.bus" sd={{ count: 1 }} />,
  },
  {
    value: 'train',
    label: <Text st="common.transport.train" sd={{ count: 1 }} />,
  },
]
