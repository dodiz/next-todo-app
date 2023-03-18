import {
  createSelector,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { Todo, TodoCreate } from "~/types";
import { RootState } from "~/features";
import { todos } from "~/data";

/**
 * Reducers
 */
export const todosSlice = createSlice({
  initialState: [] as Todo[],
  name: "todos",
  reducers: {
    addTodo: (state, { payload }: PayloadAction<TodoCreate>) => {
      const { title, description } = payload;
      state.push({
        id: "" + state.length,
        completed: false,
        title,
        description,
        createdAt: new Date(Date.now()),
      });
    },
    toggleTodo: (state, { payload }: PayloadAction<string>) => {
      const id = payload;
      state = state.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      );
    },
    removeTodo: (state, { payload }: PayloadAction<string>) => {
      const id = payload;
      state = state.filter((todo) => todo.id !== id);
    },
    removeCompleted: (state) => {
      state = state.filter((todos) => !todos.completed);
    },
    removeAll: (state) => {
      state = [];
    },
  },
});

/**
 * Selectors
 */
const todoSelector = (state: RootState) => state.todos;

export const allTodosSelector = createSelector(todoSelector, (state) => state);
export const activeTodosSelector = createSelector(todoSelector, (todos) =>
  todos.filter((todo) => todo.completed)
);
