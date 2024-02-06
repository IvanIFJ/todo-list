import { Pencil } from 'lucide-react/'
import { memo, useCallback } from 'react'
import styled from 'styled-components'
import { TaskEntity } from '../../entities'
import { useTaskList } from '../../state'
import { formatDate } from '../../utils/formatDate'
import { Checkbox } from '../atoms/Checkbox'
import { IconButton } from '../atoms/IconButton'
import { Typography } from '../atoms/Typography'
import { useModal } from './Modal'

type TaskProps = {
  value: TaskEntity
}

const Container = styled.div<{ $checked?: boolean }>`
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
  width: 100%;
  ${({ theme }) => `
    box-shadow: 0px 2px 4px ${theme.color.boder};
    background-color: ${theme.color.surface.base};
    gap: ${theme.spacing(2)};
    padding: ${theme.spacing(2)};
    border-radius: ${theme.boderRadius.base};
    margin-bottom: ${theme.spacing(1)};
    &:not(:last-child) {
      border-bottom: 1px solid ${theme.color.boder};
    }
  `};
  ${({ theme, $checked }) => `
    ${$checked ? `
      border-radius: 0;
      box-shadow: none;
      background-color: ${theme.color.surface.subtle};
    ` : `
      &:hover {
        box-shadow: 0px 8px 10px ${theme.color.boder};
        transform: translateY(-2px);
      }
    `}
  `};

  svg {
    flex-shrink: 0;
    flex-grow: 0;
  }
`

const Name = styled(Typography)<{ $checked?: boolean }>`
  word-break: break-word;
  ${({ $checked }) => $checked ? `
    text-decoration: line-through;
  ` : ''}
`

const Content = styled.div`
  flex: 1;
`

function TaskCheckbox({ id, completed  }: {id: string, completed: boolean}) {
  const toggle = useTaskList(({ toggleTask }) => toggleTask)
  const handleToggle = useCallback(() => {
    toggle(id)
  }, [id, toggle])

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLOrSVGElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleToggle()
    }
  }, [handleToggle])

  return <Checkbox tabIndex={0} onClick={handleToggle} onKeyDown={handleKeyDown} $checked={completed} role="checkbox" aria-checked={completed} />
}

export const Task = memo(function Task({ value }: TaskProps) {
  const { completed, createdAt, name, id } = value
  const color = completed ? 'subtle' : 'base'
  const { open } = useModal()

  return (
    <Container $checked={completed} role='listitem'>
      <TaskCheckbox completed={completed} id={id} />
      <Content>
        <Name $color={color} $checked={completed} as="span" $variant='body'>{name}</Name>
        <Typography $color={color} $variant='caption2'>{formatDate(createdAt)}</Typography>
      </Content>
      {!completed &&
        <IconButton
          aria-label='Edit task'
          $size='small'
          icon={Pencil}
          onClick={() => open({ id, name })}
          style={{ flexShrink: 0 }}
        />}
    </Container>
  )
})
