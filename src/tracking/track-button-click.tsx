const TrackButtonClick = (id: string): void => {
  if (window.dataLayer === undefined) return
  window.dataLayer?.push({
    event: 'button_click',
    button_id: id,
  })
}

export { TrackButtonClick }
