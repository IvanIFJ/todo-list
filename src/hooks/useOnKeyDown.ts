import { useEffect } from 'react'

export const useOnKeyDown = (callback: (event: KeyboardEvent) => void) => {
  useEffect(() => {
    document.addEventListener('keydown', callback)

    return () => document.removeEventListener('keydown', callback)
  }, [callback])
}
