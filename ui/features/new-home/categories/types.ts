import { AllTranslationKeys } from 'src/shared-types/all-translations-keys'
import { Category } from '../search/hooks/useSearchAtoms/types/trip.types'

export type CategoryItem = {
  label: AllTranslationKeys
  imageSrc: string
  category: Category
}
