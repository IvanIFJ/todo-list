import { act, renderHook } from "@testing-library/react"
import { describe, expect, it } from 'vitest'
import { useUser } from '.'

describe("UserStore", () => {
  it("should initialize with no user informed", () => {
    const { result } = renderHook(() => useUser());
    expect(result.current.name).toEqual('');
  });

  it("should be possible to change the user", () => {
    const {result} = renderHook(() => useUser());

    const userNameA = 'John Doe';
    act(() => result.current.setUser(userNameA));
    expect(result.current.name).toEqual(userNameA);

    const userNameB = 'Marie Doe';
    act(() => result.current.setUser(userNameB));
    expect(result.current.name).toEqual(userNameB);
  });
});
