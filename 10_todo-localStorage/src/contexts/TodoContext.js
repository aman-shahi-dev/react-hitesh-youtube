import React from "react";
import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      message: "Todo msg",
      isCompleted: false,
    },
  ],
  addTodo: (message) => {},
  updateTodo: (id, message) => {},
  deleteTodo: (id) => {},
  toggleIsCompleted: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
