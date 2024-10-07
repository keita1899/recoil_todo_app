import { useRecoilState, useSetRecoilState } from "recoil"
import { categoriesState, todosState } from "../atom"
import { CategoryCard } from "./CategoryCard"

export const CategoryCardList = () => {
  const [categories, setCategories] = useRecoilState(categoriesState)
  const setTodos = useSetRecoilState(todosState)

  const deleteCategory = (id: number) => {
    setCategories((oldCategories) => 
      oldCategories.filter((category) => category.id !== id)
    )
    setTodos((oldTodos) =>
      oldTodos.filter((todo) => todo.categoryId !== id)
    )
  }

  const editToggleCategory = (id: number) => {
    setCategories((prevCategories) => 
      prevCategories.map((category) =>
        category.id === id ? { ...category, isEdit: !category.isEdit } : category
      )
    )
  }

  const updateCategoryTitle = (e: React.FormEvent<HTMLFormElement>, id: number, title: string) => {
    e.preventDefault()
    setCategories((prevCategories) => 
      prevCategories.map((category) =>
        category.id === id ? { ...category, title: title, isEdit: !category.isEdit } : category
      )
    )
  }

  return (
    <div className="flex space-x-4 p-4">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} onDeleteCategory={deleteCategory} onEditToggleCategory={editToggleCategory} onUpdateCategoryTitle={updateCategoryTitle} />
      ))}
    </div>
  )
}