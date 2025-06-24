import { getTranslations as getTranslationsFromLib } from 'next-intl/server'
import { AllTranslationKeys } from 'src/shared-types/all-translations-keys'

export default async function getServerTranslations({ locale }) {
  const tFromLib = await getTranslationsFromLib({ locale })

  const t = (key: AllTranslationKeys, ...args) => {
    return tFromLib(`${key}.textNode`, ...args)
  }

  return { t }
}
