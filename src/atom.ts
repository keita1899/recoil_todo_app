import { atom, atomFamily } from "recoil"

export type Todo = {
  id: number
  categoryId: number
  name: string
  isEdit: boolean
  isComplete: boolean
}

export type Category = {
  id: number
  title: string
}

export const categoriesState = atom<Category[]>({
  key: 'categorieState',
  default: [
    { id: 1, title: 'Work' },
    { id: 2, title: 'Personal' },
    { id: 3, title: 'Shopping' },
  ]
})

export const todosState = atomFamily<Todo[], string>({
  key: 'todosState',
  default: []
})