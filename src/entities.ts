export type TaskEntity = {
  id: string
  name: string
  completed: boolean
  createdAt: Timestamp
  completedAt?: Timestamp
}
