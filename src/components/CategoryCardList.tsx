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

  return (
    <div className="flex space-x-4 p-4">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} onDeleteCategory={deleteCategory} />
      ))}
    </div>
  )
}