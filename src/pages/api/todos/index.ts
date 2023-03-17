import type { NextApiRequest, NextApiResponse } from "next";
import { todos } from "~/data";
import { Todo } from "~/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Todo[]>
) {
  res.status(200).json(todos);
}
