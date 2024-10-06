import { useRecoilValue } from "recoil"
import { categoriesState } from "../atom"
import { CategoryCard } from "./CategoryCard"

export const CategoryCardList = () => {
  const categories = useRecoilValue(categoriesState)

  return (
    <div className="flex space-x-4 p-4">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  )
}