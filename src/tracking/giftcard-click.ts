export const giftCardClick = (): void => {
  if (window.dataLayer === undefined) return

  window.dataLayer.push({
    event: 'giftCardClick',
  })
}
