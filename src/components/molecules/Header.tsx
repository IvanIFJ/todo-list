import { Settings } from 'lucide-react'
import styled from 'styled-components'
import { Typography } from '../atoms/Typography'
import { IconButton } from './IconButton'
import { useSideMenu } from './SideMenu'

const StyledHeader = styled.header`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  justify-content: space-between;
`

export function Header() {
  const { open } = useSideMenu()

  return (
    <StyledHeader>
      <Typography as="h1" $variant='subheading' $color='subtle'>Atomic To-Do List</Typography>
      <IconButton aria-label='Open settings' onClick={open} icon={Settings} />
    </StyledHeader>
  )
}
