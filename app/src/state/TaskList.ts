import { create } from 'zustand'
import { Task } from '../entities'
import { generateId } from '../utils/generateId'

type State = {
  list: Record<string, Task>
  meta: {
    total: number
    completed: number
  }
}

type Actions = {
  createTodo: (name: string) => void
  toggleTodo: (id: string) => void
  clearTodos: () => void
}

const INITIAL_STATE: State = {
  list: {},
  meta: {
    total: 0,
    completed: 0
  }
}

type TaskListStore = State & Actions

export const useTaskList = create<TaskListStore>((set) => ({
  ...INITIAL_STATE,
  createTodo: (name) => {
    set((state) => {
      const createdAt = new Date()
      const id = generateId()
      const meta = {
        total: state.meta.total + 1,
        completed: state.meta.completed
      }
      const todo = { id, name, completed: false, createdAt }
      state.meta.total++

      return { list: {...state.list, [id]: todo }, meta }
    })
  },
  toggleTodo: (id) => {
    set((state) => {
      const task = state.list[id]
      const newValue = !task.completed
      const completedCount = newValue ? state.meta.completed + 1 : state.meta.completed - 1
      const completedAt = newValue ? new Date() : undefined
      return {
        list: { 
          ...state.list,
          [id]: { ...task, completed: newValue, completedAt }
        },
        meta: {
          ...state.meta,
          completed: completedCount
        }}
    })
  },
  clearTodos: () => {
    set(() => INITIAL_STATE)
  }
}))
