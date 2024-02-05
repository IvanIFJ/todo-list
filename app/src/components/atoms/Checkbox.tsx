import { Check } from 'lucide-react'
import styled from 'styled-components'

type CheckboxProps = {
  $checked?: boolean
}

export const Checkbox = styled(Check)<CheckboxProps>`
  ${({ theme, $checked }) => `
    width: ${theme.spacing(3)};
    height: ${theme.spacing(3)};
    border: 2px solid ${theme.color.iteraction.base};
    border-radius: ${theme.boderRadius.large};
    padding: ${theme.spacing(0.25)};
    transition: all ease 0.2s;
    cursor: pointer;
    &:focus {
      outline: 2px solid ${theme.color.iteraction.focus};
      color: ${theme.color.boder};
    }
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
