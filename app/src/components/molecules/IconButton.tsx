import { LucideIcon } from 'lucide-react'
import styled from 'styled-components'
import { Icon } from '../atoms/Icon'

const StyledButton = styled.button<Pick<IconButtonProps, '$size' | '$inverse'>>`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  transition: color ease 0.2s, background-color ease 0.2s;
  outline: 2px solid transparent;
  ${({ theme, $size = 'medium', $inverse }) => `
    border-radius: ${theme.boderRadius.large};
    &:focus { outline: 2px solid ${theme.color.iteraction.focus} }
    &:active { outline: 2px solid transparent; }
    ${$inverse ? `
      background-color: ${theme.color.surface.backdrop};
      svg { stroke: ${theme.color.text.inverse} }
      &:hover {
        background-color: ${theme.color.text.base};
        svg { stroke: ${theme.color.text.inverse}; }
      }
      &:active {
        background-color: ${theme.color.surface.accent};
      }
      ` : `  
      background-color: ${theme.color.surface.subtle};
      svg { stroke: ${theme.color.text.subtle} }
      &:hover {
        svg { stroke: ${theme.color.text.base}; }
      }
      &:active {
        background-color: ${theme.color.surface.accent};
      }
    `}

    ${{
      small: `
        height: ${theme.spacing(4)};
        width: ${theme.spacing(4)};
      `,
      medium: `
        height: ${theme.spacing(6)};
        width: ${theme.spacing(6)};
      `
    }[$size]}
  `}
`

type IconButtonProps = {
  icon: LucideIcon
  $size?: 'small' | 'medium'
  $inverse?: boolean
} & React.HTMLAttributes<HTMLButtonElement>

export function IconButton({ icon, $size = 'medium', ...props }: IconButtonProps) {
  return (
    <StyledButton {...{ ...props, $size: $size }}>
      {<Icon icon={icon} size={$size} />}
    </StyledButton>
  )
}
