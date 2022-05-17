import React, { useState, useEffect } from "react";
import { getAllCategories } from "../api";
import { CategoryList } from "../components/CategoryList";
import Preloader from "../components/Preloader";

export default function Home() {
  const [catalog, setCatalog] = useState([]);

  console.log(catalog);

  useEffect(() => {
    getAllCategories().then((data) => setCatalog(data.categories));
  }, []);

  return (
    <>{!catalog.length ? <Preloader /> : <CategoryList catalog={catalog} />}</>
  );
}
