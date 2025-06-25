import { CalendarDate } from '@internationalized/date'

export default function useCalendar(e: Date): CalendarDate {
  const date = new Date(e)
  const day = date.getDate()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  return new CalendarDate(year, month, day)
}
