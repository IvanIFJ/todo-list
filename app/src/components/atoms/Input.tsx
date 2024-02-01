import styled from 'styled-components'

export const Input = styled.input`
  ${({ theme }) => `
    font-size: ${theme.font.size.subheading};
    font-weight: ${theme.font.weight.light};
    padding: ${theme.spacing(1)};
    height: ${theme.spacing(4)};
  `};
  border: none;
  outline: none;
  ::placeholder {
    color: ${({ theme }) => theme.color.text.subtle};
  }
`