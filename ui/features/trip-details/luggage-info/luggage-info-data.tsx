import ExtraBag from '@/icons/checkout/luggage/extra-bag.svg'
import PersonalItem from '@/icons/checkout/luggage/personal-item.svg'
import CabinBag from '@/icons/checkout/luggage/cabin-bag.svg'

const luggageOptions = [
  {
    type: 'personal',
    price: 0,
    icon: PersonalItem,
    title: 'common.bag.personal',
    dimensions: 'common.bag.personal.dimensions',
    description: 'common.bag.personal.description',
  },
  {
    type: 'cabin',
    icon: CabinBag,
    title: 'common.bag.cabin',
    dimensions: 'common.bag.cabin.dimensions',
    description: 'common.bag.cabin.description',
  },
  {
    type: 'checked',
    icon: ExtraBag,
    title: 'common.bag.checked',
    dimensions: 'common.bag.checked.dimensions',
    description: 'common.bag.checked.description',
  },
]

export default luggageOptions
