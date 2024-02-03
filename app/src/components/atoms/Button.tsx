
import styled from 'styled-components'

type ButtonProps = {
  $disabled?: boolean
}

export const Button = styled.button.attrs<ButtonProps>(({$disabled}) => ({disabled: $disabled}))<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  outline: none;
  transition: background-color 0.2s;
  flex-shrink: 0;
  flex-grow: 0;
  ${({ theme, $disabled }) => `
    gap: ${theme.spacing(1)};
    font-size: ${theme.font.size.body};
    font-weight: ${theme.font.weight.regular};
    height: ${theme.spacing(6)};
    padding: 0 ${theme.spacing(3)};
    border-radius: ${theme.spacing(4)};
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