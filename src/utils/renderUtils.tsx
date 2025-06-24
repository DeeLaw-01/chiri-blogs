import React from 'react'
import Text from 'ui/primitives/Text'
import Tooltip from 'ui/primitives/Tooltip'

export const renderTextOrComponent = (
  value: string | React.ReactNode,
  sd?: object
): React.ReactNode => {
  if (typeof value === 'string') return <Text st={value} sd={sd} />
  else return value
}

export const renderTrimmedString = (
  string: string,
  limit: number,
  addTooltip: boolean = true,
  renderTooltipOnMobile: boolean = true
): string | JSX.Element => {
  if (!string) return
  if (string.length - limit > 2) {
    const text = string.substring(0, limit) + '...'
    if (addTooltip)
      return (
        <Tooltip renderOnMobile={renderTooltipOnMobile} label={string}>
          {text}
        </Tooltip>
      )
    return text
  }
  return string
}
