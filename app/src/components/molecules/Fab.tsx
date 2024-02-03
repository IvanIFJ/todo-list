import { LucideIcon } from 'lucide-react'
import styled from 'styled-components'
import { Button } from '../atoms/Button'

const Container = styled(Button)`
  padding: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => `
    bottom: ${theme.spacing(4)};
    right: ${theme.spacing(4)};
    height: ${theme.spacing(7)};
    width: ${theme.spacing(7)};
    border-radius: ${theme.boderRadius.large};
    box-shadow: 0px 8px 10px #1167e269;
  `}
`

type FabProps = {
  icon: LucideIcon
} & React.HTMLAttributes<HTMLButtonElement>

/**
 * Floating Action Button
 */
export function Fab({ icon: Icon, ...props }: FabProps) {
  return (
    <Container {...props}>
      {<Icon />}
    </Container>
  )
}