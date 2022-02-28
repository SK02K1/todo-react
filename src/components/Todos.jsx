import axios from "axios";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { TodoCard } from "./TodoCard";

export const Todos = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://621baa0b768a4e102099c1cb.mockapi.io/todos"
        );
        setTodos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  return (
    <main>
      {error && <p>{error}</p>}
      <ClipLoader loading={isLoading} size={20} speedMultiplier={1.5} />
      {todos.map((todoInfo) => (
        <TodoCard key={todoInfo.id} todoInfo={todoInfo} />
      ))}
    </main>
  );
};
