import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { Theme, baseTheme, darkTheme, oliveTheme, monospaceTheme } from '.'
import { createStore } from '../state/createStore'
import { NormalizeStyles } from './NormalizeStyles'

const themeNames = [baseTheme, darkTheme, oliveTheme, monospaceTheme].map(({ name }) => name)

type ChangeThemeStore = {
  current: typeof themeNames[number]
  changeTheme: (theme: typeof themeNames[number]) => void
}

const getBrowserTheme = () => {
  const theme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'default'

  return theme
}

// eslint-disable-next-line react-refresh/only-export-components
export const useChangeTheme = createStore<ChangeThemeStore>((set) => ({
  current: getBrowserTheme(),
  changeTheme: (theme) => set({ current: theme }),
}), { name: '@Theme' })

export function ThemeProvider({ children }: WithChildren) {
  const { current } = useChangeTheme()

  const theme = {
    olive: oliveTheme,
    default: baseTheme,
    dark: darkTheme,
    monospace: monospaceTheme,
  }[current] as Theme

  return (
    <StyledThemeProvider theme={theme}>
      <NormalizeStyles />
      {children}
    </StyledThemeProvider>
  )
}
