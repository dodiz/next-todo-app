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
  initialState: todos as Todo[],
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
      const todoId = payload;
      const todo = state.find((todo) => todo.id === todoId);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, { payload }: PayloadAction<string>) => {
      const todoId = payload;
      const todoIndex = state.findIndex((todo) => todo.id === todoId);
      if (todoIndex !== -1) {
        state.splice(todoIndex, 1);
      }
    },
    removeCompleted: (state) => {
      return state.filter((todo) => !todo.completed);
    },
  },
});

/**
 * Selectors
 */
const todoSelector = (state: RootState) => state.todos;

export const allTodosSelector = createSelector(todoSelector, (state) => state);
export const activeTodosSelector = createSelector(todoSelector, (todos) =>
  todos.filter((todo) => !todo.completed)
);
export const completedTodosSelector = createSelector(todoSelector, (todos) =>
  todos.filter((todo) => todo.completed)
);
