import React from "react";
import { useTodo } from "../contexts/TodoContext";
import { useState } from "react";

export default function TodoForm() {
  const [message, setMessage] = useState("");
  const { addTodo } = useTodo();

  const addTodoItem = (e) => {
    e.preventDefault();
    if (!message) return;
    addTodo({ message, isCompleted: false });
    setMessage("");
  };

  return (
    <form
      onSubmit={addTodoItem}
      className="
        h-15 w-full md:w-1/2
        rounded bg-transparent
        mt-6 flex
        gap-2 md:gap-3
        items-center justify-center
      "
    >
      <input
        type="text"
        placeholder="What has to be done?"
        className="flex flex-1 rounded bg-white text-black py-3 px-3 outline-none focus:scale-102 transition-all duration-300 shadow-md shadow-neutral-400 focus:shadow-md focus:shadow-neutral-600"
        value={message} // wiring
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="px-3 py-2 font-semibold rounded bg-green-400 text-shadow-lg shadow-md shadow-neutral-400 hover:shadow-md hover:shadow-neutral-600 transition-all duration-300 cursor-pointer active:scale-95 outline-none"
      >
        Add Todo
      </button>
    </form>
  );
}
