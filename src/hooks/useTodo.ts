import { useCallback } from "react";
import {
  activeTodosSelector,
  allTodosSelector,
  todosSlice,
  useAppDispatch,
  useAppSelector,
} from "~/features";
import { TodoCreate } from "~/types/TodoCreate";

export const useTodo = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(allTodosSelector);
  const activeTodos = useAppSelector(activeTodosSelector);

  const addTodo = useCallback(
    (todoCreate: TodoCreate) => {
      dispatch(todosSlice.actions.addTodo(todoCreate));
    },
    [dispatch]
  );

  const toggleTodo = useCallback(
    (todoId: string) => {
      dispatch(todosSlice.actions.toggleTodo(todoId));
    },
    [dispatch]
  );
  /**
   * Remove todo by id
   */
  const removeTodo = useCallback(
    (todoId: string) => {
      dispatch(todosSlice.actions.removeTodo(todoId));
    },
    [dispatch]
  );

  const removeAllTodos = useCallback(() => {
    dispatch(todosSlice.actions.removeAll);
  }, [dispatch]);

  const removeAllCompleted = useCallback(() => {
    dispatch(todosSlice.actions.removeCompleted);
  }, [dispatch]);

  return {
    todos,
    activeTodos,
    addTodo,
    toggleTodo,
    removeTodo,
    removeAllTodos,
    removeAllCompleted,
  };
};
