import { Category } from "../types"
import { AddTodoForm } from "./AddTodoForm"
import { TodoList } from "./TodoList"

type CategoryCardProps = {
  category: Category
  onDeleteCategory: (id: number) => void
}

export const CategoryCard = ({category, onDeleteCategory}: CategoryCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-100">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg">{category.title}</h3>
        <button 
          onClick={() => onDeleteCategory(category.id)}
          className="text-red-500 hover:text-red-700 ml-4"
        >
          削除
        </button>
      </div>
      <AddTodoForm categoryId={category.id} />
      <TodoList categoryId={category.id} />
    </div>
  )
}