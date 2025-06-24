'use server'
import { cookies } from 'next/headers'

export const getServerUserId = async () => {
  return cookies().get('userId')?.value || ''
}
