import { Box, useRadio } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Tooltip from 'ui/primitives/Tooltip'

interface RadioCardProps {
  tooltip?: string
  isChecked: boolean
  isRounded: boolean
  children: React.ReactNode
}

export default function RadioCard(props: RadioCardProps): JSX.Element {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  if (props.tooltip) {
    return (
      <Tooltip label={<Text notag st={props.tooltip} />}>
        <Box as="label" style={{ display: 'inline-block' }}>
          <input {...input} />
          <Box
            {...checkbox}
            px={4}
            py={2}
            cursor="pointer"
            borderWidth="1px"
            marginRight={1}
            marginBottom={1}
            transition="all .2s ease"
            _checked={{
              bg: 'secondary',
              color: 'primary',
            }}
            _hover={
              !props.isChecked && {
                bg: '_lightestgray',
              }
            }
            borderColor={props.isChecked && 'transparent'}
            borderRadius={props.isRounded ? 'full' : 'lg'}
          >
            {props.children}
          </Box>
        </Box>
      </Tooltip>
    )
  }

  return (
    <Box as="label" style={{ display: 'inline-block' }}>
      <input {...input} />
      <Box
        {...checkbox}
        px={4}
        py={2}
        cursor="pointer"
        borderWidth="1px"
        marginRight={1}
        marginBottom={1}
        transition="all .2s ease"
        _checked={{
          bg: 'secondary',
          color: 'primary',
        }}
        _hover={
          !props.isChecked && {
            bg: '_lightestgray',
          }
        }
        borderColor={props.isChecked && 'transparent'}
        borderRadius={props.isRounded ? 'full' : 'lg'}
      >
        {props.children}
      </Box>
    </Box>
  )
}
