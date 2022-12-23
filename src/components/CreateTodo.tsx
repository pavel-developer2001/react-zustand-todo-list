import React, { FormEvent, useState } from "react";
import { nanoid } from "nanoid";
import { useTodos } from "../store";

const CreateTodo = () => {
  const createItem = useTodos((state) => state.createItem);
  const [text, setText] = useState("");
  const onCreateTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = { id: nanoid(), text };
    createItem(newTodo);
    setText("");
  };
  return (
    <form onSubmit={onCreateTodo}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type='text'
        placeholder='Enter text todo'
      />
      <button disabled={!text} type='submit'>
        Add
      </button>
    </form>
  );
};

export default CreateTodo;
