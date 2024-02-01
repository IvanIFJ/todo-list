import styled from 'styled-components'
import { IconButton } from './IconButton'
import { X } from 'lucide-react'

export const Container = styled.div<{ $opened?: boolean }>`
  ${({ theme, $opened }) => `
    display: ${$opened ? 'flex' : 'none'};
    background-color: ${theme.color.surface.subtle};
    border-radius: ${theme.spacing(6)};
    padding: ${theme.spacing(6)} ${theme.spacing(3)};
    background-color: ${theme.color.surface.base};
  `}
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  flex-direction: column;
`

type ModalProps = {
  opened: boolean
  onClose: () => void
}

export function Modal({ children, opened, onClose }: WithChildren<ModalProps>) {
  return (
    <Container $opened={opened}>
      <IconButton icon={X} onClick={onClose} />
      <br />
      {opened ? children : null}
    </Container>
  )
}