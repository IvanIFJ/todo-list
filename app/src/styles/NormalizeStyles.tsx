import { createGlobalStyle } from 'styled-components'

export const NormalizeStyles = createGlobalStyle`
  html, body, #root{
    height: 100%;
  }
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
  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  main {
    display: block;
  }
  a {
    background-color: transparent;
  }
  * {
    box-sizing: border-box;
  }
  input, textarea, button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
`
