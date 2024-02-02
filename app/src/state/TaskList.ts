import { create } from 'zustand'
import { Task } from '../entities'
import { generateId } from '../utils/generateId'

type State = {
  tasks: Record<string, Task>
  meta: {
    total: number
    completed: number
  }
}

type Actions = {
  createTodo: (name: string) => void
  toggleTodo: (id: string) => void
  clearTodos: () => void
  clearCompleted: () => void
}

const INITIAL_STATE: State = {
  tasks: {},
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

      return { tasks: {...state.tasks, [id]: todo }, meta }
    })
  },
  toggleTodo: (id) => {
    set((state) => {
      const task = state.tasks[id]
      const newValue = !task.completed
      const completedCount = newValue ? state.meta.completed + 1 : state.meta.completed - 1
      const completedAt = newValue ? new Date() : undefined
      return {
        tasks: { 
          ...state.tasks,
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
  },
  clearCompleted: () => {
    set(({ tasks }) => {
      const newList = {} as State['tasks']
      let total = 0
      for (const id in tasks) {
        if (!tasks[id].completed) {
          newList[id] = tasks[id]
          total++
        }
      }
      
      return ({ tasks: newList, meta: { total, completed: 0 } })
    })
  }
}))
