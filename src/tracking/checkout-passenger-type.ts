const PassengerTypeDataLayer = (): void => {
  const packageInfo = JSON.parse(sessionStorage.getItem('packageInformation'))
  let personalItemInfo = JSON.parse(localStorage.getItem('personalItemInfo'))
  let cabinBagInfo = JSON.parse(localStorage.getItem('cabinBagInfo'))
  let extraBagInfo = JSON.parse(localStorage.getItem('extraBagInfo'))
  let passengerType = localStorage.getItem('passengerType')
  if (window.dataLayer === undefined) return

  window.dataLayer?.push({
    event: 'eec_checkout_step1_passenger_type',
    eec_checkout_step1_status: 'Completed',
    eec_checkout_step1_price: packageInfo?.price,
    eec_checkout_step1_packagename: packageInfo?.title,
    eec_checkout_step1_passengertype: passengerType,
    eec_checkout_step1_extrabag: extraBagInfo ? 'Yes' : 'No',
    eec_checkout_step1_extrabagprice: extraBagInfo?.price,
    eec_checkout_step1_cabinbag: cabinBagInfo ? 'Yes' : 'No',
    eec_checkout_step1_cabinbagprice: cabinBagInfo?.price,
    eec_checkout_step1_personalitem: personalItemInfo ? 'Yes' : 'No',
    eec_checkout_step1_personalitemprice: personalItemInfo?.price,
  })
}

export { PassengerTypeDataLayer }
