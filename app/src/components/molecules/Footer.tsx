import styled from 'styled-components'
import { Typography } from '../atoms/Typography'

const StyledFooter = styled.footer`
  margin: ${({ theme }) => theme.spacing(2)};
`

import { version } from '../../../package.json'

export function Footer() {
  return (
    <StyledFooter>
      <Typography $variant='caption'>
         © 2024 Atomic To-Do List, by <a href="https://github.com/ivanifj" target="_blank" title="Ivan de Freitas Jr">ivanfreitas</a> | version {version}
      </Typography>
    </StyledFooter>
  )
}
