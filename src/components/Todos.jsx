import axios from "axios";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { TodoCard } from "./TodoCard";

export const Todos = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [newTask, setNewTask] = useState("");

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

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data, status } = await axios.post(
        "https://621baa0b768a4e102099c1cb.mockapi.io/todos",

        { task: newTask, isCompleted: false }
      );
      if (status === 201) {
        setTodos([...todos, data]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
      setNewTask("");
    }
  };

  return (
    <main>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
          type="text"
          placeholder="Enter new todo"
          required
        />
        <button>add</button>
      </form>
      {error && <p>{error}</p>}
      <ClipLoader loading={isLoading} size={20} speedMultiplier={1.5} />
      {todos.map((todoInfo) => (
        <TodoCard key={todoInfo.id} todoInfo={todoInfo} />
      ))}
    </main>
  );
};
