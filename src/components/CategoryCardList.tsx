import { useRecoilState, useSetRecoilState } from "recoil"
import { categoriesState, todosState } from "../atom"
import { CategoryCard } from "./CategoryCard"
import { closestCenter, DndContext, MouseSensor, useSensor, useSensors } from "@dnd-kit/core"
import { arrayMove, horizontalListSortingStrategy, SortableContext } from "@dnd-kit/sortable"

export const CategoryCardList = () => {
  const [categories, setCategories] = useRecoilState(categoriesState)
  const setTodos = useSetRecoilState(todosState)

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  })

  const sensors = useSensors(
    mouseSensor,
  )

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

  const handleCategoryDragEnd = (event: any) => {
    const { active, over } = event
    if (active.id !== over.id) {
      setCategories((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      })
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleCategoryDragEnd}
    >
      <SortableContext items={categories} strategy={horizontalListSortingStrategy}>
        <div className="flex space-x-4 p-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} onDeleteCategory={deleteCategory} onEditToggleCategory={editToggleCategory} onUpdateCategoryTitle={updateCategoryTitle} />
          ))}
        </div>
      </SortableContext>
      
    </DndContext>
  )
}