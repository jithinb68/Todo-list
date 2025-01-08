import React from "react";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "../styles/to-do-list.css";
import { messages } from "../constants/messages";

const ToDo: React.FC = () => (
  <Provider store={store}>
    <div className="to-do">
      <h1 className="title">{messages.components.ToDo.title}</h1>
      {/* Component holds the input field and handles the logic to Add todo' using a custom hook inside it */}
      <ToDoForm />
      {/* Component which renders the todo list with the acrion buttons */}
      <ToDoList />
    </div>
  </Provider>
);

export default ToDo;
