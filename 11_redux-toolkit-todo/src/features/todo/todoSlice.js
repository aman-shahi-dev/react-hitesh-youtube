import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    // {
    //   id: 1,
    //   text: "Say Hello!",
    //   isCompleted: false,
    // },
  ],
}; // the outer object is the state

function sayHello() {
  console.log("Say Hello");
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
        isCompleted: false,
      };
      if (action.payload) {
        state.todos.push(newTodo);
      } else {
        alert("Define a todo first and then add it!");
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      // action ke andar id milegi, id se find karo usko, jaise mil jaaye toh usko lo aur id waise hi rehne doh aur text value change kardo, property override kardo
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    sayHello,
    completeTodo: (state, action) => {
      const { id } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
        console.log(todo.isCompleted)
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo, completeTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
