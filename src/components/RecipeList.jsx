import React from 'react';
import RecipeCard from './RecipeCard';
import SearchBar from './SearchBar';
import "../style/recipePage.css";

const RecipeList = ({ recipes }) => {
  return (
    <div>
      <SearchBar />
      <div className="row">
        {recipes.map((recipe, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="recipe-card">
              <RecipeCard recipe={recipe} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;/*No entiendo que hice pero esto rompe la barra de busqueda */


/*import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import SearchBar from './SearchBar';
import "../style/recipePage.css";

export const RecipeList = ({ recipes }) => {


  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const handleSearch = (searchTerm) => {
    const filtered = recipes.filter(recipe =>
      recipe.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="row">
        {filteredRecipes.map((recipe, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="recipe-card">
              <RecipeCard recipe={recipe} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
Con esta version funciona la barra de busqueda*/


