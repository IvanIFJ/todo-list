
const formatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
  day: '2-digit',
})

export const formatDate = (date: Date) => {
  return formatter.format(date)
}