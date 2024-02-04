import styled from 'styled-components'
import { shallow } from 'zustand/shallow'
import { useStoreWithEqualityFn } from 'zustand/traditional'
import { taskListSelector, useTaskList } from '../../state'
import { Todo } from '../molecules/Todo'
import { CompledTaskList } from './CompletedTaskList'
import { EmptyTaskList } from './EmptyTaskList'

const Container = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  justify-content: center;
  min-height: 37vh;
  height: 100%;

  ${({ theme }) => `
    margin: ${theme.spacing(1)} 0;
  `}
`

function List() {
  const { tasks } = useStoreWithEqualityFn(useTaskList, taskListSelector.pendingTasks, shallow)
  const { toggleTodo } = useTaskList(taskListSelector.actions)
 
  return (<>
    {tasks.map((task) => (
      <Todo
        key={task.id}
        onClick={() => toggleTodo(task.id)}
        value={task}
      />
    ))}
  </>)
}

export function TaskList() {
  const { total } = useTaskList(taskListSelector.meta)

  if (total === 0) return <Container><EmptyTaskList /></Container>

  return (
    <Container style={{justifyContent: 'flex-start'}}>
      <List />
      <CompledTaskList />
    </Container>
  )
}