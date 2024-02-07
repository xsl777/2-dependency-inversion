import { ReactNode } from 'react'
// import { UserSelect } from '../../user/ui/user-select'

export const TaskItem = ({
  id,
  title,
  done,
  onToggleDone,
  onDelete,
  userSelect,
}: {
  id: string
  title: string
  done: boolean
  onToggleDone: (id: string) => void
  onDelete: (id: string) => void
  userSelect: ReactNode
}) => {
  return (
    <div style={{ display: 'flex', gap: '10px', padding: '10px' }}>
      <label>
        <input type='checkbox' checked={done} onChange={() => onToggleDone(id)} />
        done
      </label>
      <button onClick={() => onDelete(id)}>Delete task</button>
      {/* <UserSelect userId={ownerId} onChangeUserId={onChangeOwner} /> */}
      {userSelect}
      <div>{title}</div>
    </div>
  )
}
