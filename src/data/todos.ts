import { Todo } from "~/types";

export const todos: Todo[] = [
  {
    id: "0",
    title: "Todo 1",
    description: "Todo description 1",
    completed: false,
    createdAt: new Date(Date.now() - 100),
  },
  {
    id: "1",
    title: "Todo 2",
    description: "Todo description 2",
    completed: true,
    createdAt: new Date(Date.now() - 200),
  },
  {
    id: "2",
    title: "Todo 3",
    description: "Todo description 2",
    completed: true,
    createdAt: new Date(Date.now() - 300),
  },
  {
    id: "3",
    title: "Todo 4",
    description: "Todo description 2",
    createdAt: new Date(Date.now() - 500),
    completed: false,
  },
  {
    id: "4",
    title: "Todo 5",
    description: "Todo description 2",
    createdAt: new Date(Date.now() - 2000),
    completed: true,
  },
  {
    id: "5",
    title: "Todo 6",
    description: "Todo description 2",
    createdAt: new Date(Date.now() - 6000),
    completed: false,
  },
];
