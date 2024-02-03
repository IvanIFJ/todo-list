import { Task } from '../entities'
import { generateId } from '../utils/generateId'
import { create } from 'zustand'

type State = {
  tasks: Task[]
}

type Actions = {
  createTodo: (name: string) => void
  toggleTodo: (id: string) => void
  clearTodos: () => void
  clearCompleted: () => void
}

const INITIAL_STATE: State = {
  tasks: [],
}

type TaskListStore = State & Actions

export const useTaskList = create<TaskListStore>((set) => ({
  ...INITIAL_STATE,
  createTodo: (name) => {
    set((state) => {
      const todo = {
        id: generateId(),
        name,
        completed: false,
        createdAt: new Date().getTime()
      }

      return { tasks: [...state.tasks, todo ] }
    })
  },
  toggleTodo: (id) => {
    set((state) => {
      return { tasks: state.tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed
          task.completedAt = task.completed ? new Date().getTime() : undefined
        }
        return task
      })}
    })
  },
  clearTodos: () => {
    set(() => INITIAL_STATE)
  },
  clearCompleted: () => {
    set(({ tasks }) => ({ tasks: tasks.filter((task) => !task.completed) }))
  }
}))

const createTaskSelector = (kind: 'completed' | 'pending') => (state: TaskListStore) => ({
  tasks: {
    'completed': state.tasks.
      filter(({ completed }) =>  completed).
      sort((a, b) => (b.completedAt || 0) - (a.completedAt || 0)),
    'pending': state.tasks.
      filter(({ completed }) =>  !completed).
      sort((a, b) => b.createdAt - a.createdAt)
  }[kind],
})

export const taskListSelector = {
  completedTasks: createTaskSelector('completed'),
  pendingTasks: createTaskSelector('pending'),
  meta: ({ tasks }: TaskListStore) => ({
    total: tasks.length,
    completed: tasks.filter(({ completed }) => completed).length
  }),
  actions: ({ clearCompleted, clearTodos, createTodo, toggleTodo }: TaskListStore) =>
    ({ clearCompleted, clearTodos, createTodo, toggleTodo })
}
