import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { añadirTarea, eliminarTarea } from "./redux/toDoSlice";


const App = () => {
    const [ tarea, setTarea ] = useState('');
    const dispatch = useDispatch();
    const listaTareas = useSelector((state)=> state.toDo);

    const AddTask = () =>{
      if(tarea.trim()) {
        dispatch(añadirTarea(tarea));
        setTarea('');
      }  
    }
    
    const deleteTask = (id) => {
      dispatch(eliminarTarea(id))
    }

  return (
    <>
    <h1>Lista de tareas</h1>
    <input 
    type="text"
    value={tarea}
    onChange={(event)=> setTarea(event.target.value)}
    placeholder="Escribe aquí tu tarea"  />

    <button onClick={AddTask}>Añadir Tarea</button>

    <ul>
      {listaTareas.map((tarea)=>(
        <li key={tarea.id}>
          {tarea.text}
          <button onClick={() => deleteTask(tarea.id)}>Borrar tarea</button>

        </li>
      ))}
    </ul>
    </>
  );
};

export default App;
