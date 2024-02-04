import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { NormalizeStyles } from './NormalizeStyles'

type IteractiveColorRange = {
  base: string
  active: string
  hover: string
}

export type BaseTheme = {
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
    size: {
      heading: string
      subheading: string
      body: string
      caption: string
      caption2:string
    }
  }
  spacing: (scale: number) => string
}


const theme = {
  mode: 'light',
  maxWidth: '650px',
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
      accent: '#D8DFF5',
      inverse: '#0D2052',
      backdrop: 'rgba(13, 32, 83, 0.3)'
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
    },
    size: {
      heading: '24px',
      subheading: '20px',
      body: '16px',
      caption: '14px',
      caption2: '12px',
    }
  },
  spacing: (scale: number) => `${scale * 8}px`,
} as const

export type Theme = typeof theme

export function ThemeProvider({ children }: WithChildren) {
  return (
    <StyledThemeProvider theme={theme}>
      <NormalizeStyles />
      {children}
    </StyledThemeProvider>
  )
}
