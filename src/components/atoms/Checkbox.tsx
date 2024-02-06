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
    border-radius: ${theme.borderRadius.half};
    padding: ${theme.spacing(0.25)};
    transition: all ease 0.2s;
    cursor: pointer;
    &:focus {
      outline: 2px solid ${theme.color.iteraction.focus};
      color: ${theme.color.border};
    }
    &:hover {
      color: ${theme.color.iteraction.hover};
      border-color: ${theme.color.iteraction.hover};
    }
    ${$checked ? `
      color: ${theme.color.iteraction.base};
      border-color: ${theme.color.border};
      background-color: ${theme.color.border};
    ` : `
      color: ${theme.color.surface.base};
    `}
  `}
`
