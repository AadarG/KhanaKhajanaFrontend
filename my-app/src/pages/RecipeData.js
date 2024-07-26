import React, { useContext } from 'react';
import { RecipeContext } from '../component/RecipeContext';
import '..//RecipeDta.css';

const RecipeData = () => {
  const { recipes } = useContext(RecipeContext);

  return (
    <div className="recipe-list-container">
      <h2>Recipe Data</h2>
      {recipes.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index} className="recipe-item">
              <h3>{recipe.title}</h3>
              {recipe.image && <img src={URL.createObjectURL(recipe.image)} alt={recipe.title} />}
              <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
              <p><strong>Instructions:</strong> {recipe.instructions}</p>
              <p><strong>Cook Time:</strong> {recipe.cookTime} minutes</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeData;
