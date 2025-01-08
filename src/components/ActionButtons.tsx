import React from "react";
import { messages } from "../constants/messages";

interface ActionButtonsProps {
  isEditing: boolean;
  onEdit: () => void;
  onRemove: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  isEditing,
  onEdit,
  onRemove,
}) => {
  return (
    <div className="button-wrapper">
      <button onClick={onEdit} className="edit-btn">
        {isEditing
          ? messages.components.ToDo.save
          : messages.components.ToDo.edit}
      </button>
      <button onClick={onRemove} className="delete-btn">
        {messages.components.ToDo.delete}
      </button>
    </div>
  );
};

export default ActionButtons;
