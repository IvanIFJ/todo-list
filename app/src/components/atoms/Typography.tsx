import styled from 'styled-components'
import { Theme } from '../../styles/Theme'

type TypographyProps = {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  $variant?: 'heading' | 'subheading' | 'body' | 'caption' | 'caption2'
  $color?: keyof Theme['color']['text']
}

export const Typography = styled.p<TypographyProps>`
  ${({ theme, $variant = 'body', $color = 'base' }) => `
    font-size: ${theme.font.size[$variant]};
    color: ${theme.color.text[$color]};
    font-family: ${theme.font.family};
    font-weight: ${{
      heading: theme.font.weight.bold,
      subheading: theme.font.weight.bold,
      body: theme.font.weight.regular,
      caption: theme.font.weight.regular,
      caption2: theme.font.weight.bold,
    }[$variant]};
    text-transform: ${['caption2'].includes($variant) ? 'uppercase' : 'none'};
  `}
`
