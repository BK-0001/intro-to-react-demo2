import { Todo } from "../Todo/Todo";
import { TodoType } from "../TodoList/TodoList";
import "./Todos.scss";

type Props = {
  todos: TodoType[];
};

export function Todos({ todos }: Props) {
  return (
    <ul className="todos">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
