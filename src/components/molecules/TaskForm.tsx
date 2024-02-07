import { PlusCircle, Save } from 'lucide-react'
import { useState } from 'react'
import styled from 'styled-components'
import { useOnKeyDown } from '../../hooks/useOnKeyDown'
import { useAutoFocus } from '../../hooks/useautoFocus'
import { useTaskListActions } from '../../state'
import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'
import { useModal } from '../molecules/Modal'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`

export function TaskForm() {
  const { payload, close } = useModal()
  const [name, setName] = useState(payload?.name || '')
  const { createTask, editTask } = useTaskListActions()
  const label = payload ? 'Save' : 'Create task'
  const Icon = payload ? Save : PlusCircle
  const autoFocusRef = useAutoFocus<HTMLInputElement>()

  useOnKeyDown((event: KeyboardEvent) => { event.key === 'Escape' && close() })

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
        ref={autoFocusRef}
        placeholder="Type your task here"
        value={name}
        onChange={handleChange}
        required
      />
      <div>
        <Button aria-label={label} type="submit" $disabled={!name}>{label} <Icon size={20} /> </Button>
      </div>
    </Form>
  )
}
