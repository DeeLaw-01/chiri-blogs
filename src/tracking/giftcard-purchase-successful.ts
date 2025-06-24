export const GiftCardPurchaseSuccessful = (currency): void => {
  if (window.dataLayer === undefined) return

  const giftCard = JSON.parse(sessionStorage.getItem('gift-card-details'))

  window.dataLayer.push({
    event: 'giftCardPurchased',
    experience_selected: giftCard?.giftType,
    send_type: giftCard?.sendGiftCardType,
    custom_message: giftCard?.customMessage === undefined,
    amount_paid: giftCard?.totalPrice,
    total_selected: `${giftCard?.totalPeople} person`,
    currency: currency,
  })
}
