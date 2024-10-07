import { useRecoilState } from "recoil"
import { todosState } from "../atom"
import { Category } from "../types"
import { AddTodoForm } from "./AddTodoForm"
import { TodoList } from "./TodoList"

type CategoryCardProps = {
  category: Category
  onDeleteCategory: (id: number) => void
}

export const CategoryCard = ({category, onDeleteCategory}: CategoryCardProps) => {
  const [todos, setTodos] = useRecoilState(todosState)
  const filteredTodos = todos.filter((todo) => todo.categoryId === category.id)
  const completedTodos = filteredTodos.filter((todo) => !todo.isComplete)
  const uncompletedTodos = filteredTodos.filter((todo) => todo.isComplete)

  const deleteTodo = (id: number) => {
    setTodos((oldTodos) =>
      oldTodos.filter((todo) => todo.id !== id)
    )
  }

  const completeToggle = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    )
  }

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
      <TodoList todos={completedTodos} onDeleteTodo={deleteTodo} onCompleteToggle={completeToggle} />
      <AddTodoForm categoryId={category.id} />
      <TodoList todos={uncompletedTodos} onDeleteTodo={deleteTodo} onCompleteToggle={completeToggle} />
    </div>
  )
}