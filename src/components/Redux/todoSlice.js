import { createSlice } from "@reduxjs/toolkit";
import { todosData } from "../Data/Data";

const todoSlice = createSlice({
    name: "todos",
    initialState: todosData,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },

        editTodo: (state, action) => {
            const { id, todo, desc } = action.payload;
            const updateTodo = state.find((todo) => todo.id == id);
            if (updateTodo) {
                (updateTodo.todo = todo), (updateTodo.desc = desc);
            }
        },
        deletTodo: (state, action) => {
            const { id } = action.payload;
            const deleteSelectedTodo = state.find((todo) => todo.id == id);
            if (deleteSelectedTodo) {
                return state.filter((item) => item.id != id);
            }
        },
    },
});

export const { addTodo, editTodo, deletTodo } = todoSlice.actions;

export default todoSlice.reducer;
