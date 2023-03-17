import type { NextApiRequest, NextApiResponse } from "next";
import { todos } from "~/data";
import { Todo } from "~/types";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Todo>
) {
  const todo = todos.find((_, i) => i === 1);
  if (!todo) throw new Error("Not found");
  res.status(200).json(todo);
}
