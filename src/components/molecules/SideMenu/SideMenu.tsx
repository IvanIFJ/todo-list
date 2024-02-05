import { X } from 'lucide-react'
import styled from 'styled-components'
import { useSideMenu } from '.'
import { useOnKeyDown } from '../../../hooks/useOnKeyDown'
import { useTaskList } from '../../../state'
import { stores } from '../../../state/createStore'
import { useChangeTheme } from '../../../styles'
import { Typography } from '../../atoms/Typography'
import { useEffect, useRef } from 'react'
import { IconButton } from '../../atoms/IconButton'

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
  ${({ theme, $opened }) => `
    transition: ${$opened ? 'left 0s 0s ease' : 'left 0s 0.4s ease'};
    left: ${$opened ? '0' : '180%'};
    a {
      color: ${theme.color.text.inverse};
    }
  `}
  nav {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    transition: right 0.3s ease-out;
    ${({ theme, $opened }) => `
    width: ${theme.spacing(26)};
    gap: ${theme.spacing(2)};
    padding: ${theme.spacing(6)} ${theme.spacing(6)} ${theme.spacing(6)} ${theme.spacing(4)};
    background-color: ${theme.color.surface.inverse};
    right: ${$opened ? '0' : `-${theme.spacing(26)}`};
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
  transition: all 0.2s ease-in-out;
  ${({ theme, $opened }) => `
    background-color: ${$opened ? theme.color.surface.backdrop : 'transparent'};
  `}
`

function CloseSiteMenuButton() {
  const { close } = useSideMenu()

  useOnKeyDown((event: KeyboardEvent) => { event.key === 'Escape' && close() })

  return <IconButton aria-label='Close' onClick={close} icon={X} $size="small" $inverse />
}

export function SideMenu() {
  const { opened, close } = useSideMenu()
  const { clearTasks } = useTaskList()
  const { changeTheme, current } = useChangeTheme()
  const ref = useRef<HTMLAnchorElement>(null)

  const handleClearData = () => {
    // prevent theme changes
    [...stores].filter(({ name }) => name !== '@Theme').forEach(({ resetFn }) => { resetFn() })
  }

  useEffect(() => {
    // wait for the animation to finish
    const timeout = opened ? setTimeout(() => ref.current?.focus(), 500) : undefined

    return () => clearTimeout(timeout)
  }, [opened])

  return (
    <Container $opened={opened}>
      <Backdrop $opened={opened} onClick={close} />
      <nav>
        {opened && <>
          <CloseSiteMenuButton />

          <Typography $color="subtle" $variant='caption2'>Manage data:</Typography>
          <Typography ref={ref} as="a" href="#!" $variant='body' onClick={clearTasks}>Reset tasks</Typography>
          <Typography as="a" href="#!" $variant='body' onClick={handleClearData}>Clear all data</Typography>
          <br />
          <Typography $color='subtle' $variant='caption2'>Change the theme:</Typography>
          {current !== 'default' ? <Typography as="a" href="#!" $variant='body' onClick={() => changeTheme('default')}>Default theme</Typography> : null}
          {current !== 'dark' ? <Typography as="a" href="#!" $variant='body' onClick={() => changeTheme('dark')}>Dark theme</Typography> : null}
          {current !== 'olive' ? <Typography as="a" href="#!" $variant='body' onClick={() => changeTheme('olive')}>Olive theme</Typography> : null}
        </>}
      </nav>
    </Container>
  )
}
