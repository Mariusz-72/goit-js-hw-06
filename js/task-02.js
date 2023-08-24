const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.getElementById('ingredients');

ingredients.forEach(ingredient => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add('item');

  ingredientsList.appendChild(listItem);
});




//Zadanie zrobione podobnie do przykładu w konspekcie :  
//const ingredients = [
//  "Potatoes",
//  "Mushrooms",
//  "Garlic",
//  "Tomatos",
//  "Herbs",
//  "Condiments",
//];
//const ingredientsList = document.getElementById("ingredients");

//const markup = ingredients
//  .map((ingredient) => `<li class="item">${ingredient}</li>`)
//  .join("");

// Wyświetlenie utworzonego markupu w konsoli
//console.log(markup);

// Dodanie całego markupu w jednej operacji
//ingredientsList.innerHTML = markup;