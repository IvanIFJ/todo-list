import { TaskEntity } from '../entities'
import { generateId } from '../utils/generateId'
import { createStore } from './createStore'

type State = {
  tasks: TaskEntity[]
}

type Actions = {
  createTask: (name: string) => void
  toggleTask: (id: string) => void
  editTask: (id: string, newValue: string) => void
  clearTasks: () => void
  clearCompleted: () => void
}

const INITIAL_STATE: State = {
  tasks: [],
}

type TaskListStore = State & Actions

const storeName = '@TaskList'

export const useTaskList = createStore<TaskListStore>((set) => ({
  ...INITIAL_STATE,
  createTask: (name) => {
    set((state) => {
      const task = {
        id: generateId(),
        name,
        completed: false,
        createdAt: new Date().getTime()
      }

      return { tasks: [...state.tasks, task ] }
    }, false, { type: `${storeName}/createTask` })
  },
  toggleTask: (id) => {
    set((state) => {
      return { tasks: state.tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed
          task.completedAt = task.completed ? new Date().getTime() : undefined
        }
        return task
      })}
    }, false, { type: `${storeName}/toggleTask` })
  },
  editTask: (id, newValue) => {
    set((state) => {
      return { tasks: state.tasks.map((task) => {
        if (task.id === id) {
          task.name = newValue
        }
        return task
      })}
    }, false, { type: `${storeName}/editTask` })
  },
  clearTasks: () => {
    set(() => INITIAL_STATE, false, { type: `${storeName}/clearTask` })
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
  actions: ({ clearCompleted, clearTasks, createTask, toggleTask, editTask }: TaskListStore) =>
    ({ clearCompleted, clearTasks, createTask, toggleTask, editTask })
}
