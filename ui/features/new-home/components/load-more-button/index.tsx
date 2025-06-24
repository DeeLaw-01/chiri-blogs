import { useResponsiveSizes } from 'src/contexts/responsive'
import Button from 'ui/primitives/Button'
import CircleIconWrapper from 'ui/shared/circle-icon-wrapper'
import AddIcon from '@/icons/shared/add-icon.svg'
import theme from 'src/styles/theme'
import { CustomButtonProps } from 'ui/primitives/Button/button.type'

type LoadMoreButtonProps = Omit<CustomButtonProps, 'id'> & {
  children: React.ReactNode
}

function LoadMoreButton({ children, ...rest }: LoadMoreButtonProps) {
  const { isMobile } = useResponsiveSizes()

  return (
    <Button
      secondary={isMobile}
      primary
      w="full"
      id="load-more-packages-button"
      h="full"
      alignItems={{
        base: 'center',
        md: 'flex-start',
      }}
      p={{ base: 4, md: 6 }}
      justifyContent={{
        base: 'center',
        md: 'flex-start',
      }}
      fontSize={{
        base: 'md',
        md: '4xl',
      }}
      borderRadius="lg"
      textTransform="capitalize"
      textAlign="left"
      whiteSpace="wrap"
      minH={{ base: 'initial', md: '26rem' }}
      {...rest}
    >
      {children}

      {!isMobile && (
        <CircleIconWrapper position="absolute" bottom="4" right="4" bg="_white">
          <AddIcon
            height="25"
            width="25"
            strokeWidth="1.1"
            stroke={theme.colors.primary}
          />
        </CircleIconWrapper>
      )}
    </Button>
  )
}
export default LoadMoreButton
