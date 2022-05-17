import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getFilteredCategory } from "../api";
import MealList from "../components/MealList";
import Preloader from "../components/Preloader";

export default function Category() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);
  return (
    <>
      {" "}
      <button className='btn' onClick={() => navigate(-1)}>
        Back
      </button>
      <div>{!meals.length ? <Preloader /> : <MealList meals={meals} />}</div>
    </>
  );
}
