import React, { useEffect, useState } from "react";
import { fetchCategories } from "../api";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategoriesData();
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
