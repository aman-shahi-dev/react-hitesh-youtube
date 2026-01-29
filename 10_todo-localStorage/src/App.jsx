import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts/TodoContext";
import { TodoForm, TodoItem } from "./components/index";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)),
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleIsCompleted = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, isCompleted: !prevTodo.isCompleted }
          : prevTodo,
      ),
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) setTodos(todos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleIsCompleted }}
    >
      <div className="bg-blue-500/40 min-h-screen p-4 flex items-center justify-start flex-col gap-6 text-white">
        <h1 className="text-xl md:text-5xl text-shadow-sm text-shadow-black mt-10">
          To Do App using LocalStorage
        </h1>

        <TodoForm />

        <div className="flex flex-1 flex-col gap-4 bg-transparent rounded mb-6 w-full md:w-1/2 overflow-y-auto">
          {todos.map((todo) => (
            <div key={todo.id}>
              <TodoItem todo={todo} key={todo.id} />
            </div>
          ))}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
