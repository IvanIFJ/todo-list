import { PlusCircle } from 'lucide-react'
import styled from 'styled-components'
import { Button } from '../../atoms/Button'
import { Typography } from '../../atoms/Typography'
import { EmptyIllustration } from './EmptyIllustration'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  align-items: center;
  text-align: center;
`

type EmptyTaskListProps = {
  onClick: () => void
}

export function EmptyTaskList({ onClick }: EmptyTaskListProps) {
  return (
    <Container>
      <EmptyIllustration />
      <Typography $variant='subheading'>Empty List</Typography>
      <Typography $variant='body'>Start by adding your fist task</Typography>
      <Button onClick={onClick} type="submit">Create first task <PlusCircle size={20} /> </Button>
    </Container>
  );
}