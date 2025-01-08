import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToDo } from "../../types/todoTypes";

interface ToDoState {
  todos: ToDo[];
}

const initialState: ToDoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<string>) => {
      const newTodo: ToDo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.todos.unshift(newTodo);
    },
    deleteToDo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    editToDo: (state, action: PayloadAction<{ id: number; text: string }>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) todo.text = action.payload.text;
    },
  },
});

export const { addToDo, deleteToDo, toggleComplete, editToDo } =
  todoSlice.actions;

export default todoSlice.reducer;
