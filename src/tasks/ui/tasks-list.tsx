import { Task } from '../model/use-tasks'
import { ReactNode } from 'react'

export function TasksList({ tasks, renderTask }: { tasks: Task[]; renderTask: (task: Task) => ReactNode }) {
  return <div>{tasks.map(task => renderTask(task))}</div>
}

//<TaskItem
//   key={task.id}
//   done={task.done}
//   title={task.title}
//   ownerId={task.ownerId}
//   onToggleDone={() => toggleCheckTask(task.id)}
//   onDelete={() => removeTask(task.id)}
//   onChangeOwner={ownerId => updateOwner(task.id, ownerId)}
// />
