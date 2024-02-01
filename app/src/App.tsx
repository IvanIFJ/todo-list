import { PlusCircle } from 'lucide-react'
import { Button } from './components/atoms/Button'
import { Checkbox } from './components/atoms/Checkbox'
import { Input } from './components/atoms/Input'
import { Typography } from './components/atoms/Typography'
import { Fab } from './components/molecules/Fab'
import { TaskList } from './components/organism/TaskList'
import { ThemeProvider } from './styles/Theme'




export function App() {
  return (
    <ThemeProvider>
      <TaskList />
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