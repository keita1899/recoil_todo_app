import { useState } from "react"

type EditTodoNameFormProps = {
  id: number
  name: string
  onUpdateTodoName: (e: React.FormEvent<HTMLFormElement>, id: number, name: string) => void
}

export const EditTodoNameForm = ({id, name, onUpdateTodoName}: EditTodoNameFormProps) => {
  const [editTodoName, setEditTodoName] = useState(name)

  return (
    <form onSubmit={(e) => onUpdateTodoName(e, id, editTodoName)}>
      <input
        type="text"
        value={editTodoName}
        onChange={(e) => setEditTodoName(e.target.value)}
        className="border border-gray-300 rounded px-2 py-1"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">保存</button>
    </form>
  )
}