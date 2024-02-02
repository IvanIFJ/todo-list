import { useMemo } from 'react'
import styled from 'styled-components'
import { useTaskList } from '../../state'
import { Todo } from '../molecules/Todo'
import { Task } from '../../entities'
import { Typography } from '../atoms/Typography'

const Container = styled.div`
  min-height: 350px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  ${({ theme }) => `
    margin: ${theme.spacing(1)} 0;
  `}
`

export function TaskList() {
  const { tasks, toggleTodo, clearCompleted, completed } = useTaskList(({ tasks, toggleTodo, clearCompleted, meta }) => ({ tasks, toggleTodo, clearCompleted, completed: meta.completed }))
  const grouped = Object.values(tasks).reduce((result, task) => {
    if (task.completed) {
      return { ...result, completed: [...result.completed, task]}
    } 
    return { ...result, pending: [...result.pending, task]}
  }, {
    completed: [],
    pending: [],
  } as Record<'completed' | 'pending', Task[]>)

  const sortedPending = useMemo(() => grouped.pending.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()), [grouped.pending])
  const sortedCompleted = useMemo(() => grouped.completed.sort((a, b) =>
    (b.completedAt?.getTime()||0) - (a.completedAt?.getTime()||0)), [grouped.completed]
  )

  return (
    <Container>
      {sortedPending.map((task) => (
        <Todo
          key={task.id}
          onClick={() => toggleTodo(task.id)}
          value={task}
        />
      ))}
      {grouped.completed.length !== 0 ? 
        <Typography
          as="button"
          $variant='caption2'
          $color='subtle'
          onClick={clearCompleted}
        >
            Clear completed tasks ({completed})
          </Typography>
      : null}
      {sortedCompleted.map((task) => (
        <Todo
          key={task.id}
          onClick={() => toggleTodo(task.id)}
          value={task}
        />
      ))}
    </Container>
  )
}