import styled from 'styled-components'
import { TaskEntity } from '../../entities'
import { Checkbox } from '../atoms/Checkbox'
import { Typography } from '../atoms/Typography'
import { formatDate } from '../../utils/formatDate'
import { memo } from 'react'
import { IconButton } from './IconButton'
import { Pencil } from 'lucide-react/'
import { useModal } from './Modal'

type TaskProps = {
  value: TaskEntity
  onClick?: () => void
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

export const Task = memo(function Task({ value, onClick }: TaskProps) {
  const { completed, createdAt, name, id } = value
  const color = completed ? 'subtle' : 'base'
  const { open } = useModal()

  const handleKeyDown = (event: React.KeyboardEvent<HTMLOrSVGElement>) => {
    console.log('event.key', event.key)
    if (event.key === 'Enter' || event.key === ' ') {
      onClick && onClick()
    }
  }

  return (
    <Container $checked={completed} role='listitem'>
      <Checkbox tabIndex={0} onClick={onClick} onKeyDown={handleKeyDown} $checked={completed} role="checkbox" aria-checked={completed} />
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