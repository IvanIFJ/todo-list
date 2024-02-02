import { Plus } from 'lucide-react'
import { useState } from 'react'
import { Typography } from '../components/atoms/Typography'
import { Fab } from '../components/molecules/Fab'
import { Modal } from '../components/molecules/Modal'
import { CreateTodo } from '../components/organism/CreateTodo'
import { TaskList } from '../components/organism/TaskList'
import { BaseLayout } from '../components/templates/BaseLayout'
import { useTaskList, useUser } from '../state'
import { EmptyTaskList } from '../components/organism/EmptyTaskList'

export function Home() {
  const user = useUser()
  const [modalOpened, setModalOpened] = useState(false)
  const { completed, total } = useTaskList(({ meta }) => meta)
  const emptyList = total === 0
  const title = emptyList ? 'No tasks' : `All tasks ( ${total - completed} / ${total} )`

  const closeModal = () => setModalOpened(false)
  const openModal = () => setModalOpened(true)

  return (
    <BaseLayout>
      <Typography as="h2" $variant='heading'>What's up, {user.name}!</Typography>
      <br />
      <Typography $variant='caption2' $color='subtle'>{title}</Typography>
      {emptyList ? <EmptyTaskList onClick={openModal} /> : <TaskList />}

      <Modal opened={modalOpened} onClose={closeModal}>
        <CreateTodo onCreate={closeModal} />
      </Modal>
      <Fab icon={Plus} onClick={openModal} />
    </BaseLayout>
  )
}