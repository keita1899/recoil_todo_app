export const AddTodoForm = () => {
  return (
    <form className="mt-2">
      <input
        type="text"
        className="border rounded-lg p-2 w-full"
        placeholder="新しいTODO"
      />
      <input
        type="submit"
        value="追加"
        className="bg-green-500 text-white rounded-lg p-2 mt-2 cursor-pointer"
      />
    </form>
  );
};