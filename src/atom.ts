import { atom } from "recoil"
import { Category, Todo } from "./types"

export const categoriesState = atom<Category[]>({
  key: 'categorieState',
  default: []
})

export const todosState = atom<Todo[]>({
  key: 'todosState',
  default: []
})

export const completedTodosState = atom<Todo[]>({
  key: 'completedTodosState',
  default: []
})