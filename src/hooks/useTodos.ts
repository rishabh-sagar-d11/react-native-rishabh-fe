import { useContext } from "react";
import { TodosContext } from "../context/Todos";

export const useTodos = () => {
  return useContext(TodosContext);
};
