import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { categoriesState } from "../atom";
import { Category } from "../types";

export const AddCategoryForm = () => {
  const [newCategoryTitle, setNewCategoryTitle] = useState("");
  const setCategories = useSetRecoilState(categoriesState);

  const addCategory = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newCategoryTitle.trim() === "") return;

    const newCategory: Category = {
      id: Date.now(),
      title: newCategoryTitle,
    };

    setCategories((oldCategories) => [...oldCategories, newCategory]);
    setNewCategoryTitle("");
  };

  return (
    <form onSubmit={addCategory} className="flex items-center mb-4">
      <input
        type="text"
        value={newCategoryTitle}
        onChange={(e) => setNewCategoryTitle(e.target.value)}
        className="border rounded-lg p-2 w-40"
        placeholder="新しいカテゴリー"
      />
      <input
        type="submit"
        value="追加"
        className="bg-blue-500 text-white rounded-lg p-2 ml-2 cursor-pointer"
      />
    </form>
  );
};