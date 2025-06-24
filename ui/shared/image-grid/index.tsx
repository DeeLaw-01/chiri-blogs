import { useResponsiveSizes } from 'src/contexts/responsive'
import MobileImageGrid from './mobile-image-grid'
import DesktopImageGrid from './desktop-image-grid'

export type Image = {
  src: string
  placeholder?: string
  label?: string
}

type ImageGridProps = {
  images: Image[]
}

export default function ImageGrid({ images }: ImageGridProps) {
  const { isMobile } = useResponsiveSizes()

  return (
    <>
      {isMobile ? (
        <MobileImageGrid images={images} />
      ) : (
        <DesktopImageGrid images={images} />
      )}
    </>
  )
}
