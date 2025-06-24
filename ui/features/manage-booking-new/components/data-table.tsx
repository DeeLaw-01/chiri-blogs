import { Box, Stack, StackProps } from '@chakra-ui/react'

type DataTableProps = {
  data: {
    label: any
    content: any
  }[]
} & StackProps

export default function DataTable({ data, ...rest }: DataTableProps) {
  return (
    <>
      {data.map((row, index) => (
        <Stack
          key={index}
          direction={['column', 'row']}
          borderBottom={index !== data.length - 1 ? '1px solid' : 'none'}
          borderColor="_lightgray"
          py={{ base: 2, md: 4 }}
          alignItems="flex-start"
          fontSize={{ base: 'sm', md: 'md' }}
          {...rest}
        >
          <Box color="gray">{row.label}</Box>
          <Box w="full">{row.content}</Box>
        </Stack>
      ))}
    </>
  )
}
