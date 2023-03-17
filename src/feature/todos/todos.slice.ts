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
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = true;
        state.todos = [...state.todos];
      }
    },
    unCheck: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = false;
        state.todos = [...state.todos];
      }
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

export const { add, clearAll } = todosSlice.actions;
