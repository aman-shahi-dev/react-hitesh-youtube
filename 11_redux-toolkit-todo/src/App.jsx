import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="bg-blue-500/40 text-white flex flex-col items-center justify-evenly gap-2 p-2 h-screen max-h-screen overflow-hidden">
      <h1 className="text-xl md:text-4xl text-shadow-lg text-shadow-black/40 mt-4 mb-4">
        Redux Toolkit Todo
      </h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
