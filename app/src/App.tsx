import { Home } from './pages/Home'
import { Welcome } from './pages/Welcome'
import { useScreen } from './state'
import { ThemeProvider } from './styles/Theme'

export function AppProviders({ children }: WithChildren) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export function App() {
  const { current } = useScreen()

  const Screen = {
    'auth': Welcome,
    'taskList': Home
  }[current]

  return (
    <AppProviders>
      <Screen />
    </AppProviders>
  )
}