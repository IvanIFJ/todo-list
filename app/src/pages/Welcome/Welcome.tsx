import styled from 'styled-components'
import { Typography } from '../../components/atoms/Typography'
import { UserForm } from '../../components/organism/UserForm'
import { AuthLayout } from '../../components/templates/AuthLayout'
import { WelcomeIllustration } from './WelcomeIlustration'

const StyledTypography = styled(Typography)`
  max-width: ${({ theme }) => theme.spacing(39)};
`
const Content = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(3)};
`

export function Welcome() {
  return (
    <AuthLayout>
      <Typography as="h1" $variant='heading' $color='subtle'>Atomic To-Do List</Typography>

      <Content>
        <WelcomeIllustration />
        <StyledTypography as="h2" $variant='subheading'>
          Start getting things done with the simple Atomic To-Do List!
        </StyledTypography>
        <UserForm />
      </Content>
    </AuthLayout>
  )
}