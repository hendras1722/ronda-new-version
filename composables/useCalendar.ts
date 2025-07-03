import { CalendarDate } from '@internationalized/date'

export default function useCalendar({
  start,
  end,
}: {
  start: Date
  end: Date
}): { start: CalendarDate; end: CalendarDate } {
  // const date = new Date(e)
  // const day = date.getDate()
  // const year = date.getFullYear()
  // const month = date.getMonth() + 1

  const startDate = new Date(start)
  const endDate = new Date(end)
  const startDay = startDate.getDate()
  const startYear = startDate.getFullYear()
  const startMonth = startDate.getMonth() + 1

  const endDay = endDate.getDate()
  const endYear = endDate.getFullYear()
  const endMonth = endDate.getMonth() + 1
  return {
    start: new CalendarDate(startYear, startMonth, startDay),
    end: new CalendarDate(endYear, endMonth, endDay),
  }
}
