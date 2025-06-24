declare global {
  interface Window {
    dataLayer: Array<{
      event: string
      [x: string]: unknown
    }>
  }

  interface Navigator {
    // userAgentData is still in experimental thus need to define types ourself
    userAgentData: {
      brands: string[]
      mobile: boolean
      platform: string
    }
  }
}

export {} //needed for tsconfig.
