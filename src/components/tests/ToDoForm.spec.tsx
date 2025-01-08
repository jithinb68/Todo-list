import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import ToDoForm from "../ToDoForm";
import { useToDoActions } from "../../hooks/useToDoActions";

vi.mock("../../hooks/useToDoActions", () => ({
  useToDoActions: vi.fn(() => ({
    add: vi.fn(),
  })),
}));

describe("ToDoForm Component", () => {
  it("should render the input and button elements", () => {
    render(<ToDoForm />);
    expect(screen.getByLabelText(/Add new todo item/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
  });

  it("should call the add function when form is submitted with valid input", async () => {
    const mockAdd = vi.fn();
    (useToDoActions as vi.Mock).mockReturnValue({ add: mockAdd });

    render(<ToDoForm />);

    const input = screen.getByLabelText(
      /Add new todo item/i
    ) as HTMLInputElement;
    const button = screen.getByRole("button", { name: /add/i });

    fireEvent.change(input, { target: { value: "New ToDo" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(mockAdd).toHaveBeenCalledWith("New ToDo");
    });
  });

  it("should clear the input after form submission", async () => {
    const mockAdd = vi.fn();
    (useToDoActions as vi.Mock).mockReturnValue({ add: mockAdd });

    render(<ToDoForm />);

    const input = screen.getByLabelText(
      /Add new todo item/i
    ) as HTMLInputElement;
    const button = screen.getByRole("button", { name: /add/i });

    fireEvent.change(input, { target: { value: "New ToDo" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(input.value).toBe("");
    });
  });
});
