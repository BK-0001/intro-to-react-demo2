import { useState } from "react";
import { Todos } from "../Todos/Todos";
import "./TodoList.scss";

export type TodoType = {
  id: number;
  task: string;
};

export function TodoList() {
  const [todos] = useState<TodoType[]>([
    { id: 1, task: "Learn Hooks" },
    { id: 2, task: "Learn list and key" },
    { id: 3, task: "Learn useEffect" }
  ]);

  return (
    <div className="container">
      <h1 className="title">Todo List</h1>

      <Todos todos={todos} />
    </div>
  );
}
