import { TodoType } from "../TodoList/TodoList";
import "./todo.scss";

type Props = {
  todo: TodoType;
};

export function Todo({ todo }: Props) {
  return <li>{todo.task}</li>;
}
