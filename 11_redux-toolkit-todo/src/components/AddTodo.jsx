import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
export default function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput(""); // clean the input
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="space-x-2 w-full md:w-1/2 h-15 py-1 flex"
    >
      <input
        type="text"
        className="rounded h-full px-4 py-1  outline-none bg-neutral-600 flex flex-1"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-blue-400 border-0 py-2 my-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-xs md:text-lg cursor-pointer transition-colors duration-300 active:scale-95"
      >
        Add Todo
      </button>
    </form>
  );
}
