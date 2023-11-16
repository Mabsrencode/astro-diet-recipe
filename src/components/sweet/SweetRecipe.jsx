
// import React, { useState, useEffect } from 'react';

// const SweetRecipe = () => {
//     const [recipe, setRecipes] = useState([]);
//     const key = import.meta.env.PUBLIC_RECIPE_API
//     useEffect(() => {
//         const fetchData = async () => {
//             const url = 'https://the-birthday-cake-db.p.rapidapi.com/5';
//             const options = {
//                 method: 'GET',
//                 headers: {
//                     'Accept-Language': 'en',
//                     'X-RapidAPI-Key': key,
//                     'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com',
//                 },
//             };

//             try {
//                 const response = await fetch(url, options);
//                 const result = await response.json();
//                 setRecipes(result);
//                 console.log(result);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);
//     return (
//         <div>
//             <img src={recipe.image} alt={recipe.title} />
//             <h1>{recipe.title}</h1>
//             <p>{recipe.description}</p>

//             <h2>Ingredients:</h2>
//             <ul>
//                 {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
//                     <li key={index}>{ingredient}</li>
//                 ))}
//             </ul>

//             <h2>Time:</h2>
//             <p>{recipe.time}</p>
//             <h2>Method:</h2>
//             <ol>
//                 {recipe.method && recipe.method.map((step, index) => (
//                     <li key={index}>{step[`Step ${index + 1}`]}</li>
//                 ))}
//             </ol>
//         </div>
//     );
// };

// export default SweetRecipe;
