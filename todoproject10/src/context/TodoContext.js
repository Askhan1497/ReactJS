import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: 1, todo: "Buy groceries", completed: false }],
  addTodo: () => {},
  removeTodo: () => {}, // Removed the 'id' parameter
  updatedTodo: () => {},
  toggleComplete: () => {}
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
