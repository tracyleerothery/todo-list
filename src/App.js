import { useState } from "react"

import TodoItem from "./components/TodoItem";



function App() {
  const [todos, setTodos] = useState([
    "Learn about React",
    "Meet friend for lunch",
    "Build really cool todo app",
  ]);

 return (
    <div>
    <h1>My todo list</h1>
    {todos.map((todo, index) => (
    <TodoItem todo={todo} key={index} />
    ))}
    </div>
 );

}

export default App;
