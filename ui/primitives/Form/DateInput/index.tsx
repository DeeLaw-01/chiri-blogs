import { forwardRef, HStack, useFormControlContext } from '@chakra-ui/react'
import { CustomDateInputProps } from './date-input.type'
import { styles } from './styles'
import Select from '../Select'
import Input from '../Input'
import { FOCUS_STYLE, INVALID_STYLE } from '../base-styles'
import { months } from './data'
import Text from 'ui/primitives/Text'
import { ChangeEvent, useEffect, useState } from 'react'
import { withLeadingZero, withoutLeadingZero } from 'src/utils/numberUtils'

const DateInput = forwardRef<CustomDateInputProps, 'input'>(
  ({ value, onChange, ...rest }, ref) => {
    const [date, setDate] = useState({ day: '', month: '', year: '' })
    const { isInvalid, isFocused } = useFormControlContext() ?? {}

    const handleChange =
      (field: string) =>
      (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const newDate = { ...date, [field]: withLeadingZero(+e.target.value) }

        setDate(newDate)

        // @ts-ignore
        onChange && onChange(`${newDate.year}-${newDate.month}-${newDate.day}`)
      }

    const parseDate = (dateStr: string) => {
      const [year, month, day] = dateStr.split('-')
      return { day, month, year }
    }

    useEffect(() => {
      if (value) {
        setDate(parseDate(value))
      }
    }, [value])

    return (
      <HStack
        ref={ref}
        {...styles.default}
        {...(isInvalid && INVALID_STYLE)}
        {...(isFocused && FOCUS_STYLE)}
        {...rest}
      >
        <Input
          defaultValue={date.day}
          onChange={handleChange('day')}
          onWheel={(e: any) => e.target.blur()}
          {...styles.day}
        />
        <Select
          onChange={handleChange('month')}
          value={withoutLeadingZero(date.month)}
          {...styles.month}
        >
          {months.map((m: string, idx: number) => {
            return (
              <option key={idx} value={idx + 1}>
                <Text st={`data.month.${m.toLowerCase()}`} />
              </option>
            )
          })}
        </Select>
        <Input
          defaultValue={date.year}
          onChange={handleChange('year')}
          onWheel={(e: any) => e.target.blur()}
          {...styles.year}
        />
      </HStack>
    )
  }
)

export default DateInput
