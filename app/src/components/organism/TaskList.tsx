import styled from 'styled-components'
import { Task } from '../../entities'
import { Todo } from '../molecules/Todo'

const Container = styled.div`
  ${({ theme }) => `
    padding: ${theme.spacing(3)} ${theme.spacing(2)};
  `}
`

const fakeData: Task[] = [
  { id: 'a1', name: 'Create a Checkbox component', completed: false, createdAt: new Date() },
  { id: 'b2', name: 'Deploy application', completed: true, createdAt: new Date() },
  { id: 'c3', name: 'Task 3', completed: false, createdAt: new Date() },
  { id: 'd4', name: 'Each icon can be imported as a React component, which renders an inline SVG element.', completed: false, createdAt: new Date() },
]

export function TaskList() {
  return (
    <Container>
      {fakeData.map((task) => (<Todo key={task.id} value={task}/>))}
    </Container>
  )
}