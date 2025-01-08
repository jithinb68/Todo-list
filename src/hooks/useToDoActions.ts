import { useDispatch } from "react-redux";
import {
  addToDo,
  deleteToDo,
  editToDo,
  toggleComplete,
} from "../store/slices/todoSlice";
import { AppDispatch } from "../store/store";

export const useToDoActions = () => {
  const dispatch = useDispatch<AppDispatch>();

  // All the action on the todo list = ADD, DELETE, EDIT, SAVE updates the redux state
  const add = (text: string) => dispatch(addToDo(text));
  const remove = (id: number) => dispatch(deleteToDo(id));
  const toggle = (id: number) => dispatch(toggleComplete(id));
  const edit = (id: number, text: string) => dispatch(editToDo({ id, text }));

  return { add, remove, toggle, edit };
};
