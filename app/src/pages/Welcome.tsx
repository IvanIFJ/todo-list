import { Typography } from '../components/atoms/Typography'
import { UserForm } from '../components/organism/UserForm'
import { AuthLayout } from '../components/templates/AuthLayout'

export function Welcome() {
  return (
    <AuthLayout>
      <Typography as="h1" $variant='subheading' $color='subtle'>Atomic To-Do List</Typography>

      <Typography as="h2" $variant='heading'>
        You're welcome!
      </Typography>

      <UserForm />
    </AuthLayout>
  )
}