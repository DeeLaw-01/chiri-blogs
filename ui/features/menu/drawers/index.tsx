import dynamic from 'next/dynamic'
import { useMenuAtoms } from '../useMenuAtoms'
import { CurrencyDrawerProps } from './currency-drawer'
import { LanguageDrawerProps } from './language-drawer'

const DynamicCurrencyDrawer = dynamic<CurrencyDrawerProps>(
  () => import('ui/features/menu/drawers/currency-drawer')
)
const DynamicLanguageDrawer = dynamic<LanguageDrawerProps>(
  () => import('ui/features/menu/drawers/language-drawer')
)

export default function MenuDrawers() {
  const { showCurrency, setShowCurrency, showLanguage, setShowLanguage } =
    useMenuAtoms()

  return (
    <>
      <DynamicCurrencyDrawer
        isOpen={showCurrency}
        onClose={() => setShowCurrency(false)}
      />
      <DynamicLanguageDrawer
        isOpen={showLanguage}
        onClose={() => setShowLanguage(false)}
      />
    </>
  )
}
