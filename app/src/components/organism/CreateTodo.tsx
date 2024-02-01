import { PlusCircle } from 'lucide-react'
import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'
import { useEffect, useRef, useState } from 'react'
import { useTaskList } from '../../state'

type CreateTodoProps = {
  onCreate?: (name: string) => void
}

export function CreateTodo({ onCreate }:CreateTodoProps) {
  const [name, setName] = useState('')
  const { createTodo } = useTaskList(({ createTodo }) => ({ createTodo }))
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
    <form onSubmit={handeSubmit}>
      <Input
        type='text'
        ref={ref}
        placeholder="Type your task hereaa"
        value={name}
        onChange={handleChange}
        required
      />
      <Button type="submit">Create task <PlusCircle size={20} /> </Button>
    </form>
  )
}