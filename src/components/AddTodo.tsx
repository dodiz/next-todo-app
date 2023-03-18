import { useCallback, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useTodo } from "~/hooks";

export const AddTodo = () => {
  const [title, setTitle] = useState("");
  const { addTodo } = useTodo();

  const handleSubmit = useCallback(() => {
    addTodo({
      title,
      description: "",
    });
  }, [title, addTodo]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div className="my-6 flex items-center rounded-md bg-gray-800 p-6">
        <AiOutlinePlusCircle
          onClick={handleSubmit}
          className="mr-5 h-6 w-6 cursor-pointer fill-gray-400 hover:fill-gray-200 "
        />
        <input
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          type="text"
          placeholder="Add a new todo ..."
          className="flex-1 bg-transparent text-lg text-gray-300 outline-none placeholder:text-gray-500"
        />
      </div>
    </form>
  );
};
