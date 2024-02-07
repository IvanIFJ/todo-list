import { useEffect, useRef } from 'react'

type FocusableHTMLElement = HTMLInputElement | HTMLButtonElement | HTMLTextAreaElement
type Options = {
  delay?: number // in milliseconds 
}

const defaultOptions: Required<Options> = {
  delay: 0,
}


export const useAutoFocus = <T extends FocusableHTMLElement>(opts = defaultOptions) => {
  const ref = useRef<T>(null)

  useEffect(() => {
    const focusElement = () => ref.current?.focus()
    const timeout = setTimeout(focusElement, opts.delay)

    return () => clearTimeout(timeout)
  }, [opts.delay, ref])

  return ref
}
