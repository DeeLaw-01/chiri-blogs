import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {
  DateRangePicker as ReactDateRangePicker,
  DateRangePickerProps,
} from 'react-date-range'
import './custom-styles.css'
import { useResponsiveSizes } from 'src/contexts/responsive'
import { useEffect, useState } from 'react'
import enUS from 'date-fns/locale/en-US'

export default function DateRangePicker(props: DateRangePickerProps) {
  const locale = 'en'
  const [lang, setLang] = useState<Locale>(enUS)
  const { isMobile } = useResponsiveSizes()

  useEffect(() => {
    updateLocale(locale)
  }, [locale])

  const updateLocale = async (code: string): Promise<void> => {
    if (code === 'en') {
      setLang(enUS)
      return
    }
    
    // For date-fns v3, we need to use specific locale paths
    // Dynamic imports with variables don't work well in webpack
    // So we'll just fallback to enUS for now
    try {
      // Map common locale codes to date-fns locale modules
      const localeMap: Record<string, () => Promise<any>> = {
        'ar': () => import('date-fns/locale/ar'),
        'de': () => import('date-fns/locale/de'),
        'es': () => import('date-fns/locale/es'),
        'fr': () => import('date-fns/locale/fr'),
        'it': () => import('date-fns/locale/it'),
        'ja': () => import('date-fns/locale/ja'),
        'ko': () => import('date-fns/locale/ko'),
        'pt': () => import('date-fns/locale/pt'),
        'ru': () => import('date-fns/locale/ru'),
        'zh-CN': () => import('date-fns/locale/zh-CN'),
      }
      
      if (localeMap[code]) {
        const localeModule = await localeMap[code]()
        setLang(localeModule.default ?? enUS)
      } else {
        setLang(enUS)
      }
    } catch (error) {
      console.warn(`Failed to load locale ${code}, falling back to en-US`)
      setLang(enUS)
    }
  }

  return (
    <ReactDateRangePicker
      locale={lang}
      showDateDisplay={false}
      preventSnapRefocus={true}
      shownDate={new Date()} // TODO: Avoid this. But otherwise we cant scroll up past selected range!
      weekStartsOn={1}
      months={isMobile ? 12 : 2}
      showMonthAndYearPickers={false}
      direction={isMobile ? 'vertical' : 'horizontal'}
      showMonthArrow={isMobile ? false : true}
      maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
      minDate={new Date()}
      {...props}
    />
  )
}
