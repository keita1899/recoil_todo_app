import { atom, atomFamily } from "recoil"
import { Category, Todo } from "./types"

export const categoriesState = atom<Category[]>({
  key: 'categorieState',
  default: [

  ]
})

export const todosState = atomFamily<Todo[], string>({
  key: 'todosState',
  default: []
})