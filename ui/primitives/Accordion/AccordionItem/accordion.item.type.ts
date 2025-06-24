import {
  AccordionButtonProps,
  AccordionItemProps,
  AccordionPanelProps,
  BoxProps,
} from '@chakra-ui/react'

export type Item = {
  title: string | React.ReactNode
  content: string | React.ReactNode
  sd?: object
}

export type StyleType = {
  item: AccordionItemProps
  button: AccordionButtonProps
  titleBox: BoxProps
  panel: AccordionPanelProps
}

export type CustomAccordionItemProps = {
  item: Item
  AccordionItemProps?: AccordionItemProps
  AccordionButtonProps?: AccordionButtonProps
  AccordionPanelProps?: AccordionPanelProps
}
