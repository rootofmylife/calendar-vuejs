import {
  format,
  startOfMonth,
  endOfMonth,
  subDays,
  addDays,
  getDay,
  getDate,
  subMonths,
  addMonths,
  isThisMonth,
  isSameDay,
} from 'date-fns'

export default {
  getCurrentDay(d = null) {
    if (d == null) {
      return format(new Date(), 'MMMM, yyyy')
    } else {
      return format(d, 'MMMM, yyyy')
    }
  },
  checkMonth(m) {
    return isThisMonth(m)
  },
  getMonth() {
    return new Date()
  },
  getCurrentDateOfMonth() {
    // Return date in month e.g. date 23
    return getDate(new Date())
  },
  addOneMonth(m) {
    return addMonths(m, 1)
  },
  subOneMonth(m) {
    return subMonths(m, 1)
  },
  getNextMonth(m = null, event = null) {
    let next = null
    if (m == null) {
      next = new Date()
    } else {
      next = m
    }

    return this.numberOfDateInMonth(next, event)
  },
  getPreviousMonth(m = null, event = null) {
    let prev = null
    if (m == null) {
      prev = new Date()
    } else {
      prev = m
    }

    return this.numberOfDateInMonth(prev, event)
  },
  getEvents(events, pivotDate) {
    if (events == null) {
      return []
    }

    let temp_event = []
    for (let e = 0; e < events.length; e++) {
      let dates = events[e]['dates']
      for (let d = 0; d < dates.length; d++) {
        if (isSameDay(dates[d], pivotDate)) {
          temp_event.push(events[e])
        }
      }
    }

    return temp_event
  },
  numberOfDateInMonth(current = null, events = null) {
    let som = null
    let eom = null
    if (current == null) {
      som = startOfMonth(new Date())
      eom = endOfMonth(new Date())
    } else {
      som = startOfMonth(current)
      eom = endOfMonth(current)
    }

    let end_index = parseInt(format(eom, 'dd'), 10)

    // get previous & next Day of the month
    let previous = format(subDays(som, 1), 'dd')
    let next = format(addDays(eom, 1), 'dd')

    previous = parseInt(previous, 10)
    next = parseInt(next, 10)
    // end - get previous & next Day of the month

    // the day of week, 0 represents Sunday
    let startDayOfWeek = parseInt(getDay(som), 10) // First date in first week
    previous = previous - startDayOfWeek + 1
    let month = []
    let count = 1

    let curMonth = som // To save in day format for future usage
    let preMonth = subDays(som, startDayOfWeek) // To save in day format for future usage
    let nexMonth = addDays(eom, 1) // To save in day format for future usage

    for (let i = 1; i <= 5; i++) {
      let week = []
      for (let j = 1; j <= 7; j++) {
        if (i == 1) {
          // Check first week
          if (j >= startDayOfWeek + 1) {
            week.push({
              blur: false,
              day: count,
              format: curMonth,
              appointment: this.getEvents(events, curMonth),
            })
            curMonth = addDays(curMonth, 1)
            count++
          } else {
            week.push({
              blur: true,
              day: previous,
              format: preMonth,
              appointment: this.getEvents(events, preMonth),
            })
            preMonth = addDays(preMonth, 1)
            previous++
          }
        } else if (i == 5) {
          // Check last week
          if (count <= end_index) {
            week.push({
              blur: false,
              day: count,
              format: curMonth,
              appointment: this.getEvents(events, curMonth),
            })
            curMonth = addDays(curMonth, 1)
            count++
          } else {
            week.push({
              blur: true,
              day: next,
              format: nexMonth,
              appointment: this.getEvents(events, nexMonth),
            })
            nexMonth = addDays(nexMonth, 1)
            next++
          }
        } // Other weeks
        else if (i > 1 && i < 5) {
          week.push({
            blur: false,
            day: count,
            format: curMonth,
            appointment: this.getEvents(events, curMonth),
          })
          curMonth = addDays(curMonth, 1)
          count++
        }
      }
      month.push(week)
    }

    return month
  },
}
