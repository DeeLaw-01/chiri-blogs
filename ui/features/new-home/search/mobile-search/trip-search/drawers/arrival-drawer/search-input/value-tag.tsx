import { TagCloseButton, TagProps } from '@chakra-ui/react'
import Tag from 'ui/primitives/Tag'
import { Value } from '.'

type ValueTagProps = {
  data: Value
} & TagProps

export default function ValueTag({ data, ...rest }: ValueTagProps) {
  return (
    <Tag primary mr="1" {...rest} my="0.5">
      {data.label}
      <TagCloseButton />
    </Tag>
  )
}
