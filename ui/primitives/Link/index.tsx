import React, { forwardRef, Ref } from 'react'
import { Link as ChakraLink } from '@chakra-ui/react'
import { Link as IntlLink } from 'src/i18n/router'
import { CustomLinkProps } from './link.type'
import { styles } from './styles'

const CustomLink = forwardRef(function CustomLink(
  { href, isExternal, intlLinkProps = {}, children, ...props }: CustomLinkProps,
  ref: Ref<HTMLAnchorElement>
) {
  return (
    <IntlLink
      href={href}
      passHref
      target={isExternal ? '_blank' : '_self'}
      aria-label="home"
      {...intlLinkProps}
    >
      <ChakraLink {...styles.default} ref={ref} {...props}>
        {children}
      </ChakraLink>
    </IntlLink>
  )
})

export default CustomLink
