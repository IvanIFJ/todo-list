import { fireEvent, getAllByRole, getByLabelText, getByPlaceholderText, getByRole, getByText, render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { describe, expect, it } from 'vitest'
import { AppProviders } from '../App'
import { Home } from './Home'

describe('App', () => {
  const typeTaskAndSave = (container: HTMLElement, name: string) => {
    const textInput = getByPlaceholderText<HTMLInputElement>(container, 'Type your task here')
    const submitButton = getByText<HTMLButtonElement>(container, /Create task|Save/)

    act(() => fireEvent.change(textInput, { target: { value: name } }))
    act(() => submitButton.click())
  }

  const createTask = (container: HTMLElement, name: string) => {
    const createTaskButton = getByLabelText(container, /Create new task/)

    act(() => fireEvent.click(createTaskButton))

    typeTaskAndSave(container, name)
  }

  const getTask = (container: HTMLElement, name: string) => {
    const task = getByText(container, name).parentElement?.parentElement as HTMLDivElement
    const checkbox = getByRole(task, 'checkbox')

    return { task, checkbox }
  }

  const toggleTask = (container: HTMLElement, name: string) => {
    const { checkbox } = getTask(container, name)

    act(() => fireEvent.click(checkbox))
  }


  it('Home', () => {
    const { container } = render(<Home />, { wrapper: AppProviders })
    const createTaskButton = getByLabelText(container, /Create new task/)

    // check list empty state
    expect(getByText(container, /No tasks/)).toBeTruthy()
    expect(getByText(container, /Start by adding your first task/)).toBeTruthy()
    expect(getByText(container, /Create first task/)).toBeTruthy()
    expect(createTaskButton).toBeTruthy()
    
    // create tasks and check on list
    const list = ['Buy milk', 'Buy eggs', 'Buy bread', 'Buy butter', 'Buy cheese']

    list.forEach((task) => { createTask(container, task) })
    list.forEach((task) => {
      const { checkbox } = getTask(container, task)

      expect(checkbox.getAttribute('aria-checked')).toBe('false')
    })
    
    // toggle first task and check if it's completed
    toggleTask(container, list[0])
    const { checkbox } = getTask(container, list[0])

    expect(checkbox.getAttribute('aria-checked')).toBeTruthy()

    // clear completed tasks
    const clearCompletedButton = getByText(container, /Clear completed/)

    act(() => fireEvent.click(clearCompletedButton))

    const allTaskEl = getAllByRole(container, 'listitem')

    allTaskEl.forEach((task) => {
      const checkbox = getByRole(task, 'checkbox')

      expect(checkbox.getAttribute('aria-checked')).toBe('false')
    })

    // edit task
    const editButon =  getByLabelText(getTask(container, 'Buy bread').task, /Edit/)

    act(() => fireEvent.click(editButon))

    typeTaskAndSave(container, 'Buy multigrain bread')
    expect(getByText(container, /Buy multigrain bread/)).toBeTruthy()
  })
})
