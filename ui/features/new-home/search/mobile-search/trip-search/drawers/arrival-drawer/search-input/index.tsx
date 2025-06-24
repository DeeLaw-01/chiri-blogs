import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { LocationResult } from 'src/api/queries/get/locationQuery/location.type'
import { Arrival } from 'ui/features/new-home/search/hooks/useSearchAtoms/types/trip.types'
import useTranslation from 'src/hooks/useTranslation'
import Select, { SelectProps } from 'ui/primitives/Select'
import { OnChangeValue } from 'chakra-react-select'
import ValueTag from './value-tag'

export type Value = { value: string; label: string }

type ArrivalSearchInputProps = {
  locations: LocationResult[]
  setSearchInput: (v: string) => void
  setLocations: Dispatch<SetStateAction<Arrival>>
} & SelectProps

export default function ArrivalSearchInput({
  locations,
  setLocations,
  setSearchInput,
  ...rest
}: ArrivalSearchInputProps) {
  const ref = useRef<any>()
  const { t } = useTranslation()
  const [input, setInput] = useState<string>('')
  const handleChange = (curr: OnChangeValue<Value, true>) => {
    const currValues = curr.map(({ value }) => value)
    const updated = locations.filter((loc) => currValues.includes(loc.value))
    setLocations({ includeLocations: updated })
  }

  useEffect(() => {
    if (ref?.current) ref.current.focus()
  }, [ref])

  useEffect(() => {
    setSearchInput(input)
  }, [input])

  const getOptionValues = () => {
    return locations?.map((loc) => ({
      value: loc.value,
      label: loc.value,
    }))
  }

  return (
    <Select
      ref={ref}
      isMulti
      closeMenuOnSelect={false}
      menuIsOpen={false}
      options={getOptionValues()}
      value={getOptionValues()}
      placeholder={t('home-page.region.anywhere')}
      onChange={(e) => handleChange(e)}
      inputValue={input}
      onInputChange={(value, action) => {
        if (action.action === 'input-change') setInput(value)
        if (action.action === 'menu-close') {
          setInput('')
          ref.current.focus()
        }
      }}
      components={{
        MultiValue: ({ removeProps, data }) => (
          <ValueTag data={data} {...removeProps} />
        ),
      }}
      {...rest}
    />
  )
}
