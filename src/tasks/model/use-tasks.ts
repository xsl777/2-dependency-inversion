import { useEffect, useState } from 'react'
// import { saveToStorage, getFromStorage } from '../../lib/storage'
import { nanoid } from 'nanoid'

export type Task = {
  id: string
  title: string
  done: boolean
  ownerId?: string
}

export type Storage<T> = {
  saveToStorage(key: string, value: unknown): void
  getFromStorage(key: string, defaultValue: T): T
}

const STORAGE_KEY = 'tasks'
export function useTasks(storage: Storage<Task[]>) {
  const [tasks, setTasks] = useState<Task[]>(() => storage.getFromStorage(STORAGE_KEY, []))

  const addTask = (value: string) => {
    setTasks(tasks => [{ id: nanoid(), title: value, done: false }, ...tasks])
  }

  const removeTask = (id: string) => {
    setTasks(tasks => tasks.filter(t => t.id !== id))
  }

  const toggleCheckTask = (id: string) => {
    setTasks(tasks => tasks.map(task => (task.id === id ? { ...task, done: !task.done } : task)))
  }

  const updateOwner = (id: string, ownerId: string) => {
    console.log(`updating owner ${ownerId}, for task: ${id}`)
    setTasks(tasks => tasks.map(task => (task.id === id ? { ...task, ownerId } : task)))
  }

  useEffect(() => {
    console.log('saving to storage, tasks:', tasks)
    storage.saveToStorage(STORAGE_KEY, tasks)
  }, [tasks, storage])

  return {
    tasks,
    addTask,
    removeTask,
    toggleCheckTask,
    updateOwner,
  }
}
