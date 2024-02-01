import { LucideIcon } from 'lucide-react'
import styled from 'styled-components'
import { Button } from '../atoms/Button'

const Container = styled(Button)`
  padding: 0 0 0 0;
  position: fixed;
  ${({ theme }) => `
    bottom: ${theme.spacing(4)};
    right: ${theme.spacing(4)};
    height: ${theme.spacing(7)};
    width: ${theme.spacing(7)};
    border-radius: ${theme.boderRadius.large};
    box-shadow: 0px 8px 10px #1167e269;
  `}
  // small adjustment to align the icon on the center
  svg { margin-top: 2px; }
`

type FabProps = {
  icon: LucideIcon
}

export function Fab({ icon: Icon }: FabProps) {
  return (
    <Container>
      {<Icon />}
    </Container>
  )
}