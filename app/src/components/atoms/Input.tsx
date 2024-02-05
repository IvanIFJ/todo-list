import styled from 'styled-components'

export const Input = styled.input`
  ${({ theme }) => `
    background-color: ${theme.color.surface.base};
    color: ${theme.color.text.base};
    font-size: ${theme.font.size.subheading};
    font-weight: ${theme.font.weight.light};
    padding: ${theme.spacing(1)};
    height: ${theme.spacing(4)};
  `};
  border: none;
  outline: none;
  width: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.color.text.subtle};
  }
`