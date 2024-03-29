const baseTheme = {
  name: 'default',
  maxWidth: '650px',
  color: {
    iteraction: {
      base: '#076AF9',
      active: '#1167E2',
      hover: '#1E7AFF',
      focus: 'rgb(51 255 232 / 55%)',
    },
    disabled:{
      base: '#B2B6BC',
      active: '#B2B6BC',
      hover: '#B2B6BC',
    },
    link: {
      base: '#076AF9',
      active: '#1167E2',
      hover: '#1E7AFF',
      focus: 'yellow',
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
      backdrop: 'rgba(13, 32, 83, 0.3)',
    },
    border: '#E9EFFD',
  },
  borderRadius: {
    base: '8px',
    small: '4px',
    large: '48px',
    half: '50%',
  },
  font: {
    family: 'Nunito, sans-serif',
    weight: {
      light: 300,
      regular: 400,
      bold: 600,
    },
    size: {
      heading: '24px',
      subheading: '20px',
      body: '16px',
      caption: '14px',
      caption2: '12px',
    },
  },
  spacing: (scale: number) => `${scale * 8}px`,
} as const

const darkTheme = {
  name: 'dark',
  maxWidth: '650px',
  color: {
    iteraction: {
      base: '#a2c2ff',
      active: '#859dcb',
      hover: '#b4ceff',
      focus: 'rgb(86 255 242 / 45%)',
    },
    disabled:{
      base: '#404040',
      active: '#404040',
      hover: '#404040',
    },
    link: {
      base: '#a2c2ff',
      active: '#859dcb',
      hover: '#b4ceff',
      focus: 'rgb(255 255 255 / 25%)',
    },
    text: { 
      base: '#dbdee3',
      subtle: '#acafbc',
      accent: '#076AF9',
      inverse: '#252b36',
    },
    surface: {
      base: '#1b1c20',
      subtle: '#23252e',
      accent: '#343847',
      inverse: '#fff',
      backdrop: 'rgba(0, 0, 0, 0.3)',
    },
    border: '#30408',
  },
  borderRadius: {
    base: '8px',
    small: '4px',
    large: '48px',
    half: '50%',
  },
  font: {
    family: 'Nunito, sans-serif',
    weight: {
      light: 300,
      regular: 400,
      bold: 600,
    },
    size: {
      heading: '24px',
      subheading: '20px',
      body: '16px',
      caption: '14px',
      caption2: '12px',
    },
  },
  spacing: (scale: number) => `${scale * 8}px`,
} as const


const oliveTheme = {
  name: 'olive',
  maxWidth: '650px',
  color: {
    iteraction: {
      base: '#ec8132',
      active: '#e8670c',
      hover: '#ff8e3d',
      focus: 'rgb(63 255 0 / 62%)',
    },
    disabled:{
      base: '#B2B6BC',
      active: '#B2B6BC',
      hover: '#B2B6BC',
    },
    link: {
      base: '#ec8132',
      active: '#e8670c',
      hover: '#ff8e3d',
      focus: 'rgb(63 255 0 / 62%)',
    },
    text: { 
      base: '#242e35',
      subtle: '#5e6376',
      accent: '#e8670c',
      inverse: '#FFFFFF',
    },
    surface: {
      base: '#FFFFFF',
      subtle: '#F9FAFE',
      accent: '#bed8cd',
      inverse: '#252b36',
      backdrop: 'rgba(13, 32, 83, 0.3)',
    },
    border: '#E9EFFD',
  },
  borderRadius: {
    base: '8px',
    small: '4px',
    large: '48px',
    half: '50%',
  },
  font: {
    family: 'Nunito, sans-serif',
    weight: {
      light: 300,
      regular: 400,
      bold: 600,
    },
    size: {
      heading: '24px',
      subheading: '20px',
      body: '16px',
      caption: '14px',
      caption2: '12px',
    },
  },
  spacing: (scale: number) => `${scale * 8}px`,
} as const

const monospaceTheme = {
  name: 'monospace',
  maxWidth: '650px',
  color: {
    iteraction: {
      base: '#63dd9e',
      active: '#31654a',
      hover: '#9af5f2',
      focus: 'rgb(86 255 242 / 45%)',
    },
    disabled:{
      base: '#404040',
      active: '#404040',
      hover: '#404040',
    },
    link: {
      base: '#bababa',
      active: '#989898',
      hover: '#cbcbcb',
      focus: 'rgb(255 255 255 / 25%)',
    },
    text: { 
      base: '#dbdee3',
      subtle: '#acafbc',
      accent: '#4ec889',
      inverse: '#252b36',
    },
    surface: {
      base: '#1e1e1e',
      subtle: '#272727',
      accent: '#373737',
      inverse: '#fff',
      backdrop: 'rgba(0, 0, 0, 0.3)',
    },
    border: '#30408',
  },
  borderRadius: {
    base: '2px',
    small: '0px',
    large: '0px',
    half: '0',
  },
  font: {
    family: 'monospace',
    weight: {
      light: 300,
      regular: 300,
      bold: 400,
    },
    size: {
      heading: '20px',
      subheading: '16px',
      body: '12px',
      caption: '10px',
      caption2: '9px',
    },
  },
  spacing: (scale: number) => `${scale * 8.5}px`,
} as const

type Theme = typeof baseTheme

export { baseTheme, darkTheme, oliveTheme, monospaceTheme }
export type { Theme }
