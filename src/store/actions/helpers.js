export function formatDateYMDFromDate(date, format) {
  var curr_date = date.getDate()
  var curr_month = date.getMonth() + 1
  var curr_year = date.getFullYear()
  if (format === 'Y-m-d') {
    return `${curr_year}-${curr_month}-${curr_date}`
  } else if (format === 'd.m.Y') {
    return `${curr_date}.${curr_month}.${curr_year}`
  }
}

export function formatDateYMDFromString(dateString) {
  const arrDate = dateString.split('.')
  return `${arrDate[2]}-${arrDate[1]}-${arrDate[0]}`
}
