import { useState } from "react";
import { recipesData } from "./mealData.js";

export default function RecipeFinder() {
  const [search, setSearch] = useState("");
  const searchIngredients = search.toLowerCase().split(" ");
  console.log(searchIngredients);
  return (
    <>
      <h1>Recipe Finder App</h1>
      <input
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by ingredients..."
        type="text"
      />
      {recipesData && recipesData.length > 0 ? (
        recipesData
          .filter((meal) => {
            return (
              searchIngredients.length === 0 ||
              searchIngredients.every(
                (searchTerm) =>
                  meal.title.toLowerCase().includes(searchTerm) ||
                  meal.ingredients.some((ing) =>
                    ing.toLowerCase().includes(searchTerm),
                  ),
              )
            );
          })
          .map((meal) => (
            <div key={meal.id}>
              <h2>{meal.title}</h2>
              {meal.ingredients.map((ing, index) => (
                <li key={index}>{ing}</li>
              ))}
            </div>
          ))
      ) : (
        <p>No results found</p>
      )}
    </>
  );
}
