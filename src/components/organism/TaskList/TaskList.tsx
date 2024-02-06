import styled from 'styled-components'
import { usePendingTasks, useTaskListMeta } from '../../../state'
import { Task } from '../../molecules/Task'
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
  const tasks = usePendingTasks()
 
  return (<>
    {tasks.map((task) => (
      <Task
        key={task.id}
        value={task}
      />
    ))}
  </>)
}

export function TaskList() {
  const { total } = useTaskListMeta()

  if (total === 0) return <Container><EmptyTaskList /></Container>

  return (
    <Container style={{ justifyContent: 'flex-start' }}>
      <List />
      <CompledTaskList />
    </Container>
  )
}
