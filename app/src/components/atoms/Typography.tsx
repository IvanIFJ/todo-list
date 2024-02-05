import styled from 'styled-components'
import { Theme } from '../../styles'

type TypographyProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'a' | 'button'
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

    ${(as === 'a' || as === 'button') ? `
      transition: all 0.1s ease-out;
      cursor: pointer;
      text-decoration: none;
      border: none;
      background-color: transparent;
      &:hover { color: ${theme.color.text.accent}; }
      &:active {
        color: ${theme.color.iteraction.active};
        background-color: ${theme.color.surface.base};
      }
    ` : ''}

    ${(as === 'button') ? `
      padding: ${theme.spacing(1)} ${theme.spacing(2)};
      display: inline-block;
      border-radius: ${theme.boderRadius.small};
      outline: 2px solid transparent;
      &:focus { outline: 2px solid ${theme.color.iteraction.active}; }
    ` : ''}

    ${(as === 'a') ? `
      border-bottom: 2px solid transparent;
      &:focus {
        border-bottom: 2px solid ${theme.color.iteraction.focus};
        outline: none;
      }
    ` : ''}
  `}
`
