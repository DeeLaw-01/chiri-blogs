import { VStack } from '@chakra-ui/react'
import styled from '@emotion/styled'
import theme from 'src/styles/theme'

const showForwardProps = {
  shouldForwardProp: (prop) => prop !== 'lineColor' && prop !== 'topMargin',
}

const LinedVStack = styled(VStack, showForwardProps)`
  position: relative;
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    top: ${(props) => (props.topMargin ? props.topMargin : 0)}px;
    left: 0.18rem;
    bottom: 0;
    width: 1px;
    height: calc(
      100% - ${(props) => (props.topMargin ? props.topMargin : 0)}px
    );
    z-index: -1;
    border-left: 1px dotted
      ${(props) => (props.lineColor ? props.lineColor : theme.colors._gray)};
  }
`

export default LinedVStack
