import { ScrollableSelect } from './components/molecules/ScrollableSelect'
import { Home } from './pages/Home'
import { Welcome } from './pages/Welcome'
import { useScreen } from './state'
import { ThemeProvider } from './styles'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month) => ({ label: month, value: month }))
const days = new Array(31).fill(0).map((_, i) => ({ label: (i+1).toString(), value: i+1 }))

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
    'taskList': Home,
  }[current]

  return (
    <AppProviders>
      <ScrollableSelect options={MONTHS} value={{ label: 'June', value: 'J' }} />
      <ScrollableSelect options={days} value={{ label: '27', value: 27 }} />
      <Screen />
    </AppProviders>
  )
}
