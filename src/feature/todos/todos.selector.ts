import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";

const todoSelector = (state: RootState) => state.todos;

export const allTodosSelector = createSelector(
  todoSelector,
  (state) => state.todos
);
