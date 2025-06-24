const NonShownPackages = (): void => {
  if (window.dataLayer === undefined) return
  window.dataLayer?.push({
    event: 'non_shown_packages',
  })
}

export { NonShownPackages }
