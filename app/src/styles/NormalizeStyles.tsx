import { createGlobalStyle } from 'styled-components'

export const NormalizeStyles = createGlobalStyle`
  ${({ theme }) => `
    body {
      font-size: 16px;
      font-family: ${theme.font.family};
      color: ${theme.color.text.base};
      background-color: ${theme.color.surface.base};
      margin: 0;
    }
    b, strong {
      font-weight: ${theme.font.weight.bold};
    }
  `}
  html {
    margin: 0;
    padding: 0;
  }
  main {
    display: block;
  }
  a {
    background-color: transparent;
  }
`
