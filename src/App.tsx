import React, { useState } from 'react'
import './App.css'
import InputField from "./components/InputField.tsx";
import {Todo} from "./components/model.ts";

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);
    console.log(todo);
  return (
    <div className="App">
        <h1 className="heading">Taskify</h1>
        <InputField todo={todo} setTodo={setTodo} />

    </div>
  )
}

export default App
