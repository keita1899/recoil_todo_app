export type Todo = {
  id: string
  categoryId: string
  name: string
  isEdit: boolean
  isComplete: boolean
}

export type Category = {
  id: number
  title: string
}
