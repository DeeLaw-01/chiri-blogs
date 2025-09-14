import { atom, useAtom } from 'jotai'
import { ReactNode, useEffect } from 'react'
import { callManageBooking } from '../api/manage-booking'
import type { AuthData } from '../types/auth-data.type'
import { useSearchParams } from 'next/navigation'

const atoms = {
  authData: atom<AuthData | null>(null),
}

/** NOTE: This provider is not for global data, but fetching the authData
 * and making sure the whatever JSX tree it is wrapping has the authData. */
const AuthDataProvider = ({ children }: { children: ReactNode }) => {
  const searchParams = useSearchParams()
  const query = searchParams ? Object.fromEntries(searchParams.entries()) : {}
  const locale = 'en'
  const [authData, setAuthData] = useAtom(atoms.authData)

  useEffect(() => {
    authenticate(query.bid, query.email)
  }, [])

  const authenticate = async (bookingId, emailId) => {
    // TODO: To use useMutation and  remove locale dependency
    const { data, ok } = await callManageBooking(
      'get_booking',
      {
        purchase_id: bookingId?.trim(),
        email: emailId?.trim(),
      },
      locale
    )

    if (ok) {
      setAuthData((currentObj) => ({ ...currentObj, ...data }))
    }
  }

  if (authData === null) return null

  return <>{children}</>
}

const useAuthData = () => {
  const [authData, setAuthData] = useAtom(atoms.authData)

  return { authData, setAuthData }
}

export { useAuthData, AuthDataProvider }
