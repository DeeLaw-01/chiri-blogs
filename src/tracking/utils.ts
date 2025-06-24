function eventNotAlreadyInsideDataLayerArray(event: string) {
  return window.dataLayer?.findIndex((item) => item.event === event) === -1
}

export { eventNotAlreadyInsideDataLayerArray }
