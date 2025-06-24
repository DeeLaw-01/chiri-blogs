import { Box, WrapItem } from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import CrossIcon from '@/icons/shared/cross-circle.svg'
import theme from 'src/styles/theme'
import { CustomButtonProps } from 'ui/primitives/Button/button.type'

type ActiveFilterButtonProps = {
  label: any
} & CustomButtonProps

export default function ActiveFilterButton({
  label,
  ...rest
}: ActiveFilterButtonProps) {
  return (
    <WrapItem>
      <Button
        secondary
        borderRadius="full"
        py={2}
        pr={2}
        pl={4}
        h="8"
        fontSize="xs"
        {...rest}
      >
        {label}
        <Box ml="2" color={'_white'}>
          <CrossIcon
            height="20"
            width="20"
            strokeWidth="1.5"
            stroke="currentColor"
            fill={theme.colors.primary}
          />
        </Box>
      </Button>
    </WrapItem>
  )
}
