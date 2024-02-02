import styled from 'styled-components'
import { Theme } from '../../styles/Theme'

type TypographyProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'a'
  $variant?: 'heading' | 'subheading' | 'body' | 'caption' | 'caption2'
  $color?: keyof Theme['color']['text']
  children: React.ReactNode  
}

export const Typography = styled.p<TypographyProps>`
  ${({ theme, $variant = 'body', $color = 'base', as }) => `
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

    ${as === 'a' ? `
      cursor: pointer;
      text-decoration: none;
      &:hover {
        color: ${theme.color.text.accent};
      }
    ` : ''}
  `}
`
