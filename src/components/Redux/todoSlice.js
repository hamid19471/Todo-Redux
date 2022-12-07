import { createSlice } from "@reduxjs/toolkit";
import { todosData } from "../Data/Data";

const todoSlice = createSlice({
    name: "todos",
    initialState: todosData,
});

export default todoSlice.reducer;
