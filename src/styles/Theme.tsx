import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { Theme, baseTheme, darkTheme, oliveTheme } from '.'
import { createStore } from '../state/createStore'
import { NormalizeStyles } from './NormalizeStyles'

type ThemeVariant = 'olive' | 'default' | 'dark'

type ChangeThemeStore = {
  current: ThemeVariant
  changeTheme: (theme: ThemeVariant) => void
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
  }[current] as Theme

  return (
    <StyledThemeProvider theme={theme}>
      <NormalizeStyles />
      {children}
    </StyledThemeProvider>
  )
}
