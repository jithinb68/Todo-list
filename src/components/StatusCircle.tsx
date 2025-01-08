import React from "react";

interface StatusCircleProps {
  completed: boolean;
  onClick: () => void;
}

const StatusCircle: React.FC<StatusCircleProps> = ({ completed, onClick }) => {
  return (
    <div
      className={`circle ${completed ? "checked" : ""}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      data-testid="status-circle"
    ></div>
  );
};

export default StatusCircle;
