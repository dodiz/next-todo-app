import { BsCircle, BsCheckCircle, BsTrash } from "react-icons/bs";
import { useTodo } from "~/hooks";

export const TodosList: React.FC = () => {
  const { todos, toggleTodo, removeTodo } = useTodo();
  return (
    <>
      {todos.map((todo, i) => (
        <div
          key={todo.id}
          className="group flex cursor-pointer select-none items-center justify-between border-b-2 border-gray-700 bg-gray-800 p-6 hover:bg-slate-800"
        >
          <div className="flex items-center">
            {todo.completed ? (
              <BsCheckCircle
                onClick={() => toggleTodo(todo.id)}
                className="slate-500 mr-4 h-6 w-6 fill-slate-400"
              />
            ) : (
              <BsCircle
                onClick={() => toggleTodo(todo.id)}
                className="mr-4 h-6 w-6 fill-slate-400 stroke-0"
              />
            )}
            <div className="flex-1 text-lg text-gray-300 ">{todo.title}</div>
          </div>
          <div
            onClick={() => removeTodo(todo.id)}
            className="relative flex h-8 w-8 items-center justify-center rounded-md bg-red-600 shadow-sm shadow-slate-900 hover:top-0.5 hover:left-0.5"
          >
            <BsTrash className="fill-white-500 h-5 w-5" />
          </div>
        </div>
      ))}
    </>
  );
};
