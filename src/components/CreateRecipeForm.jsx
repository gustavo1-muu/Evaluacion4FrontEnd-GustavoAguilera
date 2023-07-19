import React, { useState } from 'react';
import "../style/recipePage.css";

const CreateRecipeForm = ({ onCreateRecipe }) => {
  const [recipeData, setRecipeData] = useState({
    nombre: '',
    descripcion: '',
    imagen: '',
    receta: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreateRecipe(recipeData);
    setRecipeData({
      nombre: '',
      descripcion: '',
      imagen: '',
      receta: '',
    });
  };

  return (
    <form className="create-recipe-form" onSubmit={handleSubmit}>
      <h3 className="form-title" id='forma'>Crear Nueva Receta</h3>
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={recipeData.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="descripcion">Descripción:</label>
        <textarea
          id="descripcion"
          name="descripcion"
          value={recipeData.descripcion}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="imagen">URL de la imagen:</label>
        <input
          type="text"
          id="imagen"
          name="imagen"
          value={recipeData.imagen}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="receta">Receta:</label>
        <textarea
          id="receta"
          name="receta"
          value={recipeData.receta}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="submit-button" id='btn btn-receta'>Crear Receta</button>
    </form>
  );
};

export default CreateRecipeForm;
