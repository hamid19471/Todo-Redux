import React from "react";
import { Route, Routes } from "react-router-dom";
import AddTodo from "./components/AddTodo/AddTodo";
import EditTodo from "./components/EditTodo/EditTodo";
import TodoList from "./components/TodoList/TodoList";

function App() {
    return (
        <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
            <h1 className="font-bold text-gray-700 text-center text-2xl mb-5">
                Todo Application
            </h1>
            <Routes>
                <Route path="/" element={<TodoList />} />
                <Route path="/add-todo" element={<AddTodo />} />
                <Route path="/edit-todo/:id" element={<EditTodo />} />
            </Routes>
        </div>
    );
}

export default App;
