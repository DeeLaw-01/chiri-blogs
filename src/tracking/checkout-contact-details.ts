function contactDetailsDataLayer(): void {
  if (window.dataLayer === undefined) return

  const packageInfo = JSON.parse(sessionStorage.getItem('packageInformation'))
  const newsletterSubs = sessionStorage.getItem('newsletterSubs')

  window.dataLayer?.push({
    event: 'eec_checkout_step1_contact_details',
    eec_checkout_step1_status: 'Completed',
    eec_checkout_step1_price: packageInfo?.price,
    eec_checkout_step1_packagename: packageInfo?.title,
    eec_checkout_step1_nrtravellers:
      packageInfo?.n_adults + packageInfo?.n_children + packageInfo?.n_babies,
    eec_checkout_step1_newslettersubs: newsletterSubs,
  })
}

export { contactDetailsDataLayer }
