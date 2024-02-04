import { Plus } from 'lucide-react'
import { Typography } from '../components/atoms/Typography'
import { Fab } from '../components/molecules/Fab'
import { Modal, useModal } from '../components/molecules/Modal'
import { TaskForm } from '../components/organism/TaskForm'
import { TaskList } from '../components/organism/TaskList'
import { BaseLayout } from '../components/templates/BaseLayout'
import { taskListSelector, useTaskList, useUser } from '../state'

function TaskCounter() {
  const { completed, total } = useTaskList(taskListSelector.meta)
  const emptyList = total === 0 
  const title = emptyList ? 'No tasks' : `All tasks ( ${total - completed} / ${total} )`

  return (<Typography $variant='caption2' $color='subtle'>{title}</Typography>)
}

export function Home() {
  const user = useUser()
  const { open } = useModal()

  return (
    <BaseLayout>
      <Typography as="h2" $variant='heading'>What's up, {user.name}!</Typography>
      <br />
      <TaskCounter />
      <TaskList />
      <Modal><TaskForm /></Modal>
      <Fab icon={Plus} onClick={() => open()} data-testid="Fab: Create Task" />
    </BaseLayout>
  )
}