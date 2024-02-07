import { render, getByText, getByPlaceholderText, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from '../../App'
import { act } from 'react-dom/test-utils'

describe('App', () => {
  it('Welcome', async () => {
    const { container } = render(<App />)
    const inputPlaceholder = 'Enter your name here'
    const userInput = getByPlaceholderText<HTMLInputElement>(container, inputPlaceholder)
    const startButton = getByText<HTMLButtonElement>(container, 'Start using the app')
    const welcomeMessage = /Start getting things done with the simple Atomic To-Do List!/

    // verify welcome message
    expect(getByText(container, 'Atomic To-Do List', { exact: true, selector: 'h1' })).toBeTruthy()
    expect(getByText(container, welcomeMessage)).toBeTruthy()  

    // check focused element
    await waitFor( () => 
      expect(document.activeElement?.getAttribute('placeholder')).toBe(inputPlaceholder),
    )
    
    // check validation
    expect(userInput.getAttribute('value')).toBe('')
    expect(startButton.getAttribute('disabled')).toBeDefined()
    act(() => fireEvent.change(userInput, { target: { value: 'John Doe' } }))
    expect(userInput.getAttribute('value')).toBe('John Doe')
    expect(startButton.getAttribute('disabled')).toBeNull()

    // proceed to the next screen
    act(() => fireEvent.click(startButton))
    expect(getByText(container, /What's up, John Doe!/)).toBeTruthy()
  })
})
