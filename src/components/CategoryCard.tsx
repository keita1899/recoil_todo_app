import { Category } from "../types"
import { AddTodoForm } from "./AddTodoForm"

type CategoryCardProps = {
  category: Category
}

export const CategoryCard = ({category}: CategoryCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-60">
      <h3 className="font-bold text-lg">{category.title}</h3>
      <AddTodoForm />
    </div>
  )
}