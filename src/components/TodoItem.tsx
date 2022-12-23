import { FC } from "react";
import { ITodo } from "../models/todo";
import { useTodos } from "../store";

const TodoItem: FC<{ todo: ITodo }> = ({ todo }) => {
  const deleteItem = useTodos((state) => state.deleteItem);
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <p>{todo.text} </p>
      <button onClick={() => deleteItem(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
