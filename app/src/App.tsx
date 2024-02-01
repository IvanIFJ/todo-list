import { Home } from './pages/Home'
import { ThemeProvider } from './styles/Theme'

export function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}