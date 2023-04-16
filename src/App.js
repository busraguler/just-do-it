import Todo from "./pages/Todo";
import "./styles/index.scss";
import { useNotiStack } from "./hooks/useNotiStack";

function App() {
  useNotiStack();
  return <Todo />;
}

export default App;
