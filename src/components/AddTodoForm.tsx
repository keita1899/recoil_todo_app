import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todosState } from "../atom";

type AddTodoFormProps = {
  categoryId: number 
}

export const AddTodoForm = ({categoryId}: AddTodoFormProps) => {
  const [newTodoName, setTodoName] = useState('')
  const setTodos = useSetRecoilState(todosState);

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (newTodoName.trim() === '') return

    const newTodo = {
      id: Date.now(),
      name: newTodoName,
      isEdit: false,
      isComplete: false,
      categoryId: categoryId
    }

    setTodos((oldTodos) => [...oldTodos, newTodo])

    setTodoName('')
  }

  return (
    <form className="mt-2" onSubmit={addTodo}>
      <input
        type="text"
        className="border rounded-lg p-2 w-full"
        placeholder="新しいTodo"
        value={newTodoName}
        onChange={(e) => setTodoName(e.target.value)}
        data-dndkit-disabled-dnd-flag="true"
      />
      <input
        type="submit"
        value="追加"
        className="bg-green-500 text-white rounded-lg p-2 mt-2 cursor-pointer"
        data-dndkit-disabled-dnd-flag="true"
      />
    </form>
  );
};