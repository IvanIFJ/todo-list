import { createStore } from './createStore'

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

const storeName = '@User'

export const useUser = createStore<UserStore>((set) => ({
  ...INITIAL_STATE,
  setUser: (value) => {
    set(() => ({ name: value }), false, { type: `${storeName}/setUser` })
  }
}), { name: storeName })
