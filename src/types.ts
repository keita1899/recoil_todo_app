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
