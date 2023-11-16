
import React, { useState, useEffect } from 'react';

const DietRecipe = () => {
    const [recipes, setRecipes] = useState([]);
    const key = import.meta.env.PUBLIC_RECIPE_API
    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public&co2EmissionsClass=A%2B&field%5B0%5D=uri&beta=true&random=true&cuisineType%5B0%5D=American&imageSize%5B0%5D=LARGE&mealType%5B0%5D=Breakfast&health%5B0%5D=alcohol-cocktail&diet%5B0%5D=balanced&dishType%5B0%5D=Biscuits%20and%20cookies';
            const options = {
                method: 'GET',
                headers: {
                    'Accept-Language': 'en',
                    'X-RapidAPI-Key': key,
                    'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com',
                },
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setRecipes(result.hits);
                // console.log(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    console.log(recipes);
    return (
        <ul>
            {recipes.map((recipe) => (
                <div key={recipe.recipe.uri}>
                    <h1>{recipe.recipe.label}</h1>
                    <p>Health Labels: {recipe.recipe.healthLabels.join(', ')}</p>
                </div>
            ))}
        </ul>
    );
};

export default DietRecipe;
