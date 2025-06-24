import Modal from 'ui/primitives/Modal'
import { useEffect, useState } from 'react'
import CityViewDesktop from './city-view-desktop'
import { usePausedTimer } from 'src/hooks/usePausedTimer'
import CityViewMobile from './city-view-mobile'
import { useResponsiveSizes } from 'src/contexts/responsive'
import TopLoadingBar from './top-loading-bar'
import Controls from './controls'
import { AllTranslationKeys } from 'src/shared-types/all-translations-keys'

export type Item = {
  name: string
  description: string
  media: { placeholder?: string; src: string; type: 'image' | 'video' }
}

export type Content = {
  title: string
  subtitle: AllTranslationKeys
  photo: string
  items: Item[]
}

type CityViewProps = {
  isOpen: boolean
  onClose: () => void
  content: Content
}

export default function CityView({ isOpen, onClose, content }: CityViewProps) {
  const { isMobile } = useResponsiveSizes()
  const [index, setIndex] = useState<number>(0)
  const { timer, start, pause, reset, isTimeout, isActive } = usePausedTimer()
  const length = content?.items?.length

  const handleChangeImage = (dir: -1 | 1) => {
    if ((dir === -1 && index === 0) || (dir === 1 && index === length - 1)) {
      handleClose()
    } else {
      setIndex((prev) => dir + prev)
      handleStart()
    }
  }

  const handleClose = () => {
    onClose()
    setIndex(0)
  }

  useEffect(() => {
    if (isTimeout) handleChangeImage(1)
    else handleStart()
  }, [isTimeout])

  const handleStart = () => {
    reset()
    start(5)
  }

  return (
    <Modal
      size="full"
      isOpen={isOpen}
      onClose={onClose}
      modalContentStyle={{
        bg: 'rgba(0,0,0,0.8)',
        borderRadius: 'none',
        marginInline: '0 0',
      }}
      addCloseButton={false}
      modalBodyStyle={{ paddingX: 0, paddingY: { md: 2, base: 0 } }}
    >
      <Controls
        isActive={isActive}
        pause={pause}
        start={start}
        onClose={onClose}
      />

      <TopLoadingBar
        length={length - 1}
        current={index}
        isActive={isActive}
        timer={timer}
      />
      {isMobile && (
        <CityViewMobile
          index={index}
          content={content}
          handleChangeImage={handleChangeImage}
          start={() => start()}
          pause={() => pause()}
          isActive={isActive}
        />
      )}
      {!isMobile && (
        <CityViewDesktop
          index={index}
          content={content}
          handleChangeImage={handleChangeImage}
          start={() => start()}
          pause={() => pause()}
          isActive={isActive}
        />
      )}
    </Modal>
  )
}
