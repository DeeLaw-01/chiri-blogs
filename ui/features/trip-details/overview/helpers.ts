import { City } from 'src/api/queries/get/cityQuery/city.type'

export const constructCityViewObject = (
  title: string,
  subtitle: string,
  city: City
) => {
  return {
    content: {
      title,
      subtitle,
      photo: `${city.photo}375160.png`,
      items: city.attractions,
    },
  }
}
