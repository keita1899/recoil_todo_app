import { useState } from "react"

type EditCategoryFormProps = {
  id: number
  title: string
  onUpdateCategoryTitle: (e: React.FormEvent<HTMLFormElement>, id: number, title: string) => void
}

export const EditCategoryForm = ({id, title, onUpdateCategoryTitle}: EditCategoryFormProps) => {
  const [editCategoryTitle, setEditCategoryTitle] = useState(title)

  return (
    <form onSubmit={(e) => onUpdateCategoryTitle(e, id, editCategoryTitle)}>
      <input
        type="text"
        value={editCategoryTitle}
        onChange={(e) => setEditCategoryTitle(e.target.value)}
        className="border border-gray-300 rounded px-2 py-1"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">保存</button>
    </form>
  )
}