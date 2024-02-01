import { PlusCircle } from 'lucide-react'
import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'
import { useEffect, useRef } from 'react'

export function CreateTodo() {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    ref.current?.focus()
  }, [])

  return (
    <form>
      <Input ref={ref} placeholder="Type your task here" />
      <Button type='button'>Create task <PlusCircle size={20} /> </Button>
    </form>
  )
}