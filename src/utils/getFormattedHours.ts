import { getDate, getHours, getMinutes } from 'date-fns'

const formatHours = (time) => {
  const parsedTime = new Date(0, 0)
  parsedTime.setMinutes(+time * 60)
  if (time >= 24) {
    parsedTime.setDate(time / 24)
    return `${getDate(parsedTime)}d ${getHours(parsedTime)}h ${getMinutes(
      parsedTime
    )}m`
  } else {
    return `${getHours(parsedTime)}h ${getMinutes(parsedTime)}m`
  }
}
export default formatHours
