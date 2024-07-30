import React, { useState } from 'react';
import useApi from './hooks/useApi';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    imagen: null,
    descripcion: '',
    plataforma: '',
    fechaLanzamiento: '',
    ranking: '',
    generos: ''
  });

  const { data, isLoading, error } = useApi('/api/endpoint', 'POST', formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, imagen: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div>
      <h2>Formulario de Juego</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div>
          <label>Imagen:</label>
          <input type="file" name="imagen" accept="image/*" onChange={handleFileChange} required />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} required />
        </div>
        <div>
          <label>Plataforma:</label>
          <input type="text" name="plataforma" value={formData.plataforma} onChange={handleChange} required />
        </div>
        <div>
          <label>Fecha de Lanzamiento:</label>
          <input type="date" name="fechaLanzamiento" value={formData.fechaLanzamiento} onChange={handleChange} required />
        </div>
        <div>
          <label>Ranking:</label>
          <input type="number" name="ranking" value={formData.ranking} onChange={handleChange} required />
        </div>
        <div>
          <label>Géneros:</label>
          <input type="text" name="generos" value={formData.generos} onChange={handleChange} required />
        </div>
        <button type="submit">Crear</button>
      </form>
      {isLoading && <p>Cargando...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>Datos enviados correctamente</p>}
    </div>
  );
};

export default Formulario;