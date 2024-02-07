import { CheckSquare2, X } from 'lucide-react'
import styled from 'styled-components'
import { useSideMenu } from '.'
import { useOnKeyDown } from '../../../hooks/useOnKeyDown'
import { useAutoFocus } from '../../../hooks/useAutoFocus'
import { useTaskListActions } from '../../../state'
import { stores } from '../../../state/createStore'
import { baseTheme, darkTheme, monospaceTheme, oliveTheme, useChangeTheme } from '../../../styles'
import { Icon } from '../../atoms/Icon'
import { IconButton } from '../../atoms/IconButton'
import { Typography } from '../../atoms/Typography'

const THEMES = [baseTheme, darkTheme, oliveTheme, monospaceTheme]

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
  ${({ $opened }) => `
  transition: ${$opened ? 'left 0s 0s ease' : 'left 0s 0.4s ease'};
  left: ${$opened ? '0' : '180%'};
  `}
  nav {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    transition: right 0.3s ease-out;
    ${({ theme, $opened }) => `
    gap: ${theme.spacing(2)};
    padding: ${theme.spacing(6)} ${theme.spacing(6)} ${theme.spacing(6)} ${theme.spacing(4)};
    background-color: ${theme.color.surface.inverse};
    width: ${theme.spacing(32)};
    right: ${$opened ? '0' : `-${theme.spacing(32)}`};
    `}
    ${({ theme }) => `
      button {
        margin-bottom: ${theme.spacing(1)};
      }
    `}
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

function CloseSiteMenuButton()  {
  const { close } = useSideMenu()
  const autoFocusRef = useAutoFocus<HTMLButtonElement>({ delay: 500 })

  useOnKeyDown((event: KeyboardEvent) => { event.key === 'Escape' && close() })

  return <IconButton
    ref={autoFocusRef}
    aria-label='Close'
    onClick={close}
    icon={X}
    $size="small"
    $inverse
  />
}

const ThemeOption = styled(Typography)`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`

function ThemeSelector() {
  const { changeTheme, current } = useChangeTheme()

  return (<>
    {THEMES.map(({ name }) => {
      const active = current === name

      return (
        <ThemeOption
          as={active ? 'p' : 'a'}
          href="#!"
          $color={active ? 'accent' : 'inverse'}
          key={name}
          onClick={() => changeTheme(name)}
          style={{ textTransform: 'capitalize' }}
        >
          {active && <Icon icon={CheckSquare2} size='small' color='accent' />}
          {name} theme 
        </ThemeOption> 
      )})}
  </>)
}

export function SideMenu() {
  const { opened, close } = useSideMenu()
  const { clearTasks } = useTaskListActions()

  const handleClearData = () => {
    // prevent theme changes
    [...stores].filter(({ name }) => name !== '@Theme').forEach(({ resetFn }) => { resetFn() })
  }

  return (
    <Container $opened={opened}>
      <Backdrop $opened={opened} onClick={close} />
      <nav>
        {opened && <>
          <CloseSiteMenuButton />
          <Typography $color="subtle" $variant='caption2'>Manage data:</Typography>
          <Typography $color="inverse" as="a" href="#!" $variant='body' onClick={clearTasks}>Reset tasks</Typography>
          <Typography $color="inverse" as="a" href="#!" $variant='body' onClick={handleClearData}>Clear all data</Typography>
          <br />
          <Typography $color='subtle' $variant='caption2'>Change the theme:</Typography>
          <ThemeSelector />
        </>}
      </nav>
    </Container>
  )
}
