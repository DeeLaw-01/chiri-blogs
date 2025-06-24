import { useTranslations as useTranslationFromLib } from 'next-intl'
import { AllTranslationKeys } from 'src/shared-types/all-translations-keys'

export default function useTranslation() {
  const tFromLib = useTranslationFromLib()

  const t = (key: AllTranslationKeys, ...args) => {
    // if key contains : replace it with .
    key = key.includes(':') ? key.replace(':', '.') : key

    const value = tFromLib(`${key}.textNode`, ...args)

    // allow to pass text value as st prop for some edge cases
    if (value === `${key}.textNode`) {
      return key
    }

    return value
  }

  // TODO: add language detection
  return { t, lang: 'en' }
}
