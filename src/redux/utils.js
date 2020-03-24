import { format, addHours, fromUnixTime } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

export const formatTime = (
  time,
  { timezone = 'Asia/Kolkata', hours = 0, formatString = 'hh:mm b' } = {}
) =>
  format(
    utcToZonedTime(addHours(fromUnixTime(time), hours), timezone),
    formatString
  ).toUpperCase()

export const roundAndFix = (n, d) => {
  const m = Math.pow(10, d)
  return Math.round(n * m) / m
}
