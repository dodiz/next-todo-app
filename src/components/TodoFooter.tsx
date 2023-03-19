import { useTodo } from "~/hooks";
import { Todo } from "~/types";
import { NavLink } from "~/views";

type TodoFooterProps = {
  todos: Todo[];
};

export const TodoFooter: React.FC<TodoFooterProps> = ({ todos }) => {
  const { removeAllCompleted } = useTodo();
  return (
    <div className="flex justify-between p-6 text-base text-gray-500">
      <div>{todos.length} items left</div>
      <div className="[&>a:hover]:text-blue-600 [&>a]:font-semibold">
        <NavLink className="mr-4" href="/todos">
          All
        </NavLink>
        <NavLink className="mr-4" href="/active">
          Active
        </NavLink>
        <NavLink href="/completed">Completed</NavLink>
      </div>
      <a
        onClick={removeAllCompleted}
        className="cursor-pointer font-semibold hover:text-blue-600"
      >
        Clear completed
      </a>
    </div>
  );
};
