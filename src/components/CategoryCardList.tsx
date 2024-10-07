import { useRecoilState } from "recoil"
import { categoriesState } from "../atom"
import { CategoryCard } from "./CategoryCard"

export const CategoryCardList = () => {
  const [categories, setCategories] = useRecoilState(categoriesState)

  const deleteCategory = (id: number) => {
    setCategories((oldCategories) => 
      oldCategories.filter((category) => category.id !== id)
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