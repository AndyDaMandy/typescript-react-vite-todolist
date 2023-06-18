import React, { useState } from 'react'
import './App.css'
import InputField from "./components/InputField.tsx";
import {Todo} from "./components/model.ts";
import TodoList from "./components/TodoList.tsx";

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);
    console.log(todo);
    const handleAdd = (e: React.FormEvent) => {
        //takes an event on submit and prevents refresh
        e.preventDefault();
        if (todo) {
            setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])
            setTodo("");
        }

    };
  return (
    <div className="App">
        <h1 className="heading">Taskify</h1>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />

    </div>
  )
}

export default App
