import { Input } from './components/atoms/Input'
import { Typography } from './components/atoms/Typography'
import { ThemeProvider } from './styles/Theme'

export function App() {
  return (
    <ThemeProvider>
      <Typography as="h1" $variant='heading'>Hello, todo-list!</Typography>
      <Typography $variant='subheading'>Hello, todo-list!</Typography>
      <Typography $variant='body'>Hello, todo-list!</Typography>
      <Typography $variant='caption'>Hello, todo-list!</Typography>
      <Typography $variant='caption2'>Hello, todo-list!</Typography>
    </ThemeProvider>
  )
}