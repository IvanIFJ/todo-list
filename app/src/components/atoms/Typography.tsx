import styled from 'styled-components'

type TypographyProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  variant?: 'heading' | 'subheading' | 'body' | 'caption' | 'caption2'
  children: React.ReactNode
}

export const Typography = styled.p<TypographyProps>`
  ${({ theme, variant = 'body' }) => `
    font-size: ${theme.font.size[variant]};
    font-family: ${theme.font.family};
    font-weight: ${{
      heading: theme.font.weight.bold,
      subheading: theme.font.weight.bold,
      body: theme.font.weight.regular,
      caption: theme.font.weight.regular,
      caption2: theme.font.weight.light,
    }[variant]};
    text-transform: ${['caption2'].includes(variant) ? 'uppercase' : 'none'};
  `}
`
