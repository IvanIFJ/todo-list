import { act, renderHook } from "@testing-library/react-hooks"
import { describe, expect, it } from 'vitest'
import { useScreen } from '.'

describe("ScreenStore", () => {
  it("should initialize on the auth screen", () => {
    const { result } = renderHook(() => useScreen());
    expect(result.current.current).toEqual('auth');
  });

  it("should be possible navigate", () => {
    const {result} = renderHook(() => useScreen());

    const homeScreen = 'taskList';
    act(() => result.current.navigate(homeScreen));
    expect(result.current.current).toEqual(homeScreen);
  });
});
