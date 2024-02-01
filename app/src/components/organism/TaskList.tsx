import { useMemo } from 'react'
import styled from 'styled-components'
import { useTaskList } from '../../state'
import { Todo } from '../molecules/Todo'
import { Task } from '../../entities'

const Container = styled.div`
  min-height: 350px;
  overflow-y: auto;
  ${({ theme }) => `
    margin: ${theme.spacing(1)} 0;
  `}
`

export function TaskList() {
  const { list, toggleTodo } = useTaskList(({ list, toggleTodo }) => ({ list, toggleTodo }))
  const tasks = Object.values(list).reduce((result, task) => {
    if (task.completed) {
      return { ...result, completed: [...result.completed, task]}
    } 
    return { ...result, pending: [...result.pending, task]}
  }, {
    completed: [],
    pending: [],
  } as Record<'completed' | 'pending', Task[]>)

  const sortedPending = useMemo(() => tasks.pending.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()), [tasks.pending])
  const sortedCompleted = useMemo(() => tasks.completed.sort((a, b) => b.completedAt?.getTime()||0 - (a.completedAt?.getTime()||0)), [tasks.completed])

  return (
    <Container>
      {sortedPending.map((task) => (
        <Todo
          key={task.id}
          onClick={() => toggleTodo(task.id)}
          value={task}
        />
      ))}
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