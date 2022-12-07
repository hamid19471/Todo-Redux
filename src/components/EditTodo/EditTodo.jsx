import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import TextField from "../TextField/TextField";

const EditTodo = () => {
    const navigate = useNavigate();

    const [value, setValue] = useState({
        todo: "",
        desc: "",
    });

    const hadleEditTodo = () => {
        setValue({ todo: "", desc: "" });
        console.log(value);
        navigate("/");
    };
    return (
        <div className="mt-10 mx-auto max-w-xl">
            <TextField
                label="Todo Name"
                value={value.todo}
                onChange={(event) =>
                    setValue({ ...value, todo: event.target.value })
                }
                inputProps={{ type: "text", placeholder: "Enter Todo Title" }}
            />
            <TextField
                label="Description"
                value={value.desc}
                onChange={(event) =>
                    setValue({ ...value, desc: event.target.value })
                }
                inputProps={{
                    type: "text",
                    placeholder: "Enter Short Description",
                }}
            />
            <Button onClick={hadleEditTodo}>Edit</Button>
        </div>
    );
};

export default EditTodo;
