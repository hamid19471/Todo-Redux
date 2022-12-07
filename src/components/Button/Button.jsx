import React from "react";

const Button = ({ onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className="bg-indigo-600 text-white py-2 px-6 my-10 rounded hover:scale-110 transition duration-500"
        >
            {children}
        </button>
    );
};

export default Button;
