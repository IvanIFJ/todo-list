import { PlusCircle } from 'lucide-react'
import styled from 'styled-components'
import { Button } from '../../../atoms/Button'
import { Typography } from '../../../atoms/Typography'
import { EmptyIllustration } from './EmptyIllustration'
import { useModal } from '../../../molecules/Modal'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  align-items: center;
  text-align: center;
  overflow: hidden;
  height: 100%;
`

export function EmptyTaskList() {
  const { open } = useModal()

  return (
    <Container>
      <EmptyIllustration />
      <Typography $variant='subheading'>Empty List</Typography>
      <Typography $variant='body'>Start by adding your first task</Typography>
      <Button aria-label='Create first task' onClick={() => open()} type="submit">Create first task <PlusCircle size={20} /> </Button>
    </Container>
  )
}
