import { Plus } from 'lucide-react'
import { Typography } from '../components/atoms/Typography'
import { Fab } from '../components/molecules/Fab'
import { TaskList } from '../components/organism/TaskList'
import { BaseLayout } from '../components/templates/BaseLayout'
import { Modal } from '../components/molecules/Modal'
import { useState } from 'react'
import { CreateTodo } from '../components/organism/CreateTodo'

const user = {
  name: 'John Doe'
}

export function Home() {
  const [modalOpened, setModalOpened] = useState(false)

  return (
    <BaseLayout>
      <Typography as="h2" $variant='heading'>What's up, {user.name}!</Typography>
      <br />
      <Typography $variant='caption2' $color='subtle'>All tasks</Typography>
      <TaskList />

      <Modal opened={modalOpened} onClose={() => setModalOpened(false)}>
        <CreateTodo />
      </Modal>
      <Fab icon={Plus} onClick={() => setModalOpened(true)} />
    </BaseLayout>
  )
}