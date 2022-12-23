import { useEffect } from "react";
import { useTodos } from "./store";
import TodoItem from "./components/TodoItem";
import CreateTodo from "./components/CreateTodo";

function App() {
  const todos = useTodos((state) => state.todos);
  const getTodos = useTodos((state) => state.getTodos);
  const error = useTodos((state) => state.error);
  const isLoading = useTodos((state) => state.isLoading);

  useEffect(() => {
    getTodos();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='App'>
      <CreateTodo />
      {todos.length !== 0 &&
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
}

export default App;
