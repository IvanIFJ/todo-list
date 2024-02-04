import { act, renderHook } from "@testing-library/react"
import { describe, expect, it } from 'vitest'
import { useSideMenu } from '.'

describe("SideMenuStore", () => {
  it("should initialize closed", () => {
    const { result } = renderHook(() => useSideMenu())
    expect(result.current.opened).toBeFalsy()
  });

  it("should be able to open and close the menu", () => {
    const {result} = renderHook(() => useSideMenu());
    const { open, close } = result.current
    act(() => open())
    expect(result.current.opened).toBeTruthy()
    act(() => close())
    expect(result.current.opened).toBeFalsy()
  })
})
