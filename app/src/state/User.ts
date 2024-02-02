import { create } from 'zustand'

type State = {
  name: string
}

type Actions = {
  setUser: (value: string) => void
}

const INITIAL_STATE: State = {
  name: '',
}

type UserStore = State & Actions

export const useUser = create<UserStore>((set) => ({
  ...INITIAL_STATE,
  setUser: (value) => {
    set(() => ({ name: value }))
  }
}))
