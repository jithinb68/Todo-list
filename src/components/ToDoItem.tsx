import React, { useState } from "react";
import { ToDo } from "../types/todoTypes";
import StatusCircle from "./StatusCircle";
import EditableText from "./EditableText";
import ActionButtons from "./ActionButtons";
import { useToDoActions } from "../hooks/useToDoActions";

interface ToDoItemProps {
  todo: ToDo;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ todo }) => {
  const { remove, toggle, edit } = useToDoActions();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && newText.trim() !== todo.text) {
      edit(todo.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li
      key={todo.id}
      role="listitem"
      className={`todo-item ${todo.completed ? "completed" : ""}`}
    >
      <StatusCircle
        completed={todo.completed}
        onClick={() => toggle(todo.id)}
      />
      <EditableText
        isEditing={isEditing}
        text={newText}
        onChange={setNewText}
        displayText={todo.text}
      />
      <ActionButtons
        isEditing={isEditing}
        onEdit={handleEdit}
        onRemove={() => remove(todo.id)}
      />
    </li>
  );
};

export default ToDoItem;
