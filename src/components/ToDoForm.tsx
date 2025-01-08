import { useState } from "react";
import { useToDoActions } from "../hooks/useToDoActions";
import { messages } from "../constants/messages";
import { sanitizeInput } from "../utils/common";

const ToDoForm: React.FC = () => {
  const [text, setText] = useState("");
  const { add } = useToDoActions();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prevent any security issues by sanitizing the input text before setting
    const sanitizedText = sanitizeInput(text);
    if (sanitizedText.trim()) {
      add(sanitizedText);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        id="todo-input"
        type="text"
        placeholder={`${messages.components.ToDo.add}...`}
        value={text}
        onChange={(e) => setText(sanitizeInput(e.target.value))} // Sanitize input on change
        className="todo-input"
        aria-required="true"
        aria-label="Add new todo item"
      />
      <button
        type="submit"
        className="add-btn"
        aria-label="Add ToDo"
        disabled={!text.trim()}
      >
        {messages.components.ToDo.add}
      </button>
    </form>
  );
};

export default ToDoForm;
