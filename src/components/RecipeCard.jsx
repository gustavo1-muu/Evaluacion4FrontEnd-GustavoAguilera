import React, { useState} from 'react';
import "../style/recipePage.css";

export const RecipeCard = ({ recipe }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <div className="card border-0" style={{ width: '18rem', backgroundColor: '#ccc29f', borderColor: '#CCCCCC', borderRadius: '45px' }}>
      <img className="card-img-top" src={recipe.imagen} alt={recipe.nombre} style={{ height: '200px', width: '100%' }} />
      <div className="card-body">
        <h5 className="card-title">{recipe.nombre}</h5>
        <p className="card-text">{recipe.descripcion}</p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary" id='cambio-color-primario' onClick={handleToggle}>
            Ver receta
          </button>
          <button className="btn btn-personalizado" id='cambio-color' >
            ❤
          </button>
        </div>
        {isExpanded && (
          <div className="card card-body">
            {recipe.receta}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
