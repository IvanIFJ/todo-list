import { Plus } from 'lucide-react'
import { useCallback, useState } from 'react'
import { Typography } from '../components/atoms/Typography'
import { Fab } from '../components/molecules/Fab'
import { Modal } from '../components/molecules/Modal'
import { CreateTodo } from '../components/organism/CreateTodo'
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
  const [modalOpened, setModalOpened] = useState(false)
  const closeModal = useCallback(() => setModalOpened(false), [])
  const openModal = useCallback(() => setModalOpened(true), [])

  return (
    <BaseLayout>
      <Typography as="h2" $variant='heading'>What's up, {user.name}!</Typography>
      <br />
      <TaskCounter />
      <TaskList onCreateTodo={openModal} />
      <Modal opened={modalOpened} onClose={closeModal}>
        <CreateTodo onCreate={closeModal} />
      </Modal>
      <Fab icon={Plus} onClick={openModal} />
    </BaseLayout>
  )
}