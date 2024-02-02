import { Home } from './pages/Home'
import { Welcome } from './pages/Welcome'
import { useScreen } from './state'
import { ThemeProvider } from './styles/Theme'

export function App() {
  const { current } = useScreen()

  const Screen = {
    'auth': Welcome,
    'taskList': Home
  }[current]

  return (
    <ThemeProvider>
      <Screen />
    </ThemeProvider>
  )
}