import { LuggageItemType } from '../types/luggage.type'

import HoldBag from '@/icons/luggage/hold-bag.svg'
import { AllTranslationKeys } from 'src/shared-types/all-translations-keys'

import PersonalItem from '@/icons/luggage/personal-item.svg'
import CabinBag from '@/icons/luggage/cabin-bag.svg'

type LuggageReturnType = [
  React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
  AllTranslationKeys
]

export default function getLuggage(type: LuggageItemType): LuggageReturnType {
  switch (type) {
    case LuggageItemType.PersonalItem:
      return [PersonalItem, 'common.bag.personal']
    case LuggageItemType.CabinBag:
      return [CabinBag, 'common.bag.cabin']
    case LuggageItemType.HoldBag:
      return [HoldBag, 'common.bag.checked']
  }
}
