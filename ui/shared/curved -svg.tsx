import { Box, BoxProps } from '@chakra-ui/react'

interface CustomCurvedSVGProps extends BoxProps {
  svgStyleProps?: React.CSSProperties
}

function CurvedSVG({ svgStyleProps, ...boxProps }: CustomCurvedSVGProps) {
  return (
    <Box
      position={'absolute'}
      bottom={0}
      h={'100%'}
      w={'100%'}
      overflow="hidden"
      {...boxProps}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: 'auto',
          ...svgStyleProps,
        }}
        viewBox="0 0 245 31"
      >
        <path
          d="M245 0V31H0V18.8033H86.0656C96.1066 18.8033 107.569 0 119.107 0H245Z"
          fill="white"
        />
      </svg>
    </Box>
  )
}

export default CurvedSVG
