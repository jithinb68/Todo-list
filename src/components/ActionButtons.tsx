import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";

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
      <div onClick={onEdit} className="edit-btn">
        {isEditing ? (
          <FontAwesomeIcon icon={faSave} />
        ) : (
          <FontAwesomeIcon icon={faEdit} />
        )}
      </div>
      <div onClick={onRemove} className="delete-btn">
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};

export default ActionButtons;
