function insertCouponDataLayer(promocode): void {
  if (window.dataLayer === undefined) return

  window.dataLayer?.push({
    event: 'insert_coupon',
    cupon_status: 'Insert',
    coupon_code: promocode,
    page_coupon: '/checkout',
  })
}

export { insertCouponDataLayer }
