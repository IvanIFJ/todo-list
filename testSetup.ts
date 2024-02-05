import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import { stores } from './src/state/createStore'

afterEach(() => {
  cleanup()
  stores.forEach(({ resetFn }) => { resetFn() })
})

// mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  })
})
