import { useEffect, useState } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }
  function handleAddTodo(newTodo) {
    let newTodos = [...todos, newTodo];
    setTodos(newTodos);
    persistData(newTodos);
  }
  function handleDelete(index) {
    let newTodos = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodos);
    persistData(newTodos);
  }
  function handleEdit(index) {
    setTodoValue(todos[index]);
    handleDelete(index);
  }
  useEffect(() => {
    let lSTodos = localStorage.getItem("todos");
    if (!lSTodos) return;
    console.log(lSTodos);
    setTodos(JSON.parse(lSTodos).todos);
  }, []);

  return (
    <>
      <ToDoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodo={handleAddTodo}
      />
      <ToDoList
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        todos={todos}
      />
    </>
  );
}
