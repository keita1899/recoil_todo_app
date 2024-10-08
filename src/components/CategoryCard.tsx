import { useRecoilState } from "recoil"
import { todosState } from "../atom"
import { Category } from "../types"
import { AddTodoForm } from "./AddTodoForm"
import { TodoList } from "./TodoList"
import { CategoryCardHeading } from "./CategoryCardHeading"
import { EditCategoryForm } from "./EditCategoryForm"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

type CategoryCardProps = {
  category: Category
  onDeleteCategory: (id: number) => void
  onEditToggleCategory: (id: number) => void
  onUpdateCategoryTitle: (e: React.FormEvent<HTMLFormElement>, id: number, title: string) => void
}

export const CategoryCard = ({category, onDeleteCategory, onEditToggleCategory, onUpdateCategoryTitle}: CategoryCardProps) => {
  const [todos, setTodos] = useRecoilState(todosState)
  const filteredTodos = todos.filter((todo) => todo.categoryId === category.id)
  const completedTodos = filteredTodos.filter((todo) => todo.isComplete)
  const uncompletedTodos = filteredTodos.filter((todo) => !todo.isComplete)
  const { attributes, listeners, setNodeRef, transform, transition} = useSortable({id: category.id})

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

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

  const editTodoToggle = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isEdit: !todo.isEdit } : todo
      )
    )
  }

  const updateTodoName = (e: React.FormEvent<HTMLFormElement>, id: number, name: string) => {
    e.preventDefault()
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, name: name, isEdit: !todo.isEdit } : todo
      )
    )
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="bg-white shadow-lg rounded-lg p-4 w-100">
      {category.isEdit ? 
        <EditCategoryForm id={category.id} title={category.title} onUpdateCategoryTitle={onUpdateCategoryTitle}/>
      : 
        <CategoryCardHeading category={category} onDeleteCategory={onDeleteCategory} onEditToggleCategory={onEditToggleCategory} />
      }
      <TodoList todos={uncompletedTodos} onDeleteTodo={deleteTodo} onCompleteToggle={completeToggle} onEditTodoToggle={editTodoToggle} onUpdateTodoName={updateTodoName} />
      <AddTodoForm categoryId={category.id} />
      <TodoList todos={completedTodos} onDeleteTodo={deleteTodo} onCompleteToggle={completeToggle} onEditTodoToggle={editTodoToggle} onUpdateTodoName={updateTodoName} />
    </div>
  )
}