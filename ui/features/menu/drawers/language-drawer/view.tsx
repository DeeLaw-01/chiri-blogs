import { Box } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import locales from 'src/data/locales'
import SelectItem from './select-item'
import { Locale } from 'src/utils/languageUtils'
import { usePathname, useRouter } from 'src/i18n/router'
import { useSearchParams } from 'next/navigation'

type LanguageViewProps = {
  onClose: () => void
}
export default function LanguageView({ onClose }: LanguageViewProps) {
  const locale = 'en'
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const current = locales.find((l) => l.value === locale)

  const handleChange = (value: string) => {
    router.replace(`${pathname}?${searchParams}`, { locale: value })
    router.refresh()
    onClose()
  }

  return (
    <Box>
      <Heading as="h1" st="common.navbar.menu.item.language" />
      <Box mt="2" mb={12}>
        {locales.map((locale) => {
          return (
            <SelectItem
              item={locale as Locale}
              key={locale.code}
              isSelected={current === locale}
              onClick={() => handleChange(locale.value)}
            />
          )
        })}
      </Box>
    </Box>
  )
}
