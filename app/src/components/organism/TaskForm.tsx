import { PlusCircle, Save } from 'lucide-react'
import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'
import { useEffect, useRef, useState } from 'react'
import { taskListSelector, useTaskList } from '../../state'
import styled from 'styled-components'
import { useModal } from '../molecules/Modal'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`

export function TaskForm() {
  const { payload, close } = useModal()
  const [name, setName] = useState(payload?.name || '')
  const { createTask, editTask } = useTaskList(taskListSelector.actions)
  const ref = useRef<HTMLInputElement>(null)
  const label = payload ? 'Save' : 'Create task'
  const Icon = payload ? Save : PlusCircle

  useEffect(() => {
    ref.current?.focus()
  }, [])

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setName(target.value)

  const handeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    payload ? editTask(payload.id, name) : createTask(name)
    close()
  }

  return (
    <Form onSubmit={handeSubmit}>
      <Input
        type='text'
        ref={ref}
        placeholder="Type your task here"
        value={name}
        onChange={handleChange}
        required
      />
      <div>
        <Button type="submit" $disabled={!name}>{label} <Icon size={20} /> </Button>
      </div>
    </Form>
  )
}