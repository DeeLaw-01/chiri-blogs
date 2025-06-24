const getDomPresence = (): boolean => {
  const classesToCheck = [
    '.chakra-popover__body',
    '.chakra-modal__body',
    '#react-select-departure-location-select-listbox',
    '.chakra-menu__menuitem',
    '#crisp-chatbox[data-hidden="false"]',
  ]

  const elements = classesToCheck.some(
    (className) => document.querySelectorAll(className).length !== 0
  )

  return elements
}

export default getDomPresence
