import { Input, InputProps } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import useTranslation from 'src/hooks/useTranslation'

type DepartureSearchInputProps = {
  setSearchInput: (v: string) => void
} & InputProps

export default function OnewaySearchInput({
  setSearchInput,
  ...rest
}: DepartureSearchInputProps) {
  const ref = useRef<HTMLInputElement>(null)
  const { t } = useTranslation()

  useEffect(() => {
    if (ref?.current) ref.current.focus()
  }, [ref])

  return (
    <Input
      ref={ref}
      type="text"
      onChange={(e) => setSearchInput(e.target.value)}
      my="2"
      placeholder={t('home-page.advanced.search.input.placeholder')}
      {...rest}
    />
  )
}
