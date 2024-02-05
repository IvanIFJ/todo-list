import styled from 'styled-components'
import { IconButton } from '../atoms/IconButton'
import { X } from 'lucide-react'
import { createStore } from '../../state/createStore'

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

export function Modal({ children }: WithChildren) {
  const { close, opened } = useModal()

  return (
    <Container $opened={opened}>
      <IconButton aria-label='Close' icon={X} onClick={close} />
      <br />
      {opened ? children : null}
    </Container>
  )
}

type ModalStore<T = undefined> ={
  opened: boolean
  payload?: T
  open: (id?: T) => void
  close: () => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const useModal = createStore<ModalStore<{ id: string; name: string }>>((set) => ({
  opened: false,
  open: (id) => set({ opened: true, payload: id }, false, 'opeTaskModal'),
  close: () => set({ opened: false }, false, 'closeTaskModal'),
}), { name: 'useTaskFormModal' })
