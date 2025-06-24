function clarityConsent(): void {
  if (window.clarity === undefined) return

  window.clarity('consent')
}

export { clarityConsent }
