import { Crisp } from 'crisp-sdk-web'
import { isBrowser } from 'src/data/environments'
import { getCookieItem } from 'src/utils/cookieUtils'
import generateUUID from 'src/utils/generateUUID'

const WEBSITE_ID = '38befa14-7436-4982-a4e6-8cb5375d7c7e'

export default function useChatBot() {
  async function show(): Promise<void> {
    Crisp.chat.show()
  }

  function configure(locale: string): void {
    if (!isBrowser) return

    Crisp.configure(WEBSITE_ID, {
      locale: locale ?? 'en',
      safeMode: true,
    })

    hide()
  }

  function sendMessage(message: string): void {
    Crisp.message.sendText(message)
  }

  function fireWelcomeEvent(): void {
    const hasBeenOpened = sessionStorage.getItem('chat-opened')
    if (!hasBeenOpened) {
      const userId = generateUUID()
      Crisp.user.setEmail(`${userId}@gmail.com`)
      Crisp.session.pushEvent('welcome')
      sessionStorage.setItem('chat-opened', 'true')
    }
  }

  function hide(): void {
    Crisp.chat.hide()
  }

  function close(): void {
    Crisp.chat.close()
  }

  function open(): void {
    Crisp.chat.open()
  }

  Crisp.chat.onChatClosed((): void => {
    close()
    hide()
  })

  Crisp.message.onMessageReceived((): void => {
    show()
    open()
  })

  function showAndOpen(): void {
    open()
    show()
    fireWelcomeEvent()
  }

  function checkoutEvent(): void {
    const hasBeenOpened = sessionStorage.getItem('chat-opened')
    if (!hasBeenOpened) {
      const userId = generateUUID()
      Crisp.user.setEmail(`${userId}@gmail.com`)
      sessionStorage.setItem('chat-opened', 'true')
      Crisp.session.pushEvent('checkout')
      setTimeout(() => {
        show()
        open()
      }, 8000)
    }
  }

  Crisp.message.onMessageSent(() => {
    const data = getVisitorData()
    Crisp.session.setData(data)
  })

  const getVisitorData = () => {
    const tripId = sessionStorage.getItem('tripId')
    const userId = localStorage.getItem('userId')
    const cartId = localStorage.getItem('cart-purchase-id')
    const currency = localStorage.getItem('currency')
    const cognitoUserId = sessionStorage.getItem('cognitoUserId')
    const location = getCookieItem('selectedlocation', true)

    return {
      ...(tripId && { tripId: tripId }),
      ...(userId && { userId: userId }),
      ...(cartId && { cartId: cartId }),
      ...(currency && { currency: currency }),
      ...(cognitoUserId && { cognitoUserId: cognitoUserId }),
      ...(location && { location: location.locode }),
    }
  }

  return {
    show,
    hide,
    close,
    open,
    showAndOpen,
    configure,
    checkoutEvent,
    sendMessage,
  }
}
