
const formatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
  day: '2-digit',
})

export const formatDate = (date: Date | Timestamp) => {
  if (typeof date === 'number') {
    formatter.format(new Date(date))
  }

  return formatter.format(date)
}
