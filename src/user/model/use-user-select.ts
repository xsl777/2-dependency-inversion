import { useUsers } from './use-users'

export const useUserSelect = (userId: string) => {
  const users = useUsers()
  const user = users.find(user => user.id === userId)
  return user
}
