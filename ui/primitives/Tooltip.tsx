import {
  TooltipProps,
  Tooltip as ChakraTooltip,
  Popover as ChakraPopover,
  PopoverContent,
  PopoverTrigger,
  PopoverBody,
  Box,
} from '@chakra-ui/react'
import { useResponsiveSizes } from 'src/contexts/responsive'

export interface CustomTooltipProps extends TooltipProps {
  /** A boolean to show tooltip on mobile  */
  renderOnMobile?: boolean
  /** A boolean to show a popover onClick for desktop */
  renderPopoverOnDesktop?: boolean
}

/**
 * Custom abstraction over chakra Tooltip element
 * to support mobile tooltips via Popover elements.
 *
 * @see Docs https://chakra-ui.com/tooltip
 */

export default function Tooltip({
  label,
  renderOnMobile,
  renderPopoverOnDesktop,
  children,
  ...rest
}: CustomTooltipProps) {
  const { isMobile } = useResponsiveSizes()

  if ((isMobile && renderOnMobile) || renderPopoverOnDesktop) {
    return (
      <ChakraPopover trigger="click" placement="bottom">
        <PopoverTrigger>
          <Box>{children}</Box>
        </PopoverTrigger>
        <>
          <PopoverContent boxShadow={'md'} ml="5" bg="_darkgray" color="_white">
            <PopoverBody>{label}</PopoverBody>
          </PopoverContent>
        </>
      </ChakraPopover>
    )
  }

  if (isMobile && !renderOnMobile) return <>{children}</>

  return (
    <ChakraTooltip label={label} bg="_darkgray" {...rest}>
      {children}
    </ChakraTooltip>
  )
}
