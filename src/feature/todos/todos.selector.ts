import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";

const todoSelector = (state: RootState) => state.todos;

export const allTodosSelector = createSelector(
  todoSelector,
  (state) => state.todos
);

export const activeTodosSelector = createSelector(todoSelector, (state) =>
  state.todos.filter((todo) => !todo.completed)
);

export const completedTodosSelector = createSelector(todoSelector, (state) =>
  state.todos.filter((todo) => !todo.completed)
);
