import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useCompletedTasks, usePendingTasks, useTaskListActions } from '.'

describe('TaskListStore', () => {
  const createTasks = (tasks: string[], taskCreator: (name: string) => void) => {
    tasks.forEach(task => { act(() => taskCreator(task)) })
  }

  it('should initialize with no tasks', () => {
    const { result: pending } = renderHook(() => usePendingTasks())
    const { result: completed } = renderHook(() => useCompletedTasks())

    expect(pending.current).toEqual([])
    expect(completed.current).toEqual([])
  })

  it('should be able to add new tasks on the list', () => {
    const { result: { current: actions } } = renderHook(() => useTaskListActions())
    const tasks = ['Task 1', 'Task 2', 'Task 3']
    
    createTasks(tasks, actions.createTask)

    const { result: { current: pendingTasks } } = renderHook(() => usePendingTasks())
    const { result: { current: completedTasks } } = renderHook(() => useCompletedTasks())

    expect(pendingTasks.every(({ name }) => tasks.includes(name))).toBeTruthy()
    expect(completedTasks).toEqual([])
  })

  it('should be able to toggle a task', () => {
    const { result: { current: actions } } = renderHook(() => useTaskListActions())
    const rawTasks = ['Task 1', 'Task 2', 'Task 3']
    
    createTasks(rawTasks, actions.createTask)

    const { result: { current: pendingTasks } } = renderHook(() => usePendingTasks())
    const [task1, task2] = pendingTasks
    
    act(() => actions.toggleTask(task1.id))
    act(() => actions.toggleTask(task2.id))
    
    const { result: { current: completedTasks } } = renderHook(() => useCompletedTasks())
    
    expect(completedTasks.map(({ name }) => name)).toEqual([task2.name, task1.name])
  })

  it('should be able to clear all tasks', () => {
    const { result: { current: actions } } = renderHook(() => useTaskListActions())
    
    const tasks = ['Task 1', 'Task 2', 'Task 3']

    createTasks(tasks, actions.createTask)
    act(() => actions.clearTasks())
    
    const { result: { current: pendingTasks } } = renderHook(() => usePendingTasks())
    const { result: { current: completedTasks } } = renderHook(() => useCompletedTasks())

    act(() => actions.clearTasks())
    expect(completedTasks).toEqual([])
    expect(pendingTasks).toEqual([])
  })

  it('should be able to clear completed tasks', () => {
    const { result: { current: actions } } = renderHook(() => useTaskListActions())
    const tasks = ['Task 1', 'Task 2', 'Task 3']
    
    createTasks(tasks, actions.createTask)
    const { result: { current: pendingTasks } } = renderHook(() => usePendingTasks())
    const [task1, task2] = pendingTasks

    act(() => actions.toggleTask(task1.id))
    act(() => actions.toggleTask(task2.id))

    const { result: { current: completedTasks } } = renderHook(() => useCompletedTasks())

    expect(completedTasks).toHaveLength(2)
    act(() => actions.clearCompleted())

    const { result: { current: completedClear } } = renderHook(() => useCompletedTasks())

    expect(completedClear).toEqual([])
  })

  it('should be able to edit a task', () => {
    const { result: { current: actions } } = renderHook(() => useTaskListActions())

    createTasks(['My task'], actions.createTask)
    const { result: { current: pendingTasks } } = renderHook(() => usePendingTasks())
    
    act(() => actions.editTask(pendingTasks[0].id, 'My edited task'))
    const { result: { current: pendingEdited } } = renderHook(() => usePendingTasks())

    expect(pendingEdited[0].name).toBe('My edited task')
  })
})
