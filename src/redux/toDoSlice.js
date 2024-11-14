import { createSlice } from "@reduxjs/toolkit";


let idTarea = 0;

const toDoSlice = createSlice({
    name: 'toDo',
    initialState: [],
    reducers: {
        añadirTarea: (state, action) => {
            state.push({ id: idTarea ++, text: action.payload});
        },
        eliminarTarea: (state, action) => {
           return state.filter((tarea) => tarea.id !== action.payload); 
        },
    }
});

export const { añadirTarea, eliminarTarea } = toDoSlice.actions;
export default toDoSlice.reducer;





