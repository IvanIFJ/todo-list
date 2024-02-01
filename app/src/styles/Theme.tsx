import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { NormalizeStyles } from './NormalizeStyles'

type IteractiveColorRange = {
  base: string
  active: string
  hover: string
}

export type Theme = {
  mode: 'light' | 'dark'
  color: {
    iteraction: IteractiveColorRange
    disabled: IteractiveColorRange
    link: IteractiveColorRange
    text: {
      base: string
      subtle: string
      accent: string
      inverse: string
    }
    surface: {
      base: string
      subtle: string
      accent: string
    }
    boder: string
  }
  boderRadius: {
    base: string
    small: string
    large: string 
  }
  font: {
    family: string
    weight: {
      light: number
      regular: number
      bold: number
    }
  }
}

const theme: Theme = {
  mode: 'light',
  color: {
    iteraction: {
      base: '#076AF9',
      active: '#1167E2',
      hover: '#1E7AFF'
    },
    disabled:{
      base: '#B2B6BC',
      active: '#B2B6BC',
      hover: '#B2B6BC'
    },
    link: {
      base: '#076AF9',
      active: '#1167E2',
      hover: '#1E7AFF'
    },
    text: { 
      base: '#1C2C52',
      subtle: '#7D8BBC',
      accent: '#076AF9',
      inverse: '#FFFFFF',
    },
    surface: {
      base: '#FFFFFF',
      subtle: '#F9FAFE',
      accent: '#D8DFF5'
    },
    boder: '#E9EFFD'
  },
  boderRadius: {
    base: '8px',
    small: '4px',
    large: '50%' 
  },
  font: {
    family: 'Nunito, sans-serif',
    weight: {
      light: 300,
      regular: 400,
      bold: 600
    }
  }
}

export function ThemeProvider({ children }: WithChildren) {
  return (
    <StyledThemeProvider theme={theme}>
      <NormalizeStyles />
      {children}
    </StyledThemeProvider>
  )
}
