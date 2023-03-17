import type { NextPage, GetServerSideProps } from "next";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { NavLink } from "~/views";
import { TodosList } from "~/components";
import { todos } from "~/data";

type TodosPageProps = {};

const TodosPage: NextPage<TodosPageProps> = () => {
  return (
    <main
      className="flex h-full w-full justify-center overflow-auto bg-gray-900 bg-gradient-to-r
    from-indigo-900 to-fuchsia-700 bg-[length:100%_230px] bg-local bg-no-repeat pt-32"
    >
      <div className="h-3/5 w-4/5 md:w-3/5 lg:w-3/5">
        <h1 className="font-sans text-4xl font-medium uppercase tracking-widest">
          Todo
        </h1>
        <div className="my-6 flex items-center rounded-md bg-gray-800 p-6">
          <AiOutlinePlusCircle className="mr-5 h-6 w-6 fill-gray-400 hover:fill-gray-200 " />{" "}
          <input
            type="text"
            placeholder="Add a new todo ..."
            className="flex-1 bg-transparent text-lg text-gray-300 outline-none placeholder:text-gray-500"
          />
        </div>
        <div className="mb-96 rounded-md bg-gray-800">
          <TodosList />
          <div className="flex justify-between p-6 text-base text-gray-500">
            <div>{todos.length} items left</div>
            <div className="[&>a:hover]:text-blue-600 [&>a]:font-semibold">
              <NavLink className="mr-4" href="/todos">
                All
              </NavLink>
              <NavLink className="mr-4" href="/todos/active">
                Active
              </NavLink>
              <NavLink href="/todos/completed">Completed</NavLink>
            </div>
            <a className="cursor-pointer font-semibold hover:text-blue-600">
              Clear completed
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps<
  TodosPageProps
> = async () => {
  return {
    props: {},
  };
};

export default TodosPage;
