import type React from "react";
import { type Todo } from "../DummyData";
import { createContext } from "react";

export type TodoContextType = {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const TodosContext = createContext<TodoContextType>({
  todoList: [],
  setTodoList: () => [],
});
