import { X } from 'lucide-react'
import styled from 'styled-components'
import { useSideMenu } from '.'
import { useTaskList } from '../../../state'
import { stores } from '../../../state/createStore'
import { Typography } from '../../atoms/Typography'
import { IconButton } from '../IconButton'

const Container = styled.div<{ $opened: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  transition: all 0.4s 0.2s ease-in-out;
  ${({ theme, $opened }) => `
    transition: all 0.4s 0.2s ease-in-out;
    ${$opened ? `
      transition: all 0.4s ease-in-out;
      left: 0;
      ` : `
      left: 180%;
      width: 0;
    `}

    &, * {
      color: ${theme.color.text.inverse};
    }

  `}
  nav {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    ${({ theme }) => `
      gap: ${theme.spacing(2)};
      padding: ${theme.spacing(6)} ${theme.spacing(6)} ${theme.spacing(6)} ${theme.spacing(4)};
      background-color: ${theme.color.surface.inverse};
    `}

    button {
      ${({ theme }) => `
        margin-bottom: ${theme.spacing(1)};
      `}
    }
  }
`

const Backdrop = styled.div<{ $opened: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 0;
  transition: all 0.3s ease-in-out;
  ${({ theme, $opened }) => `
    background-color: ${$opened ? theme.color.surface.backdrop : 'transparent'};
  `}
`

export function SideMenu() {
  const { opened, close } = useSideMenu()
  const { clearTasks } = useTaskList()

  const handleLogout = () => {
    stores.forEach(resetFn => resetFn())
  }

  return (
    <Container $opened={opened}>
      <Backdrop $opened={opened} onClick={close} />
      <nav>
        <IconButton onClick={close} icon={X} $size="small" $inverse />
        <Typography as="a" $variant='body' onClick={handleLogout}>Clear all data</Typography>
        <Typography as="a" $variant='body' onClick={clearTasks}>Clear task list</Typography>
      </nav>
    </Container>
  );
}
