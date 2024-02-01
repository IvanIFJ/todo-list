
import styled from 'styled-components'

type ButtonProps = {
  $disabled?: boolean
}

export const Button = styled.button<ButtonProps>`
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  outline: none;
  transition: background-color 0.2s;
  ${({ theme, $disabled }) => `
    font-size: ${theme.font.size.body};
    font-weight: ${theme.font.weight.regular};
    height: ${theme.spacing(5)};
    line-height: ${theme.spacing(2.5)};
    padding: 0 ${theme.spacing(2.5)};
    border-radius: ${theme.spacing(2.5)};
    color: ${theme.color.text.inverse};
    background-color: ${theme.color.iteraction.base};
    &:hover { background-color: ${theme.color.iteraction.hover} }
    &:active { background-color: ${theme.color.iteraction.active} }
    ${$disabled ? `
      cursor: not-allowed;
      color: ${theme.color.text.subtle};
      background-color: ${theme.color.disabled.base};
      &:hover { background-color: ${theme.color.disabled.hover} }
      &:active { background-color: ${theme.color.disabled.active} }
    ` : ''}
  `}
`