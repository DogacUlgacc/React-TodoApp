import React from "react";
import { BsTrashFill } from "react-icons/bs";

export default function Todos({ todos, setTodos }) {
    const deleteTask = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    };

    return (
        <div className="todo-list ">
            {todos.map((todo, key) => (
                <h5 key={key}>
                    {todo}

                    <button
                        className="delete-button"
                        onClick={() => deleteTask(key)}
                    >
                        <BsTrashFill className="trash-icon" />
                    </button>
                </h5>
            ))}
        </div>
    );
}
