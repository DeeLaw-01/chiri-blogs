import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalProps,
  ModalHeader,
  ModalFooter,
  ModalContentProps,
  ModalBodyProps,
  ModalHeaderProps,
} from '@chakra-ui/react'

export interface CustomModalProps extends ModalProps {
  // A string to set title of modal
  title?: string | React.ReactNode
  // A boolean to add close button
  addCloseButton?: boolean
  // A value to add footer on modal
  footer?: React.ReactNode
  // A boolean to add overlay blur
  isBgBlured?: boolean
  // A full background image of the modal
  modalContentStyle?: ModalContentProps
  modalFooterStyle?: ModalContentProps
  //ModalContent stylesx
  modalBodyStyle?: ModalBodyProps
  modalHeaderStyles?: ModalHeaderProps
}

// chakra modal implemented using -
// @see Docs https://chakra-ui.com/docs/components/modal

export default function Modal({
  addCloseButton = true,
  title,
  footer,
  children,
  isBgBlured,
  modalContentStyle,
  modalBodyStyle,
  modalHeaderStyles,
  modalFooterStyle,
  ...rest
}: CustomModalProps) {
  return (
    <ChakraModal {...rest}>
      <ModalOverlay backdropFilter={isBgBlured ? 'blur(10px)' : 'none'} />
      <ModalContent
        maxH={'85vh'}
        mx={'4'}
        borderRadius={'3xl'}
        {...modalContentStyle}
      >
        {title && (
          <ModalHeader fontWeight="medium" {...modalHeaderStyles}>
            {title}
          </ModalHeader>
        )}
        {addCloseButton && <ModalCloseButton zIndex="1" />}
        <ModalBody overflow={'auto'} {...modalBodyStyle}>
          {children}
        </ModalBody>
        {footer && <ModalFooter {...modalFooterStyle}>{footer}</ModalFooter>}
      </ModalContent>
    </ChakraModal>
  )
}
