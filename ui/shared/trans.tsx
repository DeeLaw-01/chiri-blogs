import { RichTranslationValues, useTranslations } from 'next-intl'
import { AllTranslationKeys } from 'src/shared-types/all-translations-keys'
import Text from 'ui/primitives/Text'

type TransProps = {
  st: AllTranslationKeys
  sd: RichTranslationValues
}

export default function Trans({ st, sd }: TransProps) {
  const t = useTranslations()

  const translatedText = t.rich(`${st}.textNode`, sd)

  return <Text>{translatedText}</Text>
}
