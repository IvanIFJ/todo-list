import { Settings } from 'lucide-react'
import styled from 'styled-components'
import { Typography } from '../atoms/Typography'
import { IconButton } from '../atoms/IconButton'
import { useSideMenu } from '../molecules/SideMenu'

const StyledHeader = styled.header`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  justify-content: space-between;
  align-items: center;
`

function SettingsButton() {
  const { open } = useSideMenu()

  return <IconButton $size='large' aria-label='Open settings' onClick={open} icon={Settings} />
}

export function Header() {
  return (
    <StyledHeader>
      <Typography as="h1" $variant='subheading' $color='subtle'>Atomic To-Do List</Typography>
      <SettingsButton />
    </StyledHeader>
  )
}
