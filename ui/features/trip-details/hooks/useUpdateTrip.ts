import useMutation from 'src/api/useMutation'
import useUrlState from 'src/hooks/useUrlState'
import {
  updateTripQuery,
  UpdateTripQueryParams,
} from 'src/api/queries/get/tripQuery'
import type { TripDetails } from 'src/shared-types/trip-details.type'
import { SWRMutationConfiguration } from 'swr/dist/mutation'
import { Key } from 'swr'
import { useSearchParams } from 'next/navigation'

export default function useUpdateTrip() {
  const { setUrlState } = useUrlState('sessionId')
  const { trigger, isMutating: isLoading } = useMutation((d) =>
    updateTripQuery(d)
  )
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('sessionId')

  const updateTripHandler = async (
    {
      trip_id,
      key,
      position,
      type,
      session_id,
      add,
      purchase_id,
      extra_infos,
    }: UpdateTripQueryParams,
    onSuccess?:
      | ((
          data: unknown,
          key: string,
          config: Readonly<
            SWRMutationConfiguration<unknown, unknown, Key, unknown, unknown>
          >
        ) => void)
      | undefined,
    onError?:
      | ((
          err: unknown,
          key: string,
          config: Readonly<
            SWRMutationConfiguration<unknown, unknown, Key, unknown, unknown>
          >
        ) => void)
      | undefined
  ) => {
    const data = (await trigger(
      {
        trip_id: trip_id,
        key: key,
        add: add,
        type: type,
        position: position,
        purchase_id: purchase_id,
        extra_infos: extra_infos,
        session_id: session_id ?? sessionId,
      },
      {
        onSuccess,
        onError,
      }
    )) as { trip: TripDetails; session_id: string }

    setUrlState(data.session_id)
  }

  return { updateTripHandler, isLoading }
}
