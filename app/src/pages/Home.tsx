import { Plus } from 'lucide-react'
import { useState } from 'react'
import { Typography } from '../components/atoms/Typography'
import { Fab } from '../components/molecules/Fab'
import { Modal } from '../components/molecules/Modal'
import { CreateTodo } from '../components/organism/CreateTodo'
import { TaskList } from '../components/organism/TaskList'
import { BaseLayout } from '../components/templates/BaseLayout'

const user = {
  name: 'John Doe'
}

export function Home() {
  const [modalOpened, setModalOpened] = useState(false)

  const closeModal = () => setModalOpened(false)

  return (
    <BaseLayout>
      <Typography as="h2" $variant='heading'>What's up, {user.name}!</Typography>
      <br />
      <Typography $variant='caption2' $color='subtle'>All tasks</Typography>
      <TaskList />

      <Modal opened={modalOpened} onClose={closeModal}>
        <CreateTodo onCreate={closeModal} />
      </Modal>
      <Fab icon={Plus} onClick={() => setModalOpened(true)} />
    </BaseLayout>
  )
}