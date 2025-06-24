import { Box, HStack, Text } from '@chakra-ui/react'
import { usePathname } from 'src/i18n/router'
import Link from 'ui/primitives/Link'

type BreadcrumbProps = {
  current: string
}

export default function Breadcrumb({ current }: BreadcrumbProps): JSX.Element {
  const pathname = usePathname()
  const paths = pathname?.split('?')[0].split('/').filter(Boolean) || []

  const formatPath = (path: string) => path.replace(/-/g, ' ')

  return (
    <Box>
      {paths.length > 1 && (
        <HStack h={5}>
          {paths.map((path, idx) => {
            const isLast = idx === paths.length - 1
            return (
              <HStack key={idx} color="_gray" fontSize="sm">
                {idx > 0 && <Text color="gray">»</Text>}
                <Link href={'/' + paths.slice(0, idx + 1).join('/')}>
                  <Text textTransform="capitalize">
                    {isLast ? current : formatPath(path)}
                  </Text>
                </Link>
              </HStack>
            )
          })}
        </HStack>
      )}
    </Box>
  )
}
