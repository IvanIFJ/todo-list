import { LucideIcon } from 'lucide-react'
import styled from 'styled-components'
import { Icon } from '../atoms/Icon'

const Container = styled.button<Pick<IconButtonProps, '$size'>>`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  transition: all ease 0.2s;
  ${({ theme, $size = 'medium' }) => `
    border-radius: ${theme.boderRadius.large};
    background-color: ${theme.color.surface.subtle};
    svg { stroke: ${theme.color.text.subtle} }
    &:hover {
      svg { stroke: ${theme.color.text.base}; }
    }
    &:active {
      background-color: ${theme.color.surface.accent};
    }

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
} & React.HTMLAttributes<HTMLButtonElement>

export function IconButton({ icon, ...props }: IconButtonProps) {
  return (
    <Container {...props}>
      {<Icon icon={icon} />}
    </Container>
  )
}
