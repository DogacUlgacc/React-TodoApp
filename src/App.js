import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Input from "./Components/Input";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos"));
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, [setTodos]);

    return (
        <div className="App">
            <Header />
            <Input todos={todos} setTodos={setTodos} />
        </div>
    );
}

export default App;
