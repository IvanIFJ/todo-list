import styled from 'styled-components'
import { Task } from '../../entities'
import { Checkbox } from '../atoms/Checkbox'
import { Typography } from '../atoms/Typography'
import { formatDate } from '../../utils/formatDate'

type TodoProps = {
  value: Task
  onClick?: () => void
}

const Container = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  ${({ theme }) => `
    background-color: ${theme.color.surface.subtle};
    gap: ${theme.spacing(2)};
    padding: ${theme.spacing(2)};
    border-radius: ${theme.boderRadius.small};
    margin-bottom: ${theme.spacing(1)};
    border: 1px solid ${theme.color.boder};
  `};
  svg {
    flex-shrink: 0;
    flex-grow: 0;
  }
`

const Name = styled(Typography)<{ $checked?: boolean }>`
  ${({ $checked, theme }) => $checked ? `
    text-decoration: line-through;
    color: ${theme.color.text.subtle};
  ` : ''}
`
const CreatedAt = styled(Typography)<{ $checked?: boolean }>`
  ${({ $checked, theme }) => $checked ? `
    color: ${theme.color.text.subtle};
  ` : ''}
`

export function Todo({value: { completed, createdAt,
   name }, onClick }: TodoProps) {
  return (
    <Container>
      <Checkbox onClick={onClick} $checked={completed}/>
      <div>
        <Name $checked={completed} as="span" $variant='body'>{name}</Name>
        <CreatedAt $checked={completed} $variant='caption2'>{formatDate(createdAt)}</CreatedAt>
      </div>
    </Container>
  )
}
