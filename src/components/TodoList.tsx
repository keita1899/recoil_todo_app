import { useRecoilValue } from "recoil"
import { todosState } from "../atom"
import { Todo } from "../types"
import { TodoItem } from "./TodoItem"

type TodoListProps = {
  categoryId: number 
}

export const TodoList = ({categoryId}: TodoListProps) => {
  const todos = useRecoilValue(todosState)

  const filteredTodos = todos.filter(todo => todo.categoryId === categoryId)

  return (
    <ul className="bg-gray-100 p-4 rounded-lg shadow-md">
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      ) : (
        <p className="text-gray-500">Todoはありません</p>
      )}
    </ul>
  )
}