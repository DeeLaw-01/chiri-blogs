import { Blog } from 'ui/features/blog/types/blog.type'

export type City = {
  city_name: string
  description: string
  language: string
  currency: string
  attractions: Attraction[]
  weather_info: Weather[]
  photo: string
  locode?: string
  blogs?: Blog[]
}
export type Weather = {
  maxtemp_c: number
  mintemp_c: number
  mintemp_f: number
  maxtemp_f: number
  avgtemp_c: number
  avgtemp_f: number
  condition: string
  sunrise: string
  sunset: string
}
export type Attraction = {
  name: string
  rate: number
  photo: string
  description: string
  order: number
}
