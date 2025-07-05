'use client'
import { useState } from 'react';

export default function Home() {
  const [persona, setPersona] = useState({
    nombre: '',
    edad: 0,
  });

  const [personas, setPersonas] = useState([]);

  const handleSubmit = () => {
    setPersonas([...personas, persona]);
  };

  return (
    <div>
      <h1>Formulario Persona</h1>
      <input 
        type="text" 
        placeholder="Nombre" 
        value={persona.nombre} 
        onChange={(e) => setPersona({ ...persona, nombre: e.target.value })}
      />
      <input 
        type="number" 
        placeholder="Edad" 
        value={persona.edad} 
        onChange={(e) => setPersona({ ...persona, edad: parseInt(e.target.value) })}
      />
      <button onClick={handleSubmit}>Agregar</button>

      <ul>
        {personas.map((p, i) => (
          <li key={i}>{p.nombre} - {p.edad}</li>
        ))}
      </ul>
    </div>
  );
}