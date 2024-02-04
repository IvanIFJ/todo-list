import styled from 'styled-components'
import { Task } from '../../entities'
import { Checkbox } from '../atoms/Checkbox'
import { Typography } from '../atoms/Typography'
import { formatDate } from '../../utils/formatDate'
import { memo } from 'react'

type TodoProps = {
  value: Task
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
  ${({ $checked }) => $checked ? `
    text-decoration: line-through;
  ` : ''}
`

export const Todo = memo(function Todo({value, onClick }: TodoProps) {
  const { completed, createdAt, name } = value
  const color = completed ? 'subtle' : 'base'

  return (
    <Container $checked={completed} role='listitem'>
      <Checkbox onClick={onClick} $checked={completed} role="checkbox" aria-checked={completed} />
      <div>
        <Name $color={color} $checked={completed} as="span" $variant='body'>{name}</Name>
        <Typography $color={color} $variant='caption2'>{formatDate(createdAt)}</Typography>
      </div>
    </Container>
  )
})