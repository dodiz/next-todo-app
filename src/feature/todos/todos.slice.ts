import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { todos } from "~/data";
import { Todo } from "~/types";

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: todos,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    check: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: true,
            }
          : todo
      );
    },
    unCheck: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: false,
            }
          : todo
      );
    },
    remove: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    clearAll: (state) => {
      state.todos = [];
    },
  },
});
