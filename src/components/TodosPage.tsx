import { Todo } from "~/types";
import { AddTodo, TodoFooter, TodosList } from "~/components";

type TodosPageProps = {
  todos: Todo[];
};

export const TodosPage: React.FC<TodosPageProps> = ({ todos }) => {
  return (
    <main
      className="flex h-full w-full justify-center overflow-auto bg-gray-900 bg-gradient-to-r
      from-indigo-900 to-fuchsia-700 bg-[length:100%_230px] bg-local bg-no-repeat pt-32"
    >
      <div className="h-3/5 w-4/5 md:w-3/5 lg:w-3/5">
        <h1 className="font-sans text-4xl font-medium uppercase tracking-widest">
          Todo
        </h1>
        <AddTodo />
        <div className="mb-96 rounded-md bg-gray-800">
          <TodosList todos={todos} />
          <TodoFooter todos={todos} />
        </div>
      </div>
    </main>
  );
};
