import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import { stores } from './src/state/createStore';

afterEach(() => {
  cleanup()
  stores.forEach(resetFn => resetFn());
})
