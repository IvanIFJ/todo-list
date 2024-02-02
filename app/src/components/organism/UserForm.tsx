import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useScreen, useUser } from '../../state'
import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`

export const UserForm = () => {
  const [ name, setName ] = useState('')
  const { setUser } = useUser()
  const { navigate } = useScreen()
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    ref.current?.focus()
  }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setUser(name)
    navigate('taskList')
  }

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setName(target.value)
  }

  return (
  <Form onSubmit={handleSubmit}>
    <Input
      ref={ref}
      value={name}
      onChange={handleChange}
      placeholder='Enter your name here'
    />

    <div>
      <Button $disabled={!name}>
        Start Using the app
      </Button>
    </div>
    </Form>
  )
}
