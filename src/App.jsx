import React from "react";
import TodoList from "./components/TodoList/TodoList";

function App() {
    return (
        <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
            <h1 className="font-bold text-gray-700 text-center text-2xl mb-5">
                Todo Application
            </h1>
            <TodoList />
        </div>
    );
}

export default App;
