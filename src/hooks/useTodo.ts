import { useCallback } from "react";
import { Todo } from "~/types";
import {
  allTodosSelector,
  todosSlice,
  useAppDispatch,
  useAppSelector,
} from "~/feature";

export const useTodo = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(allTodosSelector);

  const add = useCallback(
    (todo: Todo) => {
      dispatch(todosSlice.actions.add(todo));
    },
    [dispatch]
  );

  const check = useCallback(
    (todoId: string) => {
      dispatch(todosSlice.actions.check(todoId));
    },
    [dispatch]
  );
  const unCheck = useCallback(
    (todoId: string) => {
      dispatch(todosSlice.actions.unCheck(todoId));
    },
    [dispatch]
  );
  const remove = useCallback(
    (todoId: string) => {
      dispatch(todosSlice.actions.remove(todoId));
    },
    [dispatch]
  );

  return {
    todos,
    add,
    check,
    unCheck,
    remove,
  };
};
