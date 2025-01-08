import React from "react";
import ToDoItem from "./ToDoItem";
import { useSelector } from "react-redux";
import { ToDo } from "../types/todoTypes";
import { RootState } from "../store/store";
import { messages } from "../constants/messages";

const ToDoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);

  return (
    <section className="todo-list" aria-labelledby="todo-list-title">
      {todos.length > 0 ? (
        <ul className="todo-items" role="list">
          {todos.map((todo: ToDo) => (
            <ToDoItem todo={todo} />
          ))}
        </ul>
      ) : (
        <p className="todo-empty" role="status">
          {messages.components.ToDo.notodo}
        </p>
      )}
    </section>
  );
};

export default ToDoList;
