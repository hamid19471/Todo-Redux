import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../Button/Button";
import { editTodo } from "../Redux/todoSlice";
import TextField from "../TextField/TextField";

const EditTodo = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const data = useSelector((store) => store.todos);
    const update = data.filter((item) => item.id == params.id);
    const { todo, desc } = update[0];
    const navigate = useNavigate();

    const [value, setValue] = useState({
        todo,
        desc,
    });

    const hadleEditTodo = () => {
        setValue({ todo: "", desc: "" });
        dispatch(
            editTodo({
                id: params.id,
                todo: value.todo,
                desc: value.desc,
            }),
        );
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
