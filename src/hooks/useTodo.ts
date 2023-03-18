import { useCallback } from "react";
import {
  activeTodosSelector,
  allTodosSelector,
  completedTodosSelector,
  todosSlice,
  useAppDispatch,
  useAppSelector,
} from "~/features";
import { TodoCreate } from "~/types";

export const useTodo = () => {
  const dispatch = useAppDispatch();
  const allTodos = useAppSelector(allTodosSelector);
  const activeTodos = useAppSelector(activeTodosSelector);
  const completedTodos = useAppSelector(completedTodosSelector);

  const addTodo = useCallback(
    (todoCreate: TodoCreate) =>
      dispatch(todosSlice.actions.addTodo(todoCreate)),
    [dispatch]
  );
  const toggleTodo = useCallback(
    (todoId: string) => dispatch(todosSlice.actions.toggleTodo(todoId)),
    [dispatch]
  );
  const removeTodo = useCallback(
    (todoId: string) => dispatch(todosSlice.actions.removeTodo(todoId)),
    [dispatch]
  );

  const removeAllCompleted = useCallback(
    () => dispatch(todosSlice.actions.removeCompleted()),
    [dispatch]
  );

  return {
    allTodos,
    activeTodos,
    completedTodos,
    addTodo,
    toggleTodo,
    removeTodo,
    removeAllCompleted,
  };
};
