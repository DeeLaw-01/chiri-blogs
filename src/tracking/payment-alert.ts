const PaymentAlertDataLayer = (msg): void => {
  if (window.dataLayer === undefined) return
  window.dataLayer?.push({
    event: 'eec_checkout_step1_payment_type_alert',
    eec_checkout_step1_alert_step: 'Payment Type',
    eec_checkout_step1_alert_type: msg,
  })
}

export { PaymentAlertDataLayer }
