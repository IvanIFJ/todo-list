import { Typography } from '../components/atoms/Typography'
import { TaskList } from '../components/organism/TaskList'
import { BaseLayout } from '../components/templates/BaseLayout'

const user = {
  name: 'John Doe'
}

export function Home() {
  return (
    <BaseLayout>
      <Typography as="h2" $variant='heading'>What's up, {user.name}!</Typography>
      <br />
      <Typography $variant='caption2' $color='subtle'>All tasks</Typography>
      <TaskList />
    </BaseLayout>
  )
}