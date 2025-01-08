import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ToDoList from "../ToDoList";
import { ToDo } from "../../types/todoTypes";
import { messages } from "../../constants/messages";

const mockStore = createStore((state: any) => ({
  todo: { todos: [] },
}));

describe("ToDoList Component", () => {
  const mockTodos: ToDo[] = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Write Tests", completed: false },
  ];

  it("should render the todo items when todos exist", () => {
    mockStore.getState = vi
      .fn()
      .mockReturnValue({ todo: { todos: mockTodos } });

    render(
      <Provider store={mockStore}>
        <ToDoList />
      </Provider>
    );

    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  it("should render the empty state when no todos exist", () => {
    mockStore.getState = vi.fn().mockReturnValue({ todo: { todos: [] } });

    render(
      <Provider store={mockStore}>
        <ToDoList />
      </Provider>
    );

    expect(
      screen.getByText(messages.components.ToDo.notodo)
    ).toBeInTheDocument();
  });

  it("should render a ToDoItem for each todo", () => {
    mockStore.getState = vi
      .fn()
      .mockReturnValue({ todo: { todos: mockTodos } });

    render(
      <Provider store={mockStore}>
        <ToDoList />
      </Provider>
    );

    expect(screen.getAllByRole("listitem")).toHaveLength(mockTodos.length);
  });
});
