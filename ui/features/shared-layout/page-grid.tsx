import { Box, BoxProps, Grid } from '@chakra-ui/react'
import React from 'react'

type PageGridProps = {
  width?: string
  children: React.ReactNode
  sideComp: React.ReactNode
  sideCompProps?: BoxProps
} & BoxProps

export default function PageGrid({
  width = '21rem',
  children,
  sideComp,
  sideCompProps,
  ...rest
}: PageGridProps) {
  return (
    <Grid
      mt={5}
      mb="5rem"
      gridGap="10"
      templateColumns={{ base: '1fr', md: `minmax(0, 1fr) ${width}` }}
      {...rest}
    >
      {children}
      <Box zIndex={1300} {...sideCompProps}>
        {sideComp}
      </Box>
    </Grid>
  )
}
