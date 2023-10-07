import { useState } from "react";
import Todos from "./Todos";

export default function Input({ todos, setTodos }) {
    const [inputText, setInputText] = useState("");

    const addTask = () => {
        if (inputText === "") {
        } else {
            setTodos([...todos, inputText]);
            setInputText("");
        }
    };

    const inputValue = (e) => {
        setInputText(e.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    };

    return (
        <div className="input">
            <div className="input-text">
                <input
                    onChange={inputValue}
                    onKeyDown={handleKeyPress}
                    value={inputText}
                    type="text"
                    placeholder="Add something to do ..."
                />
                <button onClick={addTask}>Add</button>
            </div>
            <Todos todos={todos} setTodos={setTodos} />
        </div>
    );
}
