import { PlusCircle } from 'lucide-react'
import { Button } from './components/atoms/Button'
import { Checkbox } from './components/atoms/Checkbox'
import { Input } from './components/atoms/Input'
import { Typography } from './components/atoms/Typography'
import { Fab } from './components/molecules/Fab'
import { Todo } from './components/molecules/Todo'
import type { Task } from './entities'
import { ThemeProvider } from './styles/Theme'


const fakeTaskList = [
  { name: 'Create a Checkbox component', completed: false, createdAt: new Date() },
  { name: 'Deploy application', completed: true, createdAt: new Date() },
  { name: 'Task 3', completed: false, createdAt: new Date() },
  { name: 'Each icon can be imported as a React component, which renders an inline SVG element.', completed: false, createdAt: new Date() },
] as Task[]

export function App() {
  return (
    <ThemeProvider>
      {fakeTaskList.map((task, index) => (<Todo key={index} value={task}/>))}
      <Fab icon={PlusCircle} />
      <Checkbox />
      <Checkbox $checked/>
      <Input placeholder='Enter new task' autoFocus/>
      <Button>Add new task</Button>
      <Button $disabled>Add new task</Button>
      <Typography as="h1" $variant='heading'>Hello, todo-list!</Typography>
      <Typography $variant='subheading'>Hello, todo-list!</Typography>
      <Typography $variant='body'>Hello, todo-list!</Typography>
      <Typography $variant='caption'>Hello, todo-list!</Typography>
      <Typography $variant='caption2'>Hello, todo-list!</Typography>
    </ThemeProvider>
  )
}