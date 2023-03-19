import type { NextPage, GetServerSideProps } from "next";
import { TodosPage } from "~/components";
import { useTodo } from "~/hooks";

const CompletedTodosPage: NextPage = () => {
  const { completedTodos } = useTodo();
  return <TodosPage todos={completedTodos} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default CompletedTodosPage;
