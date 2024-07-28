import { useState } from "react";

export default function ToDoInput(props) {
  const { handleAddTodo, todoValue, setTodoValue } = props;
  return (
    <header>
      <input
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        value={todoValue}
        placeholder="Enter todo..."
      />
      <button
        onClick={() => {
          handleAddTodo(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
