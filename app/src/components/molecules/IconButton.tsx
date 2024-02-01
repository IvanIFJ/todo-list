import { LucideIcon } from 'lucide-react'
import styled from 'styled-components'
import { Icon } from '../atoms/Icon'

const Container = styled.button`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  transition: all ease 0.2s;
  ${({ theme }) => `
    height: ${theme.spacing(5)};
    width: ${theme.spacing(5)};
    border-radius: ${theme.boderRadius.large};
    background-color: ${theme.color.surface.subtle};
    svg { stroke: ${theme.color.text.subtle} }

    &:hover {
      svg { stroke: ${theme.color.text.base}; }
    }
    &:active {
      background-color: ${theme.color.surface.accent};
    }
  `}
`

type IconButton = {
  icon: LucideIcon
} & React.HTMLAttributes<HTMLButtonElement>

export function IconButton({ icon, ...props }: IconButton) {
  return (
    <Container {...props}>
      {<Icon icon={icon} />}
    </Container>
  )
}