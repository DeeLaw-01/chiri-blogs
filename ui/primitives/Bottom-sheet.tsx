import { Box } from '@chakra-ui/react'
import { MotionBox } from './Motion'
import { useAnimation } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function BottomSheet({
  content,
  children,
  ...rest
}): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const controls = useAnimation()

  const onDragEnd = (event, info) => {
    if (info.velocity.y < 30 || (info.velocity.y < 0 && info.point.y < 55))
      handleOpen()
    else handleClose()
  }

  const handleOpen = () => {
    controls.start('visible')
    setIsOpen(true)
  }

  const handleClose = () => {
    controls.start('hidden')
    setIsOpen(false)
  }

  const [contentHeight, setContentHeight] = useState<number>(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      const innerDiv = contentRef.current.querySelector('div')
      if (innerDiv) {
        setContentHeight(innerDiv.offsetHeight)
      }
    }
  }, [content])

  return (
    <>
      {/* behind overlay */}
      {isOpen && (
        <MotionBox
          pos="fixed"
          top="-4rem"
          w="100vw"
          h="100vh"
          left="0"
          onClick={handleClose}
          bg="blackAlpha.500"
        />
      )}

      <MotionBox
        left="0"
        position="fixed"
        bottom={isOpen ? `calc(-36rem + ${contentHeight}px)` : '2.2rem'}
        bg={isOpen ? 'white' : 'none'}
        drag="y"
        w="100vw"
        h={isOpen ? '40rem' : '2.2rem'}
        dragConstraints={{ top: 0 }}
        onDrag={handleOpen}
        onDragEnd={onDragEnd}
        animate={controls}
        transition={{
          type: 'spring',
          damping: 40,
          stiffness: 400,
        }}
        variants={{
          visible: { y: -60 },
          hidden: { y: 0 },
        }}
        p="4"
        borderTopRadius={isOpen ? '2xl' : 'none'}
        {...rest}
      >
        <Box
          py={1}
          w="20%"
          left="50%"
          position="absolute"
          top={isOpen ? '3' : '-3'}
          transform={'translateX(-50%)'}
        >
          <Box
            bg="gray.400"
            h="3px"
            borderRadius="full"
            w="full"
            onClick={() => (!isOpen ? handleOpen() : handleClose())}
          />
        </Box>
        <Box
          ref={contentRef}
          maxH={isOpen ? 'initial' : '1'}
          visibility={isOpen ? 'visible' : 'hidden'}
        >
          {content}
        </Box>
      </MotionBox>

      {children}
    </>
  )
}
