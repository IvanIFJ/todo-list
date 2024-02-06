import { LucideIcon } from 'lucide-react'
import styled from 'styled-components'
import { Button } from '../atoms/Button'

const StyledButton = styled(Button)`
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
    border-radius: ${theme.borderRadius.large};
    box-shadow: 0px 8px 10px rgba(20, 20, 30, 0.4);
  `}
`

type FabProps = {
  icon: LucideIcon
  'aria-label': string
} & React.HTMLAttributes<HTMLButtonElement>

/**
 * Floating Action Button
 */
export function Fab({ icon: Icon, ...props }: FabProps) {
  return (
    <StyledButton {...props}>
      {<Icon />}
    </StyledButton>
  )
}
