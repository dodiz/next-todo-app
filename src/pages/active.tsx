import type { NextPage, GetServerSideProps } from "next";
import { TodosPage } from "~/components";
import { useTodo } from "~/hooks";

const ActiveTodosPage: NextPage = () => {
  const { activeTodos } = useTodo();
  return <TodosPage todos={activeTodos} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default ActiveTodosPage;
