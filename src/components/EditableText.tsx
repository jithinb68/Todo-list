import React from "react";

interface EditableTextProps {
  isEditing: boolean;
  text: string;
  displayText: string;
  onChange: (value: string) => void;
}

const EditableText: React.FC<EditableTextProps> = ({
  isEditing,
  text,
  displayText,
  onChange,
}) => {
  return isEditing ? (
    <input
      type="text"
      value={text}
      onChange={(e) => onChange(e.target.value)}
      className="edit-input"
    />
  ) : (
    <span>{displayText}</span>
  );
};

export default EditableText;
