import logo from './logo.svg';
import React, { useState, useEffect } from "react"
import './App.css';

function App() {
  // 1. Estado para guardar la lista de usuarios. Inicialmente es un array vacío.
  const [listaTareas, setListaTareas] = useState([]);

  // 2. useEffect para buscar los datos cuando el componente se monta.
  useEffect(() => {
    // 3. Definimos una función asíncrona dentro del efecto.
    const fetchTareas = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setListaTareas(data); // 4. Guardamos los datos recibidos en nuestro estado.
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchTareas(); // 5. Llamamos a la función.
  }, []); // <-- El array vacío asegura que esto se ejecute solo una vez.
  return (
    <div className="App">
      <button onClick={agregarTarea}>Agregar</button>
      <ul>
        {listaTareas.map((tarea) => (
          <li key={tarea.id || tarea.name}>{tarea.titulo || tarea.name}</li>
        ))}
      </ul>
    </div>
  );

}
export default App;
