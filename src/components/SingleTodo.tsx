import React from 'react';
import {Todo} from "./model.ts";
import {AiFillDelete, AiFillEdit} from 'react-icons/ai';
import {MdDone} from "react-icons/md";

//what's the difference between a type and a
type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo, todos, setTodos}: Props) => {
    const handleDone = (id: number) => {
        setTodos(
            //maps through the array and if the ID matches sets isDone to opposite
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        )
    };
    return (
        <form className="todos__single">
            <span className="todos__single--text">{todo.todo}</span>
            <div>
                <span className="icon">
                    <AiFillEdit />
                </span>
                <span className="icon">
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdDone />
                </span>
            </div>
        </form>
    );
};

export default SingleTodo;