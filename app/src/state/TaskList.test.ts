import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useTaskList } from '.'

describe('TaskListStore', () => {
  const createTasks = (tasks: string[], taskCreator: (name: string) => void) => {
    tasks.forEach(task => { act(() => taskCreator(task)) })
  }

  it('should initialize with no tasks', () => {
    const { result } = renderHook(() => useTaskList())

    expect(result.current.tasks).toEqual([])
  })

  it('should be able to add new tasks on the list', () => {
    const { result } = renderHook(() => useTaskList())
    const tasks = ['Task 1', 'Task 2', 'Task 3']
    
    createTasks(tasks, result.current.createTask)
    const createdTasks = result.current.tasks

    expect(createdTasks.map(({ name }) => name)).toEqual(tasks)
    expect(createdTasks.map(({ completed }) => completed)).toEqual([false, false, false])
  })

  it('should be able to toggle a task', () => {
    const { result } = renderHook(() => useTaskList())
    const tasks = ['Task 1', 'Task 2', 'Task 3']
    
    createTasks(tasks, result.current.createTask)
    const [task1, task2] = result.current.tasks

    act(() => result.current.toggleTask(task1.id))
    act(() => result.current.toggleTask(task2.id))
    
    expect(result.current.tasks.map(({ completed }) => completed)).toEqual([true, true, false])
    
    act(() => result.current.toggleTask(task1.id))
    expect(result.current.tasks.map(({ completed }) => completed)).toEqual([false, true, false])
  })

  it('should be able to clear all tasks', () => {
    const { result } = renderHook(() => useTaskList())
    const tasks = ['Task 1', 'Task 2', 'Task 3']
    
    createTasks(tasks, result.current.createTask)
    expect(result.current.tasks).toHaveLength(3)
    act(() => result.current.clearTasks())
    expect(result.current.tasks).toEqual([])
  })

  it('should be able to clear completed tasks', () => {
    const { result } = renderHook(() => useTaskList())
    const tasks = ['Task 1', 'Task 2', 'Task 3']
    
    createTasks(tasks, result.current.createTask)
    const [task1, task2] = result.current.tasks

    act(() => result.current.toggleTask(task1.id))
    act(() => result.current.toggleTask(task2.id))
    expect(result.current.tasks).toHaveLength(3)
    act(() => result.current.clearCompleted())
    expect(result.current.tasks).toHaveLength(1)
    expect(result.current.tasks[0].name).toBe('Task 3')
  })

  it('should be able to edit a task', () => {
    const { result } = renderHook(() => useTaskList())
    const tasks = ['Task 1', 'Task 2', 'Task 3']
    
    createTasks(tasks, result.current.createTask)
    const [task1] = result.current.tasks

    act(() => result.current.editTask(task1.id, 'Task 1 edited'))
    expect(result.current.tasks[0].name).toBe('Task 1 edited')
  })
})
