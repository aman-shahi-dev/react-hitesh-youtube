import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  updateTodo,
  completeTodo,
} from "../features/todo/todoSlice";
import { IconTrash, IconEdit, IconDeviceFloppy } from "@tabler/icons-react";
import { useState } from "react";
import { useEffect } from "react";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [newText, setNewText] = useState("");

  const handleEditClick = (todo) => {
    if (todo.id === editId) {
      dispatch(updateTodo({ id: todo.id, text: newText }));
      setEditId(null);
      setNewText(newText);
    } else {
      setEditId(todo.id);
      setNewText(todo.text);
    }
  };

  useEffect(() => {
    if (editId !== null) {
      const inputElement = document.getElementById(`todo-input-${editId}`);
      if (inputElement) {
        inputElement.focus();
      }
    }
  }, [editId]);

  return (
    <div className="w-full md:w-1/2 mb-2 md:mb-6 flex flex-1 flex-col items-center justify-start p-4 bg-neutral-600 rounded gap-4 overflow-y-auto">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`${editId === todo.id ? "bg-neutral-700" : "bg-neutral-500"} hover:bg-neutral-800 rounded w-full p-2 flex items-center justify-between transition duration-100`}
        >
          <input
            type="checkbox"
            className="w-4 h-4 mt-1.5 ml-1"
            onClick={() => dispatch(completeTodo({ id: todo.id }))}
          />
          <input
            id={`todo-input-${todo.id}`}
            type="text"
            value={(editId == todo.id ? newText : todo.text) || ""}
            onChange={(e) => setNewText(e.target.value)}
            readOnly={editId !== todo.id}
            className={`
              bg-transparent outline-none w-full mx-2 p-2 rounded-md text-sm md:text-lg
              ${todo.isCompleted === true ? "bg-green-500 line-through text-green-500 opacity-70" : "bg-neutral-500"}
              ${editId === todo.id ? "border border-white/10 text-white" : "bg-neutral-500"}`}
          />

          <div className="flex space-x-3">
            <button
              onClick={() => handleEditClick(todo)}
              className="px-2 py-1 rounded bg-blue-500/50 hover:bg-blue-500 active:bg-blue-500 hover:text-white cursor-pointer disabled:opacity-60 disabled:bg-blue-500/50 disabled:cursor-auto"
              disabled={todo.isCompleted}
            >
              {editId === todo.id ? <IconDeviceFloppy /> : <IconEdit />}
            </button>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="px-2 py-1 rounded bg-red-500/50 hover:bg-red-500 active:bg-red-500 hover:text-white cursor-pointer"
            >
              <IconTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
