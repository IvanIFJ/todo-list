import styled from 'styled-components'
import { Typography } from '../atoms/Typography'
import { Settings } from 'lucide-react'
import { Icon } from '../atoms/Icon'

const StyledHeader = styled.header`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  justify-content: space-between;
`

export function Header() {
  return (
    <StyledHeader>
      <Typography as="h1" $variant='subheading' $color='subtle'>Atomic To-Do List</Typography>
      <Icon icon={Settings} color='subtle' />
    </StyledHeader>
  )
}