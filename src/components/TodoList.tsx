import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { Todo } from "../types"
import { EditTodoNameForm } from "./EditTodoNameForm"
import { TodoItem } from "./TodoItem"
import { closestCenter, DndContext, MouseSensor, useSensor, useSensors } from "@dnd-kit/core"
import { useSetRecoilState } from "recoil"
import { todosState } from "../atom"

type TodoListProps = {
  todos: Todo[]
  onDeleteTodo: (id: number) => void
  onCompleteToggle: (id: number) => void
  onEditTodoToggle: (id: number) => void
  onUpdateTodoName: (e: React.FormEvent<HTMLFormElement>,id: number, name: string) => void
}

export const TodoList = ({todos, onDeleteTodo, onCompleteToggle, onEditTodoToggle, onUpdateTodoName}: TodoListProps) => {
  const setTodos = useSetRecoilState(todosState)

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  })

  const sensors = useSensors(
    mouseSensor,
  )

  const handleTodoDragEnd = (event: any) => {
    const { active, over } = event
    if (active.id !== over.id) {
      setTodos((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      })
    }
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleTodoDragEnd}>
      <SortableContext items={todos} strategy={verticalListSortingStrategy}>
        <ul className="mt-4">
          {todos.map((todo: Todo) => 
            todo.isEdit ? 
              <EditTodoNameForm id={todo.id} name={todo.name} onUpdateTodoName={onUpdateTodoName} />
            :
              <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onCompleteToggle={onCompleteToggle} onEditTodoToggle={onEditTodoToggle} />
          )}
        </ul>
      </SortableContext>
    </DndContext>
  )
}