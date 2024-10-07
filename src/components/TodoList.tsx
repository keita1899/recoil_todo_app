import { Todo } from "../types"
import { TodoItem } from "./TodoItem"

type TodoListProps = {
  todos: Todo[]
  onDeleteTodo: (id: number) => void
  onCompleteToggle: (id: number) => void
}

export const TodoList = ({todos, onDeleteTodo, onCompleteToggle}: TodoListProps) => {
  return (
    <ul className="mt-4">
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onCompleteToggle={onCompleteToggle} />
      ))}
    </ul>
  )
}