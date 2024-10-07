import { Todo } from "../types"
import { EditTodoNameForm } from "./EditTodoNameForm"
import { TodoItem } from "./TodoItem"

type TodoListProps = {
  todos: Todo[]
  onDeleteTodo: (id: number) => void
  onCompleteToggle: (id: number) => void
  onEditTodoToggle: (id: number) => void
  onUpdateTodoName: (e: React.FormEvent<HTMLFormElement>,id: number, name: string) => void
}

export const TodoList = ({todos, onDeleteTodo, onCompleteToggle, onEditTodoToggle, onUpdateTodoName}: TodoListProps) => {
  return (
    <ul className="mt-4">
      {todos.map((todo: Todo) => (
        <>
          {todo.isEdit ? 
            <EditTodoNameForm id={todo.id} name={todo.name} onUpdateTodoName={onUpdateTodoName} />
           :
            <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onCompleteToggle={onCompleteToggle} onEditTodoToggle={onEditTodoToggle} />
          }
        </>
      ))}
    </ul>
  )
}