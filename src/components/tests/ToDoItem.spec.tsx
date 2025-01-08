import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { ToDo } from "../../types/todoTypes";
import ToDoItem from "../ToDoItem";
import { useToDoActions } from "../../hooks/useToDoActions";

vi.mock("../../hooks/useToDoActions", () => ({
  useToDoActions: vi.fn(() => ({
    toggle: vi.fn(),
    remove: vi.fn(),
    edit: vi.fn(),
  })),
}));

describe("ToDoItem Component", () => {
  const mockTodo: ToDo = {
    id: 1,
    text: "Learn React",
    completed: false,
  };

  it("should render the todo item", () => {
    render(<ToDoItem todo={mockTodo} />);

    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });

  it("should call toggle when StatusCircle is clicked", () => {
    const mockToggle = vi.fn();
    (useToDoActions as any).mockReturnValue({
      toggle: mockToggle,
      remove: vi.fn(),
      edit: vi.fn(),
    });

    render(<ToDoItem todo={mockTodo} />);

    const statusCircle = screen.getByTestId("status-circle");

    fireEvent.click(statusCircle);

    expect(mockToggle).toHaveBeenCalledWith(mockTodo.id);
  });

  it("should call remove when ActionButtons remove button is clicked", () => {
    const mockRemove = vi.fn();
    (useToDoActions as any).mockReturnValue({
      toggle: vi.fn(),
      remove: mockRemove,
      edit: vi.fn(),
    });

    render(<ToDoItem todo={mockTodo} />);

    const removeButton = screen.getByText("Delete");
    fireEvent.click(removeButton);
    expect(mockRemove).toHaveBeenCalledWith(mockTodo.id);
  });

  it("should call edit when Edit button is clicked", () => {
    const mockEdit = vi.fn();
    const mockToggle = vi.fn();
    const mockRemove = vi.fn();

    (useToDoActions as any).mockReturnValue({
      toggle: mockToggle,
      remove: mockRemove,
      edit: mockEdit,
    });

    render(<ToDoItem todo={mockTodo} />);

    const editButton = screen.getByRole("button", { name: /edit/i });
    fireEvent.click(editButton);
    expect(mockEdit).not.toHaveBeenCalled();
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Learn Redux" } });
    fireEvent.click(editButton);
    expect(mockEdit).toHaveBeenCalledWith(mockTodo.id, "Learn Redux");
  });
});
