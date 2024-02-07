import { useTasks } from './tasks/model/use-tasks'
import { CreateTaskForm } from './tasks/ui/create-task-from'
import { TaskItem } from './tasks/ui/task-item'
import { TasksList } from './tasks/ui/tasks-list'
import storage from './lib/storage'
import { UserSelect } from './user/ui/user-select'

export function App() {
  const { tasks, removeTask, addTask, toggleCheckTask, updateOwner } = useTasks(storage)
  return (
    <>
      <CreateTaskForm onCreate={addTask} />
      <TasksList
        tasks={tasks}
        renderTask={task => (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            done={task.done}
            onDelete={removeTask}
            onToggleDone={toggleCheckTask}
            userSelect={<UserSelect userId={task.ownerId} taskId={task.id} onChangeUserId={updateOwner} />}
          />
        )}
      />
    </>
  )
}
