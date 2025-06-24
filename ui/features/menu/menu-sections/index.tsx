import { Divider } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import { Default, Help, Legal, Language, Currency, Support } from './data'
import CountryFlag from 'ui/shared/country-flag'
import MenuItem from './menu-item'
import { useParams } from 'next/navigation'
import locales from 'src/data/locales'
import { Locale } from 'src/utils/languageUtils'
import useChatBot from 'src/hooks/useChatBot'
import { useSelectedCurrency } from 'src/contexts/currency'
import { useMenuAtoms } from '../useMenuAtoms'

export default function MenuSections() {
  const { showAndOpen } = useChatBot()
  const { selectedCurrency } = useSelectedCurrency()
  const { setShowCurrency, setShowLanguage } = useMenuAtoms()
  const { locale } = useParams()
  const location = locales.find((l) => l.value === locale) as Locale

  return (
    <>
      {Default.map((item) => (
        <MenuItem item={item} key={item.key} />
      ))}
      <MenuItem item={Currency} onClick={() => setShowCurrency(true)}>
        <Text fontSize="sm" color="_gray">
          {selectedCurrency?.code}
        </Text>
      </MenuItem>
      <MenuItem item={Language} onClick={() => setShowLanguage(true)}>
        <CountryFlag height={20} width={20} country={location.countryName} />
      </MenuItem>
      <Divider my={5} />
      <Heading as="h2" mb={2} st="common.hamburger.section.legal" />

      {Legal.map((item) => (
        <MenuItem item={item} key={item.key} />
      ))}
      <Divider my={5} />
      <Heading as="h2" mb={2} st="common.hamburger.help.center" />

      {Help.map((item) => (
        <MenuItem item={item} key={item.key} />
      ))}
      <MenuItem item={Support} onClick={showAndOpen} />
    </>
  )
}
