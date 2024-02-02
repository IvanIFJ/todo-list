import { PlusCircle } from 'lucide-react'
import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'
import { useEffect, useRef, useState } from 'react'
import { taskListSelector, useTaskList } from '../../state'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`

type CreateTodoProps = {
  onCreate?: (name: string) => void
}

export function CreateTodo({ onCreate }:CreateTodoProps) {
  const [name, setName] = useState('')
  const { createTodo } = useTaskList(taskListSelector.actions)
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    ref.current?.focus()
  }, [])

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setName(target.value)

  const handeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    createTodo(name)
    onCreate && onCreate(name)
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
        <Button type="submit" $disabled={!name}>Create task <PlusCircle size={20} /> </Button>
      </div>
    </Form>
  )
}