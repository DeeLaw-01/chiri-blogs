import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react'
import { renderTextOrComponent } from 'src/utils/renderUtils'
import { CustomAccordionItemProps } from './accordion.item.type'
import { styles } from './styles'

export default function CustomAccordionItem({
  item,
  AccordionItemProps,
  AccordionButtonProps,
  AccordionPanelProps,
}: CustomAccordionItemProps) {
  return (
    <AccordionItem {...styles.item} {...AccordionItemProps}>
      <AccordionButton {...styles.button} {...AccordionButtonProps}>
        <Box {...styles.titleBox}>
          {renderTextOrComponent(item.title, item.sd)}
        </Box>

        <AccordionIcon fontSize="3xl" color="primary" />
      </AccordionButton>
      <AccordionPanel {...styles.panel} {...AccordionPanelProps}>
        {renderTextOrComponent(item.content, item.sd)}
      </AccordionPanel>
    </AccordionItem>
  )
}
