import {
  AccordionButtonProps,
  AccordionItemProps,
  AccordionPanelProps,
  AccordionProps,
} from '@chakra-ui/react'
import { Item } from './AccordionItem/accordion.item.type'

export type CustomAccordionProps = AccordionProps & {
  items?: Item[]
  AccordionItemProps?: AccordionItemProps
  AccordionButtonProps?: AccordionButtonProps
  AccordionPanelProps?: AccordionPanelProps
}
