import { taskListSelector, useTaskList } from '../../state'
import { Typography } from '../atoms/Typography'
import { Todo } from '../molecules/Todo'

import { memo } from 'react'
import { useShallow } from 'zustand/react/shallow'

export const CompledTaskList = memo(function CompledTaskList() {
  const { tasks } = useTaskList(useShallow(taskListSelector.completedTasks))
  const { clearCompleted, toggleTodo } = useTaskList(taskListSelector.actions)

  if(tasks.length === 0) return null

  return (
    <>
      <Typography
        as="button"
        $variant='caption2'
        $color='subtle'
        onClick={clearCompleted}
      >
          Clear completed tasks ({tasks.length})
      </Typography>
      {tasks.map((task) => (
        <Todo
          key={task.id}
          value={task}
          onClick={() => toggleTodo(task.id)}
        />
      ))}
    </>
  )
})
