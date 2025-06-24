import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {
  DateRangePicker as ReactDateRangePicker,
  DateRangePickerProps,
} from 'react-date-range'
import './custom-styles.css'
import { useResponsiveSizes } from 'src/contexts/responsive'
import { useEffect, useState } from 'react'
import { useLocale } from 'next-intl'
import enUS from 'date-fns/locale/en-US'

export default function DateRangePicker(props: DateRangePickerProps) {
  const locale = useLocale()
  const [lang, setLang] = useState<Locale>(enUS)
  const { isMobile } = useResponsiveSizes()

  useEffect(() => {
    updateLocale(locale)
  }, [locale])

  const updateLocale = async (code: string): Promise<void> => {
    if (code === 'en') setLang(enUS)
    else {
      const localeToSet = await import(`date-fns/locale/${code}/index.js`)
      setLang(localeToSet?.default ?? enUS)
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
