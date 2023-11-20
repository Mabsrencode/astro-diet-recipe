import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SweetRecipeList = () => {

    const [recipes, setRecipes] = useState([]);
    const Link = `/cake-recipe/`
    const key = import.meta.env.PUBLIC_RECIPE_API
    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://the-birthday-cake-db.p.rapidapi.com/';
            const options = {
                method: 'GET',
                headers: {
                    'Accept-Language': 'en',
                    'X-RapidAPI-Key': key,
                    'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com',
                },
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setRecipes(result);
                console.log(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <ul>
                {recipes.map((recipe) => (
                    <div key={recipe.id}>
                        <img src={recipe.image} alt={recipe.title} />
                        <h1>{recipe.title}</h1>
                        <p>{recipe.difficulty}</p>
                        <a href={Link + recipe.id}>Read</a>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default SweetRecipeList;