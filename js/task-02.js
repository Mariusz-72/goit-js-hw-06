const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsArr = ingredients
  .map(ingredient => {
      const listItem = document.createElement('li');
            listItem.textContent = ingredient;
            listItem.classList.add('item');
  return listItem;
  }
);

const ingredientsList = document.getElementById('ingredients');
ingredientsList.append(...ingredientsArr);





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