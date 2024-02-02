import { Typography } from '../../components/atoms/Typography'
import { UserForm } from '../../components/organism/UserForm'
import { AuthLayout } from '../../components/templates/AuthLayout'
import { WelcomeIllustration } from './WelcomeIlustration'

export function Welcome() {
  return (
    <AuthLayout>
      <Typography as="h1" $variant='heading' $color='subtle'>Atomic To-Do List</Typography>

      <WelcomeIllustration />

      <Typography as="h2" $variant='subheading' style={{ padding: '0 32px' }}>
        Start getting things done with the simple Atomic To-Do List!
      </Typography>

      <UserForm />
    </AuthLayout>
  )
}