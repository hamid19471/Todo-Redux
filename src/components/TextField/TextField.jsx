import React from "react";

const TextField = ({ label, inputProps, onChange, value }) => {
    return (
        <div className="flex flex-col">
            <label className="text-gray-800 text-base mb-2">{label}</label>
            <input
                className="bg-gray-200 py-2 px-3 outline-none border-2 rounded mb-5"
                {...inputProps}
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

export default TextField;
