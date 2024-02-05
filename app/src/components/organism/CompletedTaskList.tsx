import styled from 'styled-components'
import { taskListSelector, useTaskList } from '../../state'
import { Typography } from '../atoms/Typography'
import { Task } from '../molecules/Task'

import { memo } from 'react'
import { useShallow } from 'zustand/react/shallow'

const StyledTypography = styled(Typography)`
  margin: ${({ theme }) => `${theme.spacing(0.5)} 0`};
`

export const CompledTaskList = memo(function CompledTaskList() {
  const { tasks } = useTaskList(useShallow(taskListSelector.completedTasks))
  const { clearCompleted, toggleTask } = useTaskList(taskListSelector.actions)

  if(tasks.length === 0) return null

  return (
    <>
      <StyledTypography
        as="button"
        $variant='caption2'
        $color='subtle'
        aria-label='Clear completed tasks'
        onClick={clearCompleted}
      >
          Clear completed tasks ({tasks.length})
      </StyledTypography>
      {tasks.map((task) => (
        <Task
          key={task.id}
          value={task}
          onClick={() => toggleTask(task.id)}
        />
      ))}
    </>
  )
})
