import type { NextPage, GetServerSideProps } from "next";
import { TodosPage } from "~/components";
import { useTodo } from "~/hooks";

const AllTodosPage: NextPage = () => {
  const { allTodos } = useTodo();
  return <TodosPage todos={allTodos} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default AllTodosPage;
