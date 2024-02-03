import { createStore } from './createStore'

// This is a simple state that keeps track of the current screen name without a navigation library.

type AppScreen = 'auth' | 'taskList'

type ScreenState = {
  current: AppScreen
}

type ScreenActions = {
  navigate: (screen: AppScreen) => void
}

const INITIAL_STATE: ScreenState = {
  current: 'auth'
}

type TaskListStore = ScreenState & ScreenActions

const storeName = '@Screen'

export const useScreen = createStore<TaskListStore>((set) => ({
  ...INITIAL_STATE,
  navigate: (screen) => {
    set(() => ({ current: screen}), false, { type: `${storeName}/navigate` })
  }
}), { name: storeName })
