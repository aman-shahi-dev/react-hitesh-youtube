import React from "react";
import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

import { IconEdit, IconDeviceFloppy } from "@tabler/icons-react";

export default function TodoItem({ todo }) {
  const { deleteTodo, toggleIsCompleted, updateTodo } = useTodo();

  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMessage, setTodoMessage] = useState(todo.message);

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, message: todoMessage });
    setIsTodoEditable(false);
  };

  const toggleTodoIsCompleted = () => {
    toggleIsCompleted(todo.id);
  };

  return (
    <div
      className={`items-center px-3 py-2 gap-x-3 flex shadow-md shadow-black/40 text-black ${todo.isCompleted ? "bg-green-300" : "bg-white rounded"}`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.isCompleted}
        onChange={toggleTodoIsCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg text-black
          ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"}
          ${todo.isCompleted ? "line-through" : ""}
        `}
        value={todoMessage}
        onChange={(e) => setTodoMessage(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        onClick={() => {
          if (todo.isCompleted) return;
          if (isTodoEditable) {
            editTodo();
          } else {
            setIsTodoEditable((prev) => !prev);
          }
        }}
        disabled={todo.isCompleted}
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 cursor-pointer"
      >
        {isTodoEditable ? <IconDeviceFloppy /> : <IconEdit />}
      </button>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="w-8 h-8 inline-flex rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 cursor-pointer"
      >
        ❌
      </button>
    </div>
  );
}
