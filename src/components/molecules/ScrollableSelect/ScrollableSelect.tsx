import { useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'

const css = {
  width: 20,
  height: 6,
}

const Wrapper = styled.div`
  ${({ theme }) => `
  margin: ${theme.spacing(2)} 0;
  overflow: hidden;
  height: ${theme.spacing(css.height)};
  width: ${theme.spacing(css.width-2)};
  border: 1px solid ${theme.color.boder};
  user-select: none;
  box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,0.3);
  `}
`

const List = styled.div`
  ${({ theme }) => `
  overflow-x: hidden;
  overflow-y: scroll;
  height: ${theme.spacing(css.height)};
  width: ${theme.spacing(css.width)};
  border: 1px solid ${theme.color.boder};
  `}
`

const Item = styled.div<{ $disabled?: boolean }>`
  ${({ theme, $disabled }) => `
  height: ${theme.spacing(css.height)};
  background-color: ${$disabled ? theme.color.disabled.base : theme.color.boder};
  display: flex;
  align-items: center;
  justify-content: center;
  `}
`

const SCROLL_DEBOUNCE_DELAY = 120

type Option<T> = {
  label: string
  value: T
}

type ScrollableSelectProps<T> = {
  value: Option<T>
  options: Option<T>[]
  onChange?: (value: T) => void
}

export type ScrollableSelect = <T>(props: ScrollableSelectProps<T>) => React.ReactNode

export const ScrollableSelect: ScrollableSelect = ({ value, options, onChange }) => {
  const listRef = useRef<HTMLDivElement>(null)
  const [timeoutRef, setTimeoutRef] = useState<number | null>(null)
  const list = useMemo(() => new Set([...options, value]), [value, options])

  const scrollSelf = (index: number) => {
    if (listRef.current) {
      listRef.current.scrollTo({ top: index * (css.height * 8), behavior: 'smooth' })
    } 
  }

  useEffect(() => {
    if (value) {
      const index = [...list].indexOf(value)

      if (index !== -1) {
        scrollSelf(index + 1)
      }
    }
  }, [list, value])
  
  const handleScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    if (timeoutRef !== null) clearTimeout(timeoutRef)
    const { scrollTop } = event.currentTarget
    const timeout = setTimeout(() => {
      const closestIndex = Math.round(scrollTop / (css.height * 8))

      scrollSelf(closestIndex)
      onChange && onChange([...list][closestIndex].value)
    }, SCROLL_DEBOUNCE_DELAY)
    
    setTimeoutRef(timeout) 
  }
  
  return (
    <Wrapper>
      <List ref={listRef} onScroll={handleScroll} >
        <Item $disabled> - select -</Item>
        {[...list].map((option, i) => <Item key={i}>{option.label}</Item>)}
      </List>
    </Wrapper>)
}
