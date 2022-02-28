import { Navbar } from "./components/Navbar";
import { Todos } from "./components/Todos";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Todos />
    </div>
  );
}
