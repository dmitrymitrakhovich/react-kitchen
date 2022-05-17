import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMealById } from "../api";
import Preloader from "../components/Preloader";

export default function Recipe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);

  return (
    <>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className='recipe'>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h6>Category: {recipe.strCategory}</h6>
          {recipe.strArea && <h6>Area: {recipe.strArea}</h6>}
          <p>{recipe.strInstructions}</p>
          {recipe.strYoutube && (
            <div className='row'>
              <h5>Video Recipe</h5>
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                allowfullscreen
              />
            </div>
          )}
        </div>
      )}
      <button className='btn' onClick={() => navigate(-1)}>
        Go back
      </button>
    </>
  );
}
