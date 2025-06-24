import { Accordion as ChakraAccordion, VStack } from '@chakra-ui/react'
import CustomAccordionItem from './AccordionItem'
import { CustomAccordionProps } from './accordion.type'

export default function Accordion({
  items,
  AccordionItemProps,
  AccordionButtonProps,
  AccordionPanelProps,
  ...rest
}: CustomAccordionProps) {
  return (
    <ChakraAccordion as={VStack} spacing="4" allowToggle {...rest}>
      {items?.map((item, index) => (
        <CustomAccordionItem
          key={index}
          item={item}
          AccordionItemProps={AccordionItemProps}
          AccordionButtonProps={AccordionButtonProps}
          AccordionPanelProps={AccordionPanelProps}
        />
      ))}
    </ChakraAccordion>
  )
}
