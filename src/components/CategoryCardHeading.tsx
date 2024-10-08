import { Category } from "../types"

type CategoryCardHeadingProps = {
  category: Category
  onDeleteCategory: (id: number) => void
  onEditToggleCategory: (id: number) => void
}

export const CategoryCardHeading = ({category, onDeleteCategory, onEditToggleCategory}: CategoryCardHeadingProps) => {
  return (
    <div className="flex justify-between items-center">
      <h3 onDoubleClick={() => onEditToggleCategory(category.id)} className="font-bold text-lg">{category.title}</h3>
      <button 
        onClick={() => onDeleteCategory(category.id)}
        data-dndkit-disabled-dnd-flag="true"
        className="text-red-500 hover:text-red-700 ml-4"
      >
        削除
      </button>
    </div>
  )
}