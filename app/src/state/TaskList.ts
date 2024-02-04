import { Task } from '../entities'
import { generateId } from '../utils/generateId'
import { createStore } from './createStore'

type State = {
  tasks: Task[]
}

type Actions = {
  createTodo: (name: string) => void
  toggleTodo: (id: string) => void
  editTodo: (id: string, newValue: string) => void
  clearTodos: () => void
  clearCompleted: () => void
}

const INITIAL_STATE: State = {
  tasks: [],
}

type TaskListStore = State & Actions

const storeName = '@TaskList'

export const useTaskList = createStore<TaskListStore>((set) => ({
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
    }, false, { type: `${storeName}/createTodo` })
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
    }, false, { type: `${storeName}/toggleTodo` })
  },
  editTodo: (id, newValue) => {
    set((state) => {
      return { tasks: state.tasks.map((task) => {
        if (task.id === id) {
          task.name = newValue
        }
        return task
      })}
    }, false, { type: `${storeName}/editTodo` })
  },
  clearTodos: () => {
    set(() => INITIAL_STATE, false, { type: `${storeName}/clearTodos` })
  },
  clearCompleted: () => {
    set(({ tasks }) => ({
      tasks: tasks.filter((task) => !task.completed)
    }), false, { type: `${storeName}/clearCompleted` })
  }
}), { name: storeName })

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
  actions: ({ clearCompleted, clearTodos, createTodo, toggleTodo, editTodo }: TaskListStore) =>
    ({ clearCompleted, clearTodos, createTodo, toggleTodo, editTodo })
}
