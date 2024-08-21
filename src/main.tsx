import { createRoot } from "react-dom/client";
import { TodoList } from "./components/TodoList/TodoList";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  // <App />
  <TodoList />
  // </StrictMode>,
);
