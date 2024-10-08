import { useSortable } from "@dnd-kit/sortable"
import { Todo } from "../types"
import { CSS } from "@dnd-kit/utilities"
import React from "react"

type TodoProps = {
  todo: Todo
  onDeleteTodo: (id: number) => void
  onCompleteToggle: (id: number) => void
  onEditTodoToggle: (id: number) => void
}

export const TodoItem = ({todo, onDeleteTodo, onCompleteToggle, onEditTodoToggle}: TodoProps) => {
  const { attributes, setNodeRef, listeners, transform, transition} = useSortable({
    id: todo.id
  })

  const style = React.useMemo(() => ({
    transform: CSS.Transform.toString(transform),
    transition,
  }), [transform, transition])

  return (
    <li ref={setNodeRef} style={style} {...attributes} {...listeners} className="p-3 mb-2 bg-white rounded-lg shadow-sm border border-gray-300 flex justify-between items-center">
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={() => onCompleteToggle(todo.id)}
        className="mr-3 h-4 w-4 text-green-500 focus:ring-green-400 border-gray-300 rounded"
      />
      <span onDoubleClick={() => onEditTodoToggle(todo.id)} className={todo.isComplete ? "line-through text-gray-500" : ""}>{todo.name}</span>
      <button onClick={() => onDeleteTodo(todo.id)} className="text-red-500 hover:text-red-700">削除</button>
    </li>
  )
}