import { Category } from "../types"
import { AddTodoForm } from "./AddTodoForm"
import { TodoList } from "./TodoList"

type CategoryCardProps = {
  category: Category
}

export const CategoryCard = ({category}: CategoryCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-100">
      <h3 className="font-bold text-lg">{category.title}</h3>
      <AddTodoForm categoryId={category.id} />
      <TodoList categoryId={category.id} />
    </div>
  )
}