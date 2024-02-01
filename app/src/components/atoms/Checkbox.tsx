import { Check } from 'lucide-react'
import styled from 'styled-components'

type CheckboxProps = {
  $checked?: boolean
}

export const Checkbox = styled(Check)<CheckboxProps>`
  ${({ theme, $checked }) => `
    width: ${theme.spacing(2)};
    height: ${theme.spacing(2)};
    border: 2px solid ${theme.color.iteraction.base};
    border-radius: ${theme.boderRadius.large};
    padding: ${theme.spacing(0.5)};
    transition: all ease 0.2s;
    cursor: pointer;
    &:hover {
      color: ${theme.color.iteraction.hover};
      border-color: ${theme.color.iteraction.hover};
    }
    ${$checked ? `
      color: ${theme.color.iteraction.base};
      border-color: ${theme.color.boder};
      background-color: ${theme.color.boder};
    ` : `
      color: ${theme.color.surface.base};
    `}
  `}
`
